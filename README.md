# Robert Kan — Physics Educator

Personal website built with [Astro](https://astro.build), hosted on GitHub Pages.

**Site:** https://kanwei1991.github.io

## Tech Stack

- **Framework:** Astro 5
- **CSS:** Tailwind CSS
- **Content:** Markdown (via Astro Content Collections)
- **Math:** KaTeX (remark-math + rehype-katex)
- **Deploy:** GitHub Actions → GitHub Pages

## Local Development

```bash
npm install
npm run dev     # Start dev server at localhost:4321
npm run build   # Build static site to dist/
npm run preview # Preview the built site
```

## Adding Content

All content is in `src/content/` as Markdown files:

- **Courses:** `src/content/courses/*.md`
- **Labs:** `src/content/labs/*.md`
- **Blog posts:** `src/content/blog/*.md`
- **Photography albums:** `src/content/photography/*.md`

Just add a new Markdown file with the appropriate frontmatter, commit, and push — the site auto-deploys.
