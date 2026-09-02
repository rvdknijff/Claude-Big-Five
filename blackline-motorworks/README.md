# Blackline Motorworks

Front-end website for **Blackline Motorworks**, a fictional performance-car workshop in Utrecht
specialising in Porsche, BMW M, Audi RS and Mercedes-AMG.

> Part of the **Claude Big Five** showcase. Fictional company — every person, project, figure,
> review and price is invented. Not real client work, not automotive advice.

**Design direction:** dark motorsport engineering — near-black grounds, one hot accent, a
monospaced data language, hard edges and technical grids. See [`DESIGN.md`](./DESIGN.md).

## Pages

| Route | Page |
|-------|------|
| `/` | Home — hero, expertise index, featured 992 build, selected projects, dyno philosophy, workshop, CTA |
| `/services` | The seven disciplines in detail |
| `/projects` | All projects, filterable by marque |
| `/projects/:slug` | Project detail — stock-vs-build table, scope, before/after, dyno chart |
| `/workshop` | About / the workshop / the people |
| `/contact` | Booking form (client-side validation + states, submits nothing) |

## Tech

- React 19 + TypeScript (strict) + Vite 8
- Tailwind CSS 4 (CSS-first `@theme` tokens)
- react-router-dom 7 (lazy-loaded routes)
- Framer Motion — hero parallax, dyno-curve draw, mobile menu only
- Self-hosted fonts via `@fontsource-variable` (Archivo, JetBrains Mono)
- Signature interactions hand-built: `BeforeAfterSlider`, `DynoChart` (SVG), `useCountUp`

No back end. Forms validate and show loading / success / error states entirely on the client.
All content is local mock data under `src/data/`.

## Getting started

```bash
npm install
npm run dev        # start Vite dev server
npm run build      # type-check + production build to dist/
npm run preview    # serve the production build
npm run typecheck  # tsc --noEmit
npm run lint       # eslint
npm run fetch:images   # re-download / swap photography (see below)
```

Requires Node 20.19+ or 22.12+.

## Photography

Photos live in `public/images/` and are committed. `scripts/fetch-images.mjs` holds a manifest
of Unsplash photo IDs, crops and alt text; running `npm run fetch:images` re-downloads them as
optimised WebP and regenerates `src/data/media.ts` and `public/images/CREDITS.md`. To swap an
image, change its entry in the manifest and rerun.

## Project structure

```
src/
├── components/
│   ├── layout/     Header, Footer, Logo, PageHeader, Layout
│   ├── ui/         Button, Reveal, SectionHeading, Figure
│   ├── home/       one component per homepage section
│   ├── projects/   ProjectCard, BeforeAfterSlider, DynoChart
│   └── contact/    ContactForm
├── data/           site, services, projects, team, media (generated)
├── hooks/          useCountUp, useInViewOnce, usePrefersReducedMotion
├── lib/            cn
└── pages/          Home, Services, Projects, ProjectDetail, Workshop, Contact, NotFound
```
