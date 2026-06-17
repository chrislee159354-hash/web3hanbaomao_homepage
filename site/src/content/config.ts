import { defineCollection, z } from 'astro:content';

// 项目作品集 —— 在 src/content/projects/ 下新建 .md 文件即可自动上线
const projects = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    image: z.string().optional(),
    tags: z.array(z.string()).default([]),
    date: z.date(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { projects };
