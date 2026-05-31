# Stockifi Website Rebuild — Master Plan

> Webflow → self-hosted **Astro + Firebase**. Content as code (markdown/data files) with Claude as the content + translation engine. **No CMS** (Strapi dropped). Full strategic rebuild, not a like-for-like port.
> Living plan. Execution tracked in Jira Epic **[DC-470](https://stockifi.atlassian.net/browse/DC-470)**. Build files in repo `WORK/stockifi-website/`.
> Owners: 🟣 V · 🔵 Claude · 🟡 Simon · 🟢 Dev

---

## Status
Planning done: current-site audit, 11-competitor teardowns + keyword research, **IA locked**, architecture confirmed. Next: per-page blueprints → wireframes → copy. Execution tracked in Jira DC-470.

## Architecture (confirmed with Sime, 2026-05-31)
- **Build:** Astro (same stack as the ads LPs).
- **Content:** markdown + data files in the repo via Astro content collections (schema enforces the fields per type). No Strapi, no CMS backend.
- **Translation:** one EN source per article, Claude generates the locale files, Astro routes by `/lang/`. Proofed by V + Simon. UI strings live in i18n files.
- **Hosting:** Firebase Hosting. Media as static assets (no R2, no database).

---

## Workstreams + estimate (your hours)
| Workstream | Jira | Owner | Status | V-hours |
|---|---|---|---|---|
| A. Strategy & IA | — | 🔵🟣 | ✅ locked | done |
| B. SEO finalize | DC-472 | 🔵🟣 | keyword research done; finalize pending | ~8 |
| C. Content & Copy | DC-471 | 🟣🔵🟡 | next | ~28–32 |
| D. Content migration (→ Astro files) | DC-473 | 🔵🟣 | to do | ~8 |
| E. Frontend build (Astro) | DC-474 | 🔵🟣 | to do | ~35–45 |
| F. Localization | DC-475 | 🔵🟣🟡 | to do | ~12 |
| G. Infrastructure (Firebase) | DC-476 | 🔵🟢🟣 | to do | ~3 |
| H. Launch & QA | DC-477 | 🟣🔵🟡 | to do | ~14 |
| Research, Planning & Admin | DC-468 | 🟣🔵 | ongoing (time-log bucket) | logged as incurred |
| **Total (deliverables)** | | | | **~108–122h** |

Microtask detail lives in each Jira item. **Calendar = your hours ÷ weekly availability:** ≈15h/wk → 7–8 weeks, ≈25h/wk → 4–5 weeks. Hours are V only (Claude/Dev excluded). The Frontend bucket is the largest and most variable.

**Jira:** the 7 deliverables (DC-471 to DC-477) are linked as *blocking* the Epic, so DC-470 shows blocked-by until each closes. DC-468 (admin) is an ongoing time-log bucket, log research/planning hours there, not on the Epic, and it does not block. A true hard-gate (Epic can't move to Done while children are open) needs a workflow validator set by a Jira admin (ScriptRunner or similar); raise with Sime if you want it enforced.

---

## Information Architecture — LOCKED
Full page set, nav, URLs, content-vs-static, and primary keyword per page: [IA v1 (locked)](https://stockifi.atlassian.net/wiki/spaces/~7120203846a7532ad44785af9a30e78554fa34/pages/231407622) · repo `audit/07-information-architecture.md`.

Summary: **Product** (4 capability pages + Integrations) · **Solutions** (4 segment + 4 role) · **Resources** (Blog, Customer Stories, Savings Calculator, Comparisons — deferred) · **Pricing** · **About** · **Contact** · legal. Existing slugs preserved for SEO. Canonical `www.stockifi.io`, no trailing slash.

## Key content decisions
- **Guarantee (€3,000 / 30-day):** risk-reversal, not a headline. Primary home = Pricing page; homepage = small trust band near the final CTA (never the hero); reinforce on `/contact`. Frame as "risk-free onboarding".
- **Ad LPs (`/intro`, `/intro-details`):** out of site structure. No nav, no internal links, paid traffic only. Site "Book a demo" CTA points to `/contact`. Consider `noindex`.
- **Comparisons:** slots reserved, built after Simon signs off on competitor claims.
- **Positioning:** lead on outcome + EU fit. Invoice automation is table stakes; differentiators are the guarantee, EU/Nordic native fit, and staying focused (not a bloated all-in-one).

---

## Open decisions
1. Who provisions Firebase + deploy pipeline (V, Dev, or Claude).
2. 5th language? (current EN/NO/DE/DA) — Sime referenced 5.
3. Comparison-page scope + Simon sign-off on claims.

## Notes
_(V — add notes, questions, decisions here)_
