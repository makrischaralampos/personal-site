import { glob } from "astro/loaders";
import { defineCollection, z } from "astro:content";

const quests = defineCollection({
  loader: glob({ pattern: "**/*.json", base: "./src/content/quests" }),
  schema: z.object({
    title: z.string(),
    status: z.enum(["Completed", "In Progress", "Planned"]),
    summary: z.string(),
    stack: z.array(z.string()),
    githubUrl: z.string().url().optional(),
    liveUrl: z.string().url().optional(),
    order: z.number().default(0),
  }),
});

export const collections = { quests };
