# Gleb Dvoryatkin - Portfolio

Personal portfolio site for a product designer. Built with Astro and Tailwind, deployed as a static site on Vercel.

Live: https://portfolio-wine-ten-t5i9dkg10f.vercel.app

## Stack
- Astro (static output)
- Tailwind CSS (official integration)
- Geist / Geist Mono fonts
- Hosted on Vercel (auto-deploy on push to `main`)

## Getting started
```bash
npm install
npm run dev      # local preview at http://localhost:4321
npm run build    # production build
npm run preview  # preview the build
```
On Windows, if `node` is not on PATH, it lives at `C:\Program Files\nodejs\node.exe`.

## Project structure
```
src/
  styles/       design system: tokens, typography, motion, components (single source of styles)
  components/    Button, Eyebrow, WorkCard, Nav
    sections/    Hero, SelectedWork, About, Contact
  layouts/      BaseLayout (Nav, theme, reveal), CaseLayout
  data/         cases.ts - case study content, kept separate from markup
  pages/        index.astro, resume.astro, case/[slug].astro
public/         static assets served as-is (includes the resume PDF)
```

## Making changes
- Colors, spacing, type scale, motion: edit one token or one class in `src/styles`. Changes propagate site-wide.
- Buttons: use the `Button` component, never inline button classes.
- Typography: use the `t-*` role classes, do not hardcode sizes.
- Add a case study: add an entry to `src/data/cases.ts`; a page is generated automatically at `/case/{slug}`.
- Case content is assembled from typed blocks in `src/data/cases.ts`.
  See `AGENTS.md` for the full block list and conventions.

See `AGENTS.md` for the full set of conventions and current placeholders.

## Deploy
Push to `main`. Vercel builds and deploys automatically.
