# 07 — Detail Pages

Detail pages are where the product earns its keep. A visitor who lands on a component detail page from Google should be able to copy what they need in under 10 seconds *and* discover three adjacent things worth copying.

## Shared anatomy

Every detail page uses the same skeleton so the site feels like one place:

```
┌─ Breadcrumb ────────────────────────────────────────┐
│ Design Systems / Vercel / Components / Button       │
├─ Header ────────────────────────────────────────────┤
│ Name · accent-color dot · short description         │
│ Primary action: Copy code  ·  Secondary: View in system │
├─ Canvas ────────────────────────────────────────────┤
│ [ live preview — Tier 2 or Tier 3 ]                 │
│ Controls: variant · state · theme · breakpoint      │
├─ Code ──────────────────────────────────────────────┤
│ Tabs per language · copy-all · copy-selection       │
├─ Details ───────────────────────────────────────────┤
│ Props / states / tokens used / composed-of          │
├─ Lateral links ─────────────────────────────────────┤
│ Used in sections · Related recipes · Same pattern   │
│ in other systems                                     │
└─────────────────────────────────────────────────────┘
```

The order is deliberate: preview, then code, then metadata, then lateral links. Copy-first, browse-later.

## Component detail (B)

The most common detail page. Canvas uses Tier 3 (inline React) when the system is same-origin authored; Tier 2 iframe when CSS isolation is needed.

### Canvas controls
- **Variant** (`primary`, `secondary`, `ghost`, `destructive`…). Content-authored per component.
- **State** (`default`, `hover`, `focus-visible`, `active`, `disabled`, `loading`, `error`). State is forced via class overrides on the rendered instance so users can see without interacting.
- **Theme** (`dark`, `light`). Defaults to site theme.
- **Density** (optional, only for systems that ship multiple densities).
- **Background** (neutral, inverse, branded) — so users can see if contrast holds.

### Code block
- Tabs per language the system actually ships: `tsx`, `jsx`, `html`, `vue`, `svelte`, etc.
- Copy-all and copy-selection.
- A second tab: "with imports" — shows the paste-ready version including imports, so the user doesn't have to guess.
- A third tab: "dependencies" — lists packages needed (`clsx`, `lucide-react`, etc.).
- A toggle for tailwind-config snippet / css-var snippet if the component depends on tokens.

### Props / API
Rendered from the content file's `api` field as a sortable table: `name`, `type`, `default`, `description`. Optional — not every system exposes a stable API.

### Tokens used
Derived by scanning the component's code for token references. Displayed as a small list of swatches + names, linking to `/systems/[slug]/tokens/[category]#[name]`. Makes the relationship between B-components and B-tokens visible.

### Composed of
Components in the same system this one uses (e.g. `Button` uses `Icon`, `Spinner`). Clickable.

### Lateral links
- **Used in sections** — A-layer sections from the same system composing this component.
- **Related recipes** — C-layer recipes referencing this component.
- **Same component in other systems** — link to `/patterns/[patternSlug]` when `patternSlug` is set.

## Section detail (A)

Canvas uses Tier 2 (lazy interactive iframe) at a chosen breakpoint.

### Canvas controls
- **Breakpoint** switcher: `mobile 390`, `tablet 820`, `desktop 1280`, `wide 1920`.
- **Theme** switcher.
- **Content state** when relevant: `empty`, `loaded`, `error` (for dashboard/list sections).

### Code block
- Copy whole section, or copy slice (hero-only, feature-row-only).
- "Section + its dependencies" bundle — pulls in the component source files the section uses.

### Composed from
The list of components (from this system) composing the section. Each is a link. This is the section → components bridge; the reverse of "Used in sections" on a component page.

### Lateral links
- **Same pattern in other systems** → `/patterns/[patternSlug]`.
- **Related recipes** (e.g. pricing-toggle recipe, auth-flow scaffold).
- **System overview** to bounce back up a level.

## Token set detail (B)

`/systems/[slug]/tokens` is a single page with four sub-sections: color, spacing, typography, shadow/motion/radius. Each renders as a visual grid:

- **Color**: swatches with name, hex, rgb, semantic role, contrast pair suggestions.
- **Spacing**: horizontal scale bars with values.
- **Type**: rendered specimens at each scale step with name, size, line-height, weight.
- **Shadow/radius**: rendered boxes.
- **Motion**: animated dots demonstrating each easing × duration combo.

Copy affordances per set:
- CSS variables block.
- Tailwind config fragment.
- JSON (design-tokens W3C format once stable).
- Figma-friendly list for paste into a Figma plugin.

## Recipe detail (C)

The least visual, most textual page. Renders an MDX body with syntax-highlighted code blocks. Sidebar shows:

- Kind badge (`migration`, `anti-pattern`, `decision`, `scaffold`).
- Referenced entities (components, sections, tokens) as chips; click → their detail page.
- Last reviewed date.

The tone is short and practical — "Prefer `Dialog` for confirmation flows, `Drawer` for sustained side-panel editing. Avoid `Dialog` on mobile below 390." Not essays.

## System overview

Described in [02-information-architecture.md](./02-information-architecture.md). The one extra thing worth calling out: the overview is the only detail page that doesn't have one focused entity — it's a curated dashboard. So it gets a subtly different shape (no breadcrumb; a tab rail instead; an editorial blurb about *the system*, not *the entity*). This difference is intentional and should be the only difference.

## Copy UX — the bar is higher than it looks

Copying code is the product's core verb. Treat it like a feature, not a button.

- Optimistic affirmation: button state flips to "Copied ✓" for 1.2s, then back.
- Pinpoint scope: if the user has selected text, "copy" copies the selection; otherwise, the whole block.
- Keyboard: `Cmd/Ctrl+C` on a focused code block copies it (even without selection).
- "Copy with imports" is a separate button — it's a different *mode*, not a hidden option.
- A toast on first-ever copy in a session: "Pasting into a new project? There's a quickstart." (See also: C-layer scaffolds.)
- Long paths / long imports get a "copy path" on hover to help relocate files.

## Embed links

Every detail page URL has an `?embed=1` twin used by Tier 2 iframes and also available to users as a "share embeddable" link. The embed strips chrome, leaves the canvas. This doubles as the OG-image source (see [09-seo-sharing-mobile.md](./09-seo-sharing-mobile.md)).

## What the current site is missing

To be explicit, today there's no component detail, no section detail, no token set page, no recipe page, and the system detail is an undifferentiated scroll. These pages are the product.
