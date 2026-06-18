#!/usr/bin/env python3
"""
Dutch clear-error sweep — DRAFT, pending Simon's native lock.

(A) food-cost term: RECOMMENDED `foodcost` (MT-dominant loanword, ×52, genuinely
    used in NL horeca). Only fixes the one English "Food Cost Software" title;
    `kostprijs` (dish cost price) and `inkoopkosten` (purchase costs) left as-is
    — they're distinct concepts. ⚠️ Simon confirms foodcost vs voedselkosten.
(B) live -> realtime (direct adjective swap, standard NL). Left for Simon:
    "live gaan" go-live idiom (index:163), operators/GM's, em dashes.

  python3 copy-review/nl_sweep.py            # dry-run
  python3 copy-review/nl_sweep.py --apply
"""
import os, sys
ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
APPLY = "--apply" in sys.argv

EDITS = [
  # (A) food-cost English title -> foodcost
  ("content/solutions/nl/restaurant-groups.md",
   'metaTitle: "Food Cost Software voor Restaurantgroepen | Stockifi"',
   'metaTitle: "Foodcost software voor restaurantgroepen | Stockifi"'),
  # (B) live -> realtime
  ("content/products/nl/api.md", 'Haal live op, of synchroniseer', 'Haal realtime op, of synchroniseer'),
  ("content/products/nl/inventory-transfers.md", 'in plaats van live gevolgd', 'in plaats van realtime gevolgd'),
  ("content/products/nl/recipe-building.md", 'met live ingrediëntkosten', 'met realtime ingrediëntkosten'),
  ("content/products/nl/recipe-building.md", 'heading: "Bouw recepten met live kosten"', 'heading: "Bouw recepten met realtime kosten"'),
  ("content/products/nl/recipe-building.md", 'ctaHeading: "Zie je recepten live berekend"', 'ctaHeading: "Zie je recepten realtime berekend"'),
  ("content/products/nl/profitability.md", 'gebaseerd op je live foodcost', 'gebaseerd op je realtime foodcost'),
  ("content/products/nl/profitability.md", 'tegenover de live kosten van elk gerecht', 'tegenover de realtime kosten van elk gerecht'),
  ("content/solutions/nl/management.md", "een live beeld van winst en marge", "een realtime beeld van winst en marge"),
  ("content/products/nl/performance-dashboards.md", 'in plaats van live tracking', 'in plaats van realtime tracking'),
  ("content/solutions/nl/kitchen.md", 'metaDescription: "Live receptkosten,', 'metaDescription: "Realtime receptkosten,'),
  ("content/solutions/nl/kitchen.md", 'problemTagline: "Live receptkosten"', 'problemTagline: "Realtime receptkosten"'),
  ("content/solutions/nl/kitchen.md", 'zijn live kostprijs mee', 'zijn realtime kostprijs mee'),
  ("content/solutions/nl/kitchen.md", 'ctaHeading: "Houd de kosten van de keuken live"', 'ctaHeading: "Houd de kosten van de keuken realtime"'),
  ("content/solutions/nl/independent-restaurants.md", 'heading: "Live receptkosten"', 'heading: "Realtime receptkosten"'),
  ("content/solutions/nl/hotels.md", 'heading: "Live receptkosten"', 'heading: "Realtime receptkosten"'),
  ("src/pages/nl/intro.astro", 'Krijg live kostenoverzicht voor elke vestiging', 'Krijg realtime kostenoverzicht voor elke vestiging'),
  ("src/pages/nl/solutions/index.astro", "'Live gerechtkostenprijs voor scherpere menukeuzes.'", "'Realtime gerechtkostenprijs voor scherpere menukeuzes.'"),
  ("src/pages/nl/product-business-intelligence/index.astro", "'Bekijk de live marge van elk menu-item.'", "'Bekijk de realtime marge van elk menu-item.'"),
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
print(f"{'APPLIED' if APPLY else 'DRY-RUN'} (Dutch): {ok} ok, {miss} miss")
if APPLY and not miss:
    for p, t in buf.items(): open(p, "w", encoding="utf-8").write(t)
    print("written.")
elif APPLY:
    print("NOT written (fix misses).")
