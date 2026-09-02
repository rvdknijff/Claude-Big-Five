import { Seo } from '@/components/Seo'
import { PageTitle } from '@/components/layout/PageTitle'
import { TimetableGrid } from '@/components/timetable/TimetableGrid'

export function Timetable() {
  return (
    <>
      <Seo
        title="Timetable"
        description="NIGHTSHIFT 2026 set times — Friday and Saturday, four stages, 20:00 to 07:00. Switch days and see all stages side by side."
      />
      <PageTitle
        index="02 / Timetable"
        title="Timetable"
        sub="All four stages, side by side. Switch between Friday and Saturday. Times are indicative and may still move — check the boards on the night."
      />
      <div className="page-x mx-auto max-w-[var(--container-page)] py-10 md:py-14">
        <TimetableGrid />
      </div>
    </>
  )
}
