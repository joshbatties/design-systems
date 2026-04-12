# 06 — Discovery

Discovery is the difference between a gallery and a reference tool. If a user can't quickly find "dark-mode pricing pages with an annual toggle built in React + Tailwind" the product fails at its job.

## Three discovery surfaces

1. **Search** — keyword, always visible, instant.
2. **Browse** — structured filtering over every entity.
3. **Patterns** — cross-system views of one concept.

These are complementary. Search answers "I know what I'm looking for." Browse answers "I want to constrain a shortlist." Patterns answers "show me how everyone does X."

## Search

### Placement
In the global top bar. Not behind an icon on desktop — visible, with a placeholder that rotates through ("Find a button style…", "Find a pricing page…", "Find a design system…"). `Cmd/Ctrl+K` opens an overlay command palette.

### Scope
One index across all entities: systems, components, tokens, sections, recipes, patterns. Results are grouped by entity type. No "search components only" mode — it would just be Browse with a type filter.

### How it works
- Build-time generated inverted index, shipped to the client (flexsearch / minisearch / similar). Fits in a few hundred KB for the first 50 systems.
- Fields indexed per entity: name, aliases, description, category, tags, pattern slug, system name, and — for Components/Sections — a short "what does this look like" editorial line authored in the content file.
- Ranking: exact match > alias > description > tag. Boost by popularity (saves count, view count) once we have accounts.

### UX
- Keystroke-to-result in under 50ms perceived.
- Grouped results: `Systems · Components · Sections · Tokens · Patterns · Recipes`.
- Each result shows a tiny thumbnail (Tier 1 static image) so recognition beats reading.
- Keyboard navigation: up/down within group, left/right between groups, `Enter` to open.
- Empty-state when there are zero results suggests a similar pattern slug.

## Browse

`/browse` is the power-user page. One filter panel on the left, one results grid on the right.

### Filter dimensions (chained via URL query params so results are shareable)
- Entity type: systems, components, sections, tokens, recipes.
- Pattern slug.
- Component category.
- System (multi-select).
- Stack, styling, theme, personality (from [04-taxonomy.md](./04-taxonomy.md)).
- Accent color family (hue bucket: red, orange, yellow, green, teal, blue, purple, pink, neutral).
- Has dark mode · has light mode.
- Has copy-ready code · has live preview only.
- Open source · proprietary.
- Captured in the last 90 days.

### URL shape
Every filter is a query param. Selecting `type=section&pattern=pricing&stack=react&theme=dark` produces a stable, bookmarkable, shareable URL. No client-only state.

### Results grid
Static-thumbnail cards (Tier 1 — see [05-previews-and-performance.md](./05-previews-and-performance.md)). Hover reveals: system name, entity name, pattern, quick "copy code" button for components/sections.

### Sorts
- Relevance (default, contextual to active filters)
- Recently added
- Recently updated
- Most saved (once accounts ship)
- Alphabetical

### Empty results
Show the closest-matching patterns with a "you might mean…" hint. Never an empty page.

## Patterns

The page `/patterns/[slug]` is the product's trump card. It's what nobody else has for design-system primitives.

### Two flavours, same URL shape

**Section pattern** (e.g. `/patterns/pricing`):
- Editorial header: one paragraph on what this pattern is, when to use it, common pitfalls.
- Instance grid: every Section in the corpus with `patternSlug=pricing`, rendered as a static thumbnail with its system accent color and name.
- Pattern-specific facets: for pricing → has toggle, tier count, has enterprise tier, has free-trial CTA. For auth-signin → has SSO, has magic link, has password, has MFA. Facets are authored per-pattern.
- Comparison mode: pick 2-4 instances → side-by-side at real scale, synced scroll, breakpoint switcher.

**Component pattern** (e.g. `/patterns/button`):
- Editorial header: anatomy, state matrix, accessibility baseline.
- Instance grid: every Component with `patternSlug=button`, rendered as a live mini-render (Tier 3 inline) so you can hover, focus, disable.
- State matrix table: rows are systems, columns are states (default, hover, focus, active, disabled, loading). Every cell is a real render. This is the "how does every system handle focus rings" view that nothing else on the internet lets you do.
- Token exposure: side panel showing which tokens (color, radius, spacing, typography) each instance uses, so users can see the design decisions underneath.

### Adding a pattern
Governed by the rule in [04-taxonomy.md](./04-taxonomy.md): editorial description + ≥2 instances before a pattern page goes live. Single-instance patterns just don't exist.

## Cross-linking discovery back into detail pages

Discovery isn't a destination; it's glue. Every detail page has "discovery seams":

- Component detail → `See this pattern in other systems` → `/patterns/[slug]`.
- Section detail → `See this pattern in other systems` + `Components composing this section` (in-system).
- Token detail → `See this semantic role in other systems` (uses the `semanticRole` field).
- System overview → `Similar systems` based on shared stack + personality tags.
- Recipe → `Components this recipe references` + `Other systems' take on this problem`.

These links are what convert casual browsers into power users — every page is a launchpad to three more.

## Analytics hooks (plan for them now, even if wired later)

Record: search queries (including zero-result ones), filter combinations that produce empty sets, pattern pages with low instance counts, most-saved entities. These become the content roadmap — we chase the gaps the users expose.
