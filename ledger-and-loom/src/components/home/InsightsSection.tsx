import { Link } from 'react-router-dom'
import { articles } from '@/data/insights'
import { Button } from '@/components/ui/Button'
import { formatDate } from '@/lib/format'

export function InsightsSection() {
  return (
    <section className="page-x mx-auto max-w-[var(--container-page)] py-14 md:py-20">
      <div className="grid12 items-end gap-y-6">
        <div className="col-span-12 md:col-span-7">
          <p className="label">
            <span className="text-accent">F —</span> Insights
          </p>
          <h2 className="mt-4 text-[clamp(1.9rem,4.5vw,3.25rem)] leading-[1] tracking-[-0.03em]">
            The advice we give most often, written down
          </h2>
        </div>
        <Button to="/insights" variant="text" withArrow className="col-span-12 md:col-span-3 md:col-start-10 md:justify-self-end">
          All insights
        </Button>
      </div>

      <ul className="mt-10 grid gap-px border border-line bg-line sm:grid-cols-2">
        {articles.slice(0, 4).map((a) => (
          <li key={a.slug} className="bg-page">
            <Link to={`/insights/${a.slug}`} className="group flex h-full flex-col p-6 md:p-8">
              <p className="label">
                {a.topic} · {formatDate(a.date)} · {a.readMins} min
              </p>
              <h3 className="mt-3 text-xl leading-tight tracking-[-0.02em] transition-colors group-hover:text-accent md:text-2xl">
                {a.title}
              </h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-2">{a.dek}</p>
              <span aria-hidden="true" className="mt-4 font-mono text-xs text-ink-3 group-hover:text-accent">
                Read →
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  )
}
