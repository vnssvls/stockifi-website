// JSON-LD structured data builders — single source of truth for DC-472 "SEO finalize".
// Builders return plain objects; <JsonLd> renders them. Pages derive their schema
// from the SAME data they render (content collections, faqs.json), so a copy edit
// updates the visible page and its schema together — they can never drift.
//
// All URLs use the production canonical host (matches astro.config `site`), so the
// schema is stable regardless of which environment serves the page.

const SITE_URL = 'https://www.stockifi.io';
const ORG_ID = `${SITE_URL}/#organization`;
const WEBSITE_ID = `${SITE_URL}/#website`;

export const SITE = {
  url: SITE_URL,
  name: 'Stockifi',
  logo: `${SITE_URL}/logo.svg`,
  email: 'support@stockifi.io',
  description:
    'Stockifi is a restaurant management platform that gives hospitality businesses full visibility over food costs, recipe margins, and ingredient consumption.',
  // sameAs (social profiles) intentionally omitted until the real URLs are confirmed —
  // the footer links are still placeholders. Add verified profile URLs here when ready.
};

type Crumb = { name: string; path: string };
type Faq = { question: string; answer: string };

/** Absolute URL for a site-relative path (no trailing slash beyond root). */
export function abs(path = '/'): string {
  if (/^https?:\/\//.test(path)) return path;
  const clean = ('/' + path).replace(/\/+/g, '/').replace(/(.)\/$/, '$1');
  return SITE_URL + clean;
}

function organization() {
  return {
    '@type': 'Organization',
    '@id': ORG_ID,
    name: SITE.name,
    url: SITE_URL,
    logo: SITE.logo,
    email: SITE.email,
    description: SITE.description,
  };
}

function website() {
  return {
    '@type': 'WebSite',
    '@id': WEBSITE_ID,
    url: SITE_URL,
    name: SITE.name,
    publisher: { '@id': ORG_ID },
  };
}

/** Global graph emitted on every page via Layout — establishes the brand entity once. */
export function globalGraph() {
  return { '@context': 'https://schema.org', '@graph': [organization(), website()] };
}

/** BreadcrumbList from an ordered [{ name, path }] trail. */
export function breadcrumbs(items: Crumb[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((it, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: it.name,
      item: abs(it.path),
    })),
  };
}

/** FAQPage from [{ question, answer }] — eligible for expandable FAQ rich results. */
export function faqPage(items: Faq[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((q) => ({
      '@type': 'Question',
      name: q.question,
      acceptedAnswer: { '@type': 'Answer', text: q.answer },
    })),
  };
}

/** Flatten the /faq faqs.json category structure ([{ items: [...] }]) into Q&A pairs. */
export function flattenFaqs(categories: { items?: Faq[] }[]): Faq[] {
  return categories.flatMap((c) => c.items ?? []);
}

/** Article / BlogPosting node. Pass type: 'Article' for editorial (customer stories). */
export function article(opts: {
  type?: 'BlogPosting' | 'Article';
  headline: string;
  description?: string;
  url: string;
  image?: string;
  datePublished?: string;
  inLanguage?: string;
}) {
  const node: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': opts.type ?? 'BlogPosting',
    headline: opts.headline,
    mainEntityOfPage: abs(opts.url),
    publisher: { '@id': ORG_ID },
    author: { '@id': ORG_ID },
  };
  if (opts.description) node.description = opts.description;
  if (opts.image) node.image = abs(opts.image);
  if (opts.datePublished) node.datePublished = opts.datePublished;
  if (opts.inLanguage) node.inLanguage = opts.inLanguage;
  return node;
}
