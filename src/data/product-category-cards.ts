// Shared benefit card sets for individual product pages — one set per category.
// All pages within a category display the same 4 cards.
// iconKey maps to a key in nav-icons.json.
//
// EN arrays below are canonical (icon + image + EN text). Translations live in
// TEXT as [heading, body] tuples in the SAME order; getCategoryCards(category,
// locale) merges the locale text onto the EN icon/image. Falls back to EN.

export type CategoryCard = { heading: string; body: string; iconKey: string; image: string };

export const procurementCards: CategoryCard[] = [
  {
    heading: 'Latest prices',
    body: "Invoices update ingredient costs the moment they're processed, not at month-end.",
    iconKey: 'percentage-circle',
    image: '/media/card-latest-prices.png',
  },
  {
    heading: 'Automated workflow',
    body: 'Stockifi captures the price and quantity of each ingredient, with no manual entry.',
    iconKey: 'receipt-2',
    image: '/media/card-automated-workflow.png',
  },
  {
    heading: 'Anomaly detection',
    body: 'Overcharges and anomalies are flagged before they settle into your cost data.',
    iconKey: 'fluent-wand',
    image: '/media/card-anomaly-detection.png',
  },
  {
    heading: 'Supplier comparison',
    body: 'Easily compare what each supplier charges for the same ingredient.',
    iconKey: 'box-search',
    image: '/media/card-supplier-comparison.png',
  },
];

export const inventoryManagementCards: CategoryCard[] = [
  {
    heading: 'Faster counts',
    body: "Stock counts run on mobile, with pattern recognition, even offline, and syncs when you're done.",
    iconKey: 'flash',
    image: '/media/card-faster-counts.png',
  },
  {
    heading: 'Waste costed',
    body: 'Waste and spoilage are logged at cost, so the numbers mean something when you close a count.',
    iconKey: 'trash',
    image: '/media/card-waste-costed.png',
  },
  {
    heading: 'Usage tracked',
    body: 'Stockifi compares what your kitchen consumed every period against what its recipes called for.',
    iconKey: 'sales-usage',
    image: '/media/card-usage-tracked.png',
  },
  {
    heading: 'Recipe accuracy',
    body: 'Every dish is costed from live ingredient prices, so margins reflect what you actually pay.',
    iconKey: 'book',
    image: '/media/card-recipe-accuracy.png',
  },
];

export const businessIntelligenceCards: CategoryCard[] = [
  {
    heading: 'All connected',
    body: 'Invoices, sales, and stock counts connect automatically, without exports or manual reconciliation.',
    iconKey: 'element-4',
    image: '/media/card-all-connected.png',
  },
  {
    heading: 'Drill anywhere',
    body: 'Any metric breaks down by site, period, or dish, as far as you need to go.',
    iconKey: 'presention-chart',
    image: '/media/card-drill-anywhere.png',
  },
  {
    heading: 'Variance explained',
    body: 'Gaps between theoretical and actual usage show you what caused it.',
    iconKey: 'trend-up',
    image: '/media/card-variance-explained.png',
  },
  {
    heading: 'Dish profitability',
    body: 'Each menu item is ranked by contribution, so you know what to promote and what to fix.',
    iconKey: 'fluent-finance',
    image: '/media/card-dish-profitability.png',
  },
];

// Per-locale [heading, body], same order as the EN arrays. Locked terms applied.
type Txt = [string, string][];
const TEXT: Record<string, Record<string, Txt>> = {
  procurement: {
    no: [
      ["Ferskeste priser", "Fakturaer oppdaterer ingredienskostnadene i det de behandles, ikke ved månedsslutt."],
      ["Automatisk flyt", "Stockifi fanger pris og mengde for hver ingrediens, uten manuell inntasting."],
      ["Avviksdeteksjon", "Overfakturering og avvik flagges før de fester seg i kostnadsdataene dine."],
      ["Leverandørsammenligning", "Sammenlign enkelt hva hver leverandør tar for samme ingrediens."],
    ],
    sv: [
      ["Färskaste priserna", "Fakturor uppdaterar ingredienskostnaderna i samma stund de behandlas, inte vid månadsslut."],
      ["Automatiskt flöde", "Stockifi fångar pris och mängd för varje ingrediens, utan manuell inmatning."],
      ["Avvikelsedetektering", "Överdebiteringar och avvikelser flaggas innan de fäster i dina kostnadsdata."],
      ["Leverantörsjämförelse", "Jämför enkelt vad varje leverantör tar för samma ingrediens."],
    ],
    de: [
      ["Aktuelle Preise", "Rechnungen aktualisieren die Zutatenkosten im Moment der Verarbeitung, nicht zum Monatsende."],
      ["Automatischer Ablauf", "Stockifi erfasst Preis und Menge jeder Zutat, ganz ohne manuelle Eingabe."],
      ["Anomalieerkennung", "Überberechnungen und Anomalien werden markiert, bevor sie sich in Ihren Kostendaten festsetzen."],
      ["Lieferantenvergleich", "Vergleichen Sie mühelos, was jeder Lieferant für dieselbe Zutat berechnet."],
    ],
    da: [
      ["Friske priser", "Fakturaer opdaterer ingrediensomkostningerne i det øjeblik de behandles, ikke ved månedsslut."],
      ["Automatisk flow", "Stockifi fanger pris og mængde for hver ingrediens, uden manuel indtastning."],
      ["Afvigelsesdetektion", "Overfakturering og afvigelser markeres, før de sætter sig fast i dine omkostningsdata."],
      ["Leverandørsammenligning", "Sammenlign nemt, hvad hver leverandør tager for samme ingrediens."],
    ],
    nl: [
      ["Actuele prijzen", "Facturen werken de ingrediëntkosten bij zodra ze verwerkt zijn, niet pas bij de maandafsluiting."],
      ["Geautomatiseerde flow", "Stockifi legt prijs en hoeveelheid van elk ingrediënt vast, zonder handmatige invoer."],
      ["Afwijkingsdetectie", "Overfacturering en afwijkingen worden gemarkeerd voordat ze in je kostendata terechtkomen."],
      ["Leveranciersvergelijking", "Vergelijk eenvoudig wat elke leverancier voor hetzelfde ingrediënt rekent."],
    ],
  },
  "inventory-management": {
    no: [
      ["Raskere tellinger", "Varetellinger gjøres på mobil, med mønstergjenkjenning, også offline, og synkroniseres når du er ferdig."],
      ["Svinn kostnadsført", "Svinn og kassasjon registreres til kostnad, så tallene betyr noe når du lukker en telling."],
      ["Forbruk sporet", "Stockifi sammenligner hva kjøkkenet brukte hver periode mot hva oppskriftene tilsa."],
      ["Nøyaktige oppskrifter", "Hver rett kostnadsberegnes fra ingredienspriser i sanntid, så marginene gjenspeiler det du faktisk betaler."],
    ],
    sv: [
      ["Snabbare inventeringar", "Inventeringar görs i mobilen, med mönsterigenkänning, även offline, och synkas när du är klar."],
      ["Svinn kostnadssatt", "Svinn och kassation loggas till kostnad, så att siffrorna betyder något när du stänger en inventering."],
      ["Förbrukning spårad", "Stockifi jämför vad ditt kök förbrukade varje period mot vad recepten angav."],
      ["Receptträffsäkerhet", "Varje rätt kostnadssätts utifrån ingredienspriser i realtid, så marginalerna speglar vad du faktiskt betalar."],
    ],
    de: [
      ["Schnellere Inventuren", "Inventuren laufen mobil, mit Mustererkennung, auch offline, und synchronisieren, sobald Sie fertig sind."],
      ["Schwund mit Kosten", "Schwund und Verderb werden zu Kosten erfasst, damit die Zahlen beim Inventurabschluss aussagekräftig sind."],
      ["Verbrauch erfasst", "Stockifi vergleicht, was Ihre Küche je Periode verbraucht hat, mit dem, was die Rezepte vorgaben."],
      ["Rezeptgenauigkeit", "Jedes Gericht wird aus Zutatenpreisen in Echtzeit kalkuliert, sodass die Margen widerspiegeln, was Sie tatsächlich zahlen."],
    ],
    da: [
      ["Hurtigere tællinger", "Varetællinger foregår på mobil, med mønstergenkendelse, også offline, og synkroniserer, når du er færdig."],
      ["Svind med kostpris", "Svind og spild registreres til kostpris, så tallene betyder noget, når du lukker en tælling."],
      ["Forbrug sporet", "Stockifi sammenligner, hvad dit køkken forbrugte hver periode, mod hvad opskrifterne foreskrev."],
      ["Nøjagtige opskrifter", "Hver ret kostberegnes ud fra ingredienspriser i realtid, så marginerne afspejler, hvad du faktisk betaler."],
    ],
    nl: [
      ["Snellere tellingen", "Voorraadtellingen lopen op mobiel, met patroonherkenning, ook offline, en synchroniseren als je klaar bent."],
      ["Verlies met kostprijs", "Verlies en bederf worden tegen kostprijs geregistreerd, zodat de cijfers iets betekenen als je een telling afsluit."],
      ["Verbruik gevolgd", "Stockifi vergelijkt wat je keuken elke periode verbruikte met wat de recepten voorschreven."],
      ["Receptnauwkeurigheid", "Elk gerecht wordt berekend op ingrediëntprijzen in realtime, zodat de marges weerspiegelen wat je echt betaalt."],
    ],
  },
  "business-intelligence": {
    no: [
      ["Alt koblet sammen", "Fakturaer, salg og varetellinger kobles sammen automatisk, uten eksport eller manuell avstemming."],
      ["Bor deg ned overalt", "Hvert nøkkeltall brytes ned på sted, periode eller rett, så langt du trenger å gå."],
      ["Avvik forklart", "Gap mellom teoretisk og faktisk forbruk viser deg hva som forårsaket det."],
      ["Lønnsomhet per rett", "Hver menyrett rangeres etter dekningsbidrag, så du vet hva du bør fremheve og hva du bør fikse."],
    ],
    sv: [
      ["Allt sammankopplat", "Fakturor, försäljning och inventeringar kopplas samman automatiskt, utan export eller manuell avstämning."],
      ["Borra var som helst", "Varje nyckeltal bryts ner på enhet, period eller rätt, så långt du behöver."],
      ["Avvikelse förklarad", "Gap mellan teoretisk och faktisk förbrukning visar dig vad som orsakade det."],
      ["Lönsamhet per rätt", "Varje menyrätt rangordnas efter täckningsbidrag, så du vet vad du ska lyfta fram och vad du ska åtgärda."],
    ],
    de: [
      ["Alles verbunden", "Rechnungen, Verkäufe und Inventuren werden automatisch verbunden, ohne Exporte oder manuellen Abgleich."],
      ["Überall hineinzoomen", "Jede Kennzahl lässt sich nach Standort, Zeitraum oder Gericht aufschlüsseln, so weit Sie wollen."],
      ["Abweichung erklärt", "Lücken zwischen theoretischem und tatsächlichem Verbrauch zeigen Ihnen die Ursache."],
      ["Gericht-Rentabilität", "Jeder Menüpunkt wird nach Deckungsbeitrag eingestuft, damit Sie wissen, was Sie bewerben und was Sie anpassen sollten."],
    ],
    da: [
      ["Alt forbundet", "Fakturaer, salg og varetællinger forbindes automatisk, uden eksport eller manuel afstemning."],
      ["Bor ned overalt", "Hvert nøgletal kan brydes ned på enhed, periode eller ret, så langt du har brug for."],
      ["Afvigelse forklaret", "Gab mellem teoretisk og faktisk forbrug viser dig, hvad der forårsagede det."],
      ["Lønsomhed per ret", "Hver menuret rangeres efter dækningsbidrag, så du ved, hvad du skal fremhæve, og hvad du skal rette."],
    ],
    nl: [
      ["Alles verbonden", "Facturen, verkopen en voorraadtellingen worden automatisch verbonden, zonder exports of handmatige afstemming."],
      ["Overal inzoomen", "Elk kengetal valt uiteen naar vestiging, periode of gerecht, zo ver als je nodig hebt."],
      ["Afwijking verklaard", "Gaten tussen theoretisch en werkelijk verbruik laten je zien wat de oorzaak was."],
      ["Winstgevendheid per gerecht", "Elk menu-item wordt gerangschikt op dekkingsbijdrage, zodat je weet wat je moet promoten en wat je moet aanpakken."],
    ],
  },
};

const BASE: Record<string, CategoryCard[]> = {
  procurement: procurementCards,
  "inventory-management": inventoryManagementCards,
  "business-intelligence": businessIntelligenceCards,
};

export function getCategoryCards(category: string, locale: string): CategoryCard[] {
  const base = BASE[category] || [];
  const txt = TEXT[category]?.[locale];
  if (!txt) return base;
  return base.map((c, i) => ({ ...c, heading: txt[i]?.[0] ?? c.heading, body: txt[i]?.[1] ?? c.body }));
}
