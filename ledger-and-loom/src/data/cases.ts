export interface CaseStudy {
  readonly slug: string
  readonly client: string
  readonly sector: string
  readonly year: number
  readonly oneLiner: string
  readonly headlineMetric: { readonly value: string; readonly label: string }
  readonly challenge: string
  readonly whatWeDid: readonly string[]
  readonly outcome: readonly string[]
  readonly quote: string
  readonly quoteBy: string
  /** which visualisation the case-study page renders */
  readonly viz: 'runway' | 'margins' | 'hirePlan'
}

/* ---- visualisation datasets (kept next to the case they belong to) ---- */

export const studioNorteCash = {
  months: ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'],
  before: [8, 3, -4, 6, -2, 11, 1, -6, 9, 2, -3, 7].map((k) => k * 1000),
  after: [9, 12, 16, 19, 21, 26, 24, 29, 33, 38, 42, 47].map((k) => k * 1000),
  runwayBefore: 0.8,
  runwayAfter: 6.2,
}

export const frame37Projects = [
  { name: 'City tourism film', revenue: 42000, before: 11, after: 24 },
  { name: 'Product launch series', revenue: 68000, before: 4, after: 19 },
  { name: 'Documentary short', revenue: 21000, before: -3, after: 15 },
  { name: 'Brand anthem', revenue: 55000, before: 8, after: 22 },
  { name: 'Recruitment set', revenue: 33000, before: 14, after: 27 },
  { name: 'Event capture', revenue: 18000, before: -1, after: 31 },
]

export const abelHirePlan = {
  months: ['M1', 'M2', 'M3', 'M4', 'M5', 'M6', 'M7', 'M8', 'M9', 'M10', 'M11', 'M12'],
  revenue: [19, 20, 21, 22, 24, 26, 29, 31, 33, 36, 38, 41].map((k) => k * 1000),
  costsBaseline: [12, 12, 13, 13, 12, 13, 14, 13, 14, 14, 13, 14].map((k) => k * 1000),
  costsWithHire: [12, 12, 13, 18, 18, 19, 20, 19, 20, 20, 20, 21].map((k) => k * 1000),
  hireMonthIndex: 3,
  bufferMonths: 7,
}

export const cases: readonly CaseStudy[] = [
  {
    slug: 'studio-norte',
    client: 'Studio Norte',
    sector: 'Brand design studio',
    year: 2024,
    oneLiner: 'From cashflow that lurched month to month, to six months of runway they can see.',
    headlineMetric: { value: '6.2', label: 'months of runway, from 0.8' },
    challenge:
      'A four-person brand studio doing good work and constantly one late invoice away from a problem. Profitable on paper, but nobody could say how much they could safely spend, and the tax bill arrived like weather.',
    whatWeDid: [
      'Rebuilt the bookkeeping and closed a two-month backlog',
      'Put in a 13-week rolling cash forecast tied to the bank feed',
      'Set an automatic tax reserve at their real effective rate',
      'Agreed a minimum cash floor and a simple rule for owner draws',
    ],
    outcome: [
      'Runway went from under one month to just over six',
      'The tax bill is now sitting in a separate account before it is due',
      'Owner draws are steady instead of "whatever is left"',
      'A 20-minute monthly call replaced the end-of-quarter panic',
    ],
    quote:
      'We didn’t realise how much headspace the money worry was taking up until it stopped. We make better creative decisions now because we’re not quietly anxious.',
    quoteBy: 'Founder, Studio Norte',
    viz: 'runway',
  },
  {
    slug: 'frame-37',
    client: 'Frame/37',
    sector: 'Video production company',
    year: 2023,
    oneLiner: 'Every project looked fine. Half of them were quietly losing money.',
    headlineMetric: { value: '9% → 23%', label: 'average project margin' },
    challenge:
      'Frame/37 quoted from experience and gut feel. Big projects felt profitable and small ones felt like favours — but nobody was tracking margin per project, so the favours were adding up.',
    whatWeDid: [
      'Built a rate card from true cost: crew, kit, edit suite, overhead',
      'Set up per-project margin tracking with time logged against budget',
      'Reviewed the last 18 months of jobs and found the loss-makers',
      'Changed the quoting template so margin is set, not discovered',
    ],
    outcome: [
      'Average margin moved from 9% to 23% over three quarters',
      'Two categories of work were repriced; one was dropped',
      'The team can see a project going over budget while there is still time to act',
      'Revenue is flat and profit is up — they took on fewer, better jobs',
    ],
    quote:
      'The uncomfortable part was seeing which of our favourite projects had lost money. The useful part was that we could finally price the next one properly.',
    quoteBy: 'Producer, Frame/37',
    viz: 'margins',
  },
  {
    slug: 'abel-architecture',
    client: 'Abel Architecture',
    sector: 'Architecture studio',
    year: 2025,
    oneLiner: 'Planning the first employee — before signing the contract, not after.',
    headlineMetric: { value: '7', label: 'months of buffer, planned for' },
    challenge:
      'A one-person architecture studio with more work than one person could do, trying to decide whether to hire. The fear was obvious: take someone on, the pipeline wobbles, and now two salaries depend on it.',
    whatWeDid: [
      'Modelled the fully-loaded cost of a junior architect — salary, employer costs, software, desk',
      'Projected 12 months of revenue against costs with and without the hire',
      'Sized the buffer needed to cover a slow start and stress-tested it',
      'Set a clear trigger: hire once the pipeline covers six months of the new cost',
    ],
    outcome: [
      'The hire was made in month 4, when the trigger was met',
      'The planned seven-month buffer was never fully needed — it took three',
      'Revenue per month is up 55% a year on, with capacity to spare',
      'The second hire is already modelled and waiting on the same trigger',
    ],
    quote:
      'I would have put it off for another year out of nerves. Seeing the buffer written down, and the exact condition for pulling the trigger, made it a decision instead of a leap.',
    quoteBy: 'Principal, Abel Architecture',
    viz: 'hirePlan',
  },
]

export function getCase(slug: string): CaseStudy | undefined {
  return cases.find((c) => c.slug === slug)
}
