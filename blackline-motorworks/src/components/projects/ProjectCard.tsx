import { Link } from 'react-router-dom'
import type { Project } from '@/data/projects'
import { cn } from '@/lib/cn'
import { Figure } from '@/components/ui/Figure'

interface ProjectCardProps {
  project: Project
  /** larger typography + wider image for the lead item */
  feature?: boolean
  className?: string
}

export function ProjectCard({ project, feature = false, className }: ProjectCardProps) {
  const deltaHp = project.figures.powerBuild - project.figures.powerStock

  return (
    <article className={cn('group', className)}>
      <Link to={`/projects/${project.slug}`} className="block">
        <div className="relative overflow-hidden">
          <Figure
            asset={project.image}
            className={feature ? 'aspect-[16/10]' : 'aspect-[4/3]'}
            imgClassName="transition-transform duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.04]"
          />
          {/* signal sweep on hover */}
          <span
            aria-hidden="true"
            className="absolute bottom-0 left-0 h-[3px] w-0 bg-signal transition-[width] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:w-full"
          />
          <div className="absolute right-3 top-3 flex gap-2">
            <span className="bg-base/80 px-2 py-1 font-mono text-[0.6rem] uppercase tracking-[0.14em] text-fg-muted backdrop-blur-sm">
              {project.year}
            </span>
          </div>
        </div>

        <div className="mt-4 flex items-start justify-between gap-4">
          <div>
            <p className="label !text-fg-dim">{project.marque}</p>
            <h3
              className={cn(
                'mt-1 font-display font-bold uppercase tracking-tight text-fg',
                feature ? 'text-2xl md:text-3xl' : 'text-lg md:text-xl',
              )}
            >
              {project.model}
            </h3>
            <p className="mt-1 font-mono text-[0.7rem] uppercase tracking-[0.12em] text-fg-muted">
              {project.stage}
            </p>
          </div>
          <div className="shrink-0 text-right">
            <span className="font-display text-xl font-bold tabular-nums text-signal-bright md:text-2xl">
              +{deltaHp}
            </span>
            <span className="block font-mono text-[0.55rem] uppercase tracking-[0.14em] text-fg-dim">
              hp
            </span>
          </div>
        </div>
      </Link>
    </article>
  )
}
