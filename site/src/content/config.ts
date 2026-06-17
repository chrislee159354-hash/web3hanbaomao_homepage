import { defineCollection, z } from 'astro:content';

// 项目作品集 —— src/content/projects/*.md
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

// 文章 —— src/content/blog/*.md
// category 决定文章出现在哪个页面：
//   ai, web3, first-principles → MOE页
//   ops-basics, data-analysis, good-ops → Story页
//   interview → 业务页面试题库
const blog = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    category: z.enum([
      'ai',
      'web3',
      'first-principles',
      'ops-basics',
      'data-analysis',
      'good-ops',
      'interview',
    ]),
    date: z.date(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { projects, blog };
