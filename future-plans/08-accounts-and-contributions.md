# 08 — Accounts & Contributions

Two features that change the product from "a nice reference" to "somewhere people return." Neither is needed for launch; both should be plumbed for early so retrofitting them doesn't break the content model.

## Part 1 — Accounts

### Why accounts at all
Three reasons, in priority order:
1. **Saves & collections** — the main reason. A designer building a pricing page wants to save six pricing sections and come back.
2. **Submission attribution** — when users contribute a system, they own the entry.
3. **Personalisation** — filter default views to "stacks I use"; dark/light + density preferences sync across devices.

Explicitly *not* reasons: comments, likes, follows, feeds, messaging. No social layer.

### Auth model
- Email + magic link by default. GitHub OAuth as a second option (this audience skews GitHub-heavy).
- No password auth. One less thing to lose.
- Anonymous browsing is always full-featured. Accounts are additive, never a paywall.

### Data sketch
A tiny profile: `id`, `handle`, `displayName`, `email`, `preferredTheme`, `preferredDensity`, `createdAt`.
Per-user state that matters: `saves[]`, `collections[]`, `submissions[]`.

### Saves
- One-click heart on any entity (system, component, section, token, recipe).
- Saves page: `/me/saves` with the same grid + filter shape as `/browse`. Filters applied to saves, not the corpus.
- Save count is surfaced on entity cards only above a threshold (e.g. "Saved by 240"). Private saves with no aggregate signal until we hit that threshold avoid a cold-start echo chamber.

### Collections
- User-created, named buckets ("Dashboards I like", "Auth patterns to study").
- Public or private per collection. Public collections have a shareable URL (`/c/[handle]/[collection-slug]`).
- Collections render as mini landing pages — title, description, grid. Good shareable artifact.

### Settings
One page: theme, density, default stack filter, email preferences. No dark patterns.

## Part 2 — Contributions

### Why it matters
We can't author every system. A contribution pipeline is how the corpus grows past whatever the core team personally cares about. But quality is the product — we can't let the taxonomy and authoring discipline collapse under drive-by PRs.

### Two contribution tiers

**Tier A — suggest a system.** A lightweight form (`/submit`) — no code, no content files. The user provides:
- System name, company, website.
- Why it deserves inclusion (2-3 sentences).
- Links to design system docs / Storybook / Figma / GitHub.
- Optional: their handle for attribution.

Submissions go to a moderation queue. Accepted submissions become an authoring task for the core team or an invited contributor.

**Tier B — author a system or entity.** Via pull request, using the authoring workflow in [03-content-model.md](./03-content-model.md). A contributor guide details:
- How to structure the content files.
- The taxonomy choices and why they're closed.
- The preview generation process (so they can verify locally).
- Attribution and capture-date discipline.
- Style and tone guide for editorial copy.

Tier B contributions get a "Contributed by @handle" byline on the entity detail page. This is the only "social" visibility in the product.

### Moderation queue
- Every Tier A submission and every Tier B PR lands in a shared queue.
- Triage states: `submitted`, `accepted`, `in-progress`, `published`, `declined-with-reason`.
- Declines require a one-sentence reason (surfaced back to the submitter) — no silent rejections.

### What we catch in review
- Taxonomy: does the pattern slug exist? If a new one is proposed, does it have ≥2 instances?
- Attribution: does each entity link to its real-world source? Is `capturedAt` present?
- Originality: is this a genuine rendering of the system, or an imitation passing as the original?
- Quality bar: does the entity have the minimum shape (preview renderable, code copy-paste-runs, tokens resolve)?

### Legal / attribution posture
We're a *reference*, not a redistribution. Some systems are open source (permissive license → direct code attribution suffices). Some are "inspired by" the real product's public UI — attributed, clearly labeled as an interpretation, linked to the original. We don't host proprietary code without permission. A `LICENSE` field on the System entity makes the status explicit on every page:

- `open-source (MIT)` — code is the real deal; link to upstream.
- `open-source (other)` — ditto, with license pinned.
- `reference-interpretation` — our rendering, attributed.
- `permission-granted` — the company let us use their code; named contact on request.

### Governance growth path
- Phase 0 (today → first 10 systems): core team authors everything. No Tier B accepted.
- Phase 1 (10-25 systems): Tier A open; Tier B by invitation only.
- Phase 2 (25+ systems): Tier B open to anyone who's had one Tier A submission accepted.

This keeps quality high while the shape of the taxonomy is still settling. Opening the gates too early yields a messy corpus we'll spend a year cleaning up.

## What to plumb now, even if features ship later

- **User table** schema (even if only admin accounts exist initially).
- **Save table** schema with `(user, entityType, entitySlug)` unique key. Reads only, no UI yet.
- **Submission table** schema, fed by the `/submit` form even before accounts are public.
- **Attribution field** on every entity — just `contributorHandle?`. Defaults to core team.

Adding these columns later is a pain because they ripple through content loaders, types, and the validated graph. Adding them now costs almost nothing.
