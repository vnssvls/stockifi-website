import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Stockifi website — Webflow→Astro migration (DC-474).
// Plain CSS (no Tailwind). Content collections + /lang/ locale routing are wired
// in their own build steps. `site` powers canonical URLs + the sitemap.
export default defineConfig({
  site: 'https://www.stockifi.io',
  // Non-trailing-slash canonical, one policy site-wide (see docs/audit/09-redirect-map.md).
  trailingSlash: 'never',
  integrations: [
    sitemap({
      // Keep internal/ad-LP routes out of the sitemap. Styleguide is team-only;
      // /intro + /intro-details are paid-traffic LPs flagged noindex.
      filter: (page) =>
        !page.includes('/styleguide') &&
        !page.includes('/intro'),
    }),
  ],
});
