import { Link } from 'react-router-dom'
import { Seo } from '@/components/Seo'
import { PageHead } from '@/components/layout/PageHead'
import { articles } from '@/data/insights'
import { Reveal } from '@/components/ui/Reveal'
import { formatDate } from '@/lib/format'

export function Insights() {
  return (
    <>
      <Seo
        title="Insights"
        description="Plain-language notes on tax reserves, runway, pricing from cost and planning the first hire — the advice Ledger & Loom gives most often."
      />
      <PageHead
        index="03"
        kicker="Insights"
        title={<>Written<br />down</>}
        standfirst="The advice we repeat most, turned into short pieces you can send to a co-founder. No jargon, no gated PDFs."
      />

      <div className="page-x mx-auto max-w-[var(--container-page)]">
        {articles.map((a, i) => (
          <Reveal key={a.slug} as="article">
            <Link
              to={`/insights/${a.slug}`}
              className="group grid12 gap-y-4 border-b border-line py-10 md:py-14"
            >
              <span className="col-span-3 font-mono text-sm text-line-strong md:col-span-1">
                {String(i + 1).padStart(2, '0')}
              </span>
              <div className="col-span-12 md:col-span-7">
                <p className="label">
                  {a.topic} · {formatDate(a.date)} · {a.readMins} min read
                </p>
                <h2 className="mt-2 text-[clamp(1.6rem,3.5vw,2.5rem)] leading-[1.02] tracking-[-0.03em] transition-colors group-hover:text-accent">
                  {a.title}
                </h2>
              </div>
              <p className="col-span-12 self-end text-sm leading-relaxed text-ink-2 md:col-span-4">
                {a.dek}
              </p>
            </Link>
          </Reveal>
        ))}
      </div>
    </>
  )
}
