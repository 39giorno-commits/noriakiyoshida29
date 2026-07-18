import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const pages = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/pages' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    hero: z.object({
      eyebrow: z.string(),
      line1: z.string(),
      line2: z.string(),
      statement: z.string(),
      image: z.string(),
      imageAlt: z.string(),
    }),
    reason: z.object({
      label: z.string(),
      title: z.string(),
      paragraphs: z.array(z.string()),
      quote: z.string(),
    }),
    policies: z.array(z.object({
      number: z.string(),
      title: z.string(),
      lead: z.string(),
      items: z.array(z.string()),
    })),
    profile: z.object({
      title: z.string(),
      intro: z.string(),
      timeline: z.array(z.object({
        year: z.string(),
        title: z.string(),
        text: z.string(),
        image: z.string().optional(),
      })),
      facts: z.array(z.object({ label: z.string(), value: z.string() })),
    }),
    support: z.object({ title: z.string(), text: z.string(), url: z.string() }),
    social: z.array(z.object({ label: z.string(), url: z.string(), note: z.string() })),
  }),
});

export const collections = { pages };
