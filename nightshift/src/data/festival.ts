export const festival = {
  name: 'NIGHTSHIFT',
  city: 'Rotterdam',
  dates: '17 — 18 OCT 2026',
  daysLabel: 'Fri 17 + Sat 18 October',
  doors: '20:00',
  close: '07:00',
  year: 2026,
  ticketUrl: 'https://tickets.example.com',
  email: 'crew@nightshift.example',
  emailHref: 'mailto:crew@nightshift.example',
  instagram: 'https://instagram.com',
  resident: 'https://ra.co',
} as const

export type StageId = 'TERMINAL' | 'DOCK' | 'SUBLEVEL' | 'WAREHOUSE'
export type DayId = 'FRI' | 'SAT'

export const nav = [
  { label: 'Line-up', to: '/line-up' },
  { label: 'Timetable', to: '/timetable' },
  { label: 'Venues', to: '/venues' },
  { label: 'Art', to: '/art' },
  { label: 'Archive', to: '/archive' },
  { label: 'Info', to: '/info' },
] as const
