# Ledger & Loom — design system

**Feeling:** clarity / intelligence / structure.
**One line:** a Swiss editorial magazine about your money. Typography and data do all the work —
there is not a single photograph on the site, and that is the point.

---

## Palette

Warm off-white paper, near-black warm ink, three greys, and one unexpected bright: a
saturated rose‑magenta. No fintech blue, no gradients, no glow.

| Token | Hex | Role |
|-------|-----|------|
| `--color-page` | `#f4f2ec` | page background (warm off-white) |
| `--color-panel` | `#eae7dd` | rare fills |
| `--color-ink` | `#16150f` | text & rules — ~15:1 on page |
| `--color-ink-2` / `--color-ink-3` | `#55524a` / `#8a877c` | body / captions |
| `--color-line` / `--color-line-strong` | `#d6d2c5` / `#b7b2a2` | hairlines, chart gridlines |
| `--color-accent` | `#ff3d6e` | the one accent — the "available cash" figure, the section markers (`A —`, `B —`), active nav, links |

The accent is used for **one thing per view** — usually the number that matters.

---

## Type

Three families, each with a job:

- **Instrument Sans** (variable) — everything structural. Headlines are `500`, very tight
  (`-0.03em`), set large. This is the Swiss voice.
- **Instrument Serif** — one italic word or phrase per headline (*"Build what **matters**."*),
  pull quotes, the big case metrics, team initials. The editorial contrast.
- **IBM Plex Mono** — every number, every table cell, every label, the calculator readouts,
  the nav index digits. Mono = "this is a figure".

`font-variant-numeric: tabular-nums` is on for all numeric contexts so columns line up.

---

## Layout

- **A visible 12‑column grid** (`.grid12`) is the structure. Section markers, headings and
  standfirsts snap to it; content is deliberately asymmetric within it (an 8‑col heading, a
  4‑col note starting at column 9).
- **Border radius: 0.** Everything is a rectangle. Panels are defined by 1px rules on
  `--color-ink` or `--color-line`, never by shadow or rounding.
- Generous vertical space; content width caps at `82rem`.
- Sections are numbered on the homepage — `A —`, `B —`, `C —` … — as an index the reader can
  hold in their head.

---

## Motion

Minimal, and **no animation library**. IntersectionObserver + CSS transitions, plus one
small requestAnimationFrame helper.

| Where | What |
|-------|------|
| **Cashflow calculator** | live figures ease to their new value (`AnimatedNumber`, rAF cubic-out) as the sliders move; the stacked bar re-segments |
| Case charts | SVG lines draw in via `pathLength` + `stroke-dashoffset`; bars grow from zero; all built by hand in `components/viz/` |
| Services index | a typographic list where the hovered/focused row reveals its one-line description |
| Sections | an 8px lift + fade, once |
| Nav | active item's index digit turns accent |

---

## Navigation

A strict typographic bar: the wordmark (serif) and five links, each prefixed with its index
digit in mono (`01 Services`, `02 Cases` …). The active item's digit is accent. Mobile
collapses to a full-height panel with the same numbered list at display size. No CTA button —
the nav *is* the interface.

---

## Voice

Direct, numerate, faintly dry. Explains the mechanism ("the moment an invoice is paid, a
fixed share of it belongs to the tax office"). Names the fear and then does the arithmetic on
it. States what things cost. Uses the client's own words in the case quotes, including the
uncomfortable ones. The homepage promise — *"Finance for people who didn't start a business
to become accountants"* — sets the register for everything else.
