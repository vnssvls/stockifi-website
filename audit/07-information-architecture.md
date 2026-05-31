# Information Architecture — v1 (for lock)

> Workstream A. The full page set, nav, URLs, CMS-vs-static, redirects, and primary keyword per page.
> Decisions applied: Solutions = segment + by-role · 4 capability Product pages · comparisons deferred (slots reserved) · Pricing + About + Resources hub included · Savings Calculator kept.
> Locale pattern: EN at root, `/no/ /de/ /da/` prefix on every path (matches the LP).

---

## Top navigation

```
Product ▾          Solutions ▾                 Resources ▾            Pricing   Company ▾     [Book a demo] [Login]
─────────          ──────────────              ──────────            ───────   ─────────
Recipe Costing     By segment:                 Blog                            About
Supplier Price     · Independent restaurants   Customer Stories                Contact
 Tracking          · Restaurant groups         Savings Calculator
POS & Consumption  · Hotels with F&B           Comparisons (soon)
Inventory &        · Bars
 Variance          By role:
Integrations       · Owners & GMs
                   · Finance
                   · Head Chefs
                   · Operations
```

> By-role pages: Owners & GMs · Finance · Head Chefs · Operations.

---

## Full page set

| Page | URL | Nav | Type | Primary keyword |
|---|---|---|---|---|
| Home | `/` | — | Static (testimonials from CMS) | restaurant food cost software |
| **Product** | | | | |
| Recipe Costing | `/product/recipe-costing` | Product | Static | recipe costing software |
| Supplier Price Tracking (+ invoice automation) | `/product/supplier-price-tracking` | Product | Static | supplier price tracking (secondary: automated invoice processing) |
| POS & Consumption | `/product/pos-integration` | Product | Static | theoretical vs actual food cost software |
| Inventory & Variance Reporting | `/product/inventory-variance` | Product | Static | restaurant inventory management software |
| Integrations (listing) | `/integrations` | Product | **CMS** (Integrations + Categories) | restaurant software integrations |
| **Solutions — segment** | | | | |
| Independent restaurants | `/solutions/independent-restaurants` | Solutions | Static | food cost software for small restaurants |
| Restaurant groups | `/solutions/restaurant-groups` | Solutions | Static | multi location restaurant inventory software |
| Hotels with F&B | `/solutions/hotels` | Solutions | Static | hotel F&B cost control software |
| Bars | `/solutions/bars` | Solutions | Static | bar inventory software |
| **Solutions — role** | | | | |
| Owners & GMs | `/solutions/owners` | Solutions | Static | restaurant profitability software |
| Finance | `/solutions/finance` | Solutions | Static | restaurant cost control software |
| Head Chefs | `/solutions/chefs` | Solutions | Static | recipe cost management |
| Operations | `/solutions/operations` | Solutions | Static | restaurant operations cost control |
| **Resources** | | | | |
| Blog (listing) | `/blog` | Resources | **CMS** (Blog) | (hub) |
| Blog post | `/blog/{slug}` | — | **CMS** | per-article |
| Customer Stories (listing) | `/customer-stories` | Resources | **CMS** (Customer Stories) | restaurant food cost case study |
| Customer story | `/customer-stories/{slug}` | — | **CMS** | per-client |
| Savings Calculator | `/savings-calculator` | Resources | Static + JS | restaurant food cost calculator |
| Comparisons | `/compare/{competitor}` | Resources | Static (deferred) | {competitor} alternative |
| **Pricing** | `/pricing` | Pricing | Static | stockifi pricing |
| **Company** | | | | |
| About | `/about` | Company | Static | (brand) |
| Contact / Book a demo | `/contact` | Company + primary CTA target | Static (form) | book a demo |
| **Legal** | | | | |
| Privacy Policy | `/privacy-policy` | footer | Static | — |
| Terms & Conditions | `/terms-conditions` | footer | Static | — |

Comparison slots reserved (build after Simon): `/compare/apicbase` · `/compare/marketman` · `/compare/marginedge` · `/compare/wisk` · `/compare/supy` · `/compare/foodnotify`.

> **Ad landing pages (out of site structure):** `/intro` + `/intro-details` are the existing paid-ads LPs. They live in the codebase but are **NOT in the nav, sitemap-as-linked, or any internal link/button.** Paid traffic only. The site's own **"Book a demo" CTA points to `/contact`**, not `/intro`. (Consider `noindex` on the ad LPs so they don't compete in organic — SEO call for Workstream B.)

---

## CMS vs static summary
- **CMS (Strapi-driven):** Integrations listing, Blog (listing + posts), Customer Stories (listing + posts). Testimonials feed the homepage/calculator sliders (no own pages).
- **Static (Astro):** Home, 4 Product pages, all Solutions pages, Savings Calculator, Pricing, About/Contact, Comparisons, Legal, the two Intro LP pages.
- **UI strings** (nav, footer, buttons, forms) → i18n dictionary files, not Strapi.

---

## URL + redirect notes
- **Preserve all existing slugs** (blog posts, customer stories, /integrations, /savings-calculator, /contact, legal, /intro) — these already rank, so keep them and avoid redirects.
- **New pages** (Product, Solutions, Pricing, About, Comparisons) have no old equivalent — no redirect needed, just submit to sitemap.
- **Redirects only where something changes:** confirm `skigeilo` vs `skigeilo-2` (one may 301 to the other). Full old→new audit happens in Workstream B (SEO) against the 332-URL sitemap, but the 1:1 slug preservation keeps it small.
- Canonical: pick www vs non-www and trailing-slash policy once, apply site-wide.

---

## Link tree (EN; each branch repeats under /no /de /da)

```
/
├── product/
│   ├── recipe-costing
│   ├── supplier-price-tracking
│   ├── pos-integration
│   └── inventory-variance
├── integrations              (CMS)
├── solutions/
│   ├── independent-restaurants
│   ├── restaurant-groups
│   ├── hotels
│   ├── bars
│   ├── owners
│   ├── finance
│   ├── chefs
│   └── operations
├── blog/                     (CMS)
│   └── {slug}
├── customer-stories/         (CMS)
│   └── {slug}
├── savings-calculator
├── compare/                  (deferred)
│   └── {competitor}
├── pricing
├── about
├── contact                   (← "Book a demo" CTA target)
├── privacy-policy
└── terms-conditions

(out of site structure, no internal links: /intro → /intro-details = paid-ads LPs)
```

**Page count (EN):** ~21 fixed pages + 4 segment + 4 role + CMS-generated (22 blog, 10 stories, 69 integrations) + 6 deferred comparisons.

---

## Decisions — LOCKED (2026-05-30)
1. By-role pages: **Owners & GMs · Finance · Head Chefs · Operations**.
2. Careers: **dropped** (not in v1).
3. Supplier Price Tracking page slug: **`/product/supplier-price-tracking`** (primary keyword "supplier price tracking"; invoice automation secondary — more winnable than the saturated "invoice processing" term).
4. Canonical: **`www.stockifi.io`, no trailing slash**, applied site-wide (matches current domain, avoids redirect churn).

Pending sign-off: V final glance + Simon (esp. comparison-page scope).
