import { team } from '@/data/team'
import { SectionIntro } from '@/components/ui/SectionIntro'
import { Reveal } from '@/components/ui/Reveal'
import { Figure } from '@/components/ui/Figure'
import { Button } from '@/components/ui/Button'

export function TeamSection() {
  return (
    <section className="page-x mx-auto max-w-[var(--container-page)] py-16 md:py-24">
      <SectionIntro
        eyebrow="Wie je tegenkomt"
        title="Drie vaste gezichten"
        body="Bij Bloom werkt een klein team. Je kind ziet elke keer dezelfde mensen — dat scheelt een hoop wennen."
      />

      <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {team.map((m, i) => (
          <Reveal key={m.name} delay={i * 0.08} as="article">
            <div className="group rounded-[2rem] bg-cream p-4 transition-transform duration-300 hover:-translate-y-1">
              <Figure asset={m.image} shape="rounded" className="aspect-[4/5] w-full" />
              <div className="px-2 pb-2 pt-4">
                <h3 className="font-display text-xl font-semibold">{m.name}</h3>
                <p className="text-sm font-extrabold uppercase tracking-wide text-sage-deep">
                  {m.role}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">{m.bio}</p>
                <p className="mt-3 flex items-start gap-2 text-sm text-ink-faint">
                  <span aria-hidden="true">✦</span>
                  {m.likes}
                </p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      <div className="mt-10">
        <Button to="/ons-team" variant="outline">
          Leer het team kennen
        </Button>
      </div>
    </section>
  )
}
