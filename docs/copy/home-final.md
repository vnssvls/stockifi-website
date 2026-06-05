# Home — final copy (DC-474)

> Apply this into `src/pages/index.astro`. Sections are in final order. Each has the
> component it uses + the exact copy. Live render: `/copy-review`. Footer excluded (V is
> changing the footer variant).
>
> **3 arrangement changes vs the current build:** section 3 `FeatureList` now holds the
> product categories (not the 4-step), `FeatureTabs` = By Teams (not platform showcase),
> `FeatureSteps` = Onboarding (not segments). `FeatureSplit` = Benefits.

## Meta
- **Title:** European Restaurant Food Cost Software | Stockifi
- **Description:** Know your real food cost. Stockifi connects your invoices, POS, and recipes to show where your margin goes, with the setup done for you.

## 1. Hero — `Hero`
- **Eyebrow:** Restaurant food cost software
- **H1:** Know your real food cost.
- **Subhead:** Your invoices, sales, and recipes already hold the answer to your food cost. Stockifi pulls them together and does the math, so you see your margin and act on it.
- **Primary CTA:** Book a demo → `/book-a-demo`
- **Secondary CTA:** See how it works → `#how-it-works`

## 2. Social proof — `LogoBanner`
- **Label:** Trusted by 500+ restaurants across Europe

## 3. What's inside — `FeatureList`
- **Tagline:** What's inside
- **Procurement:** Stockifi reads your supplier invoices automatically, tracks every price change, and flags anomalies like overcharges, with your central kitchen costed in the same place. See how it keeps your supplier costs in check.
  - CTA → `Explore Procurement` → `/product/procurement` *(provisional slug; CTA needs FeatureList per-item button — build-add)*
- **Inventory Management:** You count stock and log any transfers and wastage in the app, and Stockifi compares it to the recipes we set up with you to show what you really used. See how your counts become numbers you can act on.
  - CTA → `Explore Inventory Management` → `/product/inventory-management` *(provisional)*
- **Business Intelligence:** Stockifi turns all of it into performance dashboards, variance analysis, and profitability insights, with an API to push the data wherever you need it. See what your numbers can tell you.
  - CTA → `Explore Business Intelligence` → `/product/business-intelligence` *(provisional)*

## 4. Benefits — `FeatureSplit`
- **Tagline:** Why it's worth it
- **H2:** Restaurant food cost control that pays for itself
- **Body:** Most of your margin leaks in the gaps between systems. Stockifi pulls them into one view, so even a 1% improvement in food cost turns into money you keep.
- **Checklist:**
  - Catch supplier price rises the day they hit an invoice
  - See what you actually used against what you should have, per dish
  - Know the live margin of every recipe as your costs move
  - Most operators see a 2 to 3% improvement in food cost after onboarding

## 5. By Teams — `FeatureTabs`
- **Tagline:** For your team
- **H2:** One set of numbers for every role
- **Subhead:** From the GM to the kitchen, everyone works from the same numbers.
- **Tabs** (label / heading / body / button → href):
  - **Management** / The whole operation's margin at a glance / "Owners and GMs get cost visibility across every location, so you know where margin is won or lost without chasing a single report. See it from an owner's seat." / `Stockifi for Management` → `/solutions/management`
  - **Operations** / Run tighter service without the extra admin / "Spot waste, over-portioning, and price drift early, so the day-to-day stays under control even as you add locations. See it on the floor." / `Stockifi for Operations` → `/solutions/operations`
  - **Kitchen** / Recipes that cost themselves / "Chefs see the live cost and margin of every dish, so menu calls reflect what ingredients cost today. See it in the kitchen." / `Stockifi for Kitchen` → `/solutions/kitchen`
  - **Finance** / COGS you can actually trust / "Finance gets actual against theoretical cost from real invoice and POS data, so month-end stops being a guessing game. See it on the books." / `Stockifi for Finance` → `/solutions/finance`

## 6. Customer stories — `CustomerStoryBento`
- **Eyebrow:** Customer stories
- **H2:** Hear it from operators like you
- **Subhead:** See how hospitality businesses use Stockifi to win back margin they couldn't see before.
- **CTA:** Read all stories → `/customer-stories`
- **Featured slugs:** byoslo, eik-and-friends, koie-ramen, skigeilo-2

## 7. Onboarding — `FeatureSteps`
- **Eyebrow:** Personalized onboarding
- **H2:** Get up and running in 48 hours
- **CTA:** Book a demo → `/book-a-demo`
- **Steps:**
  - **Connect your systems** — We connect your accounting and POS, and your invoices and sales start flowing into Stockifi automatically.
  - **We set up your recipes** — We build your recipe baseline with you, so every cost is right from day one.
  - **Your account is ready** — Most operations are live within two days of connecting their systems.
  - **Start seeing the gaps** — From your first counts, you see real food cost, variance, and price changes.

## 8. Integrations — `IntegrationPills`
- **Eyebrow:** Integrations
- **H2:** Works with the tools you already run
- **Subhead:** Stockifi reads your accounting software and POS automatically, with 70+ integrations ready to connect.
- **CTA:** View all integrations → `/integrations` *(IntegrationPills needs a CTA prop — build-add)*

## 9. Risk / pricing band — `CtaBand` (stand-in until a dedicated band exists)
- **Heading:** See what Stockifi would cost for your setup.
- **Subhead:** Pricing depends on your size and setup, and onboarding is risk-free: if we don't find at least €3,000 in hidden losses in your first 30 days, you pay nothing.
- **CTA:** See pricing → `/pricing`

## 10. FAQ — `FaqSplit`
- **Eyebrow:** FAQs
- **H2:** Questions operators ask
- **Intro:** The things operators check before a demo. Still unsure? Reach out and we'll help.
- **Contact CTA:** Contact us → `/contact`
- **Q&A:**
  - **How does Stockifi connect to my systems?** It reads your accounting software for supplier invoices and your POS for sales. We support 30+ accounting and 40+ POS integrations; the full list is on the integrations page.
  - **How long does it take to set up?** Most operations are running quickly once recipes and integrations are connected. We set the recipe baseline with you so the numbers are right from day one.
  - **What does it cost?** Pricing depends on the size and complexity of your setup, typically between €150 and €400 per month. We look at it together on a short call.
  - **Is my restaurant a good fit?** Stockifi suits established restaurants and groups that have recipes and an accounting or POS system. Very early-stage operations usually are not the right fit yet.
  - **Can my team use it in our language?** Your data stays in your language and the app modules are in English. We run a short training so the team is comfortable from the start.

## 11. Final CTA — `CtaBand`
- **Heading:** Ready to know your real food cost?
- **Subhead:** Book a short call and we'll walk through your own numbers with you.
- **CTA:** Book a demo → `/book-a-demo`

---

### Design notes (not copy)
- Hero has an optional faint aurora gradient background (see `:global(.hero)` in `copy-review.astro`) — other session's call whether to bring it over (use tokens).
- Build-adds for the other session: per-item CTA in `FeatureList`, CTA prop in `IntegrationPills`.
- Provisional `/product/<category>` slugs — confirm against the real category landing pages.
