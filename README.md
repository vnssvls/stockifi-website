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
- **Phase 5 — Locales.** Wire `/no/ /de/ /da/` routing to per-locale Strapi entries.
- **Phase 6 — SEO + cutover.** 301 redirect map, sitemap, GTM/GA4, DNS.

## Division of labor

**Claude can do without Webflow access (crawling the live site):**
- Full URL inventory (done, see `audit/01-url-inventory.md`)
- Reverse-engineer the content model from rendered pages (started, see `audit/02-content-model.md`)
- Harvest image assets from live CDN URLs
- Build Strapi content types, import scripts, Astro templates

**Only V can do (needs Webflow login):**
- Export each CMS collection as CSV, **once per locale** (Webflow has no bulk localization export, this is the manual bottleneck)
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
