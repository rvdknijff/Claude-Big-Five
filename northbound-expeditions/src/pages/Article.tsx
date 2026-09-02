import { Link, useParams } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import { Seo } from '@/components/Seo'
import { articles, getArticle } from '@/data/journal'
import { formatDate } from '@/lib/format'
import { Button } from '@/components/ui/Button'

export function Article() {
  const { slug } = useParams()
  const article = slug ? getArticle(slug) : undefined

  if (!article) {
    return (
      <div className="page-x mx-auto max-w-3xl py-48 text-center">
        <Seo title="Article not found" description="This article could not be found." />
        <p className="label">404</p>
        <h1 className="mt-3 font-display text-4xl">Article not found</h1>
        <div className="mt-8 flex justify-center">
          <Button to="/journal" withArrow>
            Back to the journal
          </Button>
        </div>
      </div>
    )
  }

  const more = articles.filter((a) => a.slug !== article.slug).slice(0, 2)

  return (
    <>
      <Seo title={article.title} description={article.dek} />

      <article className="page-x mx-auto max-w-[var(--container-page)] pt-28 md:pt-40">
        <Link
          to="/journal"
          className="inline-flex items-center gap-2 text-sm text-ink-faint hover:text-ink"
        >
          <ArrowLeft className="size-4" aria-hidden="true" /> Journal
        </Link>

        <header className="mx-auto mt-8 max-w-3xl">
          <p className="label">
            {article.category} · {formatDate(article.date)} · {article.readMins} min read
          </p>
          <h1 className="mt-4 font-display text-[clamp(2rem,5vw,3.5rem)] leading-[1.05]">
            {article.title}
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-ink-soft">{article.dek}</p>
          <p className="mt-4 text-sm text-ink-faint">by {article.author}</p>
        </header>

        <img
          src={article.image.src}
          width={article.image.width}
          height={article.image.height}
          alt={article.image.alt}
          className="mx-auto mt-10 aspect-[16/9] w-full max-w-4xl object-cover"
        />

        <div className="mx-auto mt-12 max-w-[42rem] pb-16">
          {article.body.map((block, i) => {
            if (block.type === 'h')
              return (
                <h2 key={i} className="mt-10 font-display text-2xl">
                  {block.text}
                </h2>
              )
            if (block.type === 'quote')
              return (
                <blockquote
                  key={i}
                  className="my-8 border-l-2 border-signal pl-5 font-display text-xl italic leading-snug text-ink"
                >
                  {block.text}
                </blockquote>
              )
            return (
              <p key={i} className="mt-5 leading-[1.75] text-ink-soft">
                {block.text}
              </p>
            )
          })}
        </div>
      </article>

      <section className="border-t border-ink/12 py-16">
        <div className="page-x mx-auto max-w-[var(--container-page)]">
          <p className="label">Keep reading</p>
          <ul className="mt-6 grid gap-8 sm:grid-cols-2">
            {more.map((a) => (
              <li key={a.slug}>
                <Link to={`/journal/${a.slug}`} className="group block">
                  <img
                    src={a.image.src}
                    width={a.image.width}
                    height={a.image.height}
                    alt={a.image.alt}
                    loading="lazy"
                    className="aspect-[16/10] w-full object-cover"
                  />
                  <h3 className="mt-3 font-display text-xl transition-colors group-hover:text-signal">
                    {a.title}
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
