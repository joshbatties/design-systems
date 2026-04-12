# 03 — Content Model

The shape of the data is the shape of the product. This document defines the entities, their relationships, and the authoring discipline that keeps cross-linking meaningful.

## Why this matters now

The current [systems.ts](../websites/design-systems/app/data/systems.ts) is a flat array with string-typed `sections`. That works for one system. At ten systems it becomes unsearchable, unrelatable, and unmaintainable. Fixing the content model before we add systems is much cheaper than retrofitting it after.

## Entities

Six first-class entities. Every entity has a stable slug, a display name, a shared-taxonomy tag, and a `capturedAt` date (see [01-vision.md](./01-vision.md) on attribution).

### System
The top-level container. Represents a real product's design system (Vercel, Linear, Stripe, Notion, Shopify Polaris, etc.).

Key fields:
- `slug`, `name`, `company`
- `tagline` (one line), `description` (one paragraph)
- `accentColor` (used sparingly — see taste principle 3)
- `stack` — normalised (`react`, `vue`, `svelte`, `web-components`, `css-only`)
- `styling` — normalised (`tailwind`, `css-in-js`, `css-modules`, `vanilla`, `sass`)
- `sources` — array of `{type, url}` where `type` is `site | docs | github | figma | storybook`
- `capturedAt`, `lastReviewed`
- `tags` — from the shared taxonomy only

### Component (B)
A reusable UI primitive *within* a system. `Button`, `Input`, `Dialog`, `Toast`, `Card`.

Key fields:
- `slug`, `name`, `systemSlug`
- `category` — from the shared taxonomy (`inputs`, `feedback`, `navigation`, `overlays`, `data-display`, `layout`, `typography`)
- `patternSlug` — the canonical cross-system pattern name this component instantiates (e.g. `button`, `dialog`) — this is what makes `/patterns/button` work
- `variants` — named variants with their own code snippets
- `states` — which interactive states are represented (hover, focus, disabled, loading, error)
- `code` — source snippets keyed by language (`tsx`, `html`, `vue`, …)
- `api` — optional props/attributes schema for documentation
- `composedOf` — other components in the same system this one uses (`Icon` inside `Button`)

### Token (B)
A named design value. Colors, spacing, radii, type scale, shadows, motion.

Key fields:
- `systemSlug`
- `category` — `color | spacing | radius | typography | shadow | motion | z-index`
- `name` — the system's own name for it (`--bg-primary`, `text-neutral-900`)
- `value` — the raw value (hex, px/rem, cubic-bezier, …)
- `semanticRole` — optional normalised role (`surface-1`, `border-subtle`) so we can compare across systems
- `aliasOf` — optional pointer to another token (for alias tokens)
- `exportFormats` — how to copy it: `css-var`, `tailwind-config`, `json`, `swift`, `kotlin`

### Section (A)
A composed region of a real page — `Hero`, `Pricing`, `Footer`, `Auth`, `Dashboard`, `Empty state`.

Key fields:
- `slug`, `name`, `systemSlug`
- `patternSlug` — the cross-system pattern (`hero`, `pricing`, `auth-signin`, `dashboard-overview`) — powers `/patterns/pricing`
- `breakpoints` — which breakpoints have authored variants
- `composedOf` — the components from this system used to build the section (array of component slugs)
- `code` — full section source keyed by language
- `tags`

### Recipe (C)
A short-form, actionable reference: migration map, anti-pattern, decision rule, scaffold.

Key fields:
- `slug`, `title`, `systemSlug` (nullable — some recipes are system-agnostic)
- `kind` — `migration | anti-pattern | decision | scaffold | responsive-rule | dark-mode | accessibility`
- `body` — markdown
- `references` — array of `{entityType, slug}` pointing to components, sections, tokens, or other systems this recipe talks about

### Pattern (cross-system)
A *virtual* entity derived from components and sections that share a `patternSlug`. Not authored directly; computed at build.

Key fields (computed):
- `slug`, `name`, `kind` (`component | section`)
- `instances` — array of `{systemSlug, entitySlug}`
- `description` — editorial, authored in one place

## Relationships that matter

The graph is what makes the product interesting. Enforce these at build time (fail the build on broken links):

- `Component.composedOf[*]` must resolve to components in the same system.
- `Section.composedOf[*]` must resolve to components in the same system.
- `Recipe.references[*]` must resolve to real entities.
- `Component.patternSlug` and `Section.patternSlug` must exist in the pattern taxonomy (see [04-taxonomy.md](./04-taxonomy.md)).
- Every system with at least one entity has a populated overview page.

## Authoring format

Each entity is a file. Not a row in a giant array. This is the single most important change from today.

Suggested layout inside the repo:

```
content/
  systems/
    vercel/
      system.yaml                 ← the System entity
      components/
        button.mdx                ← Component with code blocks + metadata frontmatter
        input.mdx
        ...
      tokens/
        color.yaml                ← Tokens grouped by category
        spacing.yaml
        ...
      sections/
        pricing.mdx
        hero.mdx
        ...
      recipes/
        migration-map.mdx
        anti-patterns.mdx
        ...
    linear/
      ...
  patterns/                       ← editorial pattern descriptions only
    button.mdx
    pricing.mdx
    ...
```

MDX for anything with narrative + code; YAML for pure data (system metadata, tokens). MDX frontmatter carries the schema fields; the body is the editorial copy shown on the detail page.

## Validation

A typed schema (Zod or equivalent) sits between the content files and the app. Content is parsed and validated at build time; the app consumes the validated, normalised, cross-referenced output. Runtime code never parses raw MDX frontmatter.

Two outputs from the build-time loader:

1. **Typed content graph** — used by the app.
2. **Search index** — flat, small, denormalised; used by the client-side search (see [06-discovery.md](./06-discovery.md)).

## What this replaces

- The current `DesignSystem.sections: SystemSection[]` inline array.
- Hand-written React per system (the 3,556-line `vercel-design-system.jsx`). That code becomes *one possible rendering target* for the content — specifically, it can be regenerated as a "print all sections" playground page — but the source of truth shifts to content files. See [05-previews-and-performance.md](./05-previews-and-performance.md) on how previews are rendered from content.
