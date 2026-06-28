// Icon key per benefit (in content order) for the 4-up BenefitGrid on solution
// pages. Keys resolve against nav-icons.json. Chosen to match each benefit's
// meaning and stay distinct within a page. Benefit order is identical across
// locales, so this single slug-keyed map covers every language.
export const solutionBenefitIcons: Record<string, string[]> = {
  // by type
  'independent-restaurants': ['bolt', 'receipt-2', 'presention-chart', 'messages-2'],
  'restaurant-groups': ['data', '3dcube', 'radar', 'bolt'],
  hotels: ['buildings-2', 'bolt', 'presention-chart', 'reserve'],
  bars: ['trend-up', 'cocktail', 'receipt-2', 'flash'],
  // by team
  management: ['element-4', 'sparkle', 'presention-chart', 'buildings-2'],
  operations: ['shield', 'menu-board', 'presention-chart', 'fluent-wand'],
  kitchen: ['bolt', 'sparkle', 'chef-hat', 'box'],
  finance: ['fluent-finance', 'box-search', 'presention-chart', 'newspaper'],
};

// Icon key per showcase sub-point (FeatureShowcase "how it helps", 2 per page),
// in content order. Same conventions as above.
export const solutionShowcaseIcons: Record<string, string[]> = {
  'independent-restaurants': ['book', 'fluent-wand'],
  'restaurant-groups': ['buildings-2', 'chef-hat'],
  hotels: ['building', 'reserve'],
  bars: ['box-search', 'cocktail'],
  management: ['bolt', 'box-search'],
  operations: ['bolt', 'buildings-2'],
  kitchen: ['percentage-circle', 'receipt-2'],
  finance: ['fluent-wand', 'presention-chart'],
};
