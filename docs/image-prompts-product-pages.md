# Image generation prompts — product-page showcase backgrounds

Generated for ElevenLabs (also works in Seedream / Nano Banana 2). Follows the canonical thumbnail aesthetic spec: documentary DNA, natural daylight only, film stocks allowed, no readable text, no em dashes, no-one facing the camera.

**These are showcase *backgrounds*, not literal concept illustrations.** Each product page's "How it works" section now layers a light-mode UI card on top of the photo (the `ProductShowcase` pattern), so the **card carries the meaning and the photo carries the mood**. Prompts aim for distinct, on-brand restaurant scenes, varied in setting so no two pages repeat.

- **Aspect ratio:** 16:9 (full-bleed media column).
- **Composition:** keep the subject to one side and leave a calmer, less busy area toward the **centre-right**, where the UI card overlays.
- **Screens:** any visible screen stays dark / softly glowing with no readable content (keeps the no-text rule).
- **Placement:** generated images go in `public/media/`; wire each to its page in `src/data/product-media.ts` (one entry → all 6 locales).

---

## Weak set (6) — replace first

### 1. performance-dashboards — busy room in full swing (the overview)
Shot in the style of 1970s American colour documentary realism on Kodak Portra 400, naturalistic colour, soft grain. The busy pre-dinner / late-lunch buzz of a refined modern European restaurant in full positive swing, pale oak, warm timber and brass, tall windows pouring in daylight, most tables full. Guests lean into lively conversation across several tables, glasses and shared plates between them, two servers moving through the room in soft motion blur, the whole space warm and alive, none aware of the camera. The photographer shoots a wide establishing view from a slightly raised vantage at the edge of the room, framing through the soft foreground of a neighbouring table and chair so the energy of the full room layers across the frame, a calmer stretch of the room opening toward the centre-right. The main light is warm low afternoon daylight raking through the tall windows, long soft highlights across the tables. Medium depth of field keeping the near tables crisp while the far room glows softly. Mild film grain, naturalistic tones, 35mm. No readable text anywhere. No-one facing the camera. Aspect ratio 16:9, composed with a calmer open area toward the centre-right for a UI card overlay.

### 2. variance-analysis — plate handoff at the pass
Shot in the style of 1970s American colour documentary realism on Kodak Portra 400, naturalistic colour, soft grain. Daytime service at the pass of a refined modern open kitchen, clean stainless, warm timber and pale tile, soft daylight spilling in from the dining room and the tall windows beyond the pass, mixing with the warm overhead work lights of the line. A chef hands a finished plate across the pass to a server, both caught mid-motion, the chef's arm extended and the server reaching in, a second cook plating behind in soft motion blur, none aware of the camera. Steam drifts through the light. The photographer shoots from the dining-room side at chest height, framing through the soft foreground of the pass ledge and a stack of plates so the handoff sits slightly off-centre to the left, a calmer stretch of the kitchen opening toward the centre-right. The main light is soft daylight spilling from the dining room beyond the pass, the stainless catching cool highlights against the warm plated food. Shallow depth of field with the handed plate in sharp focus while the kitchen behind softens into blur. Mild film grain, naturalistic tones, 35mm. No readable text anywhere. No-one facing the camera. Aspect ratio 16:9, composed with a calmer open area toward the centre-right for a UI card overlay.

### 3. profitability — warm full dining room
Shot in the style of 1970s American colour documentary realism on Kodak Portra 400, naturalistic colour, soft grain. Midday in a refined modern European restaurant in warm full service, marble-top tables, leather banquettes, brass fittings and soft daylight from tall windows. At a near table guests lean into relaxed conversation over shared plates while a server sets a dish down mid-motion, all caught in the moment and none aware of the camera. The photographer shoots from the edge of the room at seated height, framing through the soft foreground of a neighbouring table edge and a glass so the near guests sit to the left and a calmer stretch of banquette and wall opens toward the centre-right. The main light is bright soft daylight from the tall windows, the brass and timber holding the warmth. Shallow depth of field with the near guests and the arriving dish in sharp focus while the far room softens into blur. Mild film grain, naturalistic tones, 35mm. No readable text anywhere. No-one facing the camera. Aspect ratio 16:9, composed with a calmer open area toward the centre-right for a UI card overlay.

### 4. data-quality — receiving / delivery check
Shot in the style of 1970s American colour documentary realism on Kodak Portra 400, naturalistic colour, soft grain. Morning at the receiving area just inside the back door of a modern restaurant, soft daylight spilling from the open door, a delivery of fresh produce in neat crates just arrived. A staff member checks the delivery mid-task, lifting a crate of vegetables with one hand and holding a tablet in the other (screen dark, no readable content), absorbed in the work and not facing the camera. The photographer shoots from the side at chest height, framing through the soft foreground of a stacked crate so the staff member sits to the left and the orderly crates and the daylight from the door open toward the centre-right. The main light is soft daylight from the open back door, the produce fresh and the space calm. Shallow depth of field with the staff member and the near crate in sharp focus while the depth softens into blur. Mild film grain, naturalistic tones, 35mm. No readable text or labels on crates or screen. No-one facing the camera. Aspect ratio 16:9, composed with a calmer open area toward the centre-right for a UI card overlay.

### 5. api — back office inside the venue
Shot in the style of 1970s American colour documentary realism on Kodak Portra 400, naturalistic colour, soft grain. Mid-morning in a small back-office nook inside a restaurant venue, a pale oak desk, calm and uncluttered, and through an open doorway behind it a soft, out-of-focus glimpse of the restaurant's dining room catching daylight, placing the office clearly inside the venue. Shot from a high three-quarter angle, a staff member's hands and forearms rest on a laptop keyboard mid-type, a phone and a single notebook beside it, no face shown, both screens dark and glowing softly with no readable content. The photographer shoots from above and to one side, framing through the soft foreground of the desk edge so the laptop and hands sit to the left and the calm desk and doorway glimpse open toward the centre-right. The main light is a soft column of daylight from a window at the left, mixing with the daylight from the dining room beyond. Shallow depth of field with the typing hands in sharp focus while the desk and the doorway soften into blur. Mild film grain, naturalistic tones, 35mm. No readable text or graphics on any screen. No-one facing the camera. Aspect ratio 16:9, composed with a calmer open area toward the centre-right for a UI card overlay.

### 6. sales-and-usage — server / manager at the POS
Shot in the style of 1970s American colour documentary realism on Kodak Portra 400, naturalistic colour, soft grain. Daytime in a refined modern restaurant, a server or floor manager stands at the POS terminal on the counter mid-task, entering an order with an easy focused expression, a hand on the screen, seen in profile and not facing the camera, the warm dining room soft behind. The photographer shoots from the customer side at chest height, framing through the soft foreground of the counter edge and a stack of menus so the staff member and terminal sit to the left and the calm counter and dining room open toward the centre-right. The main light is soft daylight from a window, the timber and brass holding the warmth, the POS screen dark and softly glowing. Shallow depth of field with the staff member and the terminal in sharp focus while the room softens into blur. Mild film grain, naturalistic tones, 35mm. No readable text or content on the POS screen or signage. No-one facing the camera. Aspect ratio 16:9, composed with a calmer open area toward the centre-right for a UI card overlay.

---

## Findings — current showcase photos (for the rest)

Only 8 photos cover all 15 product pages; full-bleed, the repeats read as cheap. Current pairings (★ = covered by the weak-set prompts above):

| Photo | Pages using it |
|---|---|
| teams-management | anomaly-detection · profitability ★ |
| teams-operations | api ★ · recipe-building |
| teams-finance | data-quality ★ · stock-counting |
| hero-owner *(low-res)* | invoice-automation · variance-analysis ★ |
| hero-manager *(low-res)* | inventory-transfers · supplier-price-tracking |
| hero-chef | ordering-suggestions · wastage-tracking |
| benefits-manager-chef | performance-dashboards ★ |
| teams-kitchen | sales-and-usage ★ · central-kitchen *(now replaced)* |

**Recommendation:** the weak-set batch resolves one page of each duplicated pair, but these still pair up and need their own scenes: **anomaly-detection, recipe-building, stock-counting, inventory-transfers, supplier-price-tracking, invoice-automation, ordering-suggestions, wastage-tracking** (8 pages). `hero-manager` / `hero-owner` are also low-res and worth replacing regardless. Extending dedicated photos to all 15 kills the duplication entirely — that's the next batch once these 6 are in.
