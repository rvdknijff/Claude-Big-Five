# Northbound Expeditions — design system

**Feeling:** adventure / scale / wilderness.
**One line:** a modern outdoor magazine that happens to sell trips. The photography is the
subject; the type gets out of its way.

---

## Palette

Warm off-white paper, deep forest-green and near-black for dark sections, warm stone greys,
and one functional orange. The orange is never decorative — it marks difficulty, the current
day on a route profile, a "next" link, an active filter.

| Token | Hex | Role |
|-------|-----|------|
| `--color-paper` | `#f2efe6` | page background |
| `--color-paper-dim` | `#e7e2d4` | alternating sections, image placeholders |
| `--color-bark` | `#17190f` | darkest sections, footers on photos |
| `--color-ink` | `#24261c` | body text — ~12:1 on paper |
| `--color-ink-soft` / `--color-ink-faint` | `#4c4f40` / `#7c7c6b` | secondary / captions |
| `--color-forest` / `--color-forest-deep` | `#33412f` / `#1e281c` | dark green sections, menu overlay, footer |
| `--color-moss` | `#6b7a58` | the elevation-profile fill |
| `--color-stone` / `--color-stone-light` | `#877f6d` / `#c6bfad` | neutral greys |
| `--color-signal` | `#d8602f` | the one accent — functional only |

---

## Type

- **Display:** Newsreader (variable), regular weight, with a real italic used for emphasis —
  one word per headline, roughly (*"Go where the road **doesn't**."*). This is the magazine
  signal. Optical sizing carries the big sizes.
- **Body & UI:** Inter (variable), 400, with `ss01`/`cv05` on. Labels are 0.7rem uppercase,
  0.16em tracking, `--color-ink-faint`.
- Headings inherit their colour so a heading over a dark photo is simply light.

---

## Layout & shape

- **Photography full-bleed or column-width, never in a rounded card.** Border radius is 3px
  (buttons) or 0 (everything else).
- **Thin editorial hairlines** (`.rule`) separate sections and list rows — never boxes.
- **Asymmetric editorial grids:** the homepage explorer is a numbered list with a sticky
  preview; journal uses a 12-column split; the FAQ pairs a sticky category heading with its
  accordion via `display: contents`.
- Page gutter `1.25 → 2 → 3rem`; content max width `84rem`.

---

## Motion

Scroll-led, calm, `cubic-bezier(0.22, 1, 0.36, 1)`. Global smooth scroll via **Lenis**
(disabled entirely under `prefers-reduced-motion`).

| Where | What |
|-------|------|
| Hero | image parallax + slow scale on scroll |
| **Scroll story** | a sticky photograph that cross-fades between beats as the day-by-day text scrolls past (`Day 01 → …`); on mobile it degrades to stacked photo-then-text |
| **Route profile** | an SVG elevation profile that draws in on scroll; hovering a day in the itinerary highlights its marker and drop-line |
| Menu | a full-screen forest-green overlay that wipes down (`clip-path`), with staggered links and expedition thumbnails that de-saturate → colour on hover |
| Sections | a restrained 18px rise + fade, IntersectionObserver + CSS |
| Cards | slow 1.2s image scale on hover |

---

## Navigation

Deliberately exploration-first. A near-invisible top bar (wordmark + "Expeditions" + "Menu")
that is light over the home hero and gains a paper background on scroll. "Menu" opens a
full-screen overlay containing the six nav links at display size **and** every expedition as a
thumbnail row — you browse from the menu, you do not just navigate it.

---

## Voice

Plain, experienced, slightly blunt. Talks about method, weather and honest limits, not
"bucket lists". States what a trip costs you (money, effort) as readily as what it gives.
Difficulty ratings are described in words that mean something — *Gentle, Moderate, Demanding,
Serious, Expedition-grade* — and the copy holds to them.
