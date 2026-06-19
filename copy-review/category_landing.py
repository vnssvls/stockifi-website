#!/usr/bin/env python3
"""Localize the 3 product category landing pages' hero heading/subhead + CTA
(card grids were already translated). Replaces the 4 placeholder literals in each
of 15 localized index.astro files. Locked terms; DE formal; no em dashes."""
import os, sys
ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
APPLY = "--apply" in sys.argv

CTASUB = {
 "no": "Book en kort samtale, så viser vi deg hva Stockifi avdekker i løpet av de første 30 dagene.",
 "sv": "Boka ett kort samtal så visar vi dig vad Stockifi hittar under dina första 30 dagar.",
 "de": "Buchen Sie einen kurzen Anruf und wir zeigen Ihnen, was Stockifi in Ihren ersten 30 Tagen aufdeckt.",
 "da": "Book et kort opkald, og vi viser dig, hvad Stockifi afdækker i dine første 30 dage.",
 "nl": "Plan een kort gesprek en we laten je zien wat Stockifi in je eerste 30 dagen blootlegt.",
}
T = {
 "product-procurement": {
  "no": ("Alt du kjøper, under ett blikk", "Hvert kjøkken lever av det det kjøper inn. Stockifi hjelper deg å bestille riktige mengder, forsyne dine egne utsalgssteder og vite nøyaktig hva hver leverandør tar betalt.", "Klar til å få kontroll på innkjøpet?"),
  "sv": ("Allt du köper, under ett öga", "Varje kök lever på det det köper in. Stockifi hjälper dig att beställa rätt mängder, försörja dina egna enheter och veta exakt vad varje leverantör tar betalt.", "Redo att få kontroll på inköpet?"),
  "de": ("Alles, was Sie einkaufen, im Blick", "Jede Küche lebt von dem, was sie einkauft. Stockifi hilft Ihnen, die richtigen Mengen zu bestellen, Ihre eigenen Standorte zu beliefern und genau zu wissen, was jeder Lieferant berechnet.", "Bereit, Ihren Einkauf in den Griff zu bekommen?"),
  "da": ("Alt du køber, under ét blik", "Hvert køkken lever af det, det køber ind. Stockifi hjælper dig med at bestille de rigtige mængder, forsyne dine egne udsalgssteder og vide præcis, hvad hver leverandør tager.", "Klar til at få styr på indkøbet?"),
  "nl": ("Alles wat je inkoopt, in één oogopslag", "Elke keuken draait op wat ze inkoopt. Stockifi helpt je de juiste hoeveelheden te bestellen, je eigen vestigingen te bevoorraden en precies te weten wat elke leverancier rekent.", "Klaar om grip te krijgen op je inkoop?"),
 },
 "product-inventory-management": {
  "no": ("Et varelager du faktisk kan stole på", "Oppskrifter, varetellinger, overføringer mellom steder og svinnet imellom mater alle ett system. Når tellingen stemmer, holder alt som bygger på den.", "Vil du se det reelle lagerbildet ditt?"),
  "sv": ("Ett lager du faktiskt kan lita på", "Recept, inventeringar, överföringar mellan enheter och svinnet däremellan matar alla ett system. När inventeringen stämmer håller allt som byggs på den.", "Vill du se din verkliga lagerbild?"),
  "de": ("Ein Lagerbestand, dem Sie wirklich vertrauen können", "Rezepte, Inventuren, Umbuchungen zwischen Standorten und der Schwund dazwischen speisen alle ein System. Wenn die Inventur stimmt, hält alles, was darauf aufbaut.", "Möchten Sie Ihr echtes Bestandsbild sehen?"),
  "da": ("Et varelager, du faktisk kan stole på", "Opskrifter, varetællinger, overførsler mellem enheder og svindet derimellem fodrer alle ét system. Når tællingen stemmer, holder alt, der bygger på den.", "Vil du se dit reelle lagerbillede?"),
  "nl": ("Een voorraad waar je echt op kunt vertrouwen", "Recepten, voorraadtellingen, overdrachten tussen vestigingen en het verlies daartussen voeden allemaal één systeem. Als de telling klopt, houdt alles wat erop gebouwd is stand.", "Wil je je echte voorraadbeeld zien?"),
 },
 "product-business-intelligence": {
  "no": ("Ta beslutninger forankret i ekte data", "Hvert dashbord bygger på dine ekte faktura- og kassedata, ikke estimater. Se varekost, margin og avvik per rett, sted og periode, og handle på det de forteller deg.", "Klar til å handle på tall du kan stole på?"),
  "sv": ("Fatta beslut grundade i verkliga data", "Varje dashboard bygger på dina verkliga faktura- och kassadata, inte uppskattningar. Se råvarukostnad, marginal och avvikelse per rätt, enhet och period, och agera på vad de visar.", "Redo att agera på siffror du kan lita på?"),
  "de": ("Treffen Sie Entscheidungen auf Basis echter Daten", "Jedes Dashboard baut auf Ihren echten Rechnungs- und Kassendaten auf, nicht auf Schätzungen. Sehen Sie Wareneinsatz, Marge und Abweichung pro Gericht, Standort und Zeitraum, und handeln Sie danach.", "Bereit, auf Zahlen zu handeln, denen Sie vertrauen können?"),
  "da": ("Træf beslutninger forankret i ægte data", "Hvert dashboard bygger på dine ægte faktura- og kassedata, ikke estimater. Se vareforbrug, margin og afvigelse pr. ret, enhed og periode, og handl på det, de viser.", "Klar til at handle på tal, du kan stole på?"),
  "nl": ("Neem beslissingen op basis van echte data", "Elk dashboard is gebouwd op je echte factuur- en kassagegevens, geen schattingen. Zie foodcost, marge en afwijking per gerecht, vestiging en periode, en handel naar wat ze je vertellen.", "Klaar om te handelen op cijfers die je kunt vertrouwen?"),
 },
}

ok = miss = 0
for cat, locs in T.items():
    for loc, (h, s, cta) in locs.items():
        f = os.path.join(ROOT, f"src/pages/{loc}/{cat}/index.astro")
        t = open(f, encoding="utf-8").read()
        repl = [
            ('heading="[Placeholder heading]"', f'heading="{h}"'),
            ('subhead="[Placeholder subhead]"', f'subhead="{s}"'),
            ('heading="[Placeholder CTA heading]"', f'heading="{cta}"'),
            ('subhead="[Placeholder CTA subhead]"', f'subhead="{CTASUB[loc]}"'),
        ]
        for o, n in repl:
            if t.count(o) == 1:
                t = t.replace(o, n); ok += 1
            else:
                miss += 1; print(f"  MISS x{t.count(o)} {loc}/{cat}: {o[:30]}")
        if APPLY:
            open(f, "w", encoding="utf-8").write(t)
print(f"{'APPLIED' if APPLY else 'DRY-RUN'}: {ok} ok, {miss} miss")
