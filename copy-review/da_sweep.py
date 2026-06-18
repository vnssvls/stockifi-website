#!/usr/bin/env python3
"""
Danish clear-error sweep — DRAFT, pending Simon's native lock.

Two kinds of edits below:
  (A) food-cost term normalization -> RECOMMENDED `vareforbrug` (the MT-dominant
      Danish term). Danish drifted across vareforbrug/varekost/madvareforbrug/
      madomkostninger/vareomkostninger. ⚠️ Simon confirms the term before apply;
      if he picks differently it's a cheap site-wide swap.
  (B) untranslated English: live -> i realtid, location -> lokation, sync -> synk.
      (Left for Simon: "er live inden for to dage" go-live idiom; operators; GM; em dashes.)

  python3 copy-review/da_sweep.py            # dry-run (verify originals match)
  python3 copy-review/da_sweep.py --apply
"""
import os, sys
ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
APPLY = "--apply" in sys.argv

EDITS = [
  # (A) food-cost variants -> vareforbrug
  ("content/products/da/performance-dashboards.md",
   'Saml madomkostninger og varelager på ét sted', 'Saml vareforbrug og varelager på ét sted'),
  ("content/solutions/da/hotels.md",
   'side om side med madvareforbrug.', 'side om side med vareforbrug.'),
  ("src/pages/da/pricing.astro",
   'Software til madvareforbrug i restauranter', 'Software til vareforbrug i restauranter'),
  # (B) live -> i realtid
  ("content/products/da/api.md",
   'Hent live, eller synkroniser', 'Hent i realtid, eller synkroniser'),
  ("content/products/da/profitability.md",
   'location og periode, bygget på dine live vareomkostninger',
   'lokation og periode, bygget på dit vareforbrug i realtid'),
  ("content/products/da/profitability.md",
   'indbringer, pr. location og periode.', 'indbringer, pr. lokation og periode.'),
  ("content/products/da/profitability.md",
   'heading: "Altid live"', 'heading: "Altid i realtid"'),
  ("content/products/da/profitability.md",
   'heading: "Location for location"', 'heading: "Lokation for lokation"'),
  ("content/products/da/profitability.md",
   'op mod hver rets live omkostning.', 'op mod hver rets omkostning i realtid.'),
  ("content/products/da/recipe-building.md",
   'med live ingredienspriser fra dine fakturaer', 'med ingredienspriser i realtid fra dine fakturaer'),
  ("content/products/da/recipe-building.md",
   'heading: "Byg opskrifter med live priser tilknyttet"',
   'heading: "Byg opskrifter med tilknyttede priser i realtid"'),
  ("content/products/da/recipe-building.md",
   'ctaHeading: "Se dine opskrifter kalkuleret live"',
   'ctaHeading: "Se dine opskrifter kalkuleret i realtid"'),
  ("content/solutions/da/restaurant-groups.md",
   'heading: "Opskriftspriser i sync"', 'heading: "Opskriftspriser i synk"'),
  ("src/pages/da/product-business-intelligence/index.astro",
   'Se den live-margin for hvert menupunkt.', 'Se margin i realtid for hvert menupunkt.'),
]

buf, ok, miss = {}, 0, 0
for rel, o, u in EDITS:
    p = os.path.join(ROOT, rel)
    t = buf.get(p) if p in buf else open(p, encoding="utf-8").read()
    n = t.count(o)
    if n == 1:
        buf[p] = t.replace(o, u); ok += 1
    else:
        miss += 1; print(f"  MISS x{n} {rel}: {o[:48]!r}")
print(f"{'APPLIED' if APPLY else 'DRY-RUN'} (Danish): {ok} ok, {miss} miss")
if APPLY and not miss:
    for p, t in buf.items(): open(p, "w", encoding="utf-8").write(t)
    print("written.")
elif APPLY:
    print("NOT written (fix misses).")
