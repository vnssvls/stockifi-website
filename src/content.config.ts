// Astro content collections. Blog posts live as markdown in content/blog/en/
// (outside src/), harvested from Webflow during the migration. The glob loader
// reads them; the schema mirrors the Webflow frontmatter we kept.
// Locale collections (blogNo, blogDe, etc.) share the same schema — only the base path differs.
import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blogSchema = z.object({
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
});

const customerStoriesSchema = z.object({
  companyName: z.string(),
  slug: z.string().optional(),
  articleTitle: z.string(),
  metaTitle: z.string().optional(),
  metaDescription: z.string().optional(),
  user: z.string().default(''),
  designation: z.string().default(''),
  businessType: z.string().default(''),
  website: z.string().optional(),
  cardSummary: z.string().default(''),
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
});

const productsSchema = z.object({
  metaTitle: z.string(),
  metaDescription: z.string(),
  eyebrow: z.string(),
  heading: z.string(),
  subhead: z.string(),
  heroImage: z.string().default('/media/cta-bg-2.jpg'),
  order: z.number().default(99),
  category: z.enum(['procurement', 'inventory-management', 'business-intelligence']).default('procurement'),
  stepsTagline: z.string().default('How it works'),
  stepsHeading: z.string().optional(),
  steps: z.array(z.object({ heading: z.string(), body: z.string() })).default([]),
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
});

const solutionsSchema = z.object({
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
  testimonials: z.array(z.object({
    quote: z.string(),
    name: z.string(),
    position: z.string().default(''),
    company: z.string().default(''),
    logo: z.object({ src: z.string(), alt: z.string() }).optional(),
    images: z.array(z.object({ src: z.string(), alt: z.string(), objectPosition: z.string().optional() })).default([]),
    storyHref: z.string().default('/customer-stories'),
  })).default([]),
  ctaHeading: z.string().default('See where your margin is leaking'),
  ctaSubhead: z.string().default("Drop your email and we'll show you what Stockifi surfaces in your first 30 days."),
  draft: z.boolean().default(false),
});

// EN collections
const blog = defineCollection({ loader: glob({ pattern: '**/*.md', base: './content/blog/en' }), schema: blogSchema });
const customerStories = defineCollection({ loader: glob({ pattern: '**/*.md', base: './content/customer-stories/en' }), schema: customerStoriesSchema });
const products = defineCollection({ loader: glob({ pattern: '**/*.md', base: './content/products/en' }), schema: productsSchema });
const solutions = defineCollection({ loader: glob({ pattern: '**/*.md', base: './content/solutions/en' }), schema: solutionsSchema });

// Norwegian locale collections
const blogNo = defineCollection({ loader: glob({ pattern: '**/*.md', base: './content/blog/no' }), schema: blogSchema });
const customerStoriesNo = defineCollection({ loader: glob({ pattern: '**/*.md', base: './content/customer-stories/no' }), schema: customerStoriesSchema });
const productsNo = defineCollection({ loader: glob({ pattern: '**/*.md', base: './content/products/no' }), schema: productsSchema });
const solutionsNo = defineCollection({ loader: glob({ pattern: '**/*.md', base: './content/solutions/no' }), schema: solutionsSchema });

// German locale collections
const blogDe = defineCollection({ loader: glob({ pattern: '**/*.md', base: './content/blog/de' }), schema: blogSchema });
const customerStoriesDe = defineCollection({ loader: glob({ pattern: '**/*.md', base: './content/customer-stories/de' }), schema: customerStoriesSchema });
const productsDe = defineCollection({ loader: glob({ pattern: '**/*.md', base: './content/products/de' }), schema: productsSchema });
const solutionsDe = defineCollection({ loader: glob({ pattern: '**/*.md', base: './content/solutions/de' }), schema: solutionsSchema });

// Danish locale collections
const blogDa = defineCollection({ loader: glob({ pattern: '**/*.md', base: './content/blog/da' }), schema: blogSchema });
const customerStoriesDa = defineCollection({ loader: glob({ pattern: '**/*.md', base: './content/customer-stories/da' }), schema: customerStoriesSchema });
const productsDa = defineCollection({ loader: glob({ pattern: '**/*.md', base: './content/products/da' }), schema: productsSchema });
const solutionsDa = defineCollection({ loader: glob({ pattern: '**/*.md', base: './content/solutions/da' }), schema: solutionsSchema });

// Swedish locale collections
const blogSv = defineCollection({ loader: glob({ pattern: '**/*.md', base: './content/blog/sv' }), schema: blogSchema });
const customerStoriesSv = defineCollection({ loader: glob({ pattern: '**/*.md', base: './content/customer-stories/sv' }), schema: customerStoriesSchema });
const productsSv = defineCollection({ loader: glob({ pattern: '**/*.md', base: './content/products/sv' }), schema: productsSchema });
const solutionsSv = defineCollection({ loader: glob({ pattern: '**/*.md', base: './content/solutions/sv' }), schema: solutionsSchema });

// Dutch locale collections
const blogNl = defineCollection({ loader: glob({ pattern: '**/*.md', base: './content/blog/nl' }), schema: blogSchema });
const customerStoriesNl = defineCollection({ loader: glob({ pattern: '**/*.md', base: './content/customer-stories/nl' }), schema: customerStoriesSchema });
const productsNl = defineCollection({ loader: glob({ pattern: '**/*.md', base: './content/products/nl' }), schema: productsSchema });
const solutionsNl = defineCollection({ loader: glob({ pattern: '**/*.md', base: './content/solutions/nl' }), schema: solutionsSchema });

export const collections = {
  blog, customerStories, products, solutions,
  blogNo, customerStoriesNo, productsNo, solutionsNo,
  blogDe, customerStoriesDe, productsDe, solutionsDe,
  blogDa, customerStoriesDa, productsDa, solutionsDa,
  blogSv, customerStoriesSv, productsSv, solutionsSv,
  blogNl, customerStoriesNl, productsNl, solutionsNl,
};
