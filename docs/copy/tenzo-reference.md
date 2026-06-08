# Tenzo reference — visual + copy audit (DC-474)

> Inspiration reference for our product + solutions pages. **Tenzo is not a direct competitor** (they are a BI / analytics + AI-forecasting layer; we are food-cost and margin control with periodic counting and variance). Borrow how they present and structure, never the copy, never the positioning. Pages audited Jun 8 2026.
> Screenshots: `tenzo-screens/` (full-page captures). Pages: [product-analyse](https://www.gotenzo.com/product-analyse/), [solutions-hotels](https://www.gotenzo.com/solutions-hotels/), [solutions-ceo-founder](https://www.gotenzo.com/solutions-ceo-founder/), [solutions-finance](https://www.gotenzo.com/solutions-finance/), [product-automate](https://www.gotenzo.com/product-automate/).

---

## TL;DR — what to take, what to skip

**Take (structure + presentation):**
1. **Icon-benefit row under every feature block** — each feature section ends with 3 to 5 mini items (icon + 2-word label + one-line). This is their signature and it maps straight to our `benefits` array.
2. **"Use cases for [role]" card grid** — 6 cards, tabbed Single-site vs Enterprise. Clean way to show breadth on a solutions page.
3. **Product pages show real product UI; solutions pages show lifestyle photos + outcomes.** Clear, deliberate split. We should do the same: real Stockifi screens on the 13 product pages, hospitality photography on the 8 solutions pages.
4. **Per-page FAQ accordion** — role/segment-specific questions. We already have the slot.
5. **Testimonial with a hard stat baked into the quote + grayscale logo wall** right after.
6. **A "Do more with [X]" 6-card grid** linking related features near the page foot. Good for internal linking and SEO.
7. **One consistent final CTA band** repeated site-wide.

**Skip (conflicts with our rules or our brand):**
- **Negative-framing question headers** — two instances only (not a pattern): "Fed up of throwing away money?" (finance) and "Not sure what's coming down the road?" (ceo-founder). Both are mid-page section headers under a positive eyebrow. We do not seed doubt in headers, so if we borrow their question-header style, keep it positive or neutral (their other question-headers already are). The pain can live in the body.
- **Printed pricing in the FAQ** — Tenzo prints "from £55", "avg £150-200/location". We never print our range on the site; the pricing FAQ anchors to a call.
- **Their look** — warm orange/cream, organic blob masks, heavy lifestyle photography. Ours is dark, moody, purple. Borrow the layout skeleton, not the palette.
- **Capabilities we do not have** — demand forecasting, AI prediction, labour scheduling, real-time. Do not borrow framing built on those. We are periodic counting + variance, not real-time BI.

---

## The Tenzo page template (consistent across all their pages)

Top to bottom, every solutions page runs the same skeleton:

1. **Hero** — small eyebrow (role/segment) + benefit-led headline (often vivid or a question) + one-sentence body + single "Request a demo" CTA + organic-masked photo on the right.
2. **2 to 3 feature blocks** — each is: short heading + subhead + body + "Learn more" link, then a **row of 3 to 5 icon micro-benefits** beneath it. Visual alternates side to side.
3. **FAQ accordion** — segment-specific, full width.
4. **"Use cases for [role]"** — 6-card grid, tabbed Single-site / Enterprise.
5. **Testimonials** — 5 quotes (the same set reused everywhere), each with an organic-masked customer photo and a "Read story" link.
6. **Logo wall** — 5 grayscale customer logos.
7. **Insights** — 4 blog teaser cards.
8. **Final CTA band** — "Supercharge your performance" + demo button.

Product pages (product-analyse, product-automate) drop the use-case grid and instead **alternate text with real product UI screenshots** (dashboards, card creator, mobile/email mockups).

---

## Per-page notes

### product-analyse — `tenzo-screens/1-product-analyse.png`
Maps to our **performance-dashboards, variance-analysis, profitability** (our BI trio).
- Hero pairs the headline with a phone mockup showing a live dashboard. Alternating rows below each show a real product screenshot (charts, custom report builder, insights view).
- Teal color-block break for an ebook download, then a 2-card "Dedicated solutions for your business" split (single site / enterprise).
- **Borrow:** the alternating text/real-UI-screenshot rhythm. Our dashboard and variance pages should show the actual Stockifi report, not a stock photo.

### solutions-hotels — `tenzo-screens/2-solutions-hotels.png`
Direct analog to our **`hotels`** segment page ("Food cost control for full hotel F&B").
- Hero photo of hotel dining. Three stacked feature blocks ("Everything connected", "Supercharging performance", "Complete picture"), each with paired lifestyle photos and a 3-icon benefit row.
- "Do more with Tenzo" 6-card cross-link grid.
- **Borrow:** the 3-icon-row-per-feature pattern, and the cross-link card grid. **Note:** they open with a "data scattered and siloed" problem narrative; ours should frame it forward (hotel F&B margin you can finally see) rather than dwelling on the mess.

### solutions-ceo-founder — `tenzo-screens/3-solutions-ceo-founder.png`
Maps to our **`management`** team page ("The numbers owners and GMs need").
- "Made by restaurateurs, for restaurateurs" hero. Two feature blocks with 4-5 icon rows, then a clean FAQ accordion, then a tabbed 6-card "Use cases for Founders & CEOs" grid with photos.
- **Borrow:** the tabbed use-case grid and the role-specific FAQ. **Skip:** "Not sure what's coming down the road?" negative header; the AI-forecasting block (not us).

### solutions-finance — `tenzo-screens/4-solutions-finance.png`
Direct analog to our **`finance`** team page ("Food cost finance can rely on").
- Hero headline "See all of yesterday's reports with today's cup of coffee" — vivid, time-of-day benefit framing, worth studying as a style (positive, concrete).
- Feature blocks + FAQ (incl. an honest "can Tenzo be my reconciliation tool? No..." answer that builds trust by being upfront on limits) + 6-card use-case grid.
- **Borrow:** the upfront-about-limits FAQ tone (we can do this honestly without printing price). The vivid concrete hero style. **Skip:** the printed price answer.

### product-automate — (no screenshot; [link](https://www.gotenzo.com/product-automate/))
Maps to our **invoice-automation** and **performance-dashboards**.
- Hero with mobile + desktop email mockups ("Open your phone and the numbers are already there"). Three "What / How / Why" feature blocks. Testimonials, single/enterprise cards, CTA.
- **Borrow:** the "What does it do / How does it work / Why it matters" three-block rhythm for a single capability page. Clean and skimmable.

---

## Borrow map — our page → what to adapt from Tenzo

| Our page | Closest Tenzo analog | Adapt this | Avoid |
|---|---|---|---|
| performance-dashboards, variance-analysis, profitability | product-analyse | Real-UI-screenshot alternating rows; stat-in-testimonial | Their orange look; BI positioning |
| invoice-automation | product-automate | What/How/Why three-block; "numbers already there" framing | "from £55" pricing |
| recipe-costing, recipe-building, supplier-price-tracking | product-analyse feature blocks | Icon-benefit row under each block | Forecasting/AI framing |
| `hotels` (segment) | solutions-hotels | 3-icon feature rows; cross-link card grid | "scattered/siloed" problem-dwelling open |
| `management` (team) | solutions-ceo-founder | Tabbed use-case grid; role FAQ | Negative headers; AI block |
| `finance` (team) | solutions-finance | Upfront-about-limits FAQ tone; vivid concrete hero | Printed price answer |
| `operations`, `kitchen` (team) | solutions general-manager (role) | Role-specific use-case grid | — |
| `bars`, `independent-restaurants`, `restaurant-groups` (segment) | no exact analog | Their template still applies | They segment by size, we segment by venue type — keep ours |

---

## What else on their site worth a look (their inventory, from nav)

- **Product capabilities:** AI, Aggregate, Automate (seen), Analyse (seen), Predict, Act. The capability-page pattern (one job per page) mirrors our 13 product pages.
- **Use-case pages:** Increase sales, Benchmark Sites, Forecast Demand, Optimise Labour, Automate Reporting. Idea source for outcome-led framing, though several are outside our product (labour, forecasting).
- **Solutions by role:** CEO/Founder, General Manager, Finance, IT, Consultants, Hotels. Their role split is close to our team-page split; their only segment-by-venue page is Hotels (the rest is by company size).
- **Resources:** Insights, Case Studies, API docs. Their case-study + testimonial reuse is heavy and consistent; worth mirroring with our real stories (Schnitzelei, SkiGeilo, Koie).

> Note on proof: Tenzo bakes hard numbers into quotes (3% prime cost, £100k/yr, 75% report time). Ours map to 500+ restaurants and the 2-3% COGS improvement, plus the €3,000-in-30-days guarantee. Use our real numbers, never theirs.
