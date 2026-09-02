import { Link } from 'react-router-dom'
import { artists } from '@/data/lineup'
import { venues } from '@/data/venues'
import { installations } from '@/data/art'
import { editions } from '@/data/archive'
import { essentials } from '@/data/info'
import { festival } from '@/data/festival'
import { Reveal } from '@/components/ui/Reveal'
import { Marquee } from '@/components/ui/Marquee'
import { Button } from '@/components/ui/Button'

export function TickerBar() {
  const line =
    'TECHNO · UK GARAGE · DRUM & BASS · EXPERIMENTAL LIVE · LIGHT ART · SPATIAL AUDIO · '
  return (
    <Marquee duration={30} className="border-b-2 border-bone bg-acid py-1.5 text-black">
      <span className="px-3 font-mono text-sm font-bold uppercase tracking-[0.1em]">{line}</span>
      <span className="px-3 font-mono text-sm font-bold uppercase tracking-[0.1em]">{line}</span>
    </Marquee>
  )
}

export function LineupPreview() {
  const heads = artists.filter((a) => a.tier === 'headline')
  const rest = artists.filter((a) => a.tier !== 'headline').slice(0, 10)
  return (
    <section id="after-hero" className="page-x mx-auto max-w-[var(--container-page)] border-b-2 border-bone py-14 md:py-20">
      <p className="label">01 / Line-up</p>
      <ul className="mt-4">
        {heads.map((a) => (
          <li key={a.slug} className="border-b-2 border-line">
            <Link
              to="/line-up"
              className="group block py-2 font-display text-[clamp(2.25rem,10vw,7rem)] font-extrabold uppercase leading-[0.85] tracking-[-0.04em] text-bone transition-colors hover:text-acid"
            >
              {a.name}
            </Link>
          </li>
        ))}
      </ul>
      <p className="mt-6 font-mono text-sm leading-relaxed text-ash">
        + {rest.map((a) => a.name).join(' · ')} + more
      </p>
      <div className="mt-8">
        <Button to="/line-up" variant="bone">
          Full line-up →
        </Button>
      </div>
    </section>
  )
}

export function VenuesPreview() {
  return (
    <section className="page-x mx-auto max-w-[var(--container-page)] border-b-2 border-bone py-14 md:py-20">
      <p className="label">02 / Venues</p>
      <h2 className="mt-4 font-display text-[clamp(1.75rem,5vw,3.5rem)] font-extrabold uppercase tracking-[-0.03em]">
        Four rooms along the water
      </h2>
      <div className="mt-10 grid gap-0.5 border-2 border-bone bg-bone sm:grid-cols-2 lg:grid-cols-4">
        {venues.map((v, i) => (
          <Reveal key={v.id} delay={i * 0.05} className="bg-black p-5">
            <p className="font-display text-lg font-extrabold uppercase leading-none tracking-[-0.02em] text-acid">
              {v.code}
            </p>
            <p className="mt-2 font-mono text-xs uppercase text-ash">{v.sound}</p>
            <p className="mt-4 font-mono text-xs leading-relaxed text-bone/80">{v.blurb}</p>
            <p className="mt-4 font-mono text-[0.65rem] uppercase text-ash">cap. {v.capacity}</p>
          </Reveal>
        ))}
      </div>
      <div className="mt-8">
        <Button to="/venues" variant="bone">
          All venues →
        </Button>
      </div>
    </section>
  )
}

export function ArtPreview() {
  return (
    <section className="page-x mx-auto max-w-[var(--container-page)] border-b-2 border-bone py-14 md:py-20">
      <p className="label">03 / Art</p>
      <h2 className="mt-4 max-w-[16ch] font-display text-[clamp(1.75rem,5vw,3.5rem)] font-extrabold uppercase tracking-[-0.03em]">
        More than music
      </h2>
      <ul className="mt-10 grid gap-6 md:grid-cols-2">
        {installations.slice(0, 4).map((inst) => (
          <li key={inst.no} className="border-2 border-line">
            <img
              src={inst.image.src}
              width={inst.image.width}
              height={inst.image.height}
              alt={inst.image.alt}
              loading="lazy"
              className="mono aspect-[16/9] w-full object-cover"
            />
            <div className="p-4">
              <p className="font-mono text-[0.65rem] uppercase text-acid">
                {inst.no} · {inst.kind}
              </p>
              <p className="mt-1 font-display text-lg font-extrabold uppercase leading-tight tracking-[-0.02em]">
                {inst.title}
              </p>
              <p className="mt-1 font-mono text-xs text-ash">{inst.artist}</p>
            </div>
          </li>
        ))}
      </ul>
      <div className="mt-8">
        <Button to="/art" variant="bone">
          All installations →
        </Button>
      </div>
    </section>
  )
}

export function InfoStrip() {
  return (
    <section className="page-x mx-auto max-w-[var(--container-page)] border-b-2 border-bone py-14 md:py-20">
      <p className="label">04 / The essentials</p>
      <dl className="mt-8 grid gap-0.5 border-2 border-bone bg-bone md:grid-cols-2 lg:grid-cols-4">
        {essentials.map((b) => (
          <div key={b.heading} className="bg-black p-5">
            <dt className="font-display text-base font-extrabold uppercase tracking-[-0.02em] text-acid">
              {b.heading}
            </dt>
            <dd className="mt-2 font-mono text-xs leading-relaxed text-bone/85">{b.body}</dd>
          </div>
        ))}
      </dl>
      <div className="mt-8 flex flex-wrap gap-3">
        <Button href={festival.ticketUrl} variant="acid">
          Get tickets
        </Button>
        <Button to="/info" variant="ghost">
          Full info
        </Button>
      </div>
    </section>
  )
}

export function ArchiveTeaser() {
  return (
    <section className="page-x mx-auto max-w-[var(--container-page)] py-14 md:py-20">
      <p className="label">05 / Archive</p>
      <ul className="mt-6 border-t-2 border-bone">
        {editions.map((e) => (
          <li key={e.year} className="border-b-2 border-line">
            <Link
              to="/archive"
              className="group flex items-baseline justify-between gap-4 py-3 md:py-4"
            >
              <span className="font-display text-[clamp(1.75rem,6vw,4rem)] font-extrabold uppercase leading-none tracking-[-0.03em] text-bone transition-colors group-hover:text-acid">
                {e.year}
              </span>
              <span className="text-right font-mono text-xs uppercase text-ash">
                {e.tagline}
              </span>
            </Link>
          </li>
        ))}
      </ul>
      <div className="mt-8">
        <Button to="/archive" variant="bone">
          Full archive →
        </Button>
      </div>
    </section>
  )
}
