# 🚀 Xphinx Collection - Wiki & Editing Guide

Welcome to the Xphinx Collection! This site is built using [VitePress](https://vitepress.dev/).

**Live Site:** [https://xphinx-x.github.io/my-vitepress-site/](https://xphinx-x.github.io/my-vitepress-site/)

---

## 📝 How to Update the Collections

You don't need to know how to code to update this site. Everything is written in simple Markdown (text files). 

### 1. Adding an item to an existing list
Let's say you want to add a new tool to the "Cool Tools" page.
1. Open `docs/collections/tools.md`.
2. Find the category (e.g., `## 🚀 Productivity`).
3. Add a new line following this format:
   `- **[Name of Tool](https://link-to-tool.com)** - A short description of what it does.`
4. Save the file.

### 2. Creating a brand new category page
1. Go to the `docs/collections/` folder.
2. Create a new file named `my-category.md`.
3. Paste this template inside:
   ```markdown
   # 🏷️ My Category Title

   A short description of this category.

   ## Sub-category 1
   - **[Item 1](https://link.com)** - Description.
   - **[Item 2](https://link.com)** - Description.