---
title: "欢迎使用站内文章系统"
description: "这是一篇示例文章。现在你在 MOE / Story / 业务 页面的卡片下看到的，将是你站内的文章列表，而不是 Notion 外链。"
category: "ai"
date: 2025-06-17
draft: true
---

## 发生了什么变化

以前每个卡片只是一个跳转到 Notion 的链接。现在改成了：

- 你在 `src/content/blog/` 下新建 `.md` 文件
- 写完 push
- MOE 页的对应卡片下自动出现这篇文章的标题

## 怎么写新文章

在 `src/content/blog/` 下新建一个 `.md` 文件，格式：

```markdown
---
title: "你的文章标题"
description: "一句话摘要"
category: "ai"
date: 2025-06-20
---

正文内容...
```

`category` 决定文章出现在哪：

| category | 出现在 |
|----------|--------|
| `ai` | MOE → AI与杠杆 |
| `web3` | MOE → Web3思考 |
| `first-principles` | MOE → 第一性原理 |
| `ops-basics` | Story → Web3运营入门 |
| `data-analysis` | Story → 数据分析实战 |
| `good-ops` | Story → 什么是好的运营 |
| `interview` | 业务 → 面试题库 |

## 下一步

删掉这篇示例，写你的第一篇真实文章试试。
