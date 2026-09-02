# NIGHTSHIFT — design system

**Feeling:** energy / underground / culture.
**One line:** a rave flyer that happens to be a website. Brutalist, monochrome, kinetic — but
you can still find out when it is, where it is, who's playing and how tickets work in under
ten seconds.

---

## Palette

Near-black, one off-white, one mid-grey, one acid. That's it.

| Token | Hex | Role |
|-------|-----|------|
| `--color-black` | `#0a0a0a` | everything's ground |
| `--color-near` | `#141414` | raised cells, the timetable header |
| `--color-line` | `#2a2a2a` | interior rules |
| `--color-bone` | `#ece9dd` | primary text, big type, outer borders |
| `--color-ash` | `#86847a` | captions, secondary |
| `--color-acid` | `#ceff1a` | THE accent — the second half of the logo, active states, tags, the ticket button, poster ink |

All photography is forced **monochrome + high contrast** (`.mono`), so the acid is the only
colour on the page.

---

## Type

- **Unbounded** (variable) — the display face. Set `800`, uppercase, very tight
  (`-0.02 to -0.05em`), and *huge* — the hero and page titles run to `clamp(…, …, 16rem)`.
  This is the poster.
- **Space Mono** — literally everything else: body, nav, labels, captions, the timetable,
  the marquees. Mono everywhere reinforces the flyer / listings-mag register.
- Border radius is `0`. Borders are 2px and `--color-bone` on the outside, 1–2px `--color-line`
  inside. Buttons carry a hard offset shadow that collapses on `:active`.

---

## Motion / effects

Framer Motion for the menu wipe; everything else is hand-built and gated behind
`prefers-reduced-motion` (which also drops a `.reduced-motion` class on `<body>` that disables
the grain animation, the marquees and the custom cursor).

| Effect | What |
|--------|------|
| **Custom cursor** | a lime square that trails the pointer with lag and rotates + hollows over anything interactive; `mix-blend-difference`. Fine pointers only; native cursor everywhere else |
| **Film grain** | a fixed SVG-noise overlay that jitters on a `steps(2)` loop |
| **Marquees** | kinetic scrolling strips of festival info — acid on black, black on acid |
| **Hero canvas** | cheap drifting horizontal light-bars behind the title, static single frame when reduced |
| **Line-up reveal** | a floating monochrome photo panel that tracks the cursor over the giant name list (tap-to-expand on mobile) |
| Section reveals | a hard `steps()` slide-in, IntersectionObserver + CSS |
| Menu | a full-screen overlay that wipes down via `clip-path` |

---

## Navigation

A fixed brutalist top strip split into hard cells: `NIGHT/SHIFT` · `ROTTERDAM — 17–18 OCT` ·
an acid **TICKETS** cell · an **INDEX** toggle. INDEX opens a full-screen overlay with the six
sections at display size plus the four venue sounds — a menu you read, not just click.

---

## Usability guardrails

Experimental never wins over legible. The essentials — dates, the four venues, ticket tiers,
18+ — appear on the homepage, in the footer marquee, in the menu overlay and in full on the
Info page. The Timetable is a real, readable four-stage grid with a sticky header and a
day switch; on mobile it becomes a one-stage-at-a-time list. The Line-up list works on tap.

---

## Voice

Terse, scene-literate, a little dry. "Not a warm-up room." "Nobody remembers the set they
filmed." Practical where it counts (the Info page is plain and firm about ID and welfare),
swaggering where it can afford to be (the venue and artist blurbs).
