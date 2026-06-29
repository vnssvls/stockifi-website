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

`/styleguide` is a living component library — it imports the same components the real pages use, so it never drifts. It is **internal**: auto-flagged `noindex` and disallowed in `robots.txt`.

It ships only to the **staging/build environment**, never to production: the production build (`npm run build:prod`) strips `dist/styleguide` after building, so the live site has no styleguide routes at all. Staging keeps it (build with `npm run build`) as the team reference. See **Deploy** for the per-environment build commands.

## Deploy

Static site → **Firebase Hosting**. Output is `dist/`; deploy `firebase deploy`. Config is in [`firebase.json`](firebase.json): `public: dist`, `cleanUrls: true`, `trailingSlash: false` (matches Astro's `trailingSlash: 'never'` in [`astro.config.mjs`](astro.config.mjs)), long-cache headers for `/media` + fingerprinted assets, and the `/product` redirect.

**Two environments, two build commands** — the only difference is the internal `/styleguide`:

| Environment | Build command | Includes `/styleguide`? |
|---|---|---|
| Staging / build | `npm run build` | yes (team reference) |
| Production / live | `npm run build:prod` | no (stripped from `dist/` after build) |

Point each Firebase environment's build command at the matching script. `build:prod` runs the normal build, then removes `dist/styleguide`.

- **Build is self-contained.** A clean `git clone && npm ci && npm run build` produces the full site — all images are committed under [`public/media/`](public/media/) and bundle into `dist/`. The git-ignored `assets/` directory is only harvest *source* (regenerable from `assets/asset-map.csv`), not needed to build or deploy. No env vars, no secrets.
- **Host canonicalization** (non-www → www) is a domain-level setting in Firebase (connect `www.stockifi.io` as primary and redirect the apex). It is not in `firebase.json` because Firebase redirects are path-based, not host-based.
- **Redirects:** the slug-preserving migration means near-zero per-URL redirects — see [`docs/audit/09-redirect-map.md`](docs/audit/09-redirect-map.md). The old [`public/_redirects`](public/_redirects) is Cloudflare-Pages syntax (currently empty/no-op) and is ignored by Firebase; port any future redirects into `firebase.json`.
- **Analytics** (GTM `GTM-MLCJD2PB`) is host-gated in [`src/layouts/Layout.astro`](src/layouts/Layout.astro) to `stockifi.io` / `www.stockifi.io` so staging + localhost never pollute it. Update that allow-list if the production hostname changes.

## Migration background

Planning docs (URL inventory, content model, IA, competitor research, redirect map, per-page blueprints) live in [`docs/`](docs/). They are reference material and are not part of the build.
