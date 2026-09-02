# Ledger & Loom

Front-end website for **Ledger & Loom**, a fictional financial-advice practice in Rotterdam
that works only with creative businesses — freelancers, studios, architects, video producers.

> Part of the **Claude Big Five** showcase. Fictional practice — the team, the clients, the
> case numbers and the fee ranges are invented. Not real client work, and nothing here is
> financial advice. The homepage calculator is an illustration only.

**Design direction:** Swiss editorial — a visible 12‑column grid, Instrument Sans set tight
and large, Instrument Serif for one italic phrase per headline, IBM Plex Mono for every
figure, one rose‑magenta accent, zero border radius, and **no photography anywhere**. The data
visualisations are the imagery. See [`DESIGN.md`](./DESIGN.md).

## Pages

| Route | Page |
|-------|------|
| `/` | Home — hero, interactive cashflow calculator, typographic services index, cases, philosophy + process, insights, CTA |
| `/services` | The five services in full, plus the calculator |
| `/cases` | The three case studies as a typographic list with headline metrics |
| `/cases/:slug` | Case study — challenge, a bespoke SVG visualisation, what we did / what changed, quote |
| `/insights` | Plain-language articles |
| `/insights/:slug` | A single article, rendered from typed content blocks |
| `/about` | The three-person practice (typographic team, no photos) and what it holds to |
| `/contact` | Booking form (client-side validation + states, submits nothing) + FAQ |

## Signature interactions

- **Cashflow calculator** (`components/CashflowDemo.tsx`) — three sliders (revenue, costs, tax
  reserve %) drive live profit / tax-reserve / available-cash figures that *ease* to their new
  values, plus a re-segmenting stacked bar. Carries an explicit "not financial advice" note.
- **Hand-rolled data viz** (`components/viz/`) — `CashLine`, `MarginBars`, `HirePlanChart`,
  `RunwayGauge`. No charting library; SVG lines draw in on scroll, bars grow from zero.
- **Typographic services index** — a list where the focused row reveals its description.

## Tech

- React 19 + TypeScript (strict) + Vite 8
- Tailwind CSS 4 (CSS-first `@theme` tokens)
- react-router-dom 7 (lazy-loaded routes)
- **No animation library, no charting library, no photography.** Motion is IntersectionObserver
  + CSS transitions plus one small rAF number-easer.
- Self-hosted fonts via `@fontsource` (Instrument Sans, Instrument Serif, IBM Plex Mono)

No back end. The contact form validates and shows loading / success / error states purely on
the client. All content is local mock data under `src/data/`.

## Getting started

```bash
npm install
npm run dev
npm run build        # type-check + production build to dist/
npm run preview
npm run typecheck
npm run lint
```

Requires Node 20.19+ or 22.12+.

## Structure

```
src/
├── components/
│   ├── layout/    Header, Footer, Logo, PageHead, Layout
│   ├── ui/        Button, Reveal, Accordion, AnimatedNumber
│   ├── viz/       CashLine, MarginBars, HirePlanChart, RunwayGauge (all hand-built SVG)
│   ├── home/      one component per homepage section
│   ├── CashflowDemo, ServiceIndex, ContactForm, ContactCTA
├── data/          site, services, cases (+ viz datasets), insights, faq
├── hooks/         useCountUp, useInViewOnce, usePrefersReducedMotion
├── lib/           cn, money, format
└── pages/         Home, Services, Cases, CaseStudy, Insights, Article, About, Contact, NotFound
```
