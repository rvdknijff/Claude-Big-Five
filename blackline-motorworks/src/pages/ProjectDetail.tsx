import { Link, useParams } from 'react-router-dom'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { Seo } from '@/components/Seo'
import { getProject, projects } from '@/data/projects'
import { Figure } from '@/components/ui/Figure'
import { Reveal } from '@/components/ui/Reveal'
import { Button } from '@/components/ui/Button'
import { BeforeAfterSlider } from '@/components/projects/BeforeAfterSlider'
import { DynoChart } from '@/components/projects/DynoChart'

export function ProjectDetail() {
  const { slug } = useParams()
  const project = slug ? getProject(slug) : undefined

  if (!project) {
    return (
      <div className="page-x mx-auto max-w-3xl py-48 text-center">
        <Seo title="Project not found" description="This project could not be found." />
        <p className="label">404</p>
        <h1 className="mt-4 font-display text-4xl font-bold uppercase">Project not found</h1>
        <p className="mt-4 text-fg-muted">That build isn&rsquo;t in our records.</p>
        <div className="mt-8 flex justify-center">
          <Button to="/projects" withArrow>
            All projects
          </Button>
        </div>
      </div>
    )
  }

  const idx = projects.findIndex((p) => p.slug === project.slug)
  const next = projects[(idx + 1) % projects.length]

  return (
    <>
      <Seo
        title={`${project.marque} ${project.model}`}
        description={`${project.stage}: ${project.headline}. ${project.figures.powerStock} hp to ${project.figures.powerBuild} hp, measured by Blackline Motorworks.`}
      />

      <article className="pt-28 md:pt-36">
        <div className="page-x mx-auto max-w-[var(--container-page)]">
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 font-mono text-[0.7rem] uppercase tracking-[0.16em] text-fg-dim transition-colors hover:text-fg"
          >
            <ArrowLeft className="size-3.5" aria-hidden="true" />
            Projects
          </Link>

          <div className="mt-8 grid gap-6 border-b border-line pb-12 md:grid-cols-[1fr_auto] md:items-end">
            <div>
              <p className="label !text-fg-dim">
                {project.marque} · {project.year} · {project.owner}
              </p>
              <h1 className="mt-4 font-display text-[clamp(2.25rem,6vw,4.5rem)] font-bold uppercase leading-[0.95] tracking-[-0.02em]">
                {project.model}
              </h1>
              <p className="mt-3 font-mono text-sm uppercase tracking-[0.16em] text-signal-bright">
                {project.stage}
              </p>
            </div>
            <p className="max-w-xs text-pretty text-base leading-relaxed text-fg-muted md:text-right">
              {project.headline}
            </p>
          </div>
        </div>

        <div className="page-x mx-auto mt-12 max-w-[var(--container-page)]">
          <Figure asset={project.image} priority className="aspect-[16/9] w-full" />
        </div>

        <div className="page-x mx-auto max-w-[var(--container-page)] py-16 md:py-24">
          <div className="grid gap-10 border-b border-line pb-14 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
            <div>
              <p className="label mb-4">The brief</p>
              <p className="text-lg leading-relaxed text-fg-muted">{project.intro}</p>
            </div>
            <dl className="grid grid-cols-2 gap-px self-start border border-line bg-line sm:grid-cols-4">
              <Figure2 label="Power" value={`${project.figures.powerBuild} hp`} sub={`from ${project.figures.powerStock}`} />
              <Figure2 label="Torque" value={`${project.figures.torqueBuild} Nm`} sub={`from ${project.figures.torqueStock}`} />
              <Figure2 label="0–100 km/h" value={project.figures.sprintBuild} sub={`from ${project.figures.sprintStock}`} />
              <Figure2
                label="Δ power"
                value={`+${project.figures.powerBuild - project.figures.powerStock} hp`}
                sub="our cell, corrected"
                accent
              />
            </dl>
          </div>

          <div className="mx-auto mt-14 max-w-3xl space-y-14 lg:mt-16">
              <Reveal>
                <BeforeAfterSlider asset={project.image} afterLabel={project.stage} />
              </Reveal>

              <section>
                <h2 className="font-display text-2xl font-bold uppercase tracking-tight">
                  Stock vs. build
                </h2>
                <table className="mt-6 w-full border-collapse text-sm">
                  <thead>
                    <tr className="border-b border-line text-left font-mono text-[0.65rem] uppercase tracking-[0.14em] text-fg-dim">
                      <th className="py-3 pr-4 font-medium">Item</th>
                      <th className="py-3 pr-4 font-medium">Stock</th>
                      <th className="py-3 font-medium text-signal-bright">Blackline</th>
                    </tr>
                  </thead>
                  <tbody>
                    {project.specs.map((row) => (
                      <tr key={row.label} className="border-b border-line align-top">
                        <td className="py-4 pr-4 font-mono text-[0.72rem] uppercase tracking-[0.08em] text-fg-dim">
                          {row.label}
                        </td>
                        <td className="py-4 pr-4 text-fg-muted">{row.stock}</td>
                        <td className="py-4 text-fg">{row.build}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </section>

              <section>
                <h2 className="font-display text-2xl font-bold uppercase tracking-tight">
                  Scope of work
                </h2>
                <ol className="mt-6 divide-y divide-line border-y border-line">
                  {project.scope.map((item) => (
                    <li key={item.area} className="grid grid-cols-[7rem_1fr] gap-4 py-4 md:grid-cols-[9rem_1fr]">
                      <span className="font-mono text-[0.72rem] uppercase tracking-[0.1em] text-signal-bright">
                        {item.area}
                      </span>
                      <span className="text-sm leading-relaxed text-fg-muted">{item.work}</span>
                    </li>
                  ))}
                </ol>
              </section>

              <section>
                <h2 className="font-display text-2xl font-bold uppercase tracking-tight">
                  On the dyno
                </h2>
                <div className="mt-6 border border-line bg-surface p-5 md:p-7">
                  <DynoChart data={project.dyno} />
                </div>
                <p className="mt-5 border-l-2 border-signal pl-4 text-sm leading-relaxed text-fg-muted">
                  {project.note}
                </p>
              </section>
          </div>
        </div>

        <div className="border-t border-line">
          <Link
            to={`/projects/${next.slug}`}
            className="page-x group mx-auto flex max-w-[var(--container-page)] items-center justify-between py-12 md:py-16"
          >
            <span>
              <span className="label !text-fg-dim">Next project</span>
              <span className="mt-2 block font-display text-2xl font-bold uppercase tracking-tight md:text-3xl">
                {next.marque} {next.model}
              </span>
            </span>
            <ArrowRight className="size-6 transition-transform duration-300 group-hover:translate-x-2" aria-hidden="true" />
          </Link>
        </div>
      </article>
    </>
  )
}

function Figure2({
  label,
  value,
  sub,
  accent,
}: {
  label: string
  value: string
  sub: string
  accent?: boolean
}) {
  return (
    <div className="bg-surface px-4 py-5">
      <dt className="font-mono text-[0.6rem] uppercase tracking-[0.12em] text-fg-dim">{label}</dt>
      <dd
        className={`mt-1.5 font-display text-xl font-bold tabular-nums md:text-2xl ${
          accent ? 'text-signal-bright' : 'text-fg'
        }`}
      >
        {value}
      </dd>
      <p className="mt-1 font-mono text-[0.58rem] uppercase tracking-[0.1em] text-fg-dim">{sub}</p>
    </div>
  )
}
