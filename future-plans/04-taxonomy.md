# 04 — Taxonomy

A shared vocabulary is what makes cross-system browsing possible. Without it, `Tags: ["Button", "CTA", "btn"]` and `Tags: ["button-primary"]` are different strings, and the filter for "show me every button" silently returns wrong results.

The rule: every filterable attribute comes from a closed list. Free-form tags are allowed on System only, for marketing flavour — they never drive filters.

## The four taxonomies

### 1. Pattern slugs (the critical one)

Pattern slugs link entities across systems. They're the backbone of `/patterns/[pattern]`. Two registries — one for components, one for sections — because a "button" is a different kind of thing from a "pricing section."

**Component patterns** (seed list — grow deliberately):

```
button · icon-button · link · input-text · input-textarea · input-number ·
input-select · input-combobox · input-date · input-file · input-search ·
checkbox · radio · switch · slider · toggle-group · rating ·
dialog · drawer · popover · tooltip · dropdown-menu · context-menu ·
command-palette · toast · alert · banner · callout ·
tabs · accordion · breadcrumb · pagination · stepper ·
avatar · badge · chip · card · list · table · tree · kanban ·
progress · spinner · skeleton · empty-state ·
code-block · kbd · tag-input · color-picker · theme-toggle
```

**Section patterns**:

```
hero · hero-split · hero-video · hero-animated ·
feature-grid · feature-split · bento ·
pricing · pricing-toggle · pricing-tiers · pricing-calculator ·
testimonial-grid · logo-cloud · social-proof ·
cta-block · newsletter ·
faq · footer · footer-mega ·
auth-signin · auth-signup · auth-magic-link · auth-sso · auth-mfa · auth-reset ·
dashboard-overview · dashboard-analytics · dashboard-empty ·
settings-profile · settings-billing · settings-team · settings-security ·
onboarding-welcome · onboarding-stepper · onboarding-checklist ·
changelog · blog-index · blog-post · docs-index · docs-page ·
empty-state · error-404 · error-500 · maintenance
```

Adding a new pattern is a deliberate act: it requires an editorial description on `/patterns/[slug]` and at least two instances across systems. This keeps the patterns page meaningful — no single-instance patterns.

### 2. Component categories

Used to group the Components tab on a system detail page. Closed list:

```
inputs · feedback · navigation · overlays · data-display ·
layout · typography · media · utilities
```

### 3. Token categories

```
color · spacing · radius · typography · shadow · motion · z-index · breakpoint
```

### 4. Semantic roles (optional, powerful)

For tokens specifically, so we can compare across systems. If every system tags its "primary surface" token with `surface-1`, we can answer "how does every system handle surface elevation?"

```
surface-1 · surface-2 · surface-3 · surface-raised · surface-overlay
border-subtle · border-default · border-strong
fg-primary · fg-secondary · fg-muted · fg-disabled
accent · accent-hover · accent-active · accent-foreground
success · warning · danger · info
focus-ring
```

This is optional per-token — not every system will map cleanly. That's fine; we fall back to "system-named" display.

## Attributes (multi-select filters)

These are dimensions every System is tagged along. They power `/browse`.

- **Stack**: `react | vue | svelte | solid | angular | web-components | css-only`
- **Styling**: `tailwind | css-modules | css-in-js | vanilla-extract | sass | vanilla`
- **Theme**: `dark-native | light-native | both`
- **Density**: `comfortable | compact | dense`
- **Personality**: `minimal | playful | editorial | technical | brutalist | glassy`
- **Industry focus**: `developer-tools | fintech | saas-general | ecommerce | marketing | content`
- **License**: `open-source | proprietary-reference | freemium`

These are editorial judgments; we document how we make them so tagging stays consistent (see [08-accounts-and-contributions.md](./08-accounts-and-contributions.md)).

## Governance

- The taxonomy lives in a single file (`content/taxonomy.yaml` or equivalent), is validated at build, and any entity referencing an unknown slug fails the build.
- Adding a pattern slug requires: description, ≥2 instances committed in the same PR.
- Renaming a slug requires a redirect entry so bookmarks/SEO don't break.
- Keep the list *small*. "It's easier to add than remove" is the governing principle — every new slug dilutes existing filters.

## Why closed lists beat open tags

1. Filters actually work. "All pricing sections" returns every pricing section, not the ones the author remembered to tag.
2. URLs stay stable — `/patterns/pricing` is a commitment.
3. The UI gets to be opinionated: we can render a real pricing-specific pattern page with filters like "monthly/annual toggle: yes/no" rather than a generic tag cloud.
4. Contributors have less room to bikeshed.

Free-form tags are allowed, but *only* on the System entity, and *only* for marketing flavour on the system card ("opinionated", "tokens-first", "animation-heavy"). They never drive filters or URLs.
