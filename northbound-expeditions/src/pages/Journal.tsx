import { Link } from 'react-router-dom'
import { Seo } from '@/components/Seo'
import { PageIntro } from '@/components/layout/PageIntro'
import { articles } from '@/data/journal'
import { Reveal } from '@/components/ui/Reveal'
import { formatDate } from '@/lib/format'

export function Journal() {
  return (
    <>
      <Seo
        title="Journal"
        description="Field notes, skills and opinions from the Northbound guiding team — why we cap trips at eight, how to read a glacial river, a week in February from the notebook, and the kit that earns its place."
      />
      <PageIntro
        label="The journal"
        title={<>Notes from <em>the trail</em></>}
        intro="Written by the guides, mostly between trips. Skills, opinions, and the occasional unedited page from a notebook."
      />

      <div className="page-x mx-auto max-w-[var(--container-page)] pb-24 md:pb-32">
        <ul className="rule border-ink/20">
          {articles.map((a, i) => (
            <li key={a.slug} className="border-b border-ink/12">
              <Reveal delay={Math.min(i * 0.05, 0.2)}>
                <Link
                  to={`/journal/${a.slug}`}
                  className="group grid gap-6 py-8 md:grid-cols-[1fr_1.4fr] md:gap-12 md:py-10"
                >
                  <div className="overflow-hidden">
                    <img
                      src={a.image.src}
                      width={a.image.width}
                      height={a.image.height}
                      alt={a.image.alt}
                      loading="lazy"
                      className="aspect-[16/10] w-full object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.03]"
                    />
                  </div>
                  <div className="flex flex-col justify-center">
                    <p className="label">
                      {a.category} · {formatDate(a.date)} · {a.readMins} min read
                    </p>
                    <h2 className="mt-2 font-display text-2xl leading-tight transition-colors group-hover:text-signal md:text-[1.9rem]">
                      {a.title}
                    </h2>
                    <p className="mt-3 max-w-xl leading-relaxed text-ink-soft">{a.dek}</p>
                    <p className="mt-4 text-sm text-ink-faint">by {a.author}</p>
                  </div>
                </Link>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}
