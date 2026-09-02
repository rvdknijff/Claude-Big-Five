import { Link, useParams } from 'react-router-dom'
import { Seo } from '@/components/Seo'
import { articles, getArticle } from '@/data/insights'
import { formatDate } from '@/lib/format'
import { Button } from '@/components/ui/Button'

export function Article() {
  const { slug } = useParams()
  const a = slug ? getArticle(slug) : undefined

  if (!a) {
    return (
      <div className="page-x mx-auto max-w-3xl py-40 text-center">
        <Seo title="Article not found" description="This article could not be found." />
        <p className="label">404</p>
        <h1 className="mt-3 text-4xl tracking-[-0.03em]">Article not found</h1>
        <div className="mt-8 flex justify-center">
          <Button to="/insights" withArrow>
            All insights
          </Button>
        </div>
      </div>
    )
  }

  const more = articles.filter((x) => x.slug !== a.slug).slice(0, 3)

  return (
    <>
      <Seo title={a.title} description={a.dek} />

      <article className="page-x mx-auto max-w-[var(--container-page)]">
        <header className="border-b border-ink pb-12 pt-16 md:pb-16 md:pt-24">
          <Link
            to="/insights"
            className="font-mono text-[0.7rem] uppercase tracking-[0.12em] text-ink-3 hover:text-ink"
          >
            ← Insights
          </Link>
          <p className="label mt-8">
            {a.topic} · {formatDate(a.date)} · {a.readMins} min read
          </p>
          <h1 className="mt-4 max-w-4xl text-[clamp(2.25rem,6vw,4.5rem)] leading-[0.98] tracking-[-0.035em]">
            {a.title}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-2">{a.dek}</p>
        </header>

        <div className="mx-auto max-w-[40rem] py-14">
          {a.body.map((b, i) => {
            if (b.type === 'h')
              return (
                <h2 key={i} className="mt-10 text-2xl tracking-[-0.02em]">
                  {b.text}
                </h2>
              )
            if (b.type === 'quote')
              return (
                <blockquote
                  key={i}
                  className="my-8 border-l-2 border-accent pl-5 font-serif text-xl italic leading-snug text-ink"
                >
                  {b.text}
                </blockquote>
              )
            if (b.type === 'list')
              return (
                <ul key={i} className="my-6 space-y-2">
                  {b.items?.map((it) => (
                    <li key={it} className="flex gap-3 font-mono text-sm text-ink-2">
                      <span className="text-accent">—</span>
                      {it}
                    </li>
                  ))}
                </ul>
              )
            return (
              <p key={i} className="mt-5 leading-[1.75] text-ink-2">
                {b.text}
              </p>
            )
          })}
        </div>
      </article>

      <section className="border-t border-ink">
        <div className="page-x mx-auto max-w-[var(--container-page)] py-14">
          <p className="label">More insights</p>
          <ul className="mt-6 grid gap-px border border-line bg-line sm:grid-cols-3">
            {more.map((x) => (
              <li key={x.slug} className="bg-page">
                <Link to={`/insights/${x.slug}`} className="group block p-6">
                  <p className="label">{x.topic}</p>
                  <h3 className="mt-2 text-lg leading-tight tracking-[-0.02em] transition-colors group-hover:text-accent">
                    {x.title}
                  </h3>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  )
}
