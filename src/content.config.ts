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

export const collections = { blog, customerStories };
