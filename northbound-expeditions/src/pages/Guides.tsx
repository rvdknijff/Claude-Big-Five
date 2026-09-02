import { Seo } from '@/components/Seo'
import { PageIntro } from '@/components/layout/PageIntro'
import { guides, safetyPrinciples } from '@/data/guides'
import { Reveal } from '@/components/ui/Reveal'
import { Figure } from '@/components/ui/Figure'
import { Button } from '@/components/ui/Button'
import { cn } from '@/lib/cn'

export function Guides() {
  return (
    <>
      <Seo
        title="Guides"
        description="The guiding team at Northbound Expeditions: Elin Haugland, Tomás Reyes and Marek Doyle — their qualifications, where they are based and which trips they lead."
      />
      <PageIntro
        label="The team"
        title={<>Three guides, <em>and their kit</em></>}
        intro="Every expedition is led by a guide who lives in that country and knows the ground in every season. Between them they carry the qualifications below and a great deal of experience that does not fit on a certificate."
      />

      <section className="page-x mx-auto max-w-[var(--container-page)] py-12 md:py-16">
        <div className="space-y-16">
          {guides.map((g, i) => (
            <Reveal key={g.name} as="article">
              <div
                className={cn(
                  'grid items-start gap-8 md:grid-cols-[1fr_1.5fr] md:gap-14',
                )}
              >
                <Figure
                  asset={g.image}
                  className={cn('aspect-[4/5] w-full max-w-xs', i % 2 === 1 && 'md:order-2 md:ml-auto')}
                />
                <div className={cn(i % 2 === 1 && 'md:order-1')}>
                  <h2 className="font-display text-3xl">{g.name}</h2>
                  <p className="mt-1 text-sm text-ink-faint">
                    {g.role} · based in {g.based}
                  </p>
                  <p className="mt-4 max-w-xl leading-relaxed text-ink-soft">{g.bio}</p>
                  <ul className="mt-5 flex flex-wrap gap-2">
                    {g.quals.map((q) => (
                      <li
                        key={q}
                        className="rounded-[3px] border border-ink/15 px-2.5 py-1 text-xs text-ink-soft"
                      >
                        {q}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="border-t border-ink/12 bg-forest py-16 text-paper md:py-24">
        <div className="page-x mx-auto max-w-[var(--container-page)]">
          <p className="label !text-paper/50">Safety</p>
          <h2 className="mt-3 max-w-[20ch] font-display text-[clamp(1.8rem,4vw,2.75rem)] text-paper">
            How we keep serious trips safe
          </h2>
          <div className="mt-8 grid gap-px border border-paper/12 bg-paper/12 md:grid-cols-2">
            {safetyPrinciples.map((p) => (
              <div key={p.title} className="bg-forest p-7">
                <h3 className="font-display text-xl text-paper">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-paper/70">{p.body}</p>
              </div>
            ))}
          </div>
          <div className="mt-10">
            <Button
              to="/faq"
              variant="outline"
              withArrow
              className="!border-paper/30 !text-paper hover:!bg-paper hover:!text-bark"
            >
              More in the FAQ
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
