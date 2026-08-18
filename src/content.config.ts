import { glob } from "astro/loaders";
import { z } from "astro/zod";
import { defineCollection } from "astro:content";

const quests = defineCollection({
  loader: glob({ pattern: "**/*.json", base: "./src/content/quests" }),
  schema: z.object({
    title: z.string(),
    status: z.enum(["Completed", "In Progress", "Planned"]),
    summary: z.string(),
    stack: z.array(z.string()),
    githubUrl: z.url().optional(),
    liveUrl: z.url().optional(),
    order: z.number().default(0),
  }),
});

const chronicle = defineCollection({
  loader: glob({ pattern: "**/*.mdx", base: "./src/content/chronicle" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  }),
});

export const collections = { quests, chronicle };
