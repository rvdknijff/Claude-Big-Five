import { Link } from 'react-router-dom'
import { articles } from '@/data/journal'
import { Reveal } from '@/components/ui/Reveal'
import { Button } from '@/components/ui/Button'
import { formatDate } from '@/lib/format'

export function JournalPreview() {
  const [lead, ...rest] = articles

  return (
    <section className="page-x mx-auto max-w-[var(--container-page)] py-20 md:py-28">
      <div className="rule border-ink/20 pb-6">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="label">The journal</p>
            <h2 className="mt-4 font-display text-[clamp(1.9rem,4vw,3rem)]">Notes from the trail</h2>
          </div>
          <Button to="/journal" variant="link" withArrow className="mb-2">
            All journal entries
          </Button>
        </div>
      </div>

      <div className="mt-10 grid gap-x-10 gap-y-12 md:grid-cols-12">
        <Reveal className="md:col-span-7" as="article">
          <Link to={`/journal/${lead.slug}`} className="group block">
            <div className="overflow-hidden">
              <img
                src={lead.image.src}
                width={lead.image.width}
                height={lead.image.height}
                alt={lead.image.alt}
                loading="lazy"
                className="aspect-[16/10] w-full object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.03]"
              />
            </div>
            <p className="label mt-4">{lead.category} · {formatDate(lead.date)}</p>
            <h3 className="mt-2 font-display text-2xl leading-tight transition-colors group-hover:text-signal md:text-3xl">
              {lead.title}
            </h3>
            <p className="mt-3 max-w-xl leading-relaxed text-ink-soft">{lead.dek}</p>
          </Link>
        </Reveal>

        <div className="md:col-span-5 md:pt-4">
          <ul className="rule border-ink/15">
            {rest.map((a) => (
              <li key={a.slug} className="border-b border-ink/12">
                <Link to={`/journal/${a.slug}`} className="group block py-5">
                  <p className="label">{a.category} · {a.readMins} min</p>
                  <h3 className="mt-1.5 font-display text-lg leading-snug transition-colors group-hover:text-signal">
                    {a.title}
                  </h3>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
