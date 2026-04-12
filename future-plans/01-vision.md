# 01 — Vision & Identity

## What we are

A reference library where a developer or designer can:

1. **Land on a design system** and copy the whole thing — tokens, components, patterns — into their project. (**B**)
2. **Study how real sites compose those components into sections** — hero, pricing, footer, auth, dashboard, changelog, empty states. (**A**)
3. **Pull actionable recipes for agents** — migration maps, anti-patterns, decision rules, scaffolds — while they work. (**C**)

The distinguishing promise versus existing products:

- vs. **Mobbin** — we aren't screenshots of apps, we're working, copy-pasteable code at the component *and* section level.
- vs. **Storybook galleries / component libraries** — we show components in real composed context, not just isolated on grey backgrounds.
- vs. **Tailwind UI / shadcn** — we aren't one opinion; we catalogue many systems side by side and let you see how the same pattern is expressed across them.

## The three-layer blend

Every entity in the site lives at one of three layers. The layers are navigable in both directions.

```
Layer B — System          Vercel · Linear · Stripe · Notion · ...
    │
    ├── Component         Button · Input · Modal · Toast · Table · ...
    ├── Token             color · spacing · radius · typography · motion
    │
Layer A — Section         Hero · Pricing · Footer · Auth · Dashboard · ...
    │                     (each section is a composition of components)
    │
Layer C — Recipe          Migration map · Anti-pattern · Decision rule ·
                          Scaffold · Responsive rule · Dark mode swap
                          (each recipe references components and sections)
```

A user should be able to start anywhere and move laterally. From a `Button` (B) → see every `Pricing` section (A) that uses that button style → see the "CTA contrast anti-pattern" recipe (C) → jump back to the `Button` component in a different system.

## What "tastefully blended" means in practice

Three failure modes to avoid:

- **Tab soup.** Three top-level tabs labelled "Components / Sections / Recipes" is the lazy version — it tells the user *we* couldn't decide. Instead, every detail page surfaces the other two layers contextually.
- **Kitchen sink.** Not every system needs every layer populated. A system can ship with components only, or components + sections, or all three. The UI should gracefully hide empty layers per system.
- **Mode switching.** The user shouldn't feel they've left "the design system app" and entered "the Mobbin app." Visual language, card shape, typography, spacing are shared across all three layers. Only the *content* changes.

## Taste principles

These are the rules that keep the product feeling like one thing:

1. **Real over illustrative.** Never stock screenshots. Never lorem ipsum in previews. If we show a pricing section, it's a live-rendered pricing section with the system's actual tokens applied.
2. **Copy is a first-class action.** Every component, token, section, and recipe has a "copy" button that returns paste-ready code, not a teaser.
3. **One system's page should feel like that system's page.** A Linear system detail page should feel Linear-ish without cosplaying Linear. Use the system's accent color as a subtle wash; don't ape its typography.
4. **Density is a signal of seriousness.** The homepage should show more per screen than a typical marketing page — this is a reference tool, not a landing page. But density is achieved through hierarchy, not through cramming.
5. **Dark is default, light works.** Most design-system audiences browse in dark; we default to it. But every preview must render cleanly in both.
6. **Attribution is not optional.** Every system links to its source of truth (live site, GitHub, docs) with a "captured on" date. This is what separates a reference library from a scraped clone.

## What we are not

- Not a design system *builder* — we don't generate tokens or components from scratch.
- Not a marketplace — nothing paid, no seller accounts.
- Not a social network — no comments, no likes, no follows. Saves and collections only.
- Not a screenshot archive — live renders or nothing.
