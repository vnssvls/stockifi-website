# Product page FAQs — review notes

> Review sheet for the 49 FAQs embedded in the 12 product pages (DC-474). Generated 2026-06-09.
> Companion viewer: [product-faqs-review.html](product-faqs-review.html) · source files: `content/products/en/<slug>.md`.

## How to use this
- Drop your mark on the line under each FAQ. Leave it blank = keep as-is.
  - **`VERBATIM:`** use this exact wording, no changes.
  - **`FIX:`** something's off — I'll propose a rewrite.
  - **`CUT:`** drop this FAQ.
  - **`?`** open question / flag to discuss.
- Tell me 'done' and I'll go through every mark page by page and apply.

---

# Procurement — Invoices & Suppliers

## invoice-automation  ·  _4 FAQs_
<sub>section heading: “Questions about invoice automation”</sub>

**Q1. Do I need to check the invoices Stockifi reads?**
> Stockifi reads each line for you and flags anything that looks off, like an overcharge or a double-bill, so you review the exceptions rather than every invoice.

- _mark:_ 

**Q2. What happens if an invoice never reaches my accounting?**
> Stockifi reads what lands in your accounting, so an invoice that never gets there will not be captured. Routing supplier invoices through your accounting keeps the picture complete.

- _mark:_ 

**Q3. Which accounting systems does this work with?**
> Stockifi connects with the accounting systems you already use. Tell us what you run and we will confirm it on a quick call.

- _mark:_ 

**Q4. Does it work alongside my current setup?**
> Yes. Stockifi reads the data and leaves your accounting software exactly as it is.

- _mark:_ 


## supplier-price-tracking  ·  _4 FAQs_
<sub>section heading: “Questions about supplier price tracking”</sub>

**Q1. How does Stockifi tell a normal price rise from an overcharge?**
> It checks each charge against the ingredient's own price history. A rise that fits the trend passes without fuss. One that jumps above it is flagged for you to query.

- _mark:_ 

**Q2. How far back does the price history go?**
> The history builds from the first invoice Stockifi reads and grows with every invoice after, so the record gets richer the longer you run it.

- _mark:_ 

**Q3. Does this work across several locations?**
> Yes. For a group, every site's invoices feed one price history, so a rise from a shared supplier is caught once and re-costs every location.

- _mark:_ 

**Q4. Which accounting systems does this work with?**
> Stockifi connects with the accounting systems you already use. Tell us what you run and we will confirm it on a quick call.

- _mark:_ 


## anomaly-detection  ·  _4 FAQs_
<sub>section heading: “Questions about anomaly detection”</sub>

**Q1. Will Stockifi flag a normal price rise as an error?**
> No. A rise that fits an ingredient's usual trend is treated as a price change. Stockifi flags the charges that jump above what its own history would expect.

- _mark:_ 

**Q2. What happens after an anomaly is flagged?**
> The invoice is surfaced for you to review, with the charge and what it was checked against, so you can query the supplier while it is still recent.

- _mark:_ 

**Q3. How is this different from supplier price tracking?**
> Price tracking follows how prices move over time. Anomaly detection flags the individual invoices that look wrong, so you can query them.

- _mark:_ 

**Q4. Does Stockifi need price history before it can catch errors?**
> It starts checking against each ingredient's prices as invoices come in, and its flags get sharper as that history builds.

- _mark:_ 


## central-kitchen  ·  _4 FAQs_
<sub>section heading: “Questions about central kitchen”</sub>

**Q1. What is a central kitchen in Stockifi?**
> It is your own production hub that supplies your outlets. Stockifi treats it as an internal supplier, so outlets order from it and its real costs flow into their food cost.

- _mark:_ 

**Q2. How does Stockifi cost what the central kitchen makes?**
> The central kitchen buys its ingredients from outside suppliers, Stockifi reads those invoices, and the cost of ingredients plus prep becomes the price each outlet pays.

- _mark:_ 

**Q3. Does this handle ordering from external suppliers?**
> No. Stockifi covers internal supply from your own central kitchen to your outlets. It does not place orders with outside suppliers.

- _mark:_ 

**Q4. Can a central-kitchen item be built from sub-recipes?**
> Yes. A central-kitchen item can be built from sub-recipes and prebatches, so a prep that goes into another prep still carries its real cost.

- _mark:_ 


---

# Inventory management

## recipe-building  ·  _4 FAQs_
<sub>section heading: “Questions about recipes”</sub>

**Q1. Do you set up our recipes for us?**
> Yes. You share your recipes and we build them in, with ingredient costs tracked from the start. The manual setup is handled for you.

- _mark:_ 

**Q2. How are ingredient costs attached to a recipe?**
> Each ingredient in a recipe links to its real purchase price from your invoices, so a recipe's cost is the sum of what those ingredients currently cost you.

- _mark:_ 

**Q3. Do recipes account for prep loss and yield?**
> Yes. You set how much of an ingredient a recipe actually uses, so the trim on something like a whole fish or a primal cut is costed into every portion. That prep loss, or cutaway, lands in your dish cost rather than hiding in variance.

- _mark:_ 

**Q4. Can I use one recipe library across all my locations?**
> Yes. Your recipes live in one library shared across locations, so a dish is built and costed the same way everywhere, and an update reaches every site.

- _mark:_ 


## stock-counting  ·  _4 FAQs_
<sub>section heading: “Questions about stock counting”</sub>

**Q1. Can I count stock on my own schedule?**
> Yes. Stockifi uses periodic stock counts with variance analysis in the app. You count when it suits you, then see actual usage against what your recipes predicted.

- _mark:_ 

**Q2. How often should I count stock?**
> Most operators count at period close, monthly for many. Stockifi fits whatever periodic cycle you run and shows variance for that period.

- _mark:_ 

**Q3. Do I need a barcode scanner or special hardware?**
> No. Counting runs on the phone or tablet your team already carries, with nothing extra to buy.

- _mark:_ 

**Q4. Can my team split a count between them?**
> Yes. The count can be split across your team and their devices, area by area, and Stockifi brings it together into one count for the period.

- _mark:_ 


## inventory-transfers  ·  _4 FAQs_
<sub>section heading: “Questions about inventory transfers”</sub>

**Q1. Are transfers tracked in real time?**
> Transfers are accounted for within the count period rather than tracked live, in line with how Stockifi handles inventory: periodic counts with variance analysis.

- _mark:_ 

**Q2. What value is a transfer made at?**
> At the real cost of the stock that moved, so the sending site's cost goes down and the receiving site's goes up by the same amount.

- _mark:_ 

**Q3. What happens if a transfer is missed?**
> The stock shows as used at the site it left and as surplus at the one it reached, so both sites' variance is off until you make the move in Stockifi.

- _mark:_ 

**Q4. Do transfers need a POS or accounting connection?**
> No. Transfers happen in the app against your count, so they work wherever you run stock counts, with no extra integration.

- _mark:_ 


## wastage-tracking  ·  _5 FAQs_
<sub>section heading: “Questions about wastage tracking”</sub>

**Q1. What types of waste can I capture?**
> Spoilage, cooking mistakes, and over-production. Each entry is tagged by ingredient and reason, so the cost lands in the right place.

- _mark:_ 

**Q2. What about prep trim and cutaway, like the off-cuts from a whole fish?**
> That is handled by recipe yield rather than waste capture. You set how much of an ingredient a recipe actually uses, and Stockifi costs the trim into every portion for you. Wastage capture is for losses outside the recipe, like spoilage or a dropped tray.

- _mark:_ 

**Q3. How is wastage tracking different from variance analysis?**
> Variance is the whole gap between expected and actual usage. Wastage is one cause of it. Capturing waste moves that loss out of the unexplained gap and into a number you can act on.

- _mark:_ 

**Q4. Does capturing waste slow the kitchen down?**
> No. An entry takes seconds on the app, so the line keeps moving and the loss still gets captured.

- _mark:_ 

**Q5. Do I have to capture every item for it to be worth it?**
> No. Even capturing your highest-cost items, like proteins, surfaces where most of the money goes, and you can widen it from there.

- _mark:_ 


---

# Business intelligence

## performance-dashboards  ·  _4 FAQs_
<sub>section heading: “Questions about dashboards and reporting”</sub>

**Q1. What is COGS development?**
> COGS development is how your cost of goods sold moves over time. Stockifi tracks it alongside food cost and margin, so you see the trend rather than a single month.

- _mark:_ 

**Q2. How current are the numbers? Is this real time?**
> Your invoices and sales feed in continuously, so cost and margin reflect your latest data. Stock figures follow your periodic counts rather than live tracking, in line with how Stockifi handles inventory.

- _mark:_ 

**Q3. Can a head office see every location in one place?**
> Yes. Groups get a consolidated view across locations, and you can drill into any single site or dish.

- _mark:_ 

**Q4. What if I haven't connected all my data yet?**
> You still get value from what is connected. The picture sharpens as your POS and accounting come online, and Stockifi works with whatever you have running.

- _mark:_ 


## api  ·  _4 FAQs_
<sub>section heading: “Questions about the API”</sub>

**Q1. Do I need a developer to use the API?**
> Yes. It is built for a team that works with structured data, your own developers or BI analysts. If you would rather not build anything, Stockifi's own dashboards cover the reporting most operators need.

- _mark:_ 

**Q2. Can I push data into Stockifi through the API, or only pull it out?**
> The API is for pulling your Stockifi data out into your own tools. Bringing data in, like sales and invoices, is handled by Stockifi's POS and accounting integrations.

- _mark:_ 

**Q3. How current is the data the API returns?**
> As current as Stockifi itself. The numbers reflect your latest invoices, sales, and counts, whether you pull in real time or on a schedule.

- _mark:_ 

**Q4. Which plan includes the API?**
> API access sits with our higher-tier and Custom plans. We'll confirm the fit for your setup on a call.

- _mark:_ 


## variance-analysis  ·  _4 FAQs_
<sub>section heading: “Questions about variance analysis”</sub>

**Q1. Why is there always some variance?**
> Some gap is normal. Portioning, trim, and small losses happen in any kitchen. Stockifi shows you the size of the gap and what is driving it, so you act on the part that is costing you rather than chase a perfect number.

- _mark:_ 

**Q2. What do I need in place for variance to work?**
> Four things Stockifi already brings together: your recipes, your POS sales, your stock counts, and your supplier invoices. With those connected, the gap is worked out for every item.

- _mark:_ 

**Q3. How accurate is the variance?**
> It is as accurate as your recipes, counts, and invoices, all of which Stockifi keeps current, so the number reflects real usage rather than a transcription error.

- _mark:_ 

**Q4. How often do I see variance?**
> It is worked out for each count period, so you see the gap every time you close a count rather than waiting for the year-end picture.

- _mark:_ 


## profitability  ·  _4 FAQs_
<sub>section heading: “Questions about profitability”</sub>

**Q1. Does this include labour and overheads?**
> It focuses on food cost: the ingredient margin and contribution of each dish. Labour, rent, and overheads sit outside it, so profitability shows where your menu and food cost stand, rather than a full profit and loss.

- _mark:_ 

**Q2. What is contribution margin?**
> Contribution margin is what a dish brings in after its own ingredient cost. Stockifi shows it per dish, so you can see which items carry the kitchen and which only look profitable.

- _mark:_ 

**Q3. Does profitability need a POS connection?**
> Yes. Profit needs your sales, so a POS connection lets Stockifi set what sold, and at what price, against each dish's live cost.

- _mark:_ 

**Q4. How often is profit updated?**
> Profit moves as your costs and sales update, so a dish that slips into the red when an ingredient price climbs shows up in the current period.

- _mark:_ 

