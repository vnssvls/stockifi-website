# Information Architecture — v1 (for lock)

> Workstream A. The full page set, nav, URLs, CMS-vs-static, redirects, and primary keyword per page.
> Decisions applied: Solutions = segment + by-role · 4 capability Product pages · comparisons deferred (slots reserved) · Pricing + About + Resources hub included · Savings Calculator kept.
> Locale pattern: EN at root, `/no/ /de/ /da/` prefix on every path (matches the LP).

---

## Top navigation

```
Product ▾        Solutions ▾                 Resources ▾            Pricing   Company ▾     [Book a demo] [Login]
─────────        ──────────────              ──────────            ───────   ─────────
Recipe Costing   By segment:                 Blog                            About
Invoice &        · Independent restaurants   Customer Stories                Contact
 Supplier Price  · Restaurant groups         Savings Calculator              Careers
POS & Consumption· Hotels with F&B           Comparisons (soon)
Inventory &      · Bars
 Variance        By role:
Integrations     · Owners & GMs
                 · Finance
                 · Head Chefs
```

> By-role pages proposed: Owners & GMs · Finance · Head Chefs (the food-cost decision-makers). Adjust if you want different roles.

---

## Full page set

| Page | URL | Nav | Type | Primary keyword |
|---|---|---|---|---|
| Home | `/` | — | Static (testimonials from CMS) | restaurant food cost software |
| **Product** | | | | |
| Recipe Costing | `/product/recipe-costing` | Product | Static | recipe costing software |
| Invoice & Supplier Price Tracking | `/product/invoice-processing` | Product | Static | automated invoice processing for restaurants |
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
| Contact | `/contact` | Company | Static | (brand) |
| Careers | `/careers` | Company | Static (optional) | (brand) |
| **Conversion** | | | | |
| Demo step 1 | `/intro` | CTA | Static (existing LP) | book a demo |
| Demo step 2 | `/intro-details` | — | Static (existing LP) | — |
| **Legal** | | | | |
| Privacy Policy | `/privacy-policy` | footer | Static | — |
| Terms & Conditions | `/terms-conditions` | footer | Static | — |

Comparison slots reserved (build after Simon): `/compare/apicbase` · `/compare/marketman` · `/compare/marginedge` · `/compare/wisk` · `/compare/supy` · `/compare/foodnotify`.

---

## CMS vs static summary
- **CMS (Strapi-driven):** Integrations listing, Blog (listing + posts), Customer Stories (listing + posts). Testimonials feed the homepage/calculator sliders (no own pages).
- **Static (Astro):** Home, 4 Product pages, all Solutions pages, Savings Calculator, Pricing, About/Contact/Careers, Comparisons, Legal, the two Intro LP pages.
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
│   ├── invoice-processing
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
│   └── chefs
├── blog/                     (CMS)
│   └── {slug}
├── customer-stories/         (CMS)
│   └── {slug}
├── savings-calculator
├── compare/                  (deferred)
│   └── {competitor}
├── pricing
├── about
├── contact
├── careers
├── intro → intro-details
├── privacy-policy
└── terms-conditions
```

**Page count (EN):** ~22 fixed pages + 4 segment + 3 role + CMS-generated (22 blog, 10 stories, 69 integrations) + 6 deferred comparisons.

---

## Still open (minor)
1. By-role set: Owners & GMs / Finance / Head Chefs — confirm or swap.
2. Careers page in v1 or later?
3. Product slug: `/product/invoice-processing` vs `/product/supplier-price-tracking` (keyword choice).
4. Canonical www vs non-www + trailing slash.
