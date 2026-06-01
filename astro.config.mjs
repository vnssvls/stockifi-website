import { defineConfig } from 'astro/config';

// Stockifi website — Webflow→Astro migration (DC-474).
// Plain CSS (no Tailwind). Content collections + /lang/ locale routing and
// integrations (sitemap, etc.) are wired in their own build steps, not here yet.
export default defineConfig({
  site: 'https://www.stockifi.io',
});
