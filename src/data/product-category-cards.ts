// Shared benefit card sets for individual product pages — one set per category.
// All pages within a category display the same 4 cards.
// iconKey maps to a key in nav-icons.json.

export type CategoryCard = { heading: string; body: string; iconKey: string };

export const procurementCards: CategoryCard[] = [
  {
    heading: 'Latest prices',
    body: "Invoices update ingredient costs the moment they're processed, not at month-end.",
    iconKey: 'percentage-circle',
  },
  {
    heading: 'Automated workflow',
    body: 'Stockifi captures the price and quantity of each ingredient, with no manual entry.',
    iconKey: 'receipt-2',
  },
  {
    heading: 'Anomaly detection',
    body: 'Overcharges and anomalies are flagged before they settle into your cost data.',
    iconKey: 'fluent-wand',
  },
  {
    heading: 'Supplier comparison',
    body: 'When the same ingredient comes from multiple suppliers, the price difference is visible at a glance.',
    iconKey: 'buildings-2',
  },
];

export const inventoryManagementCards: CategoryCard[] = [
  {
    heading: 'Faster counts',
    body: "Stock counts run on mobile, with pattern recognition, even offline, and syncs when you're done.",
    iconKey: 'box',
  },
  {
    heading: 'Waste costed',
    body: 'Waste and spoilage are logged at cost, so the numbers mean something when you close a count.',
    iconKey: 'trash',
  },
  {
    heading: 'Usage tracked',
    body: 'Stockifi compares what your kitchen consumed every period against what its recipes called for.',
    iconKey: 'sales-usage',
  },
  {
    heading: 'Recipe accuracy',
    body: 'Every dish is costed from live ingredient prices, so margins reflect what you actually pay.',
    iconKey: 'book',
  },
];

export const businessIntelligenceCards: CategoryCard[] = [
  {
    heading: 'All connected',
    body: 'Invoices, sales, and stock counts connect automatically, without exports or manual reconciliation.',
    iconKey: 'element-4',
  },
  {
    heading: 'Drill anywhere',
    body: 'Any metric breaks down by site, period, or dish, as far as you need to go.',
    iconKey: 'presention-chart',
  },
  {
    heading: 'Variance explained',
    body: 'Gaps between theoretical and actual usage show you what drove them, not just that they exist.',
    iconKey: 'trend-up',
  },
  {
    heading: 'Dish profitability',
    body: 'Each menu item is ranked by contribution, so you know what to promote and what to fix.',
    iconKey: 'fluent-finance',
  },
];
