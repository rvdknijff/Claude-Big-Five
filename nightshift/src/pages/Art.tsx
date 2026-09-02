import { Seo } from '@/components/Seo'
import { PageTitle } from '@/components/layout/PageTitle'
import { installations } from '@/data/art'
import { Reveal } from '@/components/ui/Reveal'

export function Art() {
  return (
    <>
      <Seo
        title="Art"
        description="NIGHTSHIFT is more than music — projection mapping, interactive light, generative visuals and spatial audio across all four venues."
      />
      <PageTitle
        index="04 / Art"
        title="Art"
        sub="Commissioned for the festival, sited in and around the venues. Projection mapping, interactive light, generative visuals and spatial audio. All included in your ticket."
      />
      <div className="page-x mx-auto max-w-[var(--container-page)]">
        {installations.map((inst, i) => (
          <Reveal key={inst.no} as="article">
            <div
              className={`grid gap-6 border-b-2 border-line py-10 md:grid-cols-2 md:gap-10 md:py-14 ${
                i % 2 === 1 ? 'md:[&>img]:order-2' : ''
              }`}
            >
              <img
                src={inst.image.src}
                width={inst.image.width}
                height={inst.image.height}
                alt={inst.image.alt}
                loading={i === 0 ? 'eager' : 'lazy'}
                className="mono aspect-[16/10] w-full border-2 border-line object-cover"
              />
              <div className="self-center">
                <p className="font-mono text-xs uppercase tracking-[0.1em] text-acid">
                  {inst.no} · {inst.kind}
                </p>
                <h2 className="mt-2 font-display text-[clamp(1.75rem,5vw,3.25rem)] font-extrabold uppercase leading-[0.9] tracking-[-0.03em]">
                  {inst.title}
                </h2>
                <p className="mt-2 font-mono text-sm text-ash">
                  {inst.artist} · {inst.where}
                </p>
                <p className="mt-4 font-mono text-sm leading-relaxed text-bone/85">{inst.blurb}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </>
  )
}
