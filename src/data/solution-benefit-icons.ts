// Icon key per benefit (in content order) for the 4-up BenefitGrid on solution
// pages. Keys resolve against nav-icons.json. Chosen to match each benefit's
// meaning and stay distinct within a page. Benefit order is identical across
// locales, so this single slug-keyed map covers every language.
export const solutionBenefitIcons: Record<string, string[]> = {
  // by type
  'independent-restaurants': ['book', 'receipt-2', 'presention-chart', 'setting-2'],
  'restaurant-groups': ['book', 'presention-chart', 'buildings-2', 'fluent-finance'],
  hotels: ['buildings-2', 'book', 'presention-chart', 'reserve'],
  bars: ['cocktail', 'box-search', 'receipt-2', 'flash'],
  // by team
  management: ['element-4', 'box-search', 'presention-chart', 'buildings-2'],
  operations: ['bolt', 'convert-3d-cube', 'presention-chart', 'fluent-wand'],
  kitchen: ['book', 'percentage-circle', 'chef-hat', 'box'],
  finance: ['fluent-finance', 'box-search', 'presention-chart', 'book'],
};
