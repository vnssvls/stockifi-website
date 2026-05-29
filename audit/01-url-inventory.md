# URL Inventory — stockifi.io

> Source: `https://stockifi.io/sitemap.xml`, pulled 2026-05-29. Production uses `www.stockifi.io`.
> ~332 total sitemap entries = base set below × 4 locales (EN base, NO, DE, DA).

## Locales
- EN — base, no prefix
- NO — `/no/`
- DE — `/de/`
- DA — `/da/`

## Static pages (10)
| Path | Notes |
|---|---|
| `/` | Home |
| `/blog` | Blog listing |
| `/savings-calculator` | Interactive tool, check how it is built |
| `/contact` | Form page |
| `/integrations` | Integrations listing (filterable grid) |
| `/customer-stories` | Customer stories listing |
| `/terms-conditions` | Legal |
| `/privacy-policy` | Legal |
| `/intro` | LP step 1 (already rebuilt in Astro) |
| `/intro-details` | LP step 2 (already rebuilt in Astro) |

## Blog collection (11 items)
food-cost-control-7-causes-of-variance-and-how-to-fix-each ·
food-cost-percentage-restaurant-benchmarks ·
food-cost-tracking-system-restaurant ·
inventory-management-software-restaurants-excel-alternative ·
inventory-variance-tracking-restaurant-costs ·
multi-location-food-cost-management-restaurant-groups ·
norwegian-coffee-brands-preferences-specialty ·
proactive-inventory-management-restaurants ·
supplier-invoice-errors-cost ·
supplier-price-tracking-restaurants ·
theoretical-vs-actual-food-cost

## Customer Stories collection (10 items in CMS, 9 published)
byoslo · eik-and-friends · heim-gastropub · koie-ramen · kolpin ·
schnitzelei · skigeilo · skigeilo-2 · torika-gruppen
(Døgnvill Burger = the 10th, draft.)

> Open Q: `skigeilo` vs `skigeilo-2` — CSV shows one SkiGeilo item; second may be a stale/renamed slug still indexed.

## Testimonials collection (18 items in CMS, 12 published)
Separate collection ✅. Master quote list with placement booleans (scrolling banner, savings-calculator, add-to-customer-stories).

## Integrations (69 items) + Integration Categories (3 items)
Both are real Webflow CMS collections. Integrations reference Integration Categories (Accounting / POS / Others), and that relation drives the filter on `/integrations`. `integrations-database.csv` in repo root may seed this.

## Per-locale export checklist (Phase 1)
Each collection must be exported once per locale (Webflow limitation):

| Collection | EN | NO | DE | DA |
|---|---|---|---|---|
| Blog Posts | ☐ | ☐ | ☐ | ☐ |
| Customer Stories | ☑ | ☐ | ☐ | ☐ |
| Testimonials | ☑ | ☐ | ☐ | ☐ |
| Integrations | ☐ | ☐ | ☐ | ☐ |
| Integration Categories | ☐ | ☐ | ☐ | ☐ |
