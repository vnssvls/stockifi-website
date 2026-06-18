#!/usr/bin/env python3
"""
German clear-error sweep (SOP Pass 1, high-confidence only).
German MT was already strong (Wareneinsatz dominant); this only normalizes the
few leftovers: food cost/COGS/Lebensmittelkosten -> Wareneinsatz, live -> in Echtzeit.
Left for Simon: operators (Gastronomen?), GM (Betriebsleiter?), idiomatic "live gehen",
em dashes. Each original must occur exactly once in its file.

  python3 copy-review/de_sweep.py            # dry-run
  python3 copy-review/de_sweep.py --apply
"""
import os, sys
ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
APPLY = "--apply" in sys.argv

EDITS = [
  ("content/products/de/performance-dashboards.md",
   'heading: "Lebensmittelkosten und Lagerverwaltung an einem Ort"',
   'heading: "Wareneinsatz und Lagerverwaltung an einem Ort"'),
  ("content/products/de/performance-dashboards.md",
   'statt einem Live-Tracking', 'statt einer Echtzeitverfolgung'),
  ("content/products/de/api.md",
   'Rufen Sie Daten live ab', 'Rufen Sie Daten in Echtzeit ab'),
  ("content/products/de/inventory-transfers.md",
   'und nicht live verfolgt', 'und nicht in Echtzeit verfolgt'),
  ("content/products/de/recipe-building.md",
   'Sehen Sie Ihre Rezepte live kalkuliert', 'Sehen Sie Ihre Rezepte in Echtzeit kalkuliert'),
  ("src/pages/de/intro.astro",
   'über deine Lebensmittelkosten.', 'über deinen Wareneinsatz.'),
  ("src/data/nav-i18n.ts",
   "Genauere Lebensmittelkosten ohne Tabellen.", "Genauerer Wareneinsatz ohne Tabellen."),
  ("src/data/nav-i18n.ts",
   "Live-Marge jedes Menüpunkts einsehen.", "Echtzeit-Marge jedes Menüpunkts einsehen."),
  ("src/data/nav-i18n.ts",
   "Live-Gerichtkosten für präzisere Menüentscheidungen.", "Echtzeit-Gerichtkosten für präzisere Menüentscheidungen."),
  ("src/data/nav-i18n.ts",
   "COGS, dem Sie zum Monatsende vertrauen können.", "Wareneinsatz, dem Sie zum Monatsende vertrauen können."),
]

buf, ok, miss = {}, 0, 0
for rel, o, u in EDITS:
    p = os.path.join(ROOT, rel)
    t = buf.get(p) if p in buf else open(p, encoding="utf-8").read()
    n = t.count(o)
    if n == 1:
        buf[p] = t.replace(o, u); ok += 1; print(f"  ok   {rel}: {o[:45]!r}")
    else:
        miss += 1; print(f"  MISS x{n} {rel}: {o[:45]!r}")
print(f"\n{'APPLIED' if APPLY else 'DRY-RUN'}: {ok} ok, {miss} miss")
if APPLY and not miss:
    for p, t in buf.items(): open(p, "w", encoding="utf-8").write(t)
    print("written.")
elif APPLY and miss:
    print("NOT written (fix misses first).")
