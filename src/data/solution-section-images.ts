// Solution page split-block imagery. Three images per slug, in order:
//   [0] Hero (PageHeaderHero) · [1] Problem split (FeatureSplit) · [2] Showcase (FeatureShowcase)
// [0] reuses the matching /solutions landing photo (solution-<slug>.jpg) so the hero
// matches the card on the landing page. Bars uses a dedicated hero photo. [1] and [2]
// reuse the home-page composites (real photography with a product UI component baked in).
const S = (n: string) => `/media/solution-${n}.jpg`;
const P = (n: string) => `/media/photos/${n}.png`;

export const solutionSectionImages: Record<string, [string, string, string]> = {
  // by team — hero matches the landing card
  management: [S('management'), P('hero-manager'), P('benefits-manager-chef')],
  operations: [S('operations'), P('hero-owner'), P('teams-finance')],
  kitchen: [S('kitchen'), P('hero-chef'), P('teams-operations')],
  finance: [S('finance'), P('benefits-manager-chef'), P('hero-manager')],
  // by type
  'independent-restaurants': [S('independent-restaurants'), P('teams-management'), P('hero-chef')],
  'restaurant-groups': [S('restaurant-groups'), P('teams-finance'), P('hero-manager')],
  hotels: [S('hotels'), P('teams-operations'), P('benefits-manager-chef')],
  // bars has no UI composites; alternate the two bar photos so blocks stay on-theme
  // without repeating side by side (only two bar photos exist).
  bars: ['/media/solution-bars-hero.jpg', S('bars'), '/media/solution-bars-hero.jpg'],
};

const FALLBACK: [string, string, string] = [S('management'), P('hero-manager'), P('teams-finance')];

export function solutionImages(slug: string): [string, string, string] {
  return solutionSectionImages[slug] ?? FALLBACK;
}
