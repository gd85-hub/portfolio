# Gleb Dvoryatkin - Portfolio

Personal portfolio site for a product designer. Built with Astro and Tailwind, deployed as a static site on Vercel.

Live: https://portfolio-wine-ten-t5i9dkg10f.vercel.app

## Stack
- Astro 5 (static output)
- Tailwind CSS (official integration)
- TypeScript (strict)
- Geist / Geist Mono fonts
- Hosted on Vercel (auto-deploy on push to `main`)

## Getting started
```bash
npm install
npm run dev      # local preview at http://localhost:4321
npm run build    # astro check + production build
npm run preview  # preview the build
npm run check    # type-check only
```
On Windows, if `node` is not on PATH, it lives at `C:\Program Files\nodejs\node.exe`.

## Project structure
```
src/
  styles/       design system: tokens, typography, motion, components (single source of styles)
  components/    Button, CopyEmail, Eyebrow, Footer, Nav, WorkCard
    sections/    Hero, SelectedWork, WhatIDo, Contact
    blocks/      case-study block renderers + CaseBlocks dispatcher
  layouts/      BaseLayout (Nav, Footer, theme, reveal, lightbox), CaseLayout
  data/         cases.ts - case study content and types, kept separate from markup
  pages/        index, about, resume, 404, case/[slug], preview/blocks
public/         static assets served as-is (resume PDF, favicon, case screenshots)
```

## Making changes
- Colors, spacing, type scale, motion: edit one token or one class in `src/styles`. Changes propagate site-wide.
- Buttons: use the `Button` component, never inline button classes.
- Typography: use the `t-*` role classes, do not hardcode sizes.
- Component props are typed with `HTMLAttributes` from `astro/types`; never use an index signature.
- Case content lives in `src/data/cases.ts`, either as typed blocks or the legacy `{ h, p }` format. See `AGENTS.md` for the full block list and conventions.
- `npm run build` runs `astro check` first; a type error blocks the build.

## Deploy
Push to `main`. Vercel builds and deploys automatically.
