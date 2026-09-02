import { media, type MediaAsset } from './media'

export interface TeamMember {
  readonly name: string
  readonly role: string
  readonly bio: string
  readonly focus: string
  readonly image: MediaAsset
}

export const team: readonly TeamMember[] = [
  {
    name: 'Mathijs Overduin',
    role: 'Founder · lead engineer',
    bio: 'Fifteen years between a GT racing team and a marque specialist before starting Blackline in 2016. Signs off every calibration personally.',
    focus: 'Calibration, project direction',
    image: media.teamLead,
  },
  {
    name: 'Rúben Sá',
    role: 'Master technician',
    bio: 'Fabrication and mechanical build. If it needs to be made rather than bought, Rúben makes it — exhausts, brackets, cooling.',
    focus: 'Fabrication, mechanical build',
    image: media.teamTech,
  },
  {
    name: 'Priya Raghunathan',
    role: 'Data & dyno',
    bio: 'Runs the cell and owns the numbers. Every pull, every log, every before-and-after comparison goes across her desk before it goes to the customer.',
    focus: 'Dyno operation, data analysis',
    image: media.teamCalibration,
  },
] as const

export const workshopFacts: readonly { value: string; label: string }[] = [
  { value: '2016', label: 'Workshop founded' },
  { value: '4', label: 'Marques, in depth' },
  { value: '340 m²', label: 'Floor, two lifts + cell' },
  { value: '1', label: 'Calibration engineer signs off' },
]
