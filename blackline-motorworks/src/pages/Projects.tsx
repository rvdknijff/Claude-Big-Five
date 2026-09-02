import { useMemo, useState } from 'react'
import { Seo } from '@/components/Seo'
import { PageHeader } from '@/components/layout/PageHeader'
import { projects } from '@/data/projects'
import { marques } from '@/data/site'
import { cn } from '@/lib/cn'
import { Reveal } from '@/components/ui/Reveal'
import { ProjectCard } from '@/components/projects/ProjectCard'

const filters = ['All', ...marques] as const

export function Projects() {
  const [filter, setFilter] = useState<(typeof filters)[number]>('All')

  const shown = useMemo(
    () => (filter === 'All' ? projects : projects.filter((p) => p.marque === filter)),
    [filter],
  )

  return (
    <>
      <Seo
        title="Projects"
        description="Selected performance projects by Blackline Motorworks — Porsche 992 Carrera S, BMW G80 M3 Competition, Audi RS6 C8 and Mercedes-AMG GT, each with measured before-and-after figures."
      />
      <PageHeader
        label="Selected work"
        title={<>Projects,<br />with the numbers</>}
        intro="A sample of customer cars. Every figure shown was recorded in our own cell — your car will read differently."
      />

      <div className="page-x mx-auto max-w-[var(--container-page)] pb-24 md:pb-36">
        <div
          role="group"
          aria-label="Filter projects by marque"
          className="flex flex-wrap gap-2 border-y border-line py-4"
        >
          {filters.map((f) => (
            <button
              key={f}
              type="button"
              onClick={() => setFilter(f)}
              aria-pressed={filter === f}
              className={cn(
                'px-3 py-1.5 font-mono text-[0.7rem] uppercase tracking-[0.14em] transition-colors',
                filter === f
                  ? 'bg-fg text-base'
                  : 'text-fg-dim hover:text-fg',
              )}
            >
              {f}
            </button>
          ))}
          <span className="ml-auto self-center font-mono text-[0.7rem] uppercase tracking-[0.14em] text-fg-dim">
            {shown.length} {shown.length === 1 ? 'project' : 'projects'}
          </span>
        </div>

        <div className="mt-12 grid gap-x-8 gap-y-14 sm:grid-cols-2">
          {shown.map((project, i) => (
            <Reveal key={project.slug} delay={(i % 2) * 0.06}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>

        {shown.length === 0 && (
          <p className="mt-12 font-mono text-sm text-fg-dim">No projects for this marque yet.</p>
        )}
      </div>
    </>
  )
}
