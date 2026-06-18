// Nav labels per locale. Descriptions (mega menu sub-text) are intentionally
// kept in English for all locales — they're supplementary hover text, not copy.
// Add a `desc` map if full translation is needed later.

export interface NavStrings {
  product: string;
  solutions: string;
  resources: string;
  pricing: string;
  company: string;
  login: string;
  bookDemo: string;
  procurementGroup: string;
  inventoryGroup: string;
  biGroup: string;
  byType: string;
  byTeam: string;
  // Product items
  invoiceAutomation: string;
  supplierPriceTracking: string;
  centralKitchen: string;
  anomalyDetection: string;
  orderingSuggestions: string;
  recipeBuilding: string;
  stockCounting: string;
  inventoryTransfers: string;
  wastageTracking: string;
  dataQuality: string;
  performanceDashboards: string;
  varianceAnalysis: string;
  profitabilityInsights: string;
  api: string;
  salesAndUsage: string;
  // Solutions items
  independentRestaurants: string;
  restaurantGroups: string;
  hotelsWithFnB: string;
  bars: string;
  management: string;
  operations: string;
  kitchen: string;
  finance: string;
  // Resources items
  blog: string;
  customerStories: string;
  faq: string;
  pressAndMedia: string;
  savingsCalculator: string;
  comparisons: string;
  comingSoon: string;
  integrations: string;
  contact: string;
  viewAllSolutions: string;
  solutionsTailored: string;
  solutionsTailoredDesc: string;
  speakToExpert: string;
  footerCtaHeading: string;
  footerCtaText: string;
  footerContact: string;
  footerFollow: string;
  footerRights: string;
  privacyPolicy: string;
  termsConditions: string;
}

const en: NavStrings = {
  product: 'Product', solutions: 'Solutions', resources: 'Resources', pricing: 'Pricing', company: 'Company',
  login: 'Log in', bookDemo: 'Book a demo',
  procurementGroup: 'Procurement', inventoryGroup: 'Inventory Management', biGroup: 'Business Intelligence',
  byType: 'By Type', byTeam: 'By team',
  invoiceAutomation: 'Invoice automation', supplierPriceTracking: 'Supplier price tracking',
  centralKitchen: 'Central kitchen', anomalyDetection: 'Anomaly detection', orderingSuggestions: 'Ordering suggestions',
  recipeBuilding: 'Recipe building', stockCounting: 'Stock counting', inventoryTransfers: 'Inventory transfers',
  wastageTracking: 'Wastage tracking', dataQuality: 'Data quality',
  performanceDashboards: 'Performance Dashboards', varianceAnalysis: 'Variance analysis',
  profitabilityInsights: 'Profitability insights', api: 'API', salesAndUsage: 'Sales and usage',
  independentRestaurants: 'Independent restaurants', restaurantGroups: 'Restaurant groups',
  hotelsWithFnB: 'Hotels with F&B', bars: 'Bars',
  management: 'Management', operations: 'Operations', kitchen: 'Kitchen', finance: 'Finance',
  blog: 'Blog', customerStories: 'Customer Stories', faq: 'FAQ', pressAndMedia: 'Press & Media',
  savingsCalculator: 'Savings Calculator', comparisons: 'Comparisons', comingSoon: 'Coming soon',
  integrations: 'Integrations', contact: 'Contact',
  viewAllSolutions: 'View all solutions',
  solutionsTailored: 'Explore solutions tailored for you',
  solutionsTailoredDesc: 'See how Stockifi fits your operations and the teams who run it.',
  speakToExpert: 'Speak to an expert',
  footerCtaHeading: "Take control of your food cost.",
  footerCtaText: "See where margin leaks across recipes, suppliers, and sales. Book a demo and we will map it with you.",
  footerContact: "Contact:",
  footerFollow: "Follow us",
  footerRights: "All rights reserved.",
  privacyPolicy: "Privacy Policy",
  termsConditions: "Terms & Conditions",
};

const no: NavStrings = {
  product: 'Produkt', solutions: 'Løsninger', resources: 'Ressurser', pricing: 'Priser', company: 'Om oss',
  login: 'Logg inn', bookDemo: 'Book en demo',
  procurementGroup: 'Innkjøp', inventoryGroup: 'Lagerstyring', biGroup: 'Business Intelligence',
  byType: 'Etter type', byTeam: 'Etter team',
  invoiceAutomation: 'Fakturaautomatisering', supplierPriceTracking: 'Leverandørprissporing',
  centralKitchen: 'Sentralkjøkken', anomalyDetection: 'Avviksdeteksjon', orderingSuggestions: 'Bestillingsforslag',
  recipeBuilding: 'Oppskriftsbygging', stockCounting: 'Varetelling', inventoryTransfers: 'Lageroverføringer',
  wastageTracking: 'Svinnregistrering', dataQuality: 'Datakvalitet',
  performanceDashboards: 'Ytelsesdashbord', varianceAnalysis: 'Avviksanalyse',
  profitabilityInsights: 'Lønnsomhetsanalyse', api: 'API', salesAndUsage: 'Salg og forbruk',
  independentRestaurants: 'Enkeltstående restauranter', restaurantGroups: 'Restaurantkjeder',
  hotelsWithFnB: 'Hoteller med F&B', bars: 'Barer',
  management: 'Management', operations: 'Drift', kitchen: 'Kjøkken', finance: 'Økonomi',
  blog: 'Blogg', customerStories: 'Kundehistorier', faq: 'FAQ', pressAndMedia: 'Presse & Medier',
  savingsCalculator: 'Besparelseskalkulator', comparisons: 'Sammenligninger', comingSoon: 'Kommer snart',
  integrations: 'Integrasjoner', contact: 'Kontakt',
  viewAllSolutions: 'Se alle løsninger',
  solutionsTailored: 'Utforsk løsninger tilpasset deg',
  solutionsTailoredDesc: 'Se hvordan Stockifi passer driften din og teamene som driver den.',
  speakToExpert: 'Snakk med en ekspert',
  footerCtaHeading: "Få kontroll på varekosten din.",
  footerCtaText: "Se hvor marginen lekker på tvers av oppskrifter, leverandører og salg. Book en demo, så kartlegger vi det sammen.",
  footerContact: "Kontakt:",
  footerFollow: "Følg oss",
  footerRights: "Med enerett.",
  privacyPolicy: "Personvern",
  termsConditions: "Vilkår og betingelser",
};



const de: NavStrings = {
  product: 'Produkt', solutions: 'Lösungen', resources: 'Ressourcen', pricing: 'Preise', company: 'Unternehmen',
  login: 'Anmelden', bookDemo: 'Demo buchen',
  procurementGroup: 'Einkauf', inventoryGroup: 'Lagerverwaltung', biGroup: 'Business Intelligence',
  byType: 'Nach Typ', byTeam: 'Nach Team',
  invoiceAutomation: 'Rechnungsautomatisierung', supplierPriceTracking: 'Lieferantenpreisüberwachung',
  centralKitchen: 'Zentralküche', anomalyDetection: 'Anomalieerkennung', orderingSuggestions: 'Bestellvorschläge',
  recipeBuilding: 'Rezepterstellung', stockCounting: 'Inventur', inventoryTransfers: 'Lagerumbuchungen',
  wastageTracking: 'Schwunderfassung', dataQuality: 'Datenqualität',
  performanceDashboards: 'Leistungsübersicht', varianceAnalysis: 'Varianzanalyse',
  profitabilityInsights: 'Rentabilitätsanalyse', api: 'API', salesAndUsage: 'Verkauf & Verbrauch',
  independentRestaurants: 'Einzelne Restaurants', restaurantGroups: 'Restaurantgruppen',
  hotelsWithFnB: 'Hotels mit F&B', bars: 'Bars',
  management: 'Management', operations: 'Betrieb', kitchen: 'Küche', finance: 'Finanzen',
  blog: 'Blog', customerStories: 'Kundengeschichten', faq: 'FAQ', pressAndMedia: 'Presse & Medien',
  savingsCalculator: 'Einsparungsrechner', comparisons: 'Vergleiche', comingSoon: 'Demnächst',
  integrations: 'Integrationen', contact: 'Kontakt',
  viewAllSolutions: 'Alle Lösungen ansehen',
  solutionsTailored: 'Entdecke Lösungen, die zu dir passen',
  solutionsTailoredDesc: 'Sieh, wie Stockifi zu deinem Betrieb und den Teams dahinter passt.',
  speakToExpert: 'Mit einem Experten sprechen',
  footerCtaHeading: "Bringen Sie Ihren Wareneinsatz unter Kontrolle.",
  footerCtaText: "Sehen Sie, wo Marge über Rezepte, Lieferanten und Verkäufe verloren geht. Buchen Sie eine Demo, und wir kartieren es gemeinsam.",
  footerContact: "Kontakt:",
  footerFollow: "Folgen Sie uns",
  footerRights: "Alle Rechte vorbehalten.",
  privacyPolicy: "Datenschutz",
  termsConditions: "AGB",
};

const da: NavStrings = {
  product: 'Produkt', solutions: 'Løsninger', resources: 'Ressourcer', pricing: 'Priser', company: 'Om os',
  login: 'Log ind', bookDemo: 'Book en demo',
  procurementGroup: 'Indkøb', inventoryGroup: 'Lagerstyring', biGroup: 'Business Intelligence',
  byType: 'Efter type', byTeam: 'Efter team',
  invoiceAutomation: 'Fakturaautomatisering', supplierPriceTracking: 'Leverandørprisovervågning',
  centralKitchen: 'Centralkøkken', anomalyDetection: 'Anomalidetektion', orderingSuggestions: 'Bestillingsforslag',
  recipeBuilding: 'Opskriftsbygning', stockCounting: 'Varetælling', inventoryTransfers: 'Lageroverførsler',
  wastageTracking: 'Spildregistrering', dataQuality: 'Datakvalitet',
  performanceDashboards: 'Performancedashboard', varianceAnalysis: 'Variansanalyse',
  profitabilityInsights: 'Rentabilitetsanalyse', api: 'API', salesAndUsage: 'Salg og forbrug',
  independentRestaurants: 'Uafhængige restauranter', restaurantGroups: 'Restaurantkæder',
  hotelsWithFnB: 'Hoteller med F&B', bars: 'Barer',
  management: 'Management', operations: 'Drift', kitchen: 'Køkken', finance: 'Økonomi',
  blog: 'Blog', customerStories: 'Kundehistorier', faq: 'FAQ', pressAndMedia: 'Presse & Medier',
  savingsCalculator: 'Besparelsesberegner', comparisons: 'Sammenligninger', comingSoon: 'Kommer snart',
  integrations: 'Integrationer', contact: 'Kontakt',
  viewAllSolutions: 'Se alle løsninger',
  solutionsTailored: 'Udforsk løsninger tilpasset dig',
  solutionsTailoredDesc: 'Se, hvordan Stockifi passer til din drift og teamene bag den.',
  speakToExpert: 'Tal med en ekspert',
  footerCtaHeading: "Få styr på dit vareforbrug.",
  footerCtaText: "Se hvor marginen lækker på tværs af opskrifter, leverandører og salg. Book en demo, så kortlægger vi det sammen.",
  footerContact: "Kontakt:",
  footerFollow: "Følg os",
  footerRights: "Alle rettigheder forbeholdes.",
  privacyPolicy: "Privatlivspolitik",
  termsConditions: "Vilkår og betingelser",
};

const sv: NavStrings = {
  product: 'Produkt', solutions: 'Lösningar', resources: 'Resurser', pricing: 'Priser', company: 'Om oss',
  login: 'Logga in', bookDemo: 'Boka en demo',
  procurementGroup: 'Inköp', inventoryGroup: 'Lagerhantering', biGroup: 'Business Intelligence',
  byType: 'Efter typ', byTeam: 'Efter team',
  invoiceAutomation: 'Fakturaautomatisering', supplierPriceTracking: 'Leverantörsprisövervakning',
  centralKitchen: 'Centralkök', anomalyDetection: 'Avvikelsedetektering', orderingSuggestions: 'Beställningsförslag',
  recipeBuilding: 'Receptbygge', stockCounting: 'Inventering', inventoryTransfers: 'Lageröverföringar',
  wastageTracking: 'Spårning av svinn', dataQuality: 'Datakvalitet',
  performanceDashboards: 'Prestandaöversikt', varianceAnalysis: 'Avvikelseanalys',
  profitabilityInsights: 'Lönsamhetsanalys', api: 'API', salesAndUsage: 'Försäljning och förbrukning',
  independentRestaurants: 'Oberoende restauranger', restaurantGroups: 'Restauranggrupper',
  hotelsWithFnB: 'Hotell med F&B', bars: 'Barer',
  management: 'Management', operations: 'Drift', kitchen: 'Kök', finance: 'Ekonomi',
  blog: 'Blogg', customerStories: 'Kundberättelser', faq: 'FAQ', pressAndMedia: 'Press & Media',
  savingsCalculator: 'Besparingsräknare', comparisons: 'Jämförelser', comingSoon: 'Kommer snart',
  integrations: 'Integrationer', contact: 'Kontakt',
  viewAllSolutions: 'Se alla lösningar',
  solutionsTailored: 'Utforska lösningar anpassade för dig',
  solutionsTailoredDesc: 'Se hur Stockifi passar din verksamhet och teamen som driver den.',
  speakToExpert: 'Prata med en expert',
  footerCtaHeading: "Få kontroll på din råvarukostnad.",
  footerCtaText: "Se var marginalen läcker över recept, leverantörer och försäljning. Boka en demo, så kartlägger vi det tillsammans.",
  footerContact: "Kontakt:",
  footerFollow: "Följ oss",
  footerRights: "Med ensamrätt.",
  privacyPolicy: "Integritetspolicy",
  termsConditions: "Villkor",
};

const nl: NavStrings = {
  product: 'Product', solutions: 'Oplossingen', resources: "Bronnen", pricing: 'Prijzen', company: 'Over ons',
  login: 'Inloggen', bookDemo: 'Boek een demo',
  procurementGroup: 'Inkoop', inventoryGroup: 'Voorraadbeheer', biGroup: 'Business Intelligence',
  byType: 'Op type', byTeam: 'Per team',
  invoiceAutomation: 'Factuurautomatisering', supplierPriceTracking: 'Leveranciersprijstracking',
  centralKitchen: 'Centrale keuken', anomalyDetection: 'Afwijkingsdetectie', orderingSuggestions: 'Bestelsugesties',
  recipeBuilding: 'Receptenbeheer', stockCounting: 'Voorraadtelling', inventoryTransfers: 'Voorraadoverdrachten',
  wastageTracking: 'Verspillingregistratie', dataQuality: 'Datakwaliteit',
  performanceDashboards: 'Prestatiedashboard', varianceAnalysis: 'Variantieanalyse',
  profitabilityInsights: 'Winstgevendheidsanalyse', api: 'API', salesAndUsage: 'Verkoop en verbruik',
  independentRestaurants: 'Zelfstandige restaurants', restaurantGroups: 'Restaurantgroepen',
  hotelsWithFnB: 'Hotels met F&B', bars: 'Bars',
  management: 'Management', operations: 'Operaties', kitchen: 'Keuken', finance: 'Financiën',
  blog: 'Blog', customerStories: 'Klantverhalen', faq: 'FAQ', pressAndMedia: 'Pers & Media',
  savingsCalculator: 'Besparingsberekening', comparisons: 'Vergelijkingen', comingSoon: 'Binnenkort',
  integrations: 'Integraties', contact: 'Contact',
  viewAllSolutions: 'Alle oplossingen bekijken',
  solutionsTailored: 'Ontdek oplossingen op maat',
  solutionsTailoredDesc: 'Ontdek hoe Stockifi past bij jouw activiteiten en de teams die het runnen.',
  speakToExpert: 'Spreek met een expert',
  footerCtaHeading: "Krijg grip op je foodcost.",
  footerCtaText: "Zie waar marge weglekt over recepten, leveranciers en verkopen. Plan een demo en we brengen het samen in kaart.",
  footerContact: "Contact:",
  footerFollow: "Volg ons",
  footerRights: "Alle rechten voorbehouden.",
  privacyPolicy: "Privacybeleid",
  termsConditions: "Voorwaarden",
};

const map: Record<string, NavStrings> = { en, no, de, da, sv, nl };

export function getNavStrings(locale: string): NavStrings {
  return map[locale] ?? en;
}

// ── Mega menu item descriptions — one line per feature/solution ──────────────
export interface NavDescs {
  invoiceAutomation: string; supplierPriceTracking: string; centralKitchen: string;
  anomalyDetection: string; orderingSuggestions: string;
  recipeBuilding: string; stockCounting: string; inventoryTransfers: string;
  wastageTracking: string; dataQuality: string;
  performanceDashboards: string; varianceAnalysis: string; profitabilityInsights: string;
  api: string; salesAndUsage: string;
  independentRestaurants: string; restaurantGroups: string; hotelsWithFnB: string;
  bars: string; management: string; operations: string; kitchen: string; finance: string;
}

const enDescs: NavDescs = {
  invoiceAutomation: 'Supplier invoices read line by line, automatically.',
  supplierPriceTracking: 'Every price change caught the day it lands.',
  centralKitchen: 'Cost production and supply your own outlets.',
  anomalyDetection: 'Flags overcharges and odd line items for review.',
  orderingSuggestions: 'Know what to reorder based on usage.',
  recipeBuilding: 'Cost every recipe from live ingredient prices.',
  stockCounting: 'Count stock on mobile or web, online or off.',
  inventoryTransfers: 'Track stock moved between your locations.',
  wastageTracking: 'Log waste and see what it costs you.',
  dataQuality: 'Continuously keeping your data at the highest quality.',
  performanceDashboards: 'Food cost and margin across every location.',
  varianceAnalysis: 'Theoretical usage against what actually sold.',
  profitabilityInsights: 'See the live margin of every menu item.',
  api: 'Push your data wherever you need it.',
  salesAndUsage: 'See what sold and how it moved through stock.',
  independentRestaurants: 'Tighter food cost without the spreadsheets.',
  restaurantGroups: 'Consolidated cost visibility across sites.',
  hotelsWithFnB: 'Control across full food and beverage.',
  bars: 'Know the margin on every drink you pour.',
  management: 'Margin visibility across the whole operation.',
  operations: 'Spot waste and price drift early.',
  kitchen: 'Live dish costs for sharper menu calls.',
  finance: 'COGS you can trust at month-end.',
};

const noDescs: NavDescs = {
  invoiceAutomation: 'Leverandørfakturaer leses linje for linje, automatisk.',
  supplierPriceTracking: 'Alle prisendringer fanges opp samme dag de skjer.',
  centralKitchen: 'Kalkuler produksjonskostnader og forsyn dine egne utsalgssteder.',
  anomalyDetection: 'Markerer overprising og uvanlige fakturalinjer for gjennomgang.',
  orderingSuggestions: 'Vet hva du bør bestille på nytt, basert på forbruk.',
  recipeBuilding: 'Kalkuler hver oppskrift fra oppdaterte ingredienspriser',
  stockCounting: 'Tell varer på mobil eller web, med eller uten nett.',
  inventoryTransfers: 'Spor varer som flyttes mellom dine lokasjoner.',
  wastageTracking: 'Logg svinn og se hva det koster deg.',
  dataQuality: 'Holder dataene dine på høyeste kvalitet, kontinuerlig.',
  performanceDashboards: 'Varekostnad og margin på tvers av alle lokasjoner.',
  varianceAnalysis: 'Teoretisk forbruk mot hva som faktisk ble solgt.',
  profitabilityInsights: 'Se sanntidsmarginen på hver rett',
  api: 'Send dataene dine dit du trenger dem.',
  salesAndUsage: 'Se hva som ble solgt og hvordan det beveget seg gjennom lageret.',
  independentRestaurants: 'Strammere varekostnad uten regnearkene.',
  restaurantGroups: 'Samlet kostnadsoversikt på tvers av steder.',
  hotelsWithFnB: 'Full kontroll over mat og drikke.',
  bars: 'Kjenn marginen på hver drikke du skjenker.',
  management: 'Marginoversikt for hele driften.',
  operations: 'Oppdager svinn og prisdrift tidlig.',
  kitchen: 'Oppdaterte rettpriser for skarpere menybeslutninger',
  finance: 'Varekost du kan stole på ved månedsslutt.',
};

const deDescs: NavDescs = {
  invoiceAutomation: 'Lieferantenrechnungen werden Zeile für Zeile automatisch gelesen.',
  supplierPriceTracking: 'Jede Preisänderung am Tag ihres Eingangs erfasst.',
  centralKitchen: 'Produktionskosten kalkulieren und eigene Standorte beliefern.',
  anomalyDetection: 'Markiert Überberechnungen und ungewöhnliche Rechnungszeilen zur Prüfung.',
  orderingSuggestions: 'Wissen, was nachzubestellen ist, basierend auf dem Verbrauch.',
  recipeBuilding: 'Jedes Rezept auf Basis aktueller Zutatenpreise kalkulieren.',
  stockCounting: 'Inventur per App oder Browser, online oder offline.',
  inventoryTransfers: 'Warenbewegungen zwischen Standorten nachverfolgen.',
  wastageTracking: 'Schwund dokumentieren und die Kosten sehen.',
  dataQuality: 'Hält Ihre Daten kontinuierlich auf höchster Qualität.',
  performanceDashboards: 'Wareneinsatz und Marge über alle Standorte.',
  varianceAnalysis: 'Theoretischer Verbrauch gegen tatsächlich Verkauftes.',
  profitabilityInsights: 'Echtzeit-Marge jedes Menüpunkts einsehen.',
  api: 'Daten dorthin übertragen, wo sie gebraucht werden.',
  salesAndUsage: 'Sehen, was verkauft wurde und wie es durch den Bestand lief.',
  independentRestaurants: 'Genauerer Wareneinsatz ohne Tabellen.',
  restaurantGroups: 'Konsolidierte Kostenübersicht über alle Standorte.',
  hotelsWithFnB: 'Volle Kontrolle über Speisen und Getränke.',
  bars: 'Die Marge auf jeden ausgeschenkten Drink kennen.',
  management: 'Margenübersicht für den gesamten Betrieb.',
  operations: 'Schwund und Preisdrift frühzeitig erkennen.',
  kitchen: 'Echtzeit-Gerichtkosten für präzisere Menüentscheidungen.',
  finance: 'Wareneinsatz, dem Sie zum Monatsende vertrauen können.',
};

const daDescs: NavDescs = {
  invoiceAutomation: 'Leverandørfakturaer læses linje for linje, automatisk.',
  supplierPriceTracking: 'Alle prisændringer fanget den dag, de sker.',
  centralKitchen: 'Beregn produktionsomkostninger og forsyner egne salgssteder.',
  anomalyDetection: 'Markerer overprissætning og usædvanlige fakturalinjer til gennemgang.',
  orderingSuggestions: 'Vid, hvad der skal genbestilles, baseret på forbrug.',
  recipeBuilding: 'Beregn hvert recept ud fra aktuelle ingredienspriser.',
  stockCounting: 'Tæl varer på mobil eller web, med eller uden net.',
  inventoryTransfers: 'Spor varer, der flyttes mellem dine lokationer.',
  wastageTracking: 'Registrer spild og se, hvad det koster dig.',
  dataQuality: 'Holder dine data i højeste kvalitet, løbende.',
  performanceDashboards: 'Matkostprocent og margin på tværs af alle lokationer.',
  varianceAnalysis: 'Teoretisk forbrug mod, hvad der faktisk blev solgt.',
  profitabilityInsights: 'Se den live-margin for hvert menupunkt.',
  api: 'Send dine data derhen, du har brug for det.',
  salesAndUsage: 'Se, hvad der blev solgt, og hvordan det bevægede sig gennem lageret.',
  independentRestaurants: 'Strammere matkostprocent uden regneark.',
  restaurantGroups: 'Samlet kostsynlighed på tværs af steder.',
  hotelsWithFnB: 'Kontrol på tværs af mad og drikke.',
  bars: 'Kend marginen på hver drink, du skænker.',
  management: 'Marginoverblik for hele driften.',
  operations: 'Opdag spild og prisdrift tidligt.',
  kitchen: 'Live rettpriser for skarpere menubeslutninger.',
  finance: 'COGS du kan stole på ved månedsskiftet.',
};

const svDescs: NavDescs = {
  invoiceAutomation: 'Leverantörsfakturor läses rad för rad, automatiskt.',
  supplierPriceTracking: 'Varje prisändring fångad den dag den sker.',
  centralKitchen: 'Beräkna produktionskostnader och försörj dina egna enheter.',
  anomalyDetection: 'Flaggar överdebiteringar och ovanliga fakturarader för granskning.',
  orderingSuggestions: 'Vet vad som ska beställas om, baserat på förbrukning.',
  recipeBuilding: 'Beräkna varje recept utifrån aktuella ingredienspriser.',
  stockCounting: 'Inventera på mobil eller webben, online eller offline.',
  inventoryTransfers: 'Spåra varor som flyttas mellan dina enheter.',
  wastageTracking: 'Logga svinn och se vad det kostar dig.',
  dataQuality: 'Håller dina data på högsta kvalitet, kontinuerligt.',
  performanceDashboards: 'Råvarukostnad och marginal på alla enheter.',
  varianceAnalysis: 'Teoretisk förbrukning mot vad som faktiskt såldes.',
  profitabilityInsights: 'Se den aktuella marginalen för varje menyartikel.',
  api: 'Skicka din data dit du behöver den.',
  salesAndUsage: 'Se vad som såldes och hur det rörde sig genom lagret.',
  independentRestaurants: 'Stramare råvarukostnad utan kalkylbladen',
  restaurantGroups: 'Samlad kostnadsöversikt över alla enheter.',
  hotelsWithFnB: 'Full kontroll över mat och dryck.',
  bars: 'Känn marginalen på varje drink du serverar.',
  management: 'Marginöversikt för hela verksamheten.',
  operations: 'Upptäck svinn och prisdrift tidigt.',
  kitchen: 'Aktuella rättkostnader för skarpare menybeslut.',
  finance: 'Råvarukostnad du kan lita på vid månadsslut.',
};

const nlDescs: NavDescs = {
  invoiceAutomation: 'Leveranciersfacturen worden regel voor regel automatisch gelezen.',
  supplierPriceTracking: 'Elke prijswijziging gevangen op de dag dat die binnenkomt.',
  centralKitchen: 'Bereken productiekosten en bevoorraad je eigen vestigingen.',
  anomalyDetection: 'Markeert te hoge rekeningen en ongebruikelijke factuurregels ter controle.',
  orderingSuggestions: 'Weet wat je moet nabestellen, op basis van verbruik.',
  recipeBuilding: 'Bereken elk recept op basis van actuele ingrediëntprijzen.',
  stockCounting: 'Tel voorraad op mobiel of web, online of offline.',
  inventoryTransfers: 'Volg goederen die tussen je locaties worden verplaatst.',
  wastageTracking: 'Registreer verspilling en zie wat het je kost.',
  dataQuality: 'Houdt je data continu op de hoogste kwaliteit.',
  performanceDashboards: 'Foodkosten en marge over alle locaties.',
  varianceAnalysis: 'Theoretisch gebruik versus wat er daadwerkelijk is verkocht.',
  profitabilityInsights: 'Bekijk de live marge van elk menu-item.',
  api: 'Stuur je data naar waar je het nodig hebt.',
  salesAndUsage: 'Zie wat er is verkocht en hoe het door de voorraad is gegaan.',
  independentRestaurants: 'Nauwkeurigere foodkosten zonder de spreadsheets.',
  restaurantGroups: 'Geconsolideerd kostenoverzicht over alle locaties.',
  hotelsWithFnB: 'Controle over het volledige food & beverage-aanbod.',
  bars: 'Ken de marge op elk drankje dat je inschenkt.',
  management: 'Margeoverzicht voor de hele operatie.',
  operations: 'Spoor verspilling en prijsdrift vroeg op.',
  kitchen: 'Actuele gerechtskosten voor scherpere menubeslissingen.',
  finance: 'COGS waarop je kunt vertrouwen bij maandafsluiting.',
};

const descMap: Record<string, NavDescs> = { en: enDescs, no: noDescs, de: deDescs, da: daDescs, sv: svDescs, nl: nlDescs };

export function getNavDescs(locale: string): NavDescs {
  return descMap[locale] ?? enDescs;
}
