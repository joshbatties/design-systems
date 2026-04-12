# 05 — Previews & Performance

## The problem with what we have today

Every card on the home page mounts a live iframe into the same Next.js route, rendered at `1320×1100` and CSS-scaled to `0.22`. For one system with 20 sections that's ~20 iframes; at 10 systems it's ~200 iframes competing for paint, layout, and main-thread time. The iframes also can't be read — 210px tall scaled text is a texture, not a preview. And because everything is client-rendered, search engines see a loading skeleton.

Preview rendering is probably the single biggest technical decision the product has. It has to be cheap enough to show many, crisp enough to be meaningful, and real enough that nobody mistakes it for a stock screenshot.

## Three rendering tiers

Different surfaces have different needs. Don't use one mechanism for all of them.

### Tier 1 — Static thumbnails (for index/grid contexts)

Used on: home, `/browse`, system overview grids, pattern pages, related-component links.

**How:** at build, a headless browser (Playwright) navigates to the canonical rendered route for each entity, takes a screenshot at multiple sizes and in both themes, and writes the image to `public/previews/[entity-type]/[slug]-[theme]-[size].webp`. An optional second pass captures a short `.mp4`/`.webm` hover loop for sections where motion matters (hero animations, loading states).

**Why:**
- Fast: the browser renders a static asset, not 200 iframes.
- SEO-visible: images are in the DOM with `alt` text.
- Crisp: we render at 2x and downscale, so small thumbnails are sharp.
- Cacheable: CDN does the work; only changed entities regenerate.

**Regeneration trigger:** a content file's content hash or the component's source hash changes. Incremental, not rebuild-everything.

### Tier 2 — Lazy live iframes (for the detail page)

Used on: component detail, section detail, system overview hero preview.

**How:** the iframe mounts when the user scrolls it into view (keep the IntersectionObserver we already have), points at an `/embed/...` route that renders *only* the entity (no chrome), respects `prefers-color-scheme`, and is interactive — mouse, keyboard, focus work. No `pointer-events:none`. No `tabIndex:-1`. This is the "hero" moment; a single iframe per page, in focus, interactive.

**Why:**
- Real: the user touches the thing, resizes it, tabs through it.
- Scoped: one per page, not dozens.
- Composable: the same `/embed/...` route powers our own detail page and external OG image generation.

### Tier 3 — Inline React (for the same-origin system's own content)

Used on: when the system is authored inside our repo and we want to render its component code directly in-page (a Storybook-like canvas).

**How:** MDX/content is parsed at build; the rendered canvas lives in a React boundary inside the detail page with theme/variant controls outside. No iframe unless we need CSS isolation.

**Why:** faster, no cross-document overhead, easier to wire up interactive controls to the rendered example.

**When iframe is still needed:** when the system's CSS would otherwise collide with the host page (global resets, `*` selectors, font imports). Then Tier 2 + isolation wins.

## Decision table

| Surface | Tier |
|---|---|
| Home — featured systems strip | 1 (static image) |
| Home — pattern chip hovers | 1 (image + short loop) |
| `/browse` grid | 1 |
| `/patterns/[slug]` grid | 1 |
| System overview — signature components strip | 1 |
| System overview — one hero preview | 2 |
| Component detail — canvas | 3, fallback 2 |
| Section detail — canvas | 2 |
| OG images (social sharing) | 1, generated server-side |

## The screenshot pipeline

Treat this as a first-class build step, not a one-off script.

Inputs:
- List of entities with their canonical embed URLs.
- Target sizes (thumbnail 640×400, card 960×600, OG 1200×630).
- Themes (dark, light).
- Device viewports for Section thumbnails: mobile 390, tablet 820, desktop 1440.

Steps:
1. Boot the Next.js app against the build output.
2. For each entity × size × theme × viewport: open page, wait for fonts + network idle, screenshot.
3. Write to `public/previews/...` with content-hash filenames for immutable caching.
4. Emit a `previews.manifest.json` the app reads at build to wire up `<Image>` src attributes.

Incrementality: compute a hash of `(content-file-hash, render-code-hash, viewport, theme)`. Skip if unchanged. Parallelise across entities.

Where it runs: part of `next build`, run in CI on every deploy. For the home dev loop, a local watcher regenerates only the entity currently being edited.

## Budgets (targets, not hard limits)

- Home: LCP < 1.5s on desktop, < 2.5s on 4G mobile. No iframe on first paint.
- System detail: LCP < 2.0s desktop; one interactive iframe after first paint.
- Cumulative iframes per page: 0 on index pages, 1 on system overview, ≤2 on detail pages (component + a related-patterns peek).
- Thumbnail image weight: ≤ 50KB for 640-wide, ≤ 120KB for 1280-wide; webp with jpg fallback.

## Motion

Static images are great; a 3-second loop is better for sections that *are* motion (animated heroes, loading, skeletons). Two rules:

- Loops are ≤ 3s, ≤ 500KB, paused by default, play on hover or in-view on mobile.
- We never auto-play with audio; there is no audio.

## Accessibility on previews

- Every image has an `alt` that names the entity (`"Vercel — pricing section, dark theme"`).
- Tier 2 iframes have a `title`, are keyboard-focusable, and honour `prefers-reduced-motion`.
- No `pointer-events:none` — if the iframe is a preview but not interactive, it's an image, not an iframe.

## Mobile

The current 1320-wide iframes scaled to 0.22 give a mobile user a ~290-wide blurry block. Instead, on mobile:

- Thumbnails are generated at a mobile viewport (390) so the preview is composed for that screen, not a miniaturised desktop.
- Detail-page canvases default to the viewport size of the reader's device, with an explicit breakpoint switcher for those who want to see other layouts.
