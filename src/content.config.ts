import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { glob } from 'astro/loaders';

const apps = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/apps' }),
  schema: z.object({
    name: z.string(),
    image: z.string().optional(),
    imageAlt: z.string().optional(),
    order: z.number().default(0),
    sample: z.boolean().default(false),
    links: z.object({
      ios: z.url().optional(),
      android: z.url().optional(),
      iosBeta: z.url().optional(),
      androidBeta: z.url().optional(),
    }).default({}),
  }),
});

export const collections = { apps };


