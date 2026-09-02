import { projects } from '@/data/projects'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Reveal } from '@/components/ui/Reveal'
import { Button } from '@/components/ui/Button'
import { ProjectCard } from '@/components/projects/ProjectCard'

export function SelectedProjects() {
  const [lead, ...rest] = projects

  return (
    <section className="page-x mx-auto max-w-[var(--container-page)] border-t border-line py-20 md:py-32">
      <div className="flex flex-wrap items-end justify-between gap-6">
        <SectionHeading
          label="03 / Selected projects"
          title="Customer cars, after the work"
          className="max-w-xl"
        />
        <Button to="/projects" variant="ghost" withArrow className="mb-1">
          View all projects
        </Button>
      </div>

      <div className="mt-14 grid gap-x-8 gap-y-14 md:grid-cols-12">
        <Reveal className="md:col-span-7">
          <ProjectCard project={lead} feature />
        </Reveal>
        <div className="md:col-span-5 md:pt-16">
          <Reveal delay={0.06}>
            <ProjectCard project={rest[0]} />
          </Reveal>
        </div>
        {rest.slice(1).map((project, i) => (
          <Reveal key={project.slug} delay={i * 0.06} className="md:col-span-6">
            <ProjectCard project={project} />
          </Reveal>
        ))}
      </div>
    </section>
  )
}
