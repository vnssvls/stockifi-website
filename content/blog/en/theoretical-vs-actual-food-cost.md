---
title: "Theoretical vs Actual Food Cost: Where Your Margin Lives"
slug: "theoretical-vs-actual-food-cost"
metaTitle: "Theoretical vs Actual Food Cost Explained"
metaDescription: "The gap between theoretical and actual food cost is where restaurant margin disappears. Here is what causes it and how to track it before damage compounds."
excerpt: "Theoretical food cost says what should have been used. Actual food cost says what was. The gap between them is where most restaurant margin quietly leaks away."
postSummary: ""
readTime: "6 min read"
category: "Operations"
publishDate: "Wed May 20 2026 00:00:00 GMT+0000 (Coordinated Universal Time)"
featured: false
heroImage: "/media/blog/6a0bdc6733c2fbea698217ba_eoretical_vs_Actual_Food_Cost.png"
heroImageAlt: "female chef at a pass in a fine-dining open kitchen, caught mid-plating"
ctaText: ""
ctaUrl: ""
draft: false
webflowId: "6a06d8bab592b264f5da8441"
---

You know your food cost percentage. The monthly report lands, the number is roughly where you expect it, and the operation moves on. The question worth asking is whether that number reflects what should have been used to produce the sales, or what actually was. Those are two different numbers, and the gap between them is where most restaurant margin quietly disappears.

Understanding theoretical vs actual food cost turns a margin you watch into a margin you can move. One number tells you what the recipes and sales mix say your cost should be. The other tells you what your stock count and invoices say it actually was. When operators talk about [variance](https://stockifi.io/blog/inventory-variance-tracking-restaurant-costs), they mean the space between those two numbers, and that space is rarely empty.

‍

## What Theoretical Food Cost Actually Is

Theoretical food cost is the calculation of what the ingredients in your sold dishes should have cost, based on recipes and sales data. The math is straightforward. For every dish sold in a period, the system looks at the recipe, multiplies each ingredient by the portion called for, and applies the current cost of that ingredient. Sum those amounts across every dish sold and you get the theoretical cost of goods for the period.

A dish with €4.20 of ingredients sold 180 times in a week contributes €756 to theoretical cost. Repeat that for every menu item, add it together, and divide by sales revenue. The result is the theoretical food cost percentage, the number the menu would produce if every portion left the kitchen exactly as the recipe specified and no ingredient went anywhere except into a sold dish.

This number is only as accurate as the inputs behind it. Recipes need to reflect what is actually being plated, and ingredient costs need to reflect what suppliers are charging this week. [Recipe costing](https://stockifi.io/blog/food-cost-tracking-system-restaurant) that lags behind invoice prices produces a theoretical figure that is technically clean but quietly wrong, and that error propagates through every margin decision that follows.

‍

## What Actual Food Cost Actually Is

Actual food cost is the measured number, derived from physical stock counts and supplier invoices over a period. The formula is opening inventory plus purchases minus closing inventory, divided by sales revenue for the same window.

‍

The three inputs:

* **Opening inventory.** The value of stock on hand at the start of the period.
* **Purchases.** Supplier invoices processed during the period.
* **Closing inventory.** The value of stock on hand at the end.

‍

The difference between (opening plus purchases) and closing is what physically left your stockroom. Whether it ended up in a sold dish, a staff meal, a bin, or an unaccounted shortfall, it counted toward actual cost.

That last point matters. Actual food cost includes every form of consumption, sold or not, and that is precisely what makes it useful when set against the theoretical figure.

‍

## Where the Gap Hides

When theoretical and actual food cost diverge, the difference is called food cost variance. A 1 to 2 percent gap is normal in a well-run operation, while anything beyond 3 percent is where margin damage starts compounding.

Four common sources account for most of what shows up in a count.

‍

### Overpour and overportioning

When a recipe calls for 30ml of a spirit and the actual pour is 35ml, the recipe-based theoretical cost stays clean while the actual cost rises. Multiply across hundreds of pours per week and the impact on a wet-led venue can run into thousands per month. Portion drift in the kitchen follows the same logic: a 220g protein portion served at 250g looks generous to the guest and invisible on the P&L until variance widens.

### Waste and spoilage

Trim, prep errors, expired stock, and dishes returned to the kitchen all consume ingredient cost without producing a sale. Theoretical cost only accounts for what was sold, so this consumption shows up entirely in the actual figure. Without a [wastage tracking process](https://stockifi.io/blog/food-cost-control-7-causes-of-variance-and-how-to-fix-each), it becomes part of an unexplained variance line that the kitchen has no way to act on.

### Portion drift over time

New kitchen staff are trained on a portion size, that portion creeps up gradually over weeks, and by the time anyone notices, the recipe in the system reflects a smaller portion than what is leaving the pass. The theoretical cost calculation uses the recipe, so the gap widens silently. This is one of the most common drivers of variance in restaurants that have grown through staff turnover without revisiting portion standards.

### Undefined sales and POS gaps

Sometimes a dish gets rung up under a generic key. Other times a modifier is missing, or a comp goes through without linking to a recipe. In each case, theoretical cost cannot calculate what should have been consumed. The ingredients still leave the stockroom and the actual cost still rises, while the recipe-based calculation has nothing to match against.

‍

## What Each Line Typically Costs

For a mid-size restaurant doing €80,000 in monthly food and beverage revenue, the math on each variance source is worth knowing concretely:

* **Overpour on spirits.** A 5ml overpour across 1,200 pours per week becomes roughly 6 litres of unbilled product, or €1,200 to €1,800 a month at standard cost.
* **Kitchen portion drift.** 30g on a high-volume protein dish selling 800 times a month adds up to €900 to €1,400 in unrecorded ingredient cost.
* **Untracked waste.** Running at one percent of revenue is €800 a month going out with the bins.
* **Undefined sales.** Two percent of revenue can hide €1,000 to €1,500 a month of ingredient consumption the theoretical calculation never sees.

‍

Stacked together, these four sources account for €4,000 to €6,000 a month of variance in an operation that looks reasonable on its monthly report. That is €50,000 to €70,000 a year in margin sitting inside a food cost percentage the operator believed was under control.

‍

## The Detection Lag in a Monthly Count

Most restaurants take a stock count once a month. That cadence means variance is detected once a month, after four weeks of compounding consumption has already happened.

By the time a count reveals a 4 percent gap, the operator is looking at a problem that has been running since the last count. Whatever caused it has had thirty days to repeat. Pinpointing the cause from a single monthly snapshot is hard, because the count tells you the total gap without telling you when it started or which category drove it.

Tightening the count cadence helps a little. Some operations count proteins and spirits separately on a tighter cycle for exactly this reason, but the labour cost of more frequent full counts puts that out of reach for most. The practical answer is to move detection upstream of the count itself, by tracking what should have been consumed against what is being purchased in real time, so the gap is visible while it is forming.

‍

## What Continuous Variance Tracking Changes

When [supplier invoices](https://stockifi.io/blog/supplier-price-tracking-restaurants) sync directly into the recipe system and POS sales feed into the same model, theoretical and actual cost get compared continuously, ahead of month-end.

Every invoice updates the underlying ingredient cost, so the theoretical calculation reflects what suppliers are charging today. Every sale subtracts recipe-defined consumption from a running theoretical model, while purchases add to actual consumption on the other side. The variance is visible at any moment, broken out by category and by location, ahead of whatever the monthly count later confirms.

The shift is from explanation to prevention. A 1.5 percent variance on proteins surfaces in week one and can be investigated while the cause is still in front of you, well before a monthly count confirms a four-week gap. Portion checks, supplier conversations, POS audits, and waste tracking become live responses to live data.

Stockifi connects invoice processing, recipe costs, and POS sales into one model. The theoretical vs actual food cost comparison runs continuously, and variance becomes something the operator watches as it forms. The actual food cost calculation runs against a theoretical baseline that updates with every invoice and every sale.

‍

## A Question Worth Asking

The food cost percentage on your monthly report is one number. The two numbers inside it, theoretical and actual, are where the operating story actually sits.

If you opened the books for last month and pulled them apart, could you tell which percent of the variance came from where? Each of the four sources (overpour, waste, portion drift, undefined sales) leaves its own pattern. Or would the gap sit on the line as one figure the team agreed to watch next month?

‍
