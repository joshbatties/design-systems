# 10 — Roadmap

Sequencing matters more than the individual features. Build in an order where each phase produces a site that's better than the one before, not a site that's broken until the last phase lands.

The ordering principle: **foundations before surface, content before growth.** Fix the model and the previews before adding more systems. Add more systems before adding accounts. Accounts before opening contributions.

## Phase 0 — What we have today

One system (Vercel), hand-written in a 3,556-line JSX file, rendered via scaled iframes. Home dumps everything inline. No search, no filters, no taxonomy, no detail pages, no SEO signal, no mobile story. This is a proof of concept; it doesn't scale to system #2.

## Phase 1 — Foundations (4-6 weeks of work)

Goal: rebuild the spine so every subsequent system is cheap to add. Site still only has Vercel. Users won't notice this phase directly, but nothing after it is possible without it.

- Define the content model ([03-content-model.md](./03-content-model.md)) and migrate Vercel into file-per-entity MDX/YAML.
- Ship the closed taxonomy ([04-taxonomy.md](./04-taxonomy.md)) with validation at build.
- Implement the URL structure and page types ([02-information-architecture.md](./02-information-architecture.md)), even if some pages are skeletal.
- Build the screenshot pipeline ([05-previews-and-performance.md](./05-previews-and-performance.md)) — static Tier 1 images on the home and browse; interactive Tier 2/3 on detail pages.
- Server-render everything ([09-seo-sharing-mobile.md](./09-seo-sharing-mobile.md)) with canonical URLs, structured data, sitemap, OG images.
- Plumb the contribution/account *schemas* even if the UI doesn't exist yet ([08-accounts-and-contributions.md](./08-accounts-and-contributions.md)).

Exit criteria: Vercel fully represented across overview / components / tokens / sections / recipes; all pages SSR'd; previews cheap; zero iframes on the home page.

## Phase 2 — Breadth (4-8 weeks)

Goal: 6-8 systems live with meaningful cross-system filters. This is when the product first *feels* like a library.

- Author 5-7 more systems, picked for variety of stack, personality, and industry (e.g. Linear, Stripe, Radix, shadcn, Notion, Shopify Polaris, Atlassian). Diversity matters more than volume — two very similar systems add less value than one unusual one.
- Author ≥2 instances for 10-15 pattern slugs, so `/patterns/[slug]` pages have content.
- Ship `/browse` with working filters.
- Ship search (client-side index).
- Ship the Patterns pages with editorial headers.
- Mobile pass across all page types.

Exit criteria: a visitor can land on `/patterns/pricing` and see 6+ real instances; search finds anything with a keystroke; mobile works on every page.

## Phase 3 — Depth (ongoing)

Goal: double down on what makes the product distinctive. This is the "Mobbin would never build this" phase.

- Pattern comparison mode (side-by-side with synced scroll).
- Component state matrix on component-pattern pages (rows: systems; cols: states).
- Token semantic-role overlay (see `/patterns/color-system` cross-system).
- Recipe library build-out — migration maps between popular pairs (`mui→radix`, `chakra→shadcn`), anti-pattern catalogues.
- "Copy with imports" + "copy dependencies" polish.
- Editorial pattern pages: actual long-form writing on each pattern, not just grids.

No exit criteria — this phase is where the product lives from here on.

## Phase 4 — Accounts (when traffic justifies)

Triggered by: organic traffic plateauing without a return-visit mechanism, or visible demand ("can I save these?").

- Auth (magic link + GitHub OAuth).
- Saves with `/me/saves` page.
- Collections with shareable URLs.
- Preferences sync.

Don't build this before there's a reason. A login wall on a reference site is a traffic leak.

## Phase 5 — Open contributions (when quality guardrails are proven)

Triggered by: 15-20 systems authored by the core team, taxonomy stable for several months, internal authoring workflow documented well enough that an outsider could follow it.

- `/submit` form for Tier A suggestions.
- Tier B contribution guide in the repo.
- Moderation queue tooling.
- Contributor attribution surfaced on entity detail pages.
- Invite-only Tier B to start; widen gates as the review workflow proves sustainable.

## What *not* to build (explicit)

Listing these so we don't quietly drift into them:

- **Comments / likes / follows.** Not in the product's definition.
- **A builder / editor for design tokens.** We're a reference, not a generator.
- **A marketplace.** Nothing paid; no seller side.
- **An API for programmatic access.** The content is a git repo; that's the API.
- **AI "generate a component."** Pollutes the "real over illustrative" principle. If we ever add AI it's for search ranking or tagging assistance, invisible to users.

## Cross-cutting commitments maintained through every phase

- **No shipped page is client-rendered-only.**
- **No iframe on an index surface.** Previews on grids are always static images.
- **No new entity without a taxonomy slot.**
- **No new pattern slug without ≥2 instances.**
- **Every entity page has lateral links to at least 3 others.**
- **Every entity links to its real-world source with a capture date.**

These are the invariants. Each doc in this folder elaborates one facet of them; this roadmap is the order we enforce them in.
