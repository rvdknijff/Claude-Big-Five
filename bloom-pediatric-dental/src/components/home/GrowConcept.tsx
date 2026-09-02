import { media } from '@/data/media'
import { Reveal } from '@/components/ui/Reveal'
import { Figure } from '@/components/ui/Figure'
import { Sprout } from '@/components/ui/decor'

const stages = [
  { age: '2 jr', label: 'Eerste tandjes, eerste bezoek' },
  { age: '6 jr', label: 'De wisseling begint' },
  { age: '10 jr', label: 'Zelf poetsen, wij kijken mee' },
  { age: '16 jr', label: 'Klaar voor de tandarts voor volwassenen' },
]

export function GrowConcept() {
  return (
    <section className="page-x mx-auto max-w-[var(--container-page)] py-16 md:py-24">
      <div className="grid items-center gap-12 lg:grid-cols-2">
        <Reveal from="left" className="relative order-2 lg:order-1">
          <Figure asset={media.flowers} shape="blob-b" className="aspect-[4/3] w-full -rotate-2" />
          <Sprout className="absolute -right-4 -top-6 h-14 w-14 text-sage float-slow" />
        </Reveal>

        <div className="order-1 lg:order-2">
          <p className="eyebrow mb-3">Ons idee</p>
          <h2 className="text-[clamp(1.9rem,4vw,3rem)]">Een gezonde glimlach groeit mee</h2>
          <p className="mt-4 text-lg leading-relaxed text-ink-soft">
            Een kindergebit verandert elk jaar. Wij bouwen het vertrouwen in hetzelfde tempo op —
            van het allereerste rondkijken tot de dag dat je kind zelfstandig naar de tandarts
            gaat. Elk bezoek is een klein stapje verder.
          </p>

          <ol className="mt-8 space-y-3">
            {stages.map((s, i) => (
              <Reveal key={s.age} delay={i * 0.06} as="li">
                <div className="flex items-center gap-4 rounded-2xl bg-cream px-4 py-3">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-sage-soft font-display font-semibold text-sage-deep">
                    {s.age}
                  </span>
                  <span className="font-bold text-ink">{s.label}</span>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
