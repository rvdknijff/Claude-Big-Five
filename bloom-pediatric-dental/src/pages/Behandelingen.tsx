import { Seo } from '@/components/Seo'
import { PageHero } from '@/components/layout/PageHero'
import { treatments, prevention } from '@/data/treatments'
import { Reveal } from '@/components/ui/Reveal'
import { Figure } from '@/components/ui/Figure'
import { Button } from '@/components/ui/Button'
import { media } from '@/data/media'
import { cn } from '@/lib/cn'

const toneBg: Record<string, string> = {
  sage: 'bg-sage-soft',
  blush: 'bg-blush-soft',
  sky: 'bg-sky-soft',
  sun: 'bg-sun-soft',
}

export function Behandelingen() {
  return (
    <>
      <Seo
        title="Behandelingen"
        description="Van wenafspraken en halfjaarlijkse controles tot fluoride, vullingen en verwijzing naar de orthodontist — alles wat Bloom kindertandarts doet, rustig uitgelegd."
      />
      <PageHero
        eyebrow="Behandelingen"
        title="Wat we doen, en hoe we het uitleggen"
        intro="Elke behandeling begint met laten zien, voelen en horen wat er gaat gebeuren. Pas daarna beginnen we — en alleen als je kind er klaar voor is."
        tone="blush"
      />

      <section className="page-x mx-auto max-w-[var(--container-page)] py-16 md:py-24">
        <div className="grid gap-6 md:grid-cols-2">
          {treatments.map((t, i) => (
            <Reveal key={t.id} delay={(i % 2) * 0.06} as="article">
              <div className={cn('h-full rounded-[2rem] p-7 md:p-8', toneBg[t.tone])}>
                <div className="flex items-baseline justify-between gap-3">
                  <h2 className="font-display text-2xl font-semibold">{t.title}</h2>
                  <span className="shrink-0 rounded-full bg-paper/70 px-3 py-1 text-xs font-extrabold uppercase tracking-wide text-ink-soft">
                    {t.age}
                  </span>
                </div>
                <p className="mt-3 font-bold text-ink">{t.summary}</p>
                <p className="mt-2 leading-relaxed text-ink-soft">{t.detail}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-cream py-16 md:py-24">
        <div className="page-x mx-auto max-w-[var(--container-page)]">
          <p className="eyebrow mb-3">Preventie</p>
          <h2 className="max-w-2xl text-[clamp(1.8rem,4vw,2.8rem)]">
            Het meeste werk gebeurt thuis, aan de wastafel
          </h2>
          <div className="mt-10 grid items-start gap-8 lg:grid-cols-[1.4fr_1fr]">
            <div className="grid gap-5 sm:grid-cols-2">
              {prevention.map((p, i) => (
                <Reveal key={p.title} delay={i * 0.06}>
                  <div className="flex h-full gap-4 rounded-2xl bg-paper p-5">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-sage-soft font-display font-semibold text-sage-deep">
                      {i + 1}
                    </span>
                    <div>
                      <h3 className="font-display text-lg font-semibold">{p.title}</h3>
                      <p className="mt-1 leading-relaxed text-ink-soft">{p.body}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
            <Reveal from="left">
              <Figure asset={media.brushingSmile} shape="blob-a" className="aspect-[4/3] w-full" />
            </Reveal>
          </div>
          <div className="mt-12">
            <Button to="/voor-ouders" variant="sage">
              Meer poets- en voedingstips
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
