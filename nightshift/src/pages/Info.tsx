import { Seo } from '@/components/Seo'
import { PageTitle } from '@/components/layout/PageTitle'
import { essentials, practical, faqs } from '@/data/info'
import { festival } from '@/data/festival'
import { Button } from '@/components/ui/Button'

export function Info() {
  return (
    <>
      <Seo
        title="Info"
        description="Everything practical about NIGHTSHIFT 2026 — dates, venues, tickets, age policy, getting there, accessibility, welfare and FAQ."
      />
      <PageTitle
        index="06 / Info"
        title="Info"
        sub="The unglamorous but important part. Read this before you buy a ticket."
      />

      <div className="page-x mx-auto max-w-[var(--container-page)] py-10 md:py-14">
        {/* essentials */}
        <div className="grid gap-0.5 border-2 border-bone bg-bone md:grid-cols-2 lg:grid-cols-4">
          {essentials.map((b) => (
            <div key={b.heading} className="bg-black p-5">
              <p className="font-display text-base font-extrabold uppercase tracking-[-0.02em] text-acid">
                {b.heading}
              </p>
              <p className="mt-2 font-mono text-xs leading-relaxed text-bone/85">{b.body}</p>
            </div>
          ))}
        </div>

        <div className="mt-6 flex flex-wrap gap-3">
          <Button href={festival.ticketUrl} variant="acid">
            Get tickets
          </Button>
          <Button href={festival.emailHref} variant="ghost">
            Email the crew
          </Button>
        </div>

        {/* practical */}
        <div className="mt-14 grid gap-8 md:grid-cols-2">
          {practical.map((b) => (
            <div key={b.heading} className="border-t-2 border-line pt-4">
              <h2 className="font-display text-xl font-extrabold uppercase tracking-[-0.02em]">
                {b.heading}
              </h2>
              <p className="mt-2 font-mono text-sm leading-relaxed text-bone/85">{b.body}</p>
            </div>
          ))}
        </div>

        {/* faq */}
        <div className="mt-14">
          <p className="label">FAQ</p>
          <div className="mt-4 border-t-2 border-bone">
            {faqs.map((f) => (
              <details
                key={f.q}
                className="group border-b-2 border-line [&_summary::-webkit-details-marker]:hidden"
              >
                <summary className="flex cursor-pointer list-none items-start justify-between gap-4 py-4">
                  <span className="font-display text-lg font-extrabold uppercase tracking-[-0.02em]">
                    {f.q}
                  </span>
                  <span
                    aria-hidden="true"
                    className="mt-1 font-mono text-acid transition-transform group-open:rotate-45"
                  >
                    +
                  </span>
                </summary>
                <p className="max-w-2xl pb-5 font-mono text-sm leading-relaxed text-bone/85">
                  {f.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
