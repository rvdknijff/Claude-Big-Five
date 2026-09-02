# Bloom Pediatric Dental

Front-end website for **Bloom kindertandarts**, a fictional children's dental practice in
Amersfoort for kids aged 2–16. The site is in Dutch.

> Part of the **Claude Big Five** showcase. Fictional practice — the team, address, phone
> number and all copy are invented. Not real client work, and nothing here is dental advice.

**Design direction:** soft, warm, organic — cream paper, sage green, pastel "rooms", rounded
everything, a soft-serif (Fraunces) + rounded-sans (Nunito) pairing, and picture-book
illustration marks. Reassuring for parents, gently playful for children, never clinical. See
[`DESIGN.md`](./DESIGN.md).

## Pages

| Route | Page |
|-------|------|
| `/` | Home — hero, growth concept, first-visit journey, "is jouw kind zenuwachtig?", parent FAQ, team, Poets met Pip, CTA |
| `/eerste-bezoek` | The five-step first visit, what to bring, preparing your child |
| `/behandelingen` | Treatments (wenafspraken, controle, fluoride, vullingen, trauma, verwijzing) + prevention |
| `/voor-ouders` | The questions parents ask most, as an accordion |
| `/ons-team` | The three-person team and how they work |
| `/veelgestelde-vragen` | Grouped FAQ (afspraken, tijdens het bezoek, kosten, praktisch) |
| `/contact` | Appointment-request form (client-side validation + states, submits nothing) |

## Signature interactions

- **Poets met Pip** (`components/home/PoetsMetPip.tsx`) — drag a toothbrush over a cartoon
  molar to clean the plaque spots; the tooth's face brightens and sparkles. Fully keyboard/tap
  accessible via a "clean it all" button.
- **First-visit journey** (`components/home/BezoekJourney.tsx`) — a five-step stepper with a
  "for your child / for parents" toggle that rewrites the copy.

## Tech

- React 19 + TypeScript (strict) + Vite 8
- Tailwind CSS 4 (CSS-first `@theme` tokens)
- react-router-dom 7 (lazy-loaded routes)
- Framer Motion is *not* used — reveals are a plain IntersectionObserver + CSS transition
- Self-hosted fonts via `@fontsource-variable` (Fraunces, Nunito)
- lucide-react for the two nav icons only

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
npm run fetch:images # re-download / swap photography
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
│   ├── layout/   Header, Footer, Logo, PageHero, Layout
│   ├── ui/       Button, Reveal, SectionIntro, Figure, Accordion, decor (SVG marks)
│   ├── home/     one component per homepage section + PoetsMetPip + BezoekJourney
│   └── contact/  AfspraakForm
├── data/         site, firstVisit, treatments, parents, team, faq, media (generated)
├── hooks/        useInViewOnce, usePrefersReducedMotion
├── lib/          cn
└── pages/        Home, EersteBezoek, Behandelingen, VoorOuders, OnsTeam, Vragen, Contact, NietGevonden
```
