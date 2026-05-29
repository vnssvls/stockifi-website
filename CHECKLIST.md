# Migration Checklist

✅ done · ⬜ to do · 🔵 Claude · 🟣 V

---

## Phase 0 — Audit ✅
- ✅ 🔵 URL inventory from sitemap
- ✅ 🔵 Verify all 5 collection schemas
- ✅ 🔵 Confirm locale behavior (EN-only decision)

## Phase 1 — Export + assets ✅
- ✅ 🟣 Export all 5 collections (EN) from Webflow
- ✅ 🔵 Harvest image assets (~196 files)
- ✅ 🔵 Build old-URL → new-file map

## Phase 2 — Model Strapi ⬜ (next)
- ⬜ 🟣 Decide where Strapi is hosted (local first, then which server)
- ⬜ 🔵 Stand up Strapi 5 locally
- ⬜ 🔵 Build 5 content types: Blog, Customer Stories, Testimonials, Integrations, Integration Categories
- ⬜ 🔵 Enable i18n (EN default), set integration category enum, blog self-relation, testimonial booleans
- ⬜ 🟣 Review the content models in Strapi admin

## Phase 3 — Import ⬜
- ⬜ 🟣 Set up Cloudflare R2 bucket (or confirm I can)
- ⬜ 🔵 Upload assets to R2
- ⬜ 🔵 Import all EN content from CSVs into Strapi
- ⬜ 🟣 Spot-check imported content

## Phase 4 — Astro frontend ⬜
- ⬜ 🟣 Confirm hosting (Cloudflare, same as LP?)
- ⬜ 🔵 Build page templates pulling from Strapi
- ⬜ 🔵 Move UI strings (nav, footer, buttons) into i18n files
- ⬜ 🟣 Review the built site

## Phase 5 — Locales ⬜
- ⬜ 🔵 Build translation workflow (auto-translate → draft → proof → publish)
- ⬜ 🔵 Generate NO / DE / DA
- ⬜ 🟣 + Simon proof translations
- ⬜ 🔵 Wire /no/ /de/ /da/ routing

## Phase 6 — SEO + cutover ⬜
- ⬜ 🔵 Build 301 redirect map (old → new URLs)
- ⬜ 🔵 Sitemap, robots, structured data, GTM/GA4
- ⬜ 🟣 Point DNS to new host
- ⬜ 🟣 Final go-live approval

---

## Your immediate next step 🟣
Tell me where to host Strapi (start local on your machine, or a server you have in mind). Then I begin Phase 2.

## My immediate next step 🔵
Stand up Strapi 5 locally and model the 5 content types from the verified schema.
