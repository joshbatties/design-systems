import { z } from "zod";
import type { Taxonomy } from "./taxonomy";

const isoDate = z
  .string()
  .regex(/^\d{4}-\d{2}-\d{2}$/, "expected YYYY-MM-DD");

const hexColor = z
  .string()
  .regex(/^#[0-9a-fA-F]{3,8}$/, "expected hex color like #0070F3");

const slug = z
  .string()
  .regex(
    /^[a-z0-9]+(?:-[a-z0-9]+)*$/,
    "slug must be kebab-case (lowercase, digits, hyphens)"
  );

export const sourceSchema = z.object({
  type: z.enum(["site", "docs", "github", "figma", "storybook"]),
  url: z.string().url(),
});

export function makeSystemSchema(tax: Taxonomy) {
  return z.object({
    slug,
    name: z.string().min(1),
    company: z.string().min(1),
    tagline: z.string().min(1).max(140),
    description: z.string().min(1),
    accentColor: hexColor,
    stack: z.array(z.enum(tax.stacks as [string, ...string[]])).nonempty(),
    styling: z
      .array(z.enum(tax.stylings as [string, ...string[]]))
      .nonempty(),
    theme: z.enum(tax.themes as [string, ...string[]]),
    density: z.enum(tax.densities as [string, ...string[]]).optional(),
    personality: z
      .array(z.enum(tax.personalities as [string, ...string[]]))
      .default([]),
    industry: z
      .array(z.enum(tax.industries as [string, ...string[]]))
      .default([]),
    license: z.enum(tax.licenses as [string, ...string[]]),
    sources: z.array(sourceSchema).nonempty(),
    capturedAt: isoDate,
    lastReviewed: isoDate.optional(),
    tags: z.array(z.string()).default([]),
    contributorHandle: z.string().optional(),
  });
}
export type System = z.infer<ReturnType<typeof makeSystemSchema>>;

export const codeBlockSchema = z.object({
  language: z.enum([
    "tsx",
    "jsx",
    "ts",
    "js",
    "html",
    "vue",
    "svelte",
    "css",
    "scss",
    "json",
  ]),
  label: z.string().optional(),
  code: z.string(),
});
export type CodeBlock = z.infer<typeof codeBlockSchema>;

export const componentVariantSchema = z.object({
  slug,
  name: z.string(),
  description: z.string().optional(),
  code: z.array(codeBlockSchema).default([]),
});
export type ComponentVariant = z.infer<typeof componentVariantSchema>;

export const componentApiPropSchema = z.object({
  name: z.string(),
  type: z.string(),
  default: z.string().optional(),
  required: z.boolean().optional(),
  description: z.string().optional(),
});
export type ComponentApiProp = z.infer<typeof componentApiPropSchema>;

export function makeComponentFrontmatterSchema(tax: Taxonomy) {
  const componentPatternSlugs = tax.componentPatterns.map((p) => p.slug) as [
    string,
    ...string[]
  ];
  const categorySlugs = tax.componentCategories.map((c) => c.slug) as [
    string,
    ...string[]
  ];
  const stateSlugs = tax.componentStates as [string, ...string[]];

  return z.object({
    slug,
    name: z.string().min(1),
    summary: z.string().min(1).max(200),
    category: z.enum(categorySlugs),
    patternSlug: z.enum(componentPatternSlugs),
    states: z.array(z.enum(stateSlugs)).default([]),
    variants: z.array(componentVariantSchema).default([]),
    api: z.array(componentApiPropSchema).default([]),
    composedOf: z.array(slug).default([]),
    tokensUsed: z.array(z.string()).default([]),
    code: z.array(codeBlockSchema).default([]),
  });
}
export type ComponentFrontmatter = z.infer<
  ReturnType<typeof makeComponentFrontmatterSchema>
>;

export interface ComponentEntity extends ComponentFrontmatter {
  systemSlug: string;
  /** Raw MDX body (markdown narrative). Not parsed here; rendered by consumer. */
  body: string;
}

// Placeholder shells so the graph has the right shape — fleshed out per [03-content-model.md].
export interface TokenSetEntity {
  systemSlug: string;
  category: string;
  tokens: unknown[];
}

export interface SectionEntity {
  systemSlug: string;
  slug: string;
  name: string;
  patternSlug: string;
}

export interface RecipeEntity {
  systemSlug: string | null;
  slug: string;
  title: string;
  kind: string;
  body: string;
}

export interface SystemEntity extends System {
  components: ComponentEntity[];
  tokens: TokenSetEntity[];
  sections: SectionEntity[];
  recipes: RecipeEntity[];
}

export interface ContentGraph {
  systems: SystemEntity[];
}
