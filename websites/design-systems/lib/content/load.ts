import { readFileSync, readdirSync, statSync, existsSync } from "node:fs";
import { join } from "node:path";
import { parse as parseYaml } from "yaml";
import matter from "gray-matter";
import {
  makeSystemSchema,
  makeComponentFrontmatterSchema,
  type CodeBlock,
  type ComponentEntity,
  type ContentGraph,
  type SystemEntity,
} from "./schema";
import { loadTaxonomy } from "./taxonomy";
import { highlightBlock } from "./highlight";

export class ContentError extends Error {
  constructor(public file: string, message: string) {
    super(`[${file}] ${message}`);
    this.name = "ContentError";
  }
}

export interface LoadOptions {
  /** Absolute path to the content root (contains taxonomy.yaml and systems/). */
  contentRoot: string;
}

function listDirs(path: string): string[] {
  if (!existsSync(path)) return [];
  return readdirSync(path).filter((name) => {
    try {
      return statSync(join(path, name)).isDirectory();
    } catch {
      return false;
    }
  });
}

function listFiles(path: string, ext: string): string[] {
  if (!existsSync(path)) return [];
  return readdirSync(path).filter((name) => name.endsWith(ext));
}

export async function loadContent(
  opts: LoadOptions
): Promise<ContentGraph> {
  const tax = loadTaxonomy(opts.contentRoot);
  const systemSchema = makeSystemSchema(tax);
  const componentSchema = makeComponentFrontmatterSchema(tax);

  const systemsRoot = join(opts.contentRoot, "systems");
  const systemSlugs = listDirs(systemsRoot);

  const systems: SystemEntity[] = await Promise.all(
    systemSlugs.map(async (dirSlug) => {
      const systemDir = join(systemsRoot, dirSlug);
      const systemFile = join(systemDir, "system.yaml");
      if (!existsSync(systemFile)) {
        throw new ContentError(systemFile, "missing system.yaml");
      }

      const systemRaw = readFileSync(systemFile, "utf8");
      const systemParsed = parseYaml(systemRaw);
      const systemResult = systemSchema.safeParse(systemParsed);
      if (!systemResult.success) {
        throw new ContentError(
          systemFile,
          `schema errors:\n${JSON.stringify(
            systemResult.error.issues,
            null,
            2
          )}`
        );
      }
      const system = systemResult.data;
      if (system.slug !== dirSlug) {
        throw new ContentError(
          systemFile,
          `slug "${system.slug}" does not match directory "${dirSlug}"`
        );
      }

      const components = await loadComponents({
        systemDir,
        systemSlug: system.slug,
        componentSchema,
      });

      return {
        ...system,
        components,
        tokens: [],
        sections: [],
        recipes: [],
      };
    })
  );

  validateCrossRefs(systems);

  return { systems };
}

async function highlightAll(blocks: CodeBlock[]): Promise<CodeBlock[]> {
  return Promise.all(blocks.map((b) => highlightBlock(b)));
}

async function loadComponents({
  systemDir,
  systemSlug,
  componentSchema,
}: {
  systemDir: string;
  systemSlug: string;
  componentSchema: ReturnType<typeof makeComponentFrontmatterSchema>;
}): Promise<ComponentEntity[]> {
  const dir = join(systemDir, "components");
  const files = listFiles(dir, ".mdx");

  return Promise.all(
    files.map(async (filename) => {
      const path = join(dir, filename);
      const raw = readFileSync(path, "utf8");
      const { data, content } = matter(raw);
      const result = componentSchema.safeParse(data);
      if (!result.success) {
        throw new ContentError(
          path,
          `frontmatter errors:\n${JSON.stringify(
            result.error.issues,
            null,
            2
          )}`
        );
      }
      const frontmatter = result.data;
      const expectedFilename = `${frontmatter.slug}.mdx`;
      if (filename !== expectedFilename) {
        throw new ContentError(
          path,
          `filename does not match slug; expected "${expectedFilename}"`
        );
      }

      const code = await highlightAll(frontmatter.code);
      const variants = await Promise.all(
        frontmatter.variants.map(async (v) => ({
          ...v,
          code: await highlightAll(v.code),
        }))
      );

      return {
        ...frontmatter,
        code,
        variants,
        systemSlug,
        body: content.trim(),
      };
    })
  );
}

function validateCrossRefs(systems: SystemEntity[]) {
  for (const system of systems) {
    const knownSlugs = new Set(system.components.map((c) => c.slug));
    for (const component of system.components) {
      for (const dep of component.composedOf) {
        if (!knownSlugs.has(dep)) {
          throw new ContentError(
            `systems/${system.slug}/components/${component.slug}.mdx`,
            `composedOf references unknown component "${dep}" in system "${system.slug}"`
          );
        }
      }
    }
  }
}
