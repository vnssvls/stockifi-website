# CLAUDE.md — Stockifi Website (Astro)

Repo-level rules for the Astro site. Auto-loaded when working in this directory.

## Localization — non-negotiable
The site serves 6 locales: EN, NO (`no`), DA (`da`), SV (`sv`), NL (`nl`), DE (`de`).
**Every build or adjustment must serve all of them. Never hardcode English copy or unprefixed internal links.**

- **Copy** comes from the locale string files, never inline English:
  - Nav / footer labels → `src/data/nav-i18n.*` via `getNavStrings(locale)`
  - Per-component UI strings → the component's `STRINGS` map keyed by locale (pattern: `STRINGS[locale] ?? STRINGS.en`)
  - Page / collection content → the per-locale `content/` markdown + data files
- **Internal links** go through the locale-prefix helper (`lp()` / locale-aware href) so they resolve to `/no/…`, `/de/…`, etc. Never write a bare `/path` for a localized route.
- **New strings:** add the key to **every** locale in the relevant string file. If a real translation isn't ready, add the EN value as a clearly-flagged placeholder and tell V — never silently ship EN-only.
- **Before committing a UI/copy change:** confirm it renders for a non-EN locale (grep the new key across all locale blocks, or build + spot-check a `/de/…` route).

Legal pages are EN-canonical (locale files 301-redirect to EN) — the one intentional exception.

**Translation review / native sign-off:** follow Simon's SOP at `../stockifi-agents/website-copy/translation-review-sop.md` (locale sweep → reviewer edits → apply). Locked food-cost terms + currency conventions live in `../stockifi-agents/website-copy/spi-intro-translations.md`.

## Build / deploy
- Local dev: `npm run dev` → localhost:4321. Staging: stocki-stu.pages.dev (auto-deploys from `main`).
- Always `npm run build` before committing (408 pages should build green).
- Commit + push to `main` only when V asks or for confirmed fixes; staging redeploys on push.
