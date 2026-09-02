# Bloom Pediatric Dental — design system

**Feeling:** safe / friendly / caring.
**One line:** a small growing world. Reassuring for the parent, gently playful for the child —
never clinical, never babyish.

The concept is **"een gezonde glimlach groeit mee"**: the practice grows alongside the child
from age 2 to 16. Illustration marks (a sprout, a leaf, a cloud, a sparkle) sprinkle the
layouts like a picture book, but the typography and spacing stay grown-up.

---

## Palette

Warm cream paper, a soft sage green as the brand colour, and three supporting pastels. No pure
white, no clinical blue, no black.

| Token | Hex | Role |
|-------|-----|------|
| `--color-paper` | `#fdf9f3` | page background (warm cream) |
| `--color-cream` | `#f6ede0` | cards, alternating sections |
| `--color-ink` | `#38473f` | text — a soft dark green, ~10:1 on paper |
| `--color-ink-soft` | `#5c6b60` | body copy |
| `--color-ink-faint` | `#8b988c` | captions, decorative only |
| `--color-sage` / `--color-sage-deep` | `#6fae92` / `#3f7a61` | brand green; deep is the accessible text/link shade |
| `--color-blush` / `--color-blush-deep` | `#f2a99a` / `#d97a67` | warmth; the primary CTA fill |
| `--color-sky` / `--color-sky-soft` | `#a6d2e4` / `#e2f1f6` | calm sections ("Is jouw kind zenuwachtig?") |
| `--color-sun` / `--color-sun-soft` | `#f6cf72` / `#fdf1d1` | highlights, sparkles, FAQ page |
| `--color-berry` | `#c96b91` | rare small accent |

Section backgrounds rotate through the soft tints so each page area feels like a different
"room" without hard borders.

---

## Type

- **Headings:** Fraunces (variable), weight ~550, with `SOFT 60` and `WONK 1` variation
  settings — the soft-serif, slightly hand-set look does the "friendly" work so the layout
  doesn't have to. Optical sizing on. Set lowercase for the wordmark.
- **Body & UI:** Nunito (variable), weight 500–800. Its rounded terminals match the rounded
  everything else. Labels and buttons are `800` (extra-bold) and lower-case-friendly.
- No monospace anywhere — the opposite signal to a technical brand.

---

## Shape & layout

- **Rounded everything.** Buttons are full pills. Cards use `2rem`+ radius. Two organic
  "blob" radii (`.blob-a`, `.blob-b`) frame most photography, tilted a degree or two.
- **Wave dividers.** Sections are separated by soft SVG wave edges, not straight lines.
- **Air.** Generous vertical spacing; content width caps at `78rem` (narrower than the
  automotive site) so text lines stay short and calm.
- **Illustration marks** (`components/ui/decor.tsx`) — single-path `currentColor` SVGs
  (sprout, leaf, cloud, sparkle, flower, blob), floated gently and always `aria-hidden`.

---

## Motion

Soft, slightly springy (`cubic-bezier(0.34, 1.3, 0.64, 1)`), and calm. All gated by
`prefers-reduced-motion`.

| Where | What |
|-------|------|
| Scroll reveals | gentle rise / scale-up with a soft overshoot |
| Decor | slow vertical float (`float-slow`, `float-med`) |
| **Poets met Pip** | drag a toothbrush over a cartoon molar; plaque spots pop away, the face brightens and sparkles appear. Keyboard/tap alternative: a "poets in één keer schoon" button |
| First-visit journey | tap through five steps; the active dot scales up, the panel cross-fades; a "voor je kind / voor ouders" toggle rewrites the copy |
| Logo | the two sprout leaves splay apart on hover |
| Buttons | lift 2px on hover, no harsh shadow |

---

## Navigation

A friendly floating pill bar: sprout-mark wordmark, plain-language links, active link gets a
soft sage pill. A permanent blush **"Plan een eerste bezoek"** button. Mobile collapses to a
rounded drop panel with large serif links.

---

## Voice

Dutch, warm, plain, honest. Speaks to the parent as an equal ("Je bent de belangrijkste
factor…") and never oversells. Explicitly coaches parents on what *not* to say ("zeg thuis
niet 'niet bang zijn'"). Admits when a visit didn't go to plan. Child-facing copy is simple
and concrete ("de stoel kan omhoog en omlaag, net een liftje") without baby-talk.
