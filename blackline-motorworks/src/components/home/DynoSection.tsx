import { featuredProject } from '@/data/projects'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Reveal } from '@/components/ui/Reveal'
import { DynoChart } from '@/components/projects/DynoChart'

const principles = [
  {
    n: '01',
    title: 'Baseline first',
    body: 'Nothing is touched until we have a clean reference pull and a full set of logs. If the car is not healthy, that is the project.',
  },
  {
    n: '02',
    title: 'One change at a time',
    body: 'Hardware and calibration are validated in small steps so we know what each part is actually worth on this engine.',
  },
  {
    n: '03',
    title: 'Shape, not just peak',
    body: 'A higher number at 6,500 rpm is easy. A curve that is fuller everywhere and safe under load is the harder, better result.',
  },
  {
    n: '04',
    title: 'It leaves with paperwork',
    body: 'Before and after graphs, the calibration notes and a setup sheet go home with the car.',
  },
]

export function DynoSection() {
  return (
    <section className="border-t border-line bg-surface py-20 md:py-32">
      <div className="page-x mx-auto max-w-[var(--container-page)]">
        <SectionHeading
          label="04 / Dyno & engineering"
          title="“More power” is the easy part"
          intro="The dyno is a measurement tool, not a marketing one. Here is a real before-and-after from the 992 build above — hover the graph to read any point."
        />

        <div className="mt-14 grid gap-12 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
          <Reveal variant="wipe">
            <div className="border border-line bg-base p-5 md:p-7">
              <DynoChart data={featuredProject.dyno} />
            </div>
          </Reveal>

          <ol className="grid gap-px self-start border border-line bg-line">
            {principles.map((p) => (
              <li key={p.n} className="bg-surface p-6 md:p-7">
                <div className="flex items-baseline gap-4">
                  <span className="font-mono text-xs text-signal-bright">{p.n}</span>
                  <div>
                    <h3 className="font-display text-lg font-bold uppercase tracking-tight">
                      {p.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-fg-muted">{p.body}</p>
                  </div>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
