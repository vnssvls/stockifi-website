# 301 Redirect Map + canonical (DC-472)

> Source: sitemap inventory (`01-url-inventory.md`). Production = `www.stockifi.io`.
> **Key principle:** we preserve every existing slug, so redirects are near-zero. Risk is low.

## Canonical rules (apply site-wide)
- Host: **`www.stockifi.io`** (non-www → 301 to www).
- **No trailing slash** (trailing → 301 to non-slash), one policy site-wide.
- Ad LPs `/intro`, `/intro-details`: keep live for paid traffic, **add `noindex`** (not in organic, no internal links).

## Existing URLs → new (1:1, preserved)
| Old | New | Note |
|---|---|---|
| `/` | `/` | home |
| `/blog` | `/blog` | listing |
| `/blog/{slug}` | `/blog/{slug}` | 11 published slugs preserved |
| `/customer-stories` | `/customer-stories` | listing |
| `/customer-stories/{slug}` | `/customer-stories/{slug}` | incl. `skigeilo` + `skigeilo-2` (both kept) |
| `/integrations` | `/integrations` | now CMS-style data page |
| `/savings-calculator` | `/savings-calculator` | kept |
| `/contact` | `/contact` | now also the "Book a demo" CTA target |
| `/terms-conditions` | `/terms-conditions` | |
| `/privacy-policy` | `/privacy-policy` | |
| `/intro`, `/intro-details` | unchanged | ad LPs, noindex |
| `/no/* /de/* /da/*` | unchanged | existing locales preserved 1:1 |

## New pages (additive — no redirect, just add to sitemap)
`/product/recipe-costing` · `/product/supplier-price-tracking` · `/product/pos-integration` · `/product/inventory-variance` · `/solutions/*` (8) · `/pricing` · `/about` · `/compare/*` (deferred) · new locales `/sv/*` `/nl/*`.

## Redirects actually needed
- **None from slug changes** (all preserved).
- Host + trailing-slash canonicalization (above) — handled at hosting/Astro config, not per-URL.
- Confirm nothing is being **cut**: all current content carries over, so no live URL 404s. (Unpublished blog drafts had no public URL.)

## Open
- If any slug is renamed during build (e.g. a cleaner blog slug), add a 301 here at that time.
- `skigeilo` vs `skigeilo-2`: both kept as distinct (no redirect). Re-confirm at launch.

> Net: a clean migration. The slug-preservation decision is what keeps current rankings and avoids a redirect minefield.
