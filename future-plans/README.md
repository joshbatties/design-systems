# Future Plans — Design Systems Reference Library

A set of connected planning docs. Read in order, or jump to what you need.

## The core question these docs answer

How do we tastefully blend three product identities into one site without it feeling like three products stapled together?

- **B (primary) — Design system reference.** The unit is a *component*, *token*, or *pattern*. Think Storybook + a gallery of real, copy-pasteable design systems.
- **A (secondary) — Key sections index.** The unit is a *section of a real website* (hero, pricing, footer, auth, dashboard). Think Mobbin, but zoomed in on sections rather than full flows.
- **C (tertiary) — Dev cheat sheet.** The unit is an *actionable recipe* (migration, anti-pattern, decision rule). Think a reference card the dev keeps open while building.

The blend only works if every entity is addressable from every layer. A Button component (B) should show *which sections* (A) use it and *which recipes* (C) reference it. A hero section (A) should list *which components* (B) compose it. Cheat-sheet entries (C) should link to the components and sections they describe.

## Index

1. [Vision & Identity](./01-vision.md) — the B+A+C blend, taste principles, what we are and aren't
2. [Information Architecture](./02-information-architecture.md) — page hierarchy, URL structure, navigation
3. [Content Model](./03-content-model.md) — the data shape: systems, components, tokens, sections, recipes
4. [Taxonomy](./04-taxonomy.md) — shared vocabulary that makes cross-system browsing work
5. [Previews & Performance](./05-previews-and-performance.md) — static vs iframe, thumbnail pipeline, scaling past 50 systems
6. [Discovery](./06-discovery.md) — search, filters, cross-system pattern views
7. [Detail Pages](./07-detail-pages.md) — component, section, token, and recipe detail; copy-code UX
8. [Accounts & Contributions](./08-accounts-and-contributions.md) — saves, collections, submitting a system
9. [SEO, Sharing & Mobile](./09-seo-sharing-mobile.md) — the technical polish that makes it findable and usable
10. [Roadmap](./10-roadmap.md) — sequencing, so we build the right things in the right order
