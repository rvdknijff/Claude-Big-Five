import { media } from '@/data/media'
import { site } from '@/data/site'
import { Reveal } from '@/components/ui/Reveal'
import { Figure } from '@/components/ui/Figure'
import { Button } from '@/components/ui/Button'

const reasons = [
  {
    n: '8',
    label: 'people, maximum',
    body: 'Small enough that the guide knows how everyone is walking by the second day, and that dinner is one conversation rather than several.',
  },
  {
    n: '4',
    label: 'people, minimum',
    body: 'We run trips that only four people booked. Below that the numbers stop working, but we have never cancelled a nearly-full departure.',
  },
  {
    n: '1–2',
    label: 'guides per trip',
    body: 'One guide to eight on the trekking routes; two on the difficulty-4 expeditions, always.',
  },
]

export function WhySmallGroups() {
  return (
    <section className="page-x mx-auto max-w-[var(--container-page)] py-20 md:py-28">
      <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
        <Reveal>
          <Figure asset={media.groupHiking} className="aspect-[4/5] w-full" caption="A full group on the move — this is the size we cap at." />
        </Reveal>

        <div>
          <p className="label">Why small groups</p>
          <h2 className="mt-4 font-display text-[clamp(1.9rem,4vw,3rem)] leading-[1.05]">
            The number on the tin is <em>eight</em>, and we mean it
          </h2>
          <p className="mt-5 max-w-lg leading-relaxed text-ink-soft">
            A larger group is cheaper to run and worse to be on. Past about eight people, a guide
            can no longer read the whole group at once on serious ground — and reading the group is
            the job.
          </p>

          <dl className="mt-10 grid gap-px border border-ink/12 bg-ink/12 sm:grid-cols-3">
            {reasons.map((r) => (
              <div key={r.label} className="bg-paper p-5">
                <dt>
                  <span className="font-display text-3xl text-ink">{r.n}</span>
                  <span className="mt-1 block text-xs font-medium uppercase tracking-wider text-ink-faint">
                    {r.label}
                  </span>
                </dt>
                <dd className="mt-3 text-sm leading-relaxed text-ink-soft">{r.body}</dd>
              </div>
            ))}
          </dl>

          <div className="mt-8">
            <Button to="/journal/why-eight" variant="link" withArrow>
              Read the longer version
            </Button>
          </div>
        </div>
      </div>
      <p className="mt-4 text-xs text-ink-faint">Based in {site.base}.</p>
    </section>
  )
}
