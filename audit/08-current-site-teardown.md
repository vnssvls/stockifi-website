# Current Site Teardown — the "before"

> Workstream C content inventory. What the current Webflow site (`www.stockifi.io`) says and how it's structured, so the blueprints know what to carry over, rewrite, or redistribute.
> Full-page screenshot: `assets/current-site-shots/home.png`. Crawled 2026-05-30.

## Key structural finding
The current "site" is **largely a single long homepage**. Nav items (Our Process, Integrations, Customer Stories, Pricing) are `#anchors` on that one page, not standalone pages. Real standalone pages today: `/blog` (+ posts), `/customer-stories` (+ stories), `/savings-calculator`, `/contact`, legal, `/intro`. So the rebuild **explodes one dense homepage into the structured IA** (Product / Solutions / Pricing as real pages).

## Current nav
Home · Our Process (#) · Integrations (#) · Customer Stories (#) · Pricing (#) · Log In · **Get Started** CTA · lang (EN/NO/DE/DA).

## Homepage section inventory (hero → footer)
| # | Section | Current headline | New home? |
|---|---|---|---|
| 1 | Hero | "Cut Your Hospitality Costs. Without the Manual Work." | Keep + sharpen (EU angle, outcome-led; NOT guarantee) |
| 2 | Social proof | "Trusted by Hospitality Experts" (20+ logos) | Keep |
| 3 | Roles | "Built for Every Role in Hospitality" (Owners, Finance, Operations, Chefs) | → feeds **Solutions by-role** pages |
| 4 | Testimonials | quotes w/ results (2% profit, margin control) | Keep slider (CMS) |
| 5 | How It Works | "Automations designed to help your workflow" | Keep overview; detail → Product pages |
| 6 | Value prop | "Get control over costs for better profits" | Keep |
| 7 | Integrations | "Connect over 70+ Integrations" | Keep section; detail → Integrations page |
| 8 | Process | "Let Stockifi take over the work" (4-step) | Keep overview; detail → Product pages |
| 9 | Onboarding | "We have your account ready in 48 hours" | Keep |
| 10 | Case studies | 8 customer stories | → Customer Stories (CMS) |
| 11 | Support | "Hospitality runs 24/7. So does our support." | Keep |
| 12 | Testimonial carousel | 10 testimonials | Keep (CMS) |
| 13 | Final CTA | "Automate & Maximize Your Operations" + form | Keep |
| 14 | Pricing | 3 tiers (Automated / Full Control / Custom) | → **Pricing page** |
| 15 | FAQs | 8 Q&A | Keep on home + per-page |
| 16 | Footer | links, founders' emails | Rebuild |

## Current CTA + keyword themes
- **CTA:** "Get Started" (→ #contact), 7+ times. Plus Log In, Read Story, View All.
- **Keywords already used:** cut costs, COGS, margins, automations, real-time visibility, 70+ integrations, single source of truth, stock counts / wastage / variance, restaurants/bars/hotels, 48 hours.

## Self-identified gaps (vs strong B2B SaaS)
No demo video · pricing vague ("talk to our team", no brackets) · no competitor comparison · no security/compliance mention · ROI/savings tool not surfaced on home · differentiation thin · scalability/multi-location messaging vague.

> Note: the **€3,000 / 30-day guarantee** is not surfaced on the current homepage. None of the 11 rivals have a guarantee, so it is a wasted differentiator today. **Use it as risk-reversal, not a headline:** primary home = Pricing page; on the homepage a small trust band near the final CTA (never the hero); reinforce on the `/contact` (book-a-demo) page. Frame as "risk-free onboarding" confidence, not "money back" (decided with V, 2026-05-31).

## What this validates
- The current "Built for Every Role" section already uses **Owners / Finance / Operations / Chefs** — exactly the 4 by-role Solutions pages we locked. Good signal.
- The 4-step process + 70+ integrations + role framing are strong raw material; the rebuild mostly **redistributes and sharpens** existing content, then adds the missing pages (Product detail, Pricing page, Comparisons, guarantee emphasis).

## Feeds
Home blueprint (next), Product page blueprint (from How-It-Works + Process), Solutions by-role (from Roles section), Pricing page (from Pricing tiers).
