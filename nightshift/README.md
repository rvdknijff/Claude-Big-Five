# NIGHTSHIFT

Front-end website for **NIGHTSHIFT**, a fictional underground electronic music and culture
festival across four industrial venues in Rotterdam, 17–18 October 2026.

> Part of the **Claude Big Five** showcase. Fictional festival — every artist, venue, set
> time, past edition and price is invented. Not real client work; not a real event.

**Design direction:** brutalist club-poster — near-black + one acid-lime accent, Unbounded set
huge and tight, Space Mono for everything else, forced-monochrome photography, a custom
trailing cursor, animated film grain, kinetic marquees, and generated SVG posters. Kept
usable: dates, venues, tickets and line-up are always one glance away. See
[`DESIGN.md`](./DESIGN.md).

## Pages

| Route | Page |
|-------|------|
| `/` | Landing — kinetic type hero with "ENTER", then line-up / venues / art / essentials / archive |
| `/line-up` | The full line-up as a giant typographic list with a cursor-tracking artist panel (tap to expand on mobile) |
| `/timetable` | A four-stage grid, 20:00→07:00, Friday / Saturday switch, sticky stage header; one-stage list on mobile |
| `/venues` | The four venues in detail |
| `/art` | The commissioned installations — projection mapping, interactive light, generative visuals, spatial audio |
| `/archive` | Past editions 2023–2026, each with a generated SVG poster |
| `/info` | Everything practical — dates, tickets, age, getting there, accessibility, welfare, FAQ |

## Signature interactions

- **Custom cursor** (`components/effects/Cursor.tsx`) — a lime square that lags the pointer and
  swells over interactive elements; fine-pointer + motion-allowed only.
- **Line-up list** (`components/lineup/LineupList.tsx`) — a floating monochrome photo panel
  tracks the cursor across a wall of names; taps expand a detail row on touch.
- **Timetable grid** (`components/timetable/TimetableGrid.tsx`) — real four-stage schedule
  positioned by time, day toggle, sticky header, mobile fallback.
- **Generated posters** (`components/archive/ArchivePoster.tsx`) — each past edition's poster
  is drawn in SVG from a per-year colourway.
- Animated film grain + kinetic marquees throughout.

## Tech

- React 19 + TypeScript (strict) + Vite 8
- Tailwind CSS 4 (CSS-first `@theme` tokens)
- react-router-dom 7 (lazy-loaded routes)
- Framer Motion — the menu wipe only; grain, cursor, marquees, hero canvas and reveals are
  hand-built and fully disabled under `prefers-reduced-motion`
- Self-hosted fonts via `@fontsource` (Unbounded, Space Mono)

No back end. All content is local mock data under `src/data/`. Photography is downloaded to
`public/images/` and displayed monochrome.

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

## Structure

```
src/
├── components/
│   ├── layout/     Header (menu overlay), Footer, Logo, PageTitle, Layout
│   ├── effects/    Grain, Cursor, HeroCanvas
│   ├── ui/         Button, Reveal, Marquee
│   ├── lineup/     LineupList
│   ├── timetable/  TimetableGrid
│   ├── archive/    ArchivePoster
│   └── home/       Hero + HomeSections
├── data/           festival, lineup (artists + sets), venues, art, archive, info, media
├── hooks/          useInViewOnce, usePrefersReducedMotion
├── lib/            cn
└── pages/          Home, Lineup, Timetable, Venues, Art, Info, Archive, NotFound
```
