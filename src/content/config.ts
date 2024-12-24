import { defineCollection, z } from 'astro:content';

const themes = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    color: z.string(),
    objects: z.array(z.object({
      title: z.string(),
      tombstone: z.string(),
      image_source: z.object({
        type: z.string(),
        src: z.string(),
      }),
      description: z.string(),
    })),
    order: z.number(),
  }),
});

export const collections = { themes };