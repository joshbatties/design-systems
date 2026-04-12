# 09 — SEO, Sharing & Mobile

The technical polish that decides whether the product gets discovered, gets shared, and is usable by the ~50% of visitors who arrive on a phone. None of these are hard individually; missing any of them costs a lot of unseen traffic.

## SEO

The search queries this product should rank for are surprisingly gettable: `vercel button component`, `linear pricing page design`, `tailwind dashboard sidebar`, `design system focus ring`, `open source design systems list`. Today, the site renders nothing server-side of substance — search engines see a skeleton.

### The non-negotiables

- **Server-rendered HTML for every index, detail, browse, and pattern page.** No client-only content on crawlable surfaces. Previews ship as `<img>` tags from Tier 1 static generation (see [05-previews-and-performance.md](./05-previews-and-performance.md)).
- **Structured data.** JSON-LD blocks:
  - System → `SoftwareSourceCode` or `CreativeWork`.
  - Component / Section → `CreativeWork` with `image`, `url`, `inLanguage`, `programmingLanguage`.
  - Pattern page → `CollectionPage` listing instances.
  - Recipe → `TechArticle`.
- **Canonical URLs.** Every detail page has a `<link rel="canonical">`. Filtered `/browse` URLs have canonicals pointing at the unfiltered version; only a small allow-list of pattern combinations is crawlable.
- **Sitemap.** Generated at build, split into `sitemap-systems.xml`, `sitemap-components.xml`, `sitemap-sections.xml`, `sitemap-patterns.xml`, `sitemap-recipes.xml`. One parent `sitemap.xml` indexes them.
- **Robots.** `/me/*`, `/submit/confirm`, embed routes (`?embed=1`) are `noindex`. Everything else is indexable.
- **Descriptive titles & meta.** `Button — Vercel Design System` beats `Button | Design Systems`. Meta description is the entity's one-line description, not boilerplate.
- **Heading hierarchy.** One `h1` per page, used meaningfully. Section headers are `h2`; nothing is a div cosplaying as a heading.

### Content SEO

- Every pattern page has an editorial paragraph — not just a grid. That paragraph is what ranks for "pricing page design patterns."
- System overview has a longer editorial block (150-250 words) covering what makes the system distinctive. This is the page that ranks for `[system name] design system`.
- Recipe pages are the sneaky traffic winners — "how to handle empty states in a dashboard" is a high-intent query that a well-written recipe can own.

### Internal linking

Every detail page links laterally to ≥3 related entities (see the Lateral links sections in [07-detail-pages.md](./07-detail-pages.md)). This is search-engine food as much as user food.

## Social sharing

A reference library lives or dies by being shareable in Twitter threads, Slack channels, and design digests. If an image doesn't render in the card preview, the link doesn't get clicked.

### OG images
Every entity has a generated OG image:
- System → system name, accent bar, component/section counts, composed on the system's accent color.
- Component → component name, system name, a crop of the canvas render.
- Section → section name, system name, mobile + desktop side-by-side render.
- Pattern → "6 ways to do pricing" — grid of the top 4-6 instances.
- Recipe → title on a plain card with the system accent.

Generated at build from the `?embed=1` route using the screenshot pipeline. 1200×630 webp + jpg fallback. One per entity × theme (dark/light).

Twitter large card + `og:image`, `og:title`, `og:description`, `og:url`, `twitter:card`, `twitter:site`.

### Shareable URLs
- Direct entity URLs are already canonical and stable (see [02-information-architecture.md](./02-information-architecture.md)).
- `/patterns/pricing?compare=vercel,linear,stripe` is shareable and reconstructs the comparison.
- Filtered browse pages are shareable but not always canonical (see SEO).
- Collections (once accounts ship) have shareable URLs: `/c/[handle]/[slug]`.

### Embed share
Every detail page has an "embed" button that copies an `<iframe>` snippet pointing at the `?embed=1` URL, for inclusion in blog posts and tweets (Twitter/X doesn't render iframes in-feed, but Mastodon, Bluesky embeds, and long-form posts do).

## Mobile

Mobile isn't a second-class surface. Half the visitors will arrive from a Twitter link on their phone. If the experience there is bad, they don't come back on desktop.

### Layout
- Single-column lists, with collapsible filter drawers on `/browse`.
- The system detail tab rail becomes a sticky horizontal scroller.
- Canvas controls (variant/state/theme) collapse into a single "Controls" sheet that slides up.

### Previews
- Thumbnails are generated at a **mobile viewport** (see [05-previews-and-performance.md](./05-previews-and-performance.md)), not a miniaturised desktop crop. Pricing pages *look* like mobile pricing pages in the grid.
- Tier 2 iframes on detail pages default to the reader's breakpoint; the breakpoint switcher is still available for curious users.

### Interactions
- Hover-only affordances must have an alternative: long-press, explicit buttons, or the action moves to a visible spot.
- Code blocks: horizontal scroll with a visible scroll cue, and a full-screen "view code" sheet for long blocks.
- Copy affordance is a real tappable button, not a hover-revealed icon.

### Input
- Search input is a proper `type="search"` with mobile keyboard, clearable, always reachable via sticky header.
- Filter chips are tall enough to tap (44px minimum) and don't rely on horizontal wheel scroll.

## Accessibility

Treated as a baseline, not a chapter.

- Keyboard reachability for everything — no `tabIndex=-1` hiding focus from preview-that-should-be-interactive. Either it's an image (not keyboard-reachable) or it's an iframe (keyboard-reachable).
- Focus visible everywhere. We're a design-systems site; focus rings are the product.
- `prefers-color-scheme` respected by default; a manual toggle overrides.
- `prefers-reduced-motion` disables hover video loops and any decorative animation.
- Image alts are never auto-generated from slugs; they're authored editorially.
- Contrast verified on every preview surface, dark and light. Because the previews *are* the content, this is product-critical, not a compliance box.

## Performance (targets restated for this surface)

The budgets from [05-previews-and-performance.md](./05-previews-and-performance.md), plus:
- Total JS bundle per page under 150 KB gzipped. Search index lazy-loaded.
- Fonts subset and preloaded; no more than two families site-wide.
- Images served as webp with jpg fallback, `loading="lazy"` except above-the-fold, explicit width/height to avoid CLS.

## What to avoid

- Cookie banners unless strictly required. The product has no reason to set advertising cookies.
- Analytics that blocks page paint. One lightweight, privacy-respecting script (Plausible-style), loaded after LCP.
- Interstitials, newsletter pop-ups, "sign up to view" walls. None of it. The reference is the reference; accounts are additive.
