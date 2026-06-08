# Product pages — copy review notes

> Review sheet for the 12 product feature pages (DC-474). Live on the dev server: `http://localhost:4330/product/<slug>`.
> Source files: `content/products/en/<slug>.md`.
> Inspiration reference while you review: [tenzo-reference.md](tenzo-reference.md) (visual + copy audit, borrow map per page).

## How to use this
- Tick a page once you've reviewed it. Drop feedback as bullets under it.
- Mark intent so I know how to act:
  - **`VERBATIM:`** use this exact wording, no changes.
  - **`FIX:`** something's off, I should propose a rewrite.
  - **`?`** open question / flag to discuss.
- Section anchors per page: **Hero** (eyebrow / heading / subhead) · **How it works** (steps) · **Benefits** · **FAQs** · **CTA**.
- You can type here directly, or just tell me page by page and I'll fill it in and apply the revisions.
- Recurring patterns live in **Cross-page / global notes** at the bottom and apply to every page.
- Pages renumber to 12 after recipe-costing was deleted; item 1 below is kept as a record.

---

### 1. recipe-costing — DELETED (recipe-building is the keeper)
- Resolved: page removed, it was orphaned (not in nav). recipe-building covers recipes + live cost.

### 2. supplier-price-tracking — [open](http://localhost:4330/product/supplier-price-tracking)
- "Catch every supplier price rise before it eats your margin" -- terrible header. Can you rewrite cmpletey or just change this part "before it eats your margin"
- subheading is bit similar to the invoice automation page so lets reframe it - maybe benefit-focused

### 3. invoice-automation — [open](http://localhost:4330/product/invoice-automation)
- Framing the "Connect your accounting" item under how it works. Better if we imply we will be connecting to their accounting. this is not something they do just themselves.
- I dont like the CTA

### 4. central-kitchen — [open](http://localhost:4330/product/central-kitchen)
- change the page heading
- change the CTA

### 5. anomaly-detection — [open](http://localhost:4330/product/anomaly-detection)
- subheading is too long and also quite similar again to incvoice automationb - better to frame the subheading with more about the benefits they can get from this - or how they can use this to their advantage
- Query while it matters - change this
- card 2: Checked against your rates -- change this. i dont think we know what agreements or contracts they have with their suppliers? so just the word choice or sentence construction is not ideal
- card 4: Money kept on the table - description is too long.

### 6. recipe-building — [open](http://localhost:4330/product/recipe-building)
- both page heading and how it works section sound the same. both using recipe and live cost words - sounds repetitive and redundant. maybe change the how it works heading
- 4-step timeline does not sound very good as an "explanation" of how it works.

### 7. stock-counting — [open](http://localhost:4330/product/stock-counting)
- very bad page heading
- subheading is nice
- "Set up your count" -
- "Your count flow follows how your shelves are organised, so counting moves as you do instead of jumping around."
- "Close the count" -> "Verify and Close" - on description for this explain that there is one important step before closing which is verifying the count. The system recognizes when something is oddly counted like too little or too much of an item or recipe. It's smart enough to alert you when something is off and could have been a human error.
- Card 1: "Counts that take less time" -> Count 10x faster
- Card 2: Works without signal -- this is a good one, but rather say Works offline. keeps it short.

### 8. inventory-transfers — [open](http://localhost:4330/product/inventory-transfers)
- bad page heading - both header and subheading. pls rewrite
- timeline section first step: Log the transfer
When stock moves from one site to another, record it in Stockifi against the period's count.
-- not good framing to say "log the transfer" or using the word "log" - it should be like good practice for them to use the app to do transfers between sites. you get what i mean? like it shuold not be treated as a task of logging transfers but the initial thought when an item needs to be transferred or requested is to do it from the app on top of internal comms like a proper documentation of course. i think just the term log implies like its forced and manually "recording" something
- change the CTA

### 9. wastage-tracking — [open](http://localhost:4330/product/wastage-tracking)
- page heading - using "log" is not my preference (see global). wastage can also mean "cutaway" which is recognized wastage. we are not mentioning this anywhere on the page. So it is not merely just recording wastages like spoilage or spilled items - it is also wastage value thats accounted for. for example with whole fish or a big piece of meat it could be that only 85% of it is actually used in the recipe and the rest is "cutaway" or "prep waste" - if you get what i mean.
- so update the whole pages copy based on this

### 10. performance-dashboards — [open](http://localhost:4330/product/performance-dashboards)
-

### 11. api — [open](http://localhost:4330/product/api)
-

### 12. variance-analysis — [open](http://localhost:4330/product/variance-analysis)
-

### 13. profitability — [open](http://localhost:4330/product/profitability)
-

---

## Cross-page / global notes
> Patterns that apply to all pages (a recurring phrase to kill, a tone fix, a term to standardize).

- **Hero button:** use the secondary button type on all product page headings.
- **Integration block heading:** the first line is too plain and direct. Make it more creative / action-based, and use "with" not "From" (so on hover it reads like "Works with [tool]"). Applies to every page that shows the integrations block.
- **Integration block contents:** on accounting-fed pages, show only accounting-tool logos in the icon blocks, not POS. (Originally flagged on invoice-automation; applies to supplier-price-tracking, anomaly-detection, recipe-building too.)
- **Feature cards:** titles no more than 3 words; descriptions no more than 2 lines on desktop; do not repeat the how-it-works / steps copy. Cards should add something, not echo. (Flagged on stock-counting + inventory-transfers, seen on others.)
- **Subheads:** every page's subhead must stand on its own. Several currently echo the invoice-automation subhead, reframe them to be distinct and benefit-led.
- **Avoid "log" / "record" framing** for in-app actions. Using the app should read as the natural way to do the work (e.g. doing a transfer, capturing prep waste), not a chore of recording something after the fact.
- **Supplier rates accuracy:** do not imply we know their supplier agreements or contracts ("agreed rates"). Frame anomaly/overcharge checks against the ingredient's own price history, not contracts.
- **CTAs:** the per-page CTA heading needs a fresh pass on every product page, the current ones read generic (flagged on invoice-automation, central-kitchen, inventory-transfers).
