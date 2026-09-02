# Blackline Motorworks — design system

**Feeling:** precision / power / engineering.
**One line:** a laboratory that happens to work on cars. Confidence without shouting.

The reference points are motorsport engineering documents, dyno printouts and technical
drawings — not "tuning culture". Everything on the page should look measured.

---

## Palette

Near-black grounds, one hot accent, warm off-white text. No second accent colour anywhere.

| Token | Hex | Use |
|-------|-----|-----|
| `--color-base` | `#0a0a0b` | page background |
| `--color-surface` | `#121316` | raised panels, alternating sections |
| `--color-surface-2` | `#191b1f` | image placeholders, insets |
| `--color-line` | `#26282e` | hairlines, the technical grid, table rules |
| `--color-line-bright` | `#3a3d45` | hover borders |
| `--color-fg` | `#eceae4` | primary text (warm bone, never pure white) |
| `--color-fg-muted` | `#9a9ea6` | body copy — 7.5:1 on base |
| `--color-fg-dim` | `#7c8088` | mono labels, captions — 5.1:1 on base |
| `--color-signal` | `#e6431d` | the accent: active state, data highlights, the CTA fill |
| `--color-signal-bright` | `#ff5a32` | accent hover / links on dark |

Contrast was checked against `--color-base`; every text token clears WCAG AA for body text.

---

## Type

- **Display & body:** Archivo (variable). Headings are `700`, uppercase, tight tracking
  (`-0.015em`), line-height ~1.0. Body is Archivo regular at 1rem/1.65.
- **Data & labels:** JetBrains Mono. Every measurement, spec value, RPM figure, eyebrow and
  caption is monospaced and uppercase with `0.22em` tracking. This is the single strongest
  brand signal — mono = "this number was measured".
- Display scale tops out at `clamp(2.75rem, 8vw, 7rem)` for the hero and 404.

Both families are self-hosted via `@fontsource-variable` (no network request, no layout shift;
`font-synthesis: none`).

---

## Layout & shape

- **Hard edges.** Border radius is `0` almost everywhere. Panels are defined by 1px hairlines
  on `--color-line`, not by rounding or shadow.
- **The chamfer.** The one deliberate shape: the primary CTA has a cut top-right / bottom-left
  corner (`.chamfer` utility). It is the button, nothing else uses it.
- **The technical grid.** A 72px blueprint grid (`.bl-grid`) sits behind the closing CTA and
  the location block. Corner "crosshair" ticks mark the hero.
- **Editorial, not cards.** Expertise is a numbered index list with a sticky image, not a card
  grid. Projects use an intentionally offset 12-column grid where the lead item is wider.
- Page gutter scales `1.5rem → 2.5rem → 4rem`; max content width `88rem`.

---

## Motion

Controlled and few. Everything is gated by `prefers-reduced-motion`.

| Where | What |
|-------|------|
| Hero | photograph parallax + slow scale on scroll (`useScroll`/`useTransform`) |
| Sections | one-shot reveal — 24px rise or a left "wipe", via IntersectionObserver + CSS transition (no motion library on this path) |
| Featured build | count-up readouts (rAF, easeOutExpo) for the power/torque figures |
| Before/after | draggable + arrow-key divider; one photo under two colour grades |
| Dyno chart | curves draw in on scroll (`pathLength`); pointer scrub reads any RPM point |
| Projects | image scale + a signal-coloured line sweep on hover |
| Nav | active item grows a signal underline tick; mobile menu is a full overlay with staggered items |

No fades-in-from-everywhere, no floating cards, no looping ambient animation.

---

## Navigation

Minimal premium horizontal bar: wordmark left, four links + an outline "Book an inspection"
right. Transparent over the hero, gains a hairline + blur on scroll. Mobile collapses to a
full-screen overlay with numbered large-type links.

---

## Voice

Plain, specific, quietly expert. Talks about method and measurement, not horsepower bragging
("*'More power' is the easy part*"). Admits when a project didn't chase numbers. Never uses
exclamation marks or words like "beast" or "unleash".
