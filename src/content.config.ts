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

export const collections = { blog };
