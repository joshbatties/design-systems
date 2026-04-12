import { readFileSync } from "node:fs";
import { join } from "node:path";
import { parse as parseYaml } from "yaml";
import { z } from "zod";

const taxonomyFileSchema = z.object({
  componentPatterns: z.array(
    z.object({
      slug: z.string(),
      name: z.string(),
      description: z.string(),
    })
  ),
  sectionPatterns: z.array(
    z.object({
      slug: z.string(),
      name: z.string(),
      description: z.string(),
    })
  ),
  componentCategories: z.array(
    z.object({ slug: z.string(), name: z.string() })
  ),
  tokenCategories: z.array(z.object({ slug: z.string(), name: z.string() })),
  tokenSemanticRoles: z.array(z.string()),
  stacks: z.array(z.string()),
  stylings: z.array(z.string()),
  themes: z.array(z.string()),
  densities: z.array(z.string()),
  personalities: z.array(z.string()),
  industries: z.array(z.string()),
  licenses: z.array(z.string()),
  recipeKinds: z.array(z.string()),
  componentStates: z.array(z.string()),
});

export type Taxonomy = z.infer<typeof taxonomyFileSchema>;

let cached: Taxonomy | null = null;

export function loadTaxonomy(contentRoot: string): Taxonomy {
  if (cached) return cached;
  const raw = readFileSync(join(contentRoot, "taxonomy.yaml"), "utf8");
  const parsed = parseYaml(raw);
  cached = taxonomyFileSchema.parse(parsed);
  return cached;
}

export function resetTaxonomyCache() {
  cached = null;
}

export function componentPatternSlugs(tax: Taxonomy): string[] {
  return tax.componentPatterns.map((p) => p.slug);
}

export function sectionPatternSlugs(tax: Taxonomy): string[] {
  return tax.sectionPatterns.map((p) => p.slug);
}
