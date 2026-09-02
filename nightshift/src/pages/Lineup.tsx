import { Seo } from '@/components/Seo'
import { PageTitle } from '@/components/layout/PageTitle'
import { LineupList } from '@/components/lineup/LineupList'
import { Button } from '@/components/ui/Button'

export function Lineup() {
  return (
    <>
      <Seo
        title="Line-up"
        description="The full NIGHTSHIFT 2026 line-up across four stages — headliners NULL POINTER, CONCRETE ANGEL and 13TH FLOOR, plus live acts and residents."
      />
      <PageTitle
        index="01 / Line-up"
        title="Line-up"
        sub="Hover a name for stage and time — tap on a phone. First names announced; more to come. Set times on the Timetable."
      />
      <div className="page-x mx-auto max-w-[var(--container-page)] py-10 md:py-14">
        <LineupList />
        <div className="mt-12 flex flex-wrap gap-3">
          <Button to="/timetable" variant="bone">
            See the timetable →
          </Button>
          <Button to="/venues" variant="ghost">
            Which stage is which →
          </Button>
        </div>
      </div>
    </>
  )
}
