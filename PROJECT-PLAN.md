# Stockifi Website Rebuild — Master Plan

> Webflow → self-hosted **Astro + Strapi 5 + Cloudflare R2**. Full strategic rebuild, not a like-for-like port.
> **Home for this doc:** Confluence (DM space). This markdown is the staging draft. Jira tracks execution. Repo holds build files.
> Owners: 🟣 V · 🔵 Claude · 🟡 Simon · 🟢 Dev

---

## Status
Phase 0–1 done (audit + EN export + assets). Now planning the strategic rebuild: IA, SEO, copy, then build.

---

## Workstreams

### A. Strategy & Information Architecture
| Task | Owner | Status |
|---|---|---|
| Audit current site (10 pages) vs target | 🔵 | ✅ |
| Competitor IA analysis (Apicbase, Supy, Tenzo) | 🔵 | ✅ see § IA |
| Decide new page set + nav structure | 🟣🔵 | ⬜ |
| Build link tree / sitemap (final URL structure) | 🔵🟣 | ⬜ |
| Lock IA before copy + build | 🟣 | ⬜ |

### B. SEO
| Task | Owner | Status |
|---|---|---|
| Keyword analysis for whole site (per page intent) | 🔵 | ⬜ |
| Map keywords → pages (target query per URL) | 🔵 | ⬜ |
| Comparison-page strategy (vs Apicbase / Tenzo / Supy) | 🔵🟡 | ⬜ |
| 301 redirect map (old → new URLs) | 🔵 | ⬜ |
| Metadata, structured data, sitemap, robots | 🔵 | ⬜ |

### C. Content & Copy
| Task | Owner | Status |
|---|---|---|
| Content inventory (what to keep / rewrite / cut) | 🔵 | ⬜ |
| Rewrite existing page copy (home, integrations, etc.) | 🔵🟣 | ⬜ |
| Write copy for new pages (features, solutions, comparisons) | 🔵🟣 | ⬜ |
| Copy review + approval | 🟡🟣 | ⬜ |

### D. CMS & Data — Strapi
| Task | Owner | Status |
|---|---|---|
| Stand up Strapi 5 locally | 🔵 | ⬜ |
| Model 5 content types (i18n on, EN default) | 🔵 | ⬜ |
| Review content models in admin | 🟣 | ⬜ |
| Import EN content from CSVs | 🔵 | ⬜ |
| Spot-check imported content | 🟣 | ⬜ |

### E. Frontend Build — Astro
| Task | Owner | Status |
|---|---|---|
| Project setup (reuse LP stack) | 🔵 | ⬜ |
| Port design system / brand styles | 🔵 | ⬜ |
| Page templates per type (pulling from Strapi) | 🔵 | ⬜ |
| Build new static/marketing pages | 🔵 | ⬜ |
| UI strings → i18n files (nav, footer, forms) | 🔵 | ⬜ |
| Mega-menu nav component | 🔵 | ⬜ |

### F. Localization
| Task | Owner | Status |
|---|---|---|
| Build translation workflow (auto → draft → proof → publish) | 🔵 | ⬜ |
| Generate NO / DE / DA | 🔵 | ⬜ |
| Proof translations | 🟡🟣 | ⬜ |
| Wire /no/ /de/ /da/ routing | 🔵 | ⬜ |

### G. Infrastructure & Hosting
| Task | Owner | Status |
|---|---|---|
| Decide Strapi host + Postgres | 🟣🟢 | ⬜ |
| Cloudflare R2 bucket for media | 🟣🟢 | ⬜ |
| Frontend hosting (Cloudflare, like LP) | 🟣🟢 | ⬜ |
| Upload assets to R2 | 🔵 | ⬜ |
| Deploy pipeline (build on content change) | 🔵🟢 | ⬜ |

### H. Launch & QA
| Task | Owner | Status |
|---|---|---|
| Staging review (all pages, all locales) | 🟣🟡 | ⬜ |
| Redirects live + verified | 🔵 | ⬜ |
| Analytics (GTM/GA4), conversion tracking | 🔵 | ⬜ |
| DNS cutover | 🟣🟢 | ⬜ |
| Post-launch monitoring (rankings, 404s) | 🔵🟣 | ⬜ |

---

## Information Architecture (proposal — to refine in Workstream A)

### Current site (thin)
Home · Blog · Savings Calculator · Contact · Integrations · Customer Stories · Legal · Intro. No feature pages, no solution pages, no pricing page, no resources hub.

### Competitor pattern (Apicbase / Supy / Tenzo all share this)
- **Product/Platform** mega-menu — features grouped by capability
- **Solutions** mega-menu — by segment (and sometimes by role)
- **Resources** mega-menu — Blog, Success/Customer stories, Tools & calculators, Comparisons, Webinars/Podcast
- **Pricing** · **Company** (About, Contact, Jobs) · **Demo** CTA + Login

### Proposed target nav for Stockifi
| Menu | Children (candidate) |
|---|---|
| **Product** | Recipe Costing · Invoice & Supplier Price Tracking · POS & Consumption · Inventory & Variance Reporting · Integrations |
| **Solutions** | Independent restaurants · Restaurant groups (multi-location) · Hotels with F&B · Bars |
| **Resources** | Blog · Customer Stories · Savings Calculator & tools · Comparisons (vs Apicbase / Tenzo / Supy) |
| **Pricing** | Plans page (Automated / Full Control / Custom + guarantee) |
| **Company** | About · Contact · Jobs |
| CTA | Book a demo · Login |

### New pages to create (vs current)
Feature pages (×4–5) · Solution/segment pages (×4) · Comparison pages (×3) · Pricing page · Resources hub · About. Keep + restyle: Home, Blog, Customer Stories, Integrations, Savings Calculator, Contact, Legal.

> Decisions for V: final menu groupings, which segments, how many comparison pages, keep/cut Savings Calculator as-is.

---

## Timeline (draft — refine in Jira)
Sequenced by dependency: IA + SEO must finish before copy; copy + Strapi before frontend; locales after EN site; launch last.

| Week | Focus | Lead |
|---|---|---|
| 1 | Lock IA + sitemap/link tree · keyword analysis · Strapi local setup | 🔵🟣 |
| 2 | Keyword→page map · content inventory · Strapi modeling + EN import | 🔵 |
| 3 | Rewrite existing copy · draft new-page copy | 🔵🟣 |
| 4 | Finish new-page copy + comparisons · copy review | 🔵🟡 |
| 5 | Astro setup · design system port · core templates | 🔵 |
| 6 | Build all pages + mega-menu nav · wire Strapi content | 🔵 |
| 7 | i18n scaffolding · internal QA · fixes | 🔵🟣 |
| 8 | Translation workflow · generate + proof NO/DE/DA | 🔵🟡 |
| 9 | SEO finalize (redirects, metadata, sitemap, schema) · analytics | 🔵 |
| 10 | Staging QA · cutover · launch · monitor | 🟣🔵 |

~10 weeks. Estimate, not a commitment — adjust once IA + page count are locked (they drive copy and build volume).

---

## Open decisions (need V)
1. Documentation home confirmed: Confluence + Jira + repo? (recommended)
2. Final nav + page set (Workstream A)
3. Strapi + Postgres + R2 hosting (who provisions: V, Dev, or Claude)
4. How many comparison pages, and does Simon sign off on competitor claims
5. Keep Savings Calculator logic as-is or rebuild

---

## Notes
_(V — add notes, questions, decisions here)_
