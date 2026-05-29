# Stockifi Website Migration — Webflow to Self-Hosted

> Webflow (design + CMS + hosting fused) → Astro frontend + Strapi 5 headless CMS + self-hosted infra.
> Same stack family as the LP rebuild (Astro on Cloudflare). Strapi replaces the CMS collections only, not the site design.

## The three layers we now own separately

| Layer | Webflow today | Target |
|---|---|---|
| Content + editing admin | Webflow CMS | **Strapi 5** (headless, REST/GraphQL) |
| Design / templates / render | Webflow Designer | **Astro** |
| Hosting + DB + media | Webflow cloud | Server + Postgres + Cloudflare R2 |

## Phases

- **Phase 0 — Audit** (current). Inventory every page, collection, field, locale, and URL. Output: `audit/`.
- **Phase 1 — Export + asset harvest.** Pull every CMS collection as CSV (per locale) and download every referenced image. Output: `webflow-exports/`, `assets/`.
- **Phase 2 — Model Strapi.** Recreate each collection as a Strapi content type matching the audited schema. i18n on from the start.
- **Phase 3 — Import pipeline.** Scripts to load CSV rows + assets into Strapi, swapping Webflow CDN URLs for R2 uploads.
- **Phase 4 — Astro frontend.** Templates per page type, pulling from Strapi.
- **Phase 5 — Locales via translation workflow.** Locales are NOT migrated from Webflow. Build the translation workflow, generate NO/DE/DA from the EN source, proof, publish, then wire `/no/ /de/ /da/` routing to the generated entries. (Customer Stories NO already captured from Webflow is kept as a free seed.)
- **Phase 6 — SEO + cutover.** 301 redirect map, sitemap, GTM/GA4, DNS.

## Content location strategy
Not everything lives in Strapi. Choose per content type:

| Content | Home | Translated by |
|---|---|---|
| Blog, Customer Stories, Testimonials, Integrations, Integration Categories | **Strapi** collections | translation workflow |
| Marketing page copy (Home, Pricing, About sections) | **Strapi Single Types** if marketing edits it; else Astro component | workflow or i18n files |
| UI chrome / micro-copy (nav, buttons, footer, forms, 404, cookie banner, calculator labels) | **i18n dictionary files in repo** (JSON/TS/YAML) | dev or agent at build time |

Rule of thumb: non-dev edits it regularly or it is structured/repeated → Strapi. Tied to layout and rarely changes → code. Blog posts never go in YAML; nav labels never go in Strapi.

## Translation workflow (build-phase task — Claude or a translation agent)
Goal: every time EN content is published or updated, locales are produced automatically, then proofed before going live (never raw machine translation straight to production — that is what produced the poor Webflow translations).

1. EN content published/updated in Strapi.
2. Strapi lifecycle hook sends localizable fields to a translator (Claude API or DeepL), writes NO/DE/DA as **draft, flagged "machine, needs review."**
3. Simon (or Claude) proofs, then publishes the locale version.

Evaluate Strapi 5's built-in AI translation vs a custom hook during the build. i18n dictionary files are translated separately (few, stable, lighter touch).

## Division of labor

**Claude can do without Webflow access (crawling the live site):**
- Full URL inventory (done, see `audit/01-url-inventory.md`)
- Reverse-engineer the content model from rendered pages (started, see `audit/02-content-model.md`)
- Harvest image assets from live CDN URLs
- Build Strapi content types, import scripts, Astro templates

**Only V can do (needs Webflow login):**
- Export each CMS collection as CSV **in English only** — locales are regenerated via the translation workflow, not migrated. EN export of all 5 collections: done.
- Confirm field-level settings invisible from rendered HTML: exact field types, which fields are localized, required flags, reference vs multi-reference relationships
- Confirm any collections with no public URL (e.g. Testimonials feeding sliders)

## Folder layout

```
stockifi-migration/
  README.md              ← this file (course of action)
  audit/
    01-url-inventory.md  ← every URL, grouped, per locale
    02-content-model.md  ← per-collection field schema (the master spec)
  webflow-exports/       ← V drops CSV exports here (per collection, per locale)
  assets/                ← harvested + optimized images
```

## Open questions to resolve in Phase 0

1. Why are there two SkiGeilo stories (`skigeilo` and `skigeilo-2`)?
2. Are Integrations a real CMS collection, or static cards? (`integrations-database.csv` already in repo root may be the source.)
3. Is Testimonials a separate collection, or are quotes embedded in Customer Stories?
4. Which fields are actually translated per locale vs shared (e.g. images, logos usually shared)?
