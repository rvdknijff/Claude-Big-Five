import { Seo } from '@/components/Seo'
import { PageTitle } from '@/components/layout/PageTitle'
import { venues } from '@/data/venues'
import { Reveal } from '@/components/ui/Reveal'
import { Button } from '@/components/ui/Button'

export function Venues() {
  return (
    <>
      <Seo
        title="Venues"
        description="The four NIGHTSHIFT venues along the Rotterdam waterfront: Terminal 04, The Dock, Sublevel and Warehouse 11 — each with its own sound and its own hours."
      />
      <PageTitle
        index="03 / Venues"
        title="Venues"
        sub="Four industrial spaces along the water, each doing one thing. Free shuttles and a night water taxi connect all four until 06:30."
      />
      <div className="page-x mx-auto max-w-[var(--container-page)]">
        {venues.map((v, i) => (
          <Reveal key={v.id} as="article">
            <div className="grid gap-6 border-b-2 border-line py-10 md:grid-cols-[1fr_1.1fr] md:gap-10 md:py-14">
              <img
                src={v.image.src}
                width={v.image.width}
                height={v.image.height}
                alt={v.image.alt}
                loading={i === 0 ? 'eager' : 'lazy'}
                className="mono aspect-[4/3] w-full border-2 border-line object-cover"
              />
              <div>
                <p className="font-mono text-xs uppercase tracking-[0.1em] text-ash">
                  {String(i + 1).padStart(2, '0')} · cap. {v.capacity}
                </p>
                <h2 className="mt-2 font-display text-[clamp(2rem,6vw,4rem)] font-extrabold uppercase leading-[0.85] tracking-[-0.04em] text-acid">
                  {v.code}
                </h2>
                <p className="mt-2 font-display text-lg font-extrabold uppercase tracking-[-0.02em] text-bone">
                  {v.sound}
                </p>
                <p className="mt-4 font-mono text-sm leading-relaxed text-bone/85">{v.detail}</p>
                <p className="mt-4 font-mono text-xs uppercase text-ash">{v.location}</p>
              </div>
            </div>
          </Reveal>
        ))}
        <div className="py-12">
          <Button to="/timetable" variant="bone">
            What&rsquo;s on where →
          </Button>
        </div>
      </div>
    </>
  )
}
