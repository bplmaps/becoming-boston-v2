import { defineCollection, z } from 'astro:content';

const themes = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    color: z.string(),
    order: z.number(),
  }),
});

export const collections = { themes };