# Asset Harvest — status

Run with `python3 scripts/harvest-assets.py` (idempotent). Reads every CSV in `webflow-exports/`, pulls Webflow CDN image URLs (including semicolon-separated multi-image cells and inline images inside rich-text bodies), downloads to `assets/<collection>/`, and writes `assets/asset-map.csv` (collection, company, field, original_url, local_file, status).

## EN pass — 2026-05-29
| Collection | Files |
|---|---|
| blog | 39 (hero + inline body images) |
| customer-stories | 63 |
| integrations | 69 (logos) |
| testimonials | 25 |
| integration-categories | 0 (lookup, no images) |

**~196 unique assets, ~101 MB.** `asset-map.csv` is the old-URL → new-file mapping the Strapi import uses to swap Webflow CDN links for R2 uploads.

## Finding: CSV asset URLs can be stale
Two SkiGeilo URLs in the Customer Stories CSV 403'd (assets purged from CDN after the field was set), while the **live page referenced different working URLs**. Recovered the live equivalents manually.

Implication: at import time, reconcile each item's asset URLs against the live page, not just the CSV. The CSV is authoritative for *which field* an image belongs to; the live page is authoritative for *the current file*. Worth a verification pass before final import.

## Remaining
- Re-run after each new locale export (NO/DE/DA) to catch any locale-specific images (most media is shared, so expect few new files).
- Optimization pass (compress, WebP/AVIF) deferred to Phase 1 close, before R2 upload.
