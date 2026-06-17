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
};

const no: NavStrings = {
  product: 'Produkt', solutions: 'Løsninger', resources: 'Ressurser', pricing: 'Priser', company: 'Om oss',
  login: 'Logg inn', bookDemo: 'Book en demo',
  procurementGroup: 'Innkjøp', inventoryGroup: 'Lagerstyring', biGroup: 'Business Intelligence',
  byType: 'Etter type', byTeam: 'Etter team',
  invoiceAutomation: 'Fakturaautomatisering', supplierPriceTracking: 'Leverandørprissporing',
  centralKitchen: 'Sentralkjøkken', anomalyDetection: 'Anomalideteksjon', orderingSuggestions: 'Bestillingsforslag',
  recipeBuilding: 'Oppskriftbygging', stockCounting: 'Varetelling', inventoryTransfers: 'Lageroverganger',
  wastageTracking: 'Svinnregistrering', dataQuality: 'Datakvalitet',
  performanceDashboards: 'Ytelsesdashbord', varianceAnalysis: 'Variansanalyse',
  profitabilityInsights: 'Lønnsomhetsanalyse', api: 'API', salesAndUsage: 'Salg og forbruk',
  independentRestaurants: 'Enkeltstående restauranter', restaurantGroups: 'Restaurantkjeder',
  hotelsWithFnB: 'Hoteller med F&B', bars: 'Barer',
  management: 'Management', operations: 'Operasjon', kitchen: 'Kjøkken', finance: 'Økonomi',
  blog: 'Blogg', customerStories: 'Kundehistorier', faq: 'FAQ', pressAndMedia: 'Presse & Medier',
  savingsCalculator: 'Besparelseskalkulator', comparisons: 'Sammenligninger', comingSoon: 'Kommer snart',
  integrations: 'Integrasjoner', contact: 'Kontakt',
  viewAllSolutions: 'Se alle løsninger',
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
};

const sv: NavStrings = {
  product: 'Produkt', solutions: 'Lösningar', resources: 'Resurser', pricing: 'Priser', company: 'Om oss',
  login: 'Logga in', bookDemo: 'Boka en demo',
  procurementGroup: 'Inköp', inventoryGroup: 'Lagerhantering', biGroup: 'Business Intelligence',
  byType: 'Efter typ', byTeam: 'Efter team',
  invoiceAutomation: 'Fakturaautomatisering', supplierPriceTracking: 'Leverantörsprisövervakning',
  centralKitchen: 'Centralkök', anomalyDetection: 'Anomalidetektion', orderingSuggestions: 'Beställningsförslag',
  recipeBuilding: 'Receptbygge', stockCounting: 'Inventering', inventoryTransfers: 'Lageröverföringar',
  wastageTracking: 'Spårning av svinn', dataQuality: 'Datakvalitet',
  performanceDashboards: 'Prestandaöversikt', varianceAnalysis: 'Variansanalys',
  profitabilityInsights: 'Lönsamhetsanalys', api: 'API', salesAndUsage: 'Försäljning och förbrukning',
  independentRestaurants: 'Oberoende restauranger', restaurantGroups: 'Restauranggrupper',
  hotelsWithFnB: 'Hotell med F&B', bars: 'Barer',
  management: 'Management', operations: 'Drift', kitchen: 'Kök', finance: 'Ekonomi',
  blog: 'Blogg', customerStories: 'Kundberättelser', faq: 'FAQ', pressAndMedia: 'Press & Media',
  savingsCalculator: 'Besparingsräknare', comparisons: 'Jämförelser', comingSoon: 'Kommer snart',
  integrations: 'Integrationer', contact: 'Kontakt',
  viewAllSolutions: 'Se alla lösningar',
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
};

const map: Record<string, NavStrings> = { en, no, de, da, sv, nl };

export function getNavStrings(locale: string): NavStrings {
  return map[locale] ?? en;
}
