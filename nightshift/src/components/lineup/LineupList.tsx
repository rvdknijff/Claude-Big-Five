import { useMemo, useRef, useState } from 'react'
import { artists, sets, type Artist } from '@/data/lineup'
import { getVenue } from '@/data/venues'
import { cn } from '@/lib/cn'

interface Appearance {
  day: string
  stage: string
  start: string
}

function appearancesFor(slug: string): Appearance[] {
  return sets
    .filter((s) => s.artist === slug || s.b2b === slug)
    .map((s) => ({ day: s.day, stage: getVenue(s.stage).code, start: s.start }))
}

export function LineupList() {
  const [active, setActive] = useState<string | null>(null)
  const [expanded, setExpanded] = useState<string | null>(null)
  const panelRef = useRef<HTMLDivElement>(null)

  const ordered = useMemo(() => {
    const rank = { headline: 0, main: 1, support: 2 } as const
    return [...artists].sort((a, b) => rank[a.tier] - rank[b.tier] || a.name.localeCompare(b.name))
  }, [])

  const activeArtist = ordered.find((a) => a.slug === active)

  const onMove = (e: React.MouseEvent) => {
    if (!panelRef.current) return
    const pad = 24
    const w = panelRef.current.offsetWidth
    const h = panelRef.current.offsetHeight
    let x = e.clientX + pad
    let y = e.clientY + pad
    if (x + w > window.innerWidth) x = e.clientX - w - pad
    if (y + h > window.innerHeight) y = e.clientY - h - pad
    panelRef.current.style.transform = `translate3d(${x}px, ${y}px, 0)`
  }

  return (
    <div onMouseMove={onMove}>
      <ul className="border-t-2 border-bone">
        {ordered.map((a) => {
          const apps = appearancesFor(a.slug)
          const isOpen = expanded === a.slug
          return (
            <li key={a.slug} className="border-b-2 border-line">
              <button
                type="button"
                onMouseEnter={() => setActive(a.slug)}
                onMouseLeave={() => setActive(null)}
                onClick={() => setExpanded((v) => (v === a.slug ? null : a.slug))}
                aria-expanded={isOpen}
                className="group flex w-full items-baseline justify-between gap-4 py-3 text-left md:py-4"
              >
                <span className="flex items-baseline gap-3 md:gap-5">
                  <span
                    className={cn(
                      'font-display font-extrabold uppercase leading-[0.85] tracking-[-0.03em] transition-colors',
                      a.tier === 'headline'
                        ? 'text-[clamp(2rem,7vw,5rem)]'
                        : a.tier === 'main'
                          ? 'text-[clamp(1.5rem,5vw,3.25rem)]'
                          : 'text-[clamp(1.15rem,3.5vw,2rem)]',
                      active === a.slug || isOpen ? 'text-acid' : 'text-bone group-hover:text-acid',
                    )}
                  >
                    {a.name}
                  </span>
                  {a.live && (
                    <span className="mt-1 shrink-0 border border-acid px-1.5 font-mono text-[0.6rem] font-bold uppercase text-acid">
                      Live
                    </span>
                  )}
                </span>
                <span className="hidden shrink-0 font-mono text-xs uppercase tracking-[0.08em] text-ash md:block">
                  {a.country} · {a.genre}
                </span>
              </button>

              {/* mobile detail */}
              {isOpen && (
                <div className="grid gap-4 pb-5 md:hidden">
                  <img
                    src={a.image.src}
                    width={a.image.width}
                    height={a.image.height}
                    alt={a.image.alt}
                    loading="lazy"
                    className="mono aspect-[4/3] w-full object-cover"
                  />
                  <p className="font-mono text-xs text-ash">
                    {a.country} · {a.genre}
                  </p>
                  <p className="font-mono text-sm leading-relaxed text-bone/80">{a.bio}</p>
                  <ul className="flex flex-wrap gap-2">
                    {apps.map((ap, i) => (
                      <li
                        key={i}
                        className="border border-line px-2 py-1 font-mono text-[0.65rem] uppercase text-bone"
                      >
                        {ap.day} · {ap.stage} · {ap.start}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </li>
          )
        })}
      </ul>

      {/* desktop floating panel */}
      <div
        ref={panelRef}
        aria-hidden="true"
        className={cn(
          'pointer-events-none fixed left-0 top-0 z-30 hidden w-72 border-2 border-acid bg-black md:block',
          activeArtist ? 'opacity-100' : 'opacity-0',
        )}
        style={{ transition: 'opacity 0.12s linear' }}
      >
        {activeArtist && (
          <ArtistPanel artist={activeArtist} apps={appearancesFor(activeArtist.slug)} />
        )}
      </div>
    </div>
  )
}

function ArtistPanel({ artist, apps }: { artist: Artist; apps: Appearance[] }) {
  return (
    <>
      <img
        src={artist.image.src}
        width={artist.image.width}
        height={artist.image.height}
        alt=""
        className="mono aspect-[4/3] w-full object-cover"
      />
      <div className="p-3">
        <p className="font-display text-sm font-extrabold uppercase leading-tight text-acid">
          {artist.name}
        </p>
        <p className="mt-1 font-mono text-[0.65rem] uppercase text-ash">
          {artist.country} · {artist.genre}
          {artist.live ? ' · Live' : ''}
        </p>
        <ul className="mt-2 space-y-0.5 font-mono text-[0.65rem] uppercase text-bone">
          {apps.map((ap, i) => (
            <li key={i}>
              {ap.day} — {ap.stage} — {ap.start}
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}
