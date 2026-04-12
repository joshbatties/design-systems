# 02 — Information Architecture

## Page types

Seven page types, arranged in a deliberate hierarchy. The key design move: layers A, B, and C live *inside* each system, not as parallel top-level destinations. This is what keeps the identity unified rather than tabbed.

```
Home  ─────────────────────────────────┐
  │                                     │
  ├── Browse (filtered index)           │   cross-system pages
  ├── Pattern page (one pattern,        │
  │    many systems side-by-side)       │
  │                                     │
  └── System detail  ───────────────────┤
        │                               │
        ├── Component detail            │   per-system pages
        ├── Section detail              │
        ├── Token set detail            │
        └── Recipe detail               │
```

## URL structure

URLs are the contract with users, search engines, and bookmarks. Get them right once.

```
/                               Home
/browse                         Filterable index (all systems, all layers)
/browse?type=component&tag=pricing

/patterns/pricing               Cross-system view of one pattern
/patterns/auth
/patterns/empty-state

/systems/vercel                 System detail (B: overview + components + tokens)
/systems/vercel/sections        A-layer for this system
/systems/vercel/recipes         C-layer for this system

/systems/vercel/components/button
/systems/vercel/tokens/color
/systems/vercel/sections/pricing
/systems/vercel/recipes/migration-map

/about
/submit
```

Rules:

- `/systems/[slug]` is the canonical landing for a system; everything else is a child route.
- `/patterns/[pattern]` is the only URL that crosses systems. This is Mobbin's cross-app pattern view, reimagined around design-system primitives.
- `/browse` is the power-user entry — filter by layer, stack, tag, color, industry.
- No `/components/[name]` at the root — components only exist inside a system. Cross-system component comparisons happen via `/patterns/[pattern]`.

## Home page

Home has one job: convince a visitor in 5 seconds that this is the deepest, realest library of its kind. Structure:

1. **Hero** — one sentence, one stat ("18 systems · 940 components · 312 sections · live"), one search input. The search is the primary CTA.
2. **Featured systems strip** — 4-6 cards with real previews (static images; see [05-previews-and-performance.md](./05-previews-and-performance.md)).
3. **Browse by pattern** — 8-12 chips: `Pricing`, `Auth`, `Dashboard`, `Empty state`, `Pricing`, `Footer`, `Changelog`, `Onboarding`. Each leads to `/patterns/[pattern]`.
4. **Browse by stack** — `React + Tailwind`, `Vue`, `Svelte`, `Web Components`. Leads to filtered `/browse`.
5. **All systems grid** — paginated or infinite, not the dump-everything page we have today.
6. **Recently added / recently updated** — keeps the site feeling alive.

What we cut from the current home: the full-width per-system showcase with 20 live-iframe thumbnails. That belongs on the system detail page, not home.

## System detail page (the heart of the product)

This is where the B+A+C blend has to work. Proposed layout:

```
─────────────────────────────────────────────────────────────
  System header: name, company, tagline, tags, accent color
  Primary actions: "Copy entire system" · "View on GitHub" · "Visit site"
  Stats: X components · Y tokens · Z sections · W recipes
─────────────────────────────────────────────────────────────
  Tab rail (sticky): Overview · Components · Tokens · Sections · Recipes
─────────────────────────────────────────────────────────────

  ── Overview ──
  Short editorial description. Capture date. Source links.
  One live preview (marketing page or app screen). 3-4 "signature"
  components (what makes this system recognisable). 3-4 signature
  sections. 2-3 highlighted recipes.

  ── Components (B) ──
  Grid of component cards, grouped by category (Inputs, Feedback,
  Navigation, Overlays, Data display, etc.). Each card shows a live
  mini-render + name + variant count. Click → component detail.

  ── Tokens (B) ──
  Color swatches, spacing scale, radii, type scale, motion durations.
  Copy-as-CSS, copy-as-Tailwind-config, copy-as-JSON.

  ── Sections (A) ──
  Grid of real composed sections (hero, pricing, auth, footer…).
  Same card shape as Components; different content. Click → section
  detail with full-width live preview + the list of components
  composing it.

  ── Recipes (C) ──
  Longer-form card list: migration maps, anti-patterns, decision rules.
  Less visual, more textual. Cross-links to the components and sections
  they reference.
```

**Empty layer handling.** If a system has no Sections authored yet, the Sections tab is hidden (not disabled). The Overview doesn't mention it. Adding a section later "lights up" that tab.

## Component detail page

This is the Storybook analogue. Structure:

- Live preview (default variant), with a variant switcher.
- States toggles: hover, focus, disabled, loading, error.
- Light/dark toggle.
- Copy-code dropdown: `TSX`, `JSX`, `HTML`, `Vue`, `Svelte` (whatever the system actually ships).
- Props / API table.
- "Used in sections" — cross-link to every A-layer section that composes this component.
- "Related recipes" — C-layer links.
- "Same component, other systems" — cross-link to `/patterns/[component-name]` if applicable (e.g. `/patterns/button`).

## Section detail page

Structure:

- Full-width live preview at real breakpoint with a breakpoint switcher (mobile, tablet, desktop).
- Copy-code for the whole section.
- "Composed from" — list of components in this system that make up the section. Each is a link to its component detail page.
- "Same section pattern, other systems" — link to `/patterns/[section-pattern]` (e.g. `/patterns/pricing`).

## Pattern page (cross-system)

The killer feature. `/patterns/pricing` shows every system's pricing section in one grid. Same pattern, many expressions. Filter by: free-trial presence, tier count, toggle monthly/annual, accent style.

This is what Mobbin does well and what nobody does for components + tokens. Extend the same mechanic to `/patterns/button`, `/patterns/color-system`, `/patterns/focus-ring`.

## Navigation

- Global top bar: logo · search (always visible, prominent) · Browse · Patterns · Submit · theme toggle.
- No left sidebar on home or browse — sidebars are reserved for detail pages where you need in-page navigation (component categories, section categories).
- Sticky in-page tab rail on system detail, so you can jump between the four layers without scrolling back up.

## Breadcrumbs

On all detail pages. They make the hierarchy legible and give the user an exit. E.g.:
`Design Systems / Vercel / Components / Button`
