import { defineCollection, z } from "astro:content";

const coursesCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    grade: z.string().optional(),
    topics: z.array(z.string()).default([]),
    featuredImage: z.string().optional(),
    published: z.boolean().default(true),
    date: z.date().optional(),
  }),
});

const labsCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    objective: z.string().optional(),
    equipment: z.array(z.string()).default([]),
    difficulty: z.enum(["beginner", "intermediate", "advanced"]).default("intermediate"),
    duration: z.string().optional(),
    published: z.boolean().default(true),
    date: z.date().optional(),
  }),
});

const blogCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    date: z.date(),
    tags: z.array(z.string()).default([]),
    published: z.boolean().default(true),
    featuredImage: z.string().optional(),
  }),
});

const photographyCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    coverImage: z.string().optional(),
    published: z.boolean().default(true),
    date: z.date().optional(),
  }),
});

export const collections = {
  courses: coursesCollection,
  labs: labsCollection,
  blog: blogCollection,
  photography: photographyCollection,
};
