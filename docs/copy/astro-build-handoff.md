# Astro build handoff — DC-474 copy sprint

> Build/template adjustments made during the copy sprint that must travel with the content.
> All of these are **already committed on `dc-474-website-copy`** in this repo (`stockifi-website-copy`).
> If you ship by pushing/merging this branch, they come along automatically.
> If the target is a **separate Astro checkout** (e.g. Ivan's dev/prod setup, Mon Jun 15), re-apply each one or the build breaks / sections render wrong.
> Last updated: Jun 9 2026.

## 1. Schema — MUST come first (build breaks without it)
- **`src/content.config.ts`** — the `solutions` and `products` collections gained new frontmatter fields the pages now use: `showcaseTagline / showcaseHeading / showcaseBody / showcaseSubs[]`, and the `problem*` fields are **optional / defaulted** (`problemHeading` optional, `problemBody` default `''`, `problem` default `[]`).
  - Why it matters: if the target build has an older schema, the new `.md` frontmatter fails validation and the whole build errors out. Apply the schema before the content.

## 2. Template wiring
- **`src/pages/solutions/[slug].astro`** — the intro section (FeatureSplit / Feature v2) is now gated on **`problemHeading`** instead of `problem.length`. This is the "section variant" change: it lets the intro render as an eyebrow + heading + body with **no checklist** when `problem: []` (the team pages + the new segment intros), while pages that still pass bullets keep their checklist.
- **`src/pages/product/[slug].astro`** — the how-it-works step-timeline was **replaced by the Feature v7 split showcase** (`FeatureShowcase`). Wires `showcase*` fields + `mediaRatio`.

## 3. Components
- **`src/components/features/FeatureShowcase.astro`** — Feature v7 (split showcase): `mediaRatio` prop (landscape 16/10 on product pages), copy-left / media-right, no mid-section CTAs, `MediaPlaceholder` until real animation/screenshot lands.
- **`src/components/ImageCardGrid.astro`** — card sizing/alignment: one-line titles, two-line bodies, dropped the min-height crutch and reserved title/body height for alignment.
- **`src/components/page-headers/PageHeaderImage.astro`** — page-header image component tweak (applied during product page review).
- **`src/components/Nav.astro`** + **`src/data/nav-icons.json`** — megamenu blurb refresh (e.g. bars → "Know the margin on every drink you pour.") and Fluent lined nav icons (wand/store/chart/chef-hat/receipt-search).

## 4. Internal only (not user-facing, low priority)
- **`src/pages/styleguide/features.astro`** — styleguide additions for the new feature variants.

## Content still pending (not build, but gates the ship)
- FAQ sign-off on the 49 product FAQs (reviewer in `docs/copy/`).
- Testimonials decision per solutions page (empty + slider auto-hides, vs pull real quotes).
- Hero animation (separate workstream, for the Fri Jun 12 review).
- The 4 segment solutions pages are committed-pending (uncommitted at time of writing).
