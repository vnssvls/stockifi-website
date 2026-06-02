# Stockifi Website

Marketing website for [Stockifi](https://www.stockifi.io), built with **Astro**. Migrated off Webflow (DC-474). Content lives as code (markdown + data files via Astro content collections); no CMS backend.

## Stack

- **Astro 5** — static output, file-based routing.
- **Plain CSS, no Tailwind, no React.** Component styles live in each `.astro` `<style>` block; design tokens in [`src/styles/tokens.css`](src/styles/tokens.css), element defaults in [`src/styles/base.css`](src/styles/base.css).
- **Self-hosted fonts** via `@fontsource` (Montserrat headings, Inter body) — no Google Fonts CDN.
- **Dark-only** (light tokens are kept in `tokens.css` for a future flip; the layout never emits a theme switcher).
- **stylelint** with a strict-value guard so colours/spacing come from tokens, not literals.

## Commands

| Command | Does |
|---|---|
| `npm install` | Install dependencies |
| `npm run dev` | Dev server at `localhost:4321` |
| `npm run build` | Build to `dist/` |
| `npm run preview` | Preview the production build |
| `npm run check` | `astro check` (types) |
| `npm run lint:css` | stylelint over `src/**/*.{css,astro}` |

## Project layout

```
src/
  components/   reusable section + atom components (the live component library)
  layouts/      Layout.astro — head, fonts, tokens, Nav + Footer, SEO/OG meta
  pages/        routes (incl. /styleguide/* — internal component showcase)
  styles/       tokens.css + base.css
  data/         small structured data consumed by components
  content.config.ts   content collection schemas
content/        markdown + JSON content (blog, customer-stories, integrations, testimonials)
public/         served as-is — media/, flags/, logos, robots.txt, _redirects, og-default.jpg
docs/           migration planning, audit, blueprints, redirect map (not shipped)
scripts/        one-off harvest/convert tooling for the migration
assets/         harvested source images (mostly git-ignored; see assets/asset-map.csv)
```

## Styleguide

`/styleguide` is a living component library — it imports the same components the real pages use, so it never drifts. It is **internal**: auto-flagged `noindex`, disallowed in `robots.txt`, and should sit behind Cloudflare Access in production.

## Deploy

Static site → **Cloudflare Pages** (build `npm run build`, output `dist/`). Slug-preserving migration, so redirects are near-zero — see [`docs/audit/09-redirect-map.md`](docs/audit/09-redirect-map.md) and [`public/_redirects`](public/_redirects). Host canonicalization (non-www → www) is set as a Cloudflare rule; trailing-slash policy is `trailingSlash: 'never'` in [`astro.config.mjs`](astro.config.mjs).

## Migration background

Planning docs (URL inventory, content model, IA, competitor research, redirect map, per-page blueprints) live in [`docs/`](docs/). They are reference material and are not part of the build.
