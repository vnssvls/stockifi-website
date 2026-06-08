# Product pages — copy review notes

> Review sheet for the 12 product feature pages (DC-474). Live on the dev server: `http://localhost:4330/product/<slug>`.
> Source files: `content/products/en/<slug>.md`.
> Inspiration reference: [tenzo-reference.md](tenzo-reference.md) (visual + copy audit, borrow map per page).

## How to use this
- Review a page on :4330, then drop feedback as bullets under it here (or just tell me page by page and I'll fill it in and apply).
- Mark intent so I know how to act:
  - **`VERBATIM:`** use this exact wording, no changes.
  - **`FIX:`** something's off, propose a rewrite.
  - **`?`** open question / flag to discuss.
- Section anchors per page: **Hero** (heading / subhead) · **Showcase** (how-it-works claim + body + 2 points) · **Cards** (4 facets) · **FAQs** · **CTA**.
- Recurring patterns live in **Cross-page / global notes** at the bottom and apply to every page.

---

## Status — all 12 pages

Recipe-costing was deleted (recipe-building is the keeper), so the set is 12.

| Page | Category | Structure | Your review |
|---|---|---|---|
| invoice-automation | Procurement | ✅ showcase | ✅ applied |
| supplier-price-tracking | Procurement | ✅ showcase | ✅ applied |
| anomaly-detection | Procurement | ✅ showcase | ✅ applied |
| central-kitchen | Procurement | ✅ showcase | ✅ applied |
| recipe-building | Inventory mgmt | ✅ showcase | ⬜ **needs review (just converted)** |
| stock-counting | Inventory mgmt | ✅ showcase | ⬜ **needs review (just converted)** |
| inventory-transfers | Inventory mgmt | ✅ showcase | ⬜ **needs review (just converted)** |
| wastage-tracking | Inventory mgmt | ✅ showcase | ✅ approved · ⬜ re-check cutaway fix |
| performance-dashboards | Business intelligence | ✅ showcase | ⬜ **needs review (new)** |
| api | Business intelligence | ✅ showcase | ⬜ **needs review (new)** |
| variance-analysis | Business intelligence | ✅ showcase | ⬜ **needs review (new)** |
| profitability | Business intelligence | ✅ showcase | ⬜ **needs review (new)** |

**The rewrite checklist every page goes through (so the solutions pages don't miss a step):**
1. Hero heading — single promise; plain, no comma-tag fragment, no negative framing.
2. Hero subhead — two-sentence standard: (1) what it does, name the real things; (2) short payoff. Must not echo another page.
3. Showcase — `howItWorks` block (not the old timeline): one-claim heading (not a tagline, not from-X-to-Y) · concept body · max 2 mechanism points · imageSide + imageAlt.
4. 4 cards — facets of the claim: distinct angles, titles ≤3 words / one line, bodies ≤2 lines, none restating the heading or repeating the points or FAQs.
5. Integrations block — on only if the integration is the story (accounting-fed → accounting logos, "Works with"); else `showIntegrations: false`.
6. FAQs — objections + edge cases only.
7. CTA — fresh, page-specific heading.
8. Gate every line — em dash, asyndeton, [Not X but Y]/cleft, from-X-to-Y, triple phrasing, tagline headers, vague modifiers, log/record framing, corporate words, negative headers.
9. Verify on :4330 — 200, showcase renders, integrations correct, banned-word grep clean.

---

## ACTIVE REVIEW

### Business intelligence (reworked for flow — review these)

Integrations block dropped on all four (your call). Reworked so each section teaches something new and concrete, Aggregate-style: hero = what it is, showcase = the "aha" that explains the concept, cards = what you can do, FAQ = edge cases. No section restates another.

#### 10. performance-dashboards — [open](http://localhost:4330/product/performance-dashboards) ✅ applied your direction
- Hero (your words): "Bring food cost and inventory management into one place" / "See and understand your numbers like never before. Stockifi turns your invoices, sales, and inventory into one clear view of your margins."
- Showcase "Where the numbers come from": explains how invoices + POS + recipes + counts become cost, margin, and variance on one screen.
- Cards: All the reports · Drill and compare · Up to date · Built in.
- CTA: "See your numbers without the spreadsheet."
-

#### 11. api — [open](http://localhost:4330/product/api)
- Hero: "Pull your Stockifi data into your own tools" / sub: your team works with Stockifi's numbers in the BI tools and warehouse it already runs.
- Showcase "What you can pull, and how": names the datasets, how you connect, real-time or scheduled.
- Cards: In your tools · Numbers that agree · No manual exports · For data teams.
- CTA: "Put your Stockifi data to work."
-

#### 12. variance-analysis — [open](http://localhost:4330/product/variance-analysis)
- Hero: "See exactly where your margin leaks" / sub: finds the gap between the margin you should be making and the one you are, and pins each leak to a dish, ingredient, and cause.
- Showcase "How the gap is worked out": defines theoretical (recipes + sales) against actual (counts + invoices) and where the variance comes from.
- Cards = the four leak causes: Over-portioning · Undefined sales · Costed wastage · Price rises.
- FAQ swapped in: "Why is there always some variance?" (sets expectations, no overlap with the showcase).
- CTA: "Close the gap on your margin."
-

#### 13. profitability — [open](http://localhost:4330/product/profitability)
- Hero: "See the profit in every dish" / sub: the margin on your menu is made one dish at a time; shows what each plate really earns.
- Showcase "How each dish's profit is worked out": profit is what it sold for less what it cost; cost side from invoices, sales side from POS.
- Cards: Winners and losers · Margin slip caught · Site by site · Calls on facts.
- FAQ swapped in: "Does this include labour and overheads?" (upfront about limits).
- CTA: "See which dishes carry your margin."
-

### Inventory management (just converted to showcase — review these)

These got a copy pass earlier (your notes 6–8 below, applied) but were still on the old 4-step timeline. Now converted to the showcase baseline + two-sentence subhead.

#### 6. recipe-building — [open](http://localhost:4330/product/recipe-building)
- Resolved your note: heading and how-it-works no longer echo each other; the 4-step timeline is gone.
- Hero: "Build recipes with live costs attached" / new two-sentence sub.
- Showcase claim: "A dish costs exactly what its ingredients cost you." Points: Priced from invoices · Sub-recipes roll up.
- Cards: One recipe library · Full cost breakdown · No cost drift · We build them in.
- New FAQ added for prep loss / yield (this is where **cutaway** now lives, see wastage note). Integrations block kept (accounting, "Works with").
-

#### 7. stock-counting — [open](http://localhost:4330/product/stock-counting)
- Resolved your notes: kept "Count 10x faster" and "Works offline"; the **verify-before-close** step is now the showcase claim instead of being buried as step 3.
- Hero kept: "Counts that match the shelf" / sub split into two sentences.
- Showcase claim: "A count won't lock until it checks out." Points: In shelf order · Verified, then locked.
- Cards: Count 10x faster · Works offline · Variance you trust · One source.
-

#### 8. inventory-transfers — [open](http://localhost:4330/product/inventory-transfers)
- Resolved your notes: dropped "log the transfer" framing (making the move in the app reads as how the kitchen runs, not a chore); new heading + subhead; new CTA.
- Hero: "Keep both sites accurate when stock moves" / new two-sentence sub.
- Showcase claim: "The transfer moves stock from one count to the other." Points: Made in the app · Both counts adjust.
- Cards: No phantom variance · See every move · Moved at cost · Built for groups.
- CTA: "Keep every location's count accurate."
-

#### 9. wastage-tracking — [open](http://localhost:4330/product/wastage-tracking)
- Approved baseline reference (ec6075d). **Cutaway corrected:** you confirmed cutaway = recipe-yield (auto), not captured, so cutaway moved out of the capture story.
- Changes to re-check: meta + showcase example (dropped the "trim off a cut of beef" line), showcase heading ("spoilage and trim" → "spoilage and mistakes"), card "Cutaway included" → "Every kind of loss", new FAQ pointing prep trim/cutaway to recipe yield.
-

---

## APPLIED / RESOLVED

### Procurement (Invoices & Suppliers) — your notes applied, on baseline

- **2. supplier-price-tracking** — header rewritten (dropped "before it eats your margin"); subhead reframed benefit-led, distinct from invoice-automation.
- **3. invoice-automation** — "Connect your accounting" reframed so we imply we connect it, not them; CTA replaced.
- **4. central-kitchen** — page heading + CTA rewritten.
- **5. anomaly-detection** — subhead reframed benefit-led; "Query while it matters" changed; card 2 "Checked against your rates" reworked to price-history framing (no implied supplier agreements); card 4 trimmed.
- **1. recipe-costing** — DELETED (orphaned; recipe-building is the keeper).

### Baseline locked

- Reference page = wastage-tracking (your approval, ec6075d). Section jobs: hero = promise, showcase = one claim + concept, 2 points = mechanism, 4 cards = facets of the claim (Tenzo content model), no overlap, every line gate-checked. Two-sentence subhead standard adopted for the rest. Saved as memory `project_product_page_copy_baseline`.

---

## Cross-page / global notes
> Patterns that apply to all pages.

- **Hero button:** secondary button type on all product page headings.
- **Integration block heading:** action-based, use "with" not "From" (hover reads "Works with [tool]"). On accounting-fed pages show only accounting-tool logos, not POS. BI pages drop the block entirely.
- **Feature cards:** titles ≤3 words; descriptions ≤2 lines; never repeat the showcase / mechanism copy. Cards add a facet, they don't echo.
- **Subheads:** two-sentence standard; each page's subhead stands on its own (no echoing invoice-automation).
- **Avoid "log" / "record" framing** for in-app actions. Using the app reads as the natural way to do the work (doing a transfer, capturing prep waste), not a chore after the fact.
- **Supplier rates accuracy:** never imply we know supplier agreements or contracts. Frame overcharge / anomaly checks against the ingredient's own price history.
- **Cutaway / prep yield = recipe yield (auto):** it is costed into every portion via the recipe's yield factor, not captured as wastage. Lives on recipe-building, not wastage-tracking.
- **CTAs:** per-page CTA heading is page-specific, never generic.
- **"quietly" and other vague modifiers** are banned everywhere, including meta descriptions.
