# Northbound Expeditions

Front-end website for **Northbound Expeditions**, a fictional guiding company running
small-group expeditions (max eight people) into Norway, Iceland, Scotland, Swedish Lapland and
the Faroe Islands.

> Part of the **Claude Big Five** showcase. Fictional company — the guides, expeditions,
> prices, dates and journal entries are invented. Not real client work; nothing here is travel
> or safety advice.

**Design direction:** a modern outdoor editorial magazine — big landscape photography, a
Newsreader serif with italic emphasis, warm off-white and deep forest green, one functional
orange accent, thin hairlines instead of cards. See [`DESIGN.md`](./DESIGN.md).

## Pages

| Route | Page |
|-------|------|
| `/` | Home — hero, expedition explorer, a scroll-told field story, why-small-groups, guides, safety, journal, sustainability, CTA |
| `/expeditions` | All five expeditions, sortable by difficulty / length / season |
| `/expeditions/:slug` | Expedition detail — facts strip, interactive route profile + itinerary, scroll story, what's included / to bring |
| `/guides` | The three-person guiding team and the safety principles |
| `/journal` | Field notes and skills articles |
| `/journal/:slug` | A single article, rendered from typed content blocks |
| `/about` | Why the company exists and what it holds to |
| `/faq` | Grouped FAQ (fitness, groups, money, on the trip) |
| `/contact` | Enquiry form (client-side validation + states, submits nothing) |

## Signature interactions

- **Scroll story** (`components/expeditions/ScrollStory.tsx`) — a sticky photograph
  cross-fading between "Day 01 → …" beats as the text scrolls past.
- **Route profile** (`components/expeditions/RouteProfile.tsx`) — an SVG elevation profile
  that draws in on scroll; hovering an itinerary day highlights it on the graph. The profile
  shape is generated from each day's ascent so it reads like real terrain.
- **Menu overlay** — a full-screen exploration menu with expedition thumbnails, not just links.

## Tech

- React 19 + TypeScript (strict) + Vite 8
- Tailwind CSS 4 (CSS-first `@theme` tokens)
- react-router-dom 7 (lazy-loaded routes)
- Framer Motion — hero/parallax, menu wipe, profile draw
- **Lenis** — global smooth scroll, disabled under `prefers-reduced-motion`
- Self-hosted fonts via `@fontsource-variable` (Newsreader, Inter)

No back end. The enquiry form validates and shows loading / success / error states purely on
the client. All content is local mock data under `src/data/`.

## Getting started

```bash
npm install
npm run dev
npm run build        # type-check + production build to dist/
npm run preview
npm run typecheck
npm run lint
npm run fetch:images
```

Requires Node 20.19+ or 22.12+.

## Photography

Committed under `public/images/`. `scripts/fetch-images.mjs` holds the Unsplash manifest;
`npm run fetch:images` re-downloads optimised WebP and regenerates `src/data/media.ts` and
`public/images/CREDITS.md`.

## Structure

```
src/
├── components/
│   ├── layout/       Header (menu overlay), Footer, Logo, PageIntro, Layout
│   ├── ui/           Button, Reveal, Figure, DifficultyMeter, Accordion
│   ├── expeditions/  ExpeditionCard, RouteProfile, ScrollStory
│   ├── home/         one component per homepage section
│   └── contact/      EnquiryForm
├── data/             site, expeditions, guides, journal, faq, media (generated)
├── hooks/            useInViewOnce, usePrefersReducedMotion, useSmoothScroll
├── lib/              cn, format
└── pages/            Home, Expeditions, ExpeditionDetail, About, Guides, Journal, Article, Faq, Contact, NotFound
```
