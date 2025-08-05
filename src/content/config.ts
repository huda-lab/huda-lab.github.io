import { defineCollection, z } from 'astro:content';

const papersCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    link: z.string().optional(),
    where: z.string().optional(),
    when: z.string().optional(),
    authors: z.array(z.string()).optional(),
    tags: z.array(z.string()).optional(),
    links: z.array(z.object({
      txt: z.string(),
      ref: z.string()
    })).optional(),
  })
});

export const collections = {
  'papers': papersCollection,
}; 