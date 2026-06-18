// Icon key per howItWorks sub-point (FeatureShowcase, 2 per product page), in
// content order. Keys resolve against nav-icons.json. Chosen to match each point
// and stay distinct within a page. Point order is identical across locales.
export const productHowItWorksIcons: Record<string, string[]> = {
  // procurement
  'anomaly-detection': ['receipt-2', 'box-search'],
  'central-kitchen': ['percentage-circle', 'buildings-2'],
  'invoice-automation': ['fluent-wand', 'receipt-2'],
  'ordering-suggestions': ['ordering-suggestions', 'box'],
  'supplier-price-tracking': ['trend-up', 'book'],
  // business-intelligence
  api: ['code', 'flash'],
  'data-quality': ['data-quality', 'box-search'],
  'performance-dashboards': ['receipt-2', 'element-4'],
  profitability: ['bolt', 'chef-hat'],
  'variance-analysis': ['presention-chart', 'box'],
  // inventory-management
  'inventory-transfers': ['convert-3d-cube', 'box'],
  'recipe-building': ['receipt-2', 'book'],
  'sales-and-usage': ['book', 'sales-usage'],
  'stock-counting': ['box', 'setting-2'],
  'wastage-tracking': ['trash', 'percentage-circle'],
};
