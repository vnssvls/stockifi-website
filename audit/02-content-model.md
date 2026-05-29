# Content Model — verified schema

> Status: ✅ verified from Webflow CSV export · 🔎 from live-page crawl · ❓ needs confirmation.
> Field types use Strapi 5 vocabulary (Text, Rich Text/Blocks, Media, Relation, Number, Date, Boolean, Enumeration).
> This is the Strapi content-type spec for Phase 2.

## Webflow system columns (present in every export)
`Name` · `Slug` · `Collection ID` · `Locale ID` · `Item ID` · `Archived` · `Draft` · `Created On` · `Updated On` · `Published On`

These are not content. In Strapi: `Slug` → UID field, `Item ID` keep as `webflowId` (for matching across locales + redirects), `Draft`/`Published On` → Strapi draft/publish, the rest drop. **`Locale ID` is the same value within one export = each export is single-locale.**

---

## Collection: Customer Stories — ✅ 10 items (9 published, 1 draft)
Source: `webflow-exports/customer-stories_en.csv`

| Webflow field | Strapi type | Localized? | Notes |
|---|---|---|---|
| Company Name | Text | shared | the item Name |
| User | Text | shared | person name (Tarje Haakstad) |
| Designation/Position | Text | yes | "Owner & General Manager" |
| Business Type | Enumeration | shared | Restaurant / Bar / ... |
| User Profile Photo | Media | shared | single URL |
| Company Logo (Primary) | Media | shared | single URL |
| Company Logo (transparent) | Media | shared | single URL |
| Thumbnail for Customer Story | Media | shared | single URL |
| Website | Text (URL) | shared | |
| Article Title | Text | yes | |
| One-liner testimonial | Text | yes | |
| Featured Quote for Customer Story | Text | yes | pull quote |
| Full Testimonial | Text (long) | yes | plain text quote |
| Body Paragraph (1) | Rich Text (Blocks) | yes | **HTML** `<p>...</p>` |
| Body Paragraph (2) | Rich Text (Blocks) | yes | **HTML** |
| 3-Image Grid | Media (multiple) | shared | **semicolon-separated URLs** in one cell |
| Single Image Feature | Media | shared | single URL |

---

## Collection: Testimonials — ✅ 18 items (12 published, 6 draft)
Source: `webflow-exports/testimonials_en.csv`

This is the master quote list. Boolean toggles control placement across the site.

| Webflow field | Strapi type | Localized? | Notes |
|---|---|---|---|
| Company Name | Text | shared | item Name |
| User | Text | shared | |
| Designation/Position | Text | yes | |
| **Add to Customer Stories** | Boolean | shared | promotes to / links a full story |
| **Add to scrolling banner?** | Boolean | shared | homepage banner placement |
| **Add to Savings-Calculator landing page?** | Boolean | shared | savings-calc page placement |
| Business Type | Enumeration | shared | |
| User Profile Photo | Media | shared | |
| Company Logo (Primary) | Media | shared | |
| Company Logo (transparent) | Media | shared | |
| Thumbnail for Customer Story | Media | shared | |
| Article Title | Text | yes | often empty |
| One-liner testimonial | Text | yes | |
| Featured Quote for Customer Story | Text | yes | |

### Overlap with Customer Stories (verified)
In **both** collections: byOSLO, Døgnvill Burger, Eik&Friends, Kolpin, SkiGeilo, Torika Gruppen.
Testimonials flagged `Add to Customer Stories = true`: Eik&Friends, Heim, Kolpin, SkiGeilo, Torika Gruppen, byOSLO.
Same company name / logo / photo is duplicated across the two collections. See **Key decision** below.

---

## Collection: Integrations — ✅ 69 items
Source: `webflow-exports/integrations_en.csv`

| Webflow field | Strapi type | Localized? | Notes |
|---|---|---|---|
| Name | Text | shared | "24SevenOffice", "Square" |
| Image | Media | shared | brand logo |
| Category | Enumeration | shared | stored as lowercase string: `accounting` / `pos` / `others` |
| Description | Text | yes | currently empty across items |

> `Category` is a plain string matching the category slug, **not** a hard Webflow reference. Model as a Strapi Enumeration (3 values). The separate Integration Categories collection is just a display-name lookup, so it can collapse into the enum.

## Collection: Integration Categories — ✅ 3 items (lookup only)
Source: `webflow-exports/integration-categories_en.csv`. Fields: Name + Slug only (Accounting, POS, Others). No images. Optional to keep as its own Strapi collection; simplest is to fold into the Integrations enum above.

---

## Collection: Blog Posts — ✅ 22 items (11 published, 11 draft/archived)
Source: `webflow-exports/blog_en.csv`

| Webflow field | Strapi type | Localized? | Notes |
|---|---|---|---|
| Article Title | Text | yes | item Name |
| Slug | UID | yes | |
| Meta Title | Text | yes | SEO |
| Meta Description | Text | yes | SEO |
| Excerpt | Text | yes | |
| Post Summary | Text (long) | yes | |
| Read time | Text | yes | "4 min read" — a real field, NOT auto-computed |
| Category | Enumeration | shared | Accounting / Operations / ... (blog's own, unrelated to Integration Categories) |
| Custom publish date | Date | shared | display date, separate from Published On |
| Featured? | Boolean | shared | homepage/feature placement |
| Body Content | Rich Text (Blocks) | yes | **HTML**, may contain inline images |
| Hero Image | Media | shared | |
| Hero Image Alt Text | Text | yes | accessibility |
| Related Articles (Optional) | Relation (self → Blog) | shared | multi-reference |
| CTA Button Text (Optional) | Text | yes | |
| CTA Button URL (Optional) | Text (URL) | shared | |

---

## KEY DECISION — Testimonials vs Customer Stories modeling
Webflow has two overlapping collections with duplicated company data. Two options for Strapi:

- **(A) Mirror Webflow 1:1** — two collections, duplication preserved. Lowest migration risk, fastest, keeps Craig's structure and the placement booleans working as-is. **Recommended for the migration; normalize later.**
- **(B) Normalize** — one `Company` collection, with related `Quote` and `Story` entries, placement booleans on the quote. Cleaner long term, removes duplication, but more rework and reshaping of the import.

Recommendation: ship (A), revisit (B) as a post-migration cleanup.

---

## Localization behavior — ✅ verified (Customer Stories NO)
Source: `webflow-exports/customer-stories_no.csv`. Locale IDs: EN `67b86eb1f718fa2c5be225bd`, NO `6859acf76c351ec3a25e0115`.

- Translation history: Webflow auto-translation was turned on, but output was poor, so the localized fields were hand-edited with Simon's proofread copy. **Existing translations are accurate.** Recent/draft items were never translated.
- **8 of 10 Customer Stories are translated to NO; 2 are EN fallback** (Koie Ramen — recent published; Døgnvill Burger — draft).
- **Localized fields** (differ per locale): Article Title, One-liner testimonial, Featured Quote, Full Testimonial, Body Paragraph (1), Body Paragraph (2), Designation/Position.
- **Shared fields** (same across locales): all Media, Company Name, Website, Business Type.

### Import rule (critical)
Webflow exports **the EN value as the localized value for untranslated items** (not blank). So an untranslated NO row looks identical to its EN row. At import: create a Strapi NO entry **only where the text actually differs from EN**; otherwise leave it to Strapi's locale fallback. This avoids freezing stale English into the Norwegian locale and makes "still needs translating" visible rather than hidden.

> Same diffing approach applies to DE and DA once exported.

## Open questions
1. ~~`skigeilo` vs `skigeilo-2`~~ — RESOLVED: two genuinely distinct SkiGeilo stories, both translated. Two real items, both keep their slugs.
2. Blog: 22 in CMS vs 11 in sitemap — confirm the other 11 are intentional drafts/archived, not lost content.
3. DE and DA: export each locale per collection when ready; expect the same partial-translation pattern (diff against EN to find real translations).
