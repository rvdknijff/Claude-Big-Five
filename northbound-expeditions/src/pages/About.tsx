import { Seo } from '@/components/Seo'
import { PageIntro } from '@/components/layout/PageIntro'
import { media } from '@/data/media'
import { site } from '@/data/site'
import { Reveal } from '@/components/ui/Reveal'
import { Figure } from '@/components/ui/Figure'
import { Button } from '@/components/ui/Button'

const values = [
  {
    title: 'The route is the product, not the accommodation',
    body: 'We spend our money on guides, safety and getting the line right. If you want a hotel and a coach, there are companies for that and they are good at it.',
  },
  {
    title: 'We say no a lot',
    body: 'To bigger groups, to routes we cannot run responsibly, to guests a trip is not right for yet. It costs us bookings. It is why the trips are what they are.',
  },
  {
    title: 'Local knowledge, not a franchise',
    body: 'Every trip is led by a guide who lives in that country and walks it out of season. The Iceland crossing changes slightly every year because Tomás keeps finding better ground.',
  },
  {
    title: 'Honest before you pay',
    body: 'Difficulty ratings mean what they say. If you email us about your fitness, you will get a straight answer, even if it is “not this one yet”.',
  },
]

export function About() {
  return (
    <>
      <Seo
        title="About"
        description="Northbound Expeditions is a small guiding company based in Tromsø, running five carefully-built expeditions into the North with a hard cap of eight guests per trip."
      />
      <PageIntro
        label="About"
        title={<>A small company, on purpose</>}
        intro={`Northbound started in 2017 with one guide, one route and a strong opinion about group size. We are still small: three guides, five expeditions, and a hard cap of ${site.groupMax} guests per trip.`}
      />

      <section className="page-x mx-auto max-w-[var(--container-page)] pb-16">
        <Figure asset={media.ridge} className="aspect-[16/9] w-full" priority />
      </section>

      <section className="page-x mx-auto max-w-[var(--container-page)] py-12 md:py-20">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.6fr] lg:gap-16">
          <p className="label">Why we exist</p>
          <div className="max-w-2xl space-y-5 text-lg leading-relaxed text-ink-soft">
            <p>
              Elin had spent eight winters running logistics for polar expeditions when she started
              taking small groups of friends into Lapland in February. The friends told other
              people. Within two years it was a company.
            </p>
            <p>
              The founding idea was simple and slightly stubborn: a guided trip should feel like
              travelling with a knowledgeable friend, not joining a tour. That falls apart above
              about eight people, so eight is where we stopped — and it has shaped everything since,
              from the price to the kind of guest who books.
            </p>
            <p>
              We are based in Tromsø, above the Arctic Circle, which is a long way from most of our
              guests and exactly where we want to be.
            </p>
          </div>
        </div>
      </section>

      <section className="border-y border-ink/12 bg-paper-dim py-16 md:py-24">
        <div className="page-x mx-auto max-w-[var(--container-page)]">
          <p className="label">What we hold to</p>
          <div className="mt-8 grid gap-px border border-ink/12 bg-ink/12 md:grid-cols-2">
            {values.map((v) => (
              <Reveal key={v.title} className="bg-paper-dim p-7">
                <h2 className="font-display text-xl">{v.title}</h2>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">{v.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="page-x mx-auto flex max-w-[var(--container-page)] flex-col items-start gap-6 py-16 md:flex-row md:items-center md:justify-between md:py-24">
        <h2 className="max-w-[18ch] font-display text-2xl md:text-3xl">
          The guides are the reason this works
        </h2>
        <Button to="/guides" variant="outline" withArrow>
          Meet the team
        </Button>
      </section>
    </>
  )
}
