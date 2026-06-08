// Astro content collections. Blog posts live as markdown in content/blog/en/
// (outside src/), harvested from Webflow during the migration. The glob loader
// reads them; the schema mirrors the Webflow frontmatter we kept.
import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './content/blog/en' }),
  schema: z.object({
    title: z.string(),
    slug: z.string().optional(),
    metaTitle: z.string().optional(),
    metaDescription: z.string().optional(),
    excerpt: z.string().default(''),
    postSummary: z.string().optional(),
    readTime: z.string().default(''),
    category: z.string().default('Uncategorized'),
    // Webflow exports an empty string when unset; treat that as "no date".
    publishDate: z.preprocess((v) => (v ? v : undefined), z.coerce.date().optional()),
    featured: z.boolean().default(false),
    heroImage: z.string().optional(),
    heroImageAlt: z.string().default(''),
    ctaText: z.string().optional(),
    ctaUrl: z.string().optional(),
    draft: z.boolean().default(false),
    webflowId: z.string().optional(),
  }),
});

// Customer stories — markdown in content/customer-stories/en/, harvested from Webflow.
const customerStories = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './content/customer-stories/en' }),
  schema: z.object({
    companyName: z.string(),
    slug: z.string().optional(),
    articleTitle: z.string(),
    metaTitle: z.string().optional(),
    metaDescription: z.string().optional(),
    user: z.string().default(''),
    designation: z.string().default(''),
    businessType: z.string().default(''),
    website: z.string().optional(),
    cardSummary: z.string().default(''), // home/library card teaser (from the live site)
    oneLiner: z.string().default(''),
    featuredQuote: z.string().default(''),
    fullTestimonial: z.string().default(''),
    userPhoto: z.string().optional(),
    logoPrimary: z.string().optional(),
    logoTransparent: z.string().optional(),
    thumbnail: z.string().optional(),
    imageGrid: z.array(z.string()).default([]),
    singleImage: z.string().optional(),
    draft: z.boolean().default(false),
    webflowId: z.string().optional(),
  }),
});

// Product item pages — markdown frontmatter in content/products/en/.
const products = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './content/products/en' }),
  schema: z.object({
    metaTitle: z.string(),
    metaDescription: z.string(),
    eyebrow: z.string(),
    heading: z.string(),
    subhead: z.string(),
    heroImage: z.string().default('/media/cta-bg-2.jpg'),
    order: z.number().default(99),
    stepsTagline: z.string().default('How it works'),
    stepsHeading: z.string().optional(),
    steps: z.array(z.object({ heading: z.string(), body: z.string() })).default([]),
    // How-it-works as a split showcase (Feature v7): copy + a body paragraph + up to
    // 2 process points + a landscape media slot. When present, it replaces the step timeline.
    howItWorks: z.object({
      tagline: z.string().default('How it works'),
      heading: z.string(),
      body: z.string(),
      points: z.array(z.object({ heading: z.string(), body: z.string() })).max(2).default([]),
      image: z.string().optional(),
      imageAlt: z.string().default(''),
      imageSide: z.enum(['left', 'right']).default('right'),
    }).optional(),
    showIntegrations: z.boolean().default(true),
    integrationsHeading: z.string().default('Works with the tools you run'),
    integrationsSubject: z.string().default('your existing systems'),
    benefits: z.array(z.object({ heading: z.string(), body: z.string() })).default([]),
    faqHeading: z.string().default('Questions, answered'),
    faqs: z.array(z.object({ question: z.string(), answer: z.string() })).default([]),
    ctaHeading: z.string().default('See it on your numbers'),
    ctaSubhead: z.string().default("Book a short call and we'll show you what Stockifi surfaces in your first 30 days."),
    draft: z.boolean().default(false),
  }),
});

// Solutions item pages — markdown frontmatter in content/solutions/en/.
const solutions = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './content/solutions/en' }),
  schema: z.object({
    metaTitle: z.string(),
    metaDescription: z.string(),
    eyebrow: z.string(),
    heading: z.string(),
    subhead: z.string(),
    order: z.number().default(99),
    group: z.string().default(''),
    problemTagline: z.string().default('The problem'),
    problemHeading: z.string().optional(),
    problemBody: z.string().default(''),
    problem: z.array(z.string()).default([]),
    benefits: z.array(z.object({ heading: z.string(), body: z.string() })).default([]),
    showcaseTagline: z.string().default('How it helps'),
    showcaseHeading: z.string().optional(),
    showcaseBody: z.string().default(''),
    showcaseSubs: z.array(z.object({ heading: z.string(), body: z.string() })).default([]),
    faqHeading: z.string().default('Questions, answered'),
    faqs: z.array(z.object({ question: z.string(), answer: z.string() })).default([]),
    testimonials: z.array(z.object({ quote: z.string(), name: z.string(), position: z.string().default(''), company: z.string().default(''), storyHref: z.string().default('/customer-stories') })).default([]),
    ctaHeading: z.string().default('See where your margin is leaking'),
    ctaSubhead: z.string().default("Drop your email and we'll show you what Stockifi surfaces in your first 30 days."),
    draft: z.boolean().default(false),
  }),
});

export const collections = { blog, customerStories, products, solutions };
