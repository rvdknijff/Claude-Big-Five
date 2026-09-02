import { guides } from '@/data/guides'
import { Reveal } from '@/components/ui/Reveal'
import { Figure } from '@/components/ui/Figure'
import { Button } from '@/components/ui/Button'

export function GuidesPreview() {
  return (
    <section className="bg-paper-dim py-20 md:py-28">
      <div className="page-x mx-auto max-w-[var(--container-page)]">
        <div className="rule border-ink/20 pb-6">
          <p className="label">Meet your guides</p>
          <h2 className="mt-4 max-w-[20ch] font-display text-[clamp(1.9rem,4vw,3rem)] leading-[1.05]">
            Three people, and between them most of the North
          </h2>
        </div>

        <div className="mt-10 grid gap-8 md:grid-cols-3">
          {guides.map((g, i) => (
            <Reveal key={g.name} delay={i * 0.08} as="article">
              <Figure asset={g.image} className="aspect-[4/5] w-full" />
              <h3 className="mt-4 font-display text-xl">{g.name}</h3>
              <p className="text-sm text-ink-faint">{g.role} · {g.based}</p>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">{g.bio}</p>
            </Reveal>
          ))}
        </div>

        <div className="mt-10">
          <Button to="/guides" variant="link" withArrow>
            About the guiding team
          </Button>
        </div>
      </div>
    </section>
  )
}
