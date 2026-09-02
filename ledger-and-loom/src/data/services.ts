export interface Service {
  readonly index: string
  readonly id: string
  readonly title: string
  readonly line: string
  readonly detail: string
  readonly points: readonly string[]
}

export const services: readonly Service[] = [
  {
    index: '01',
    id: 'accounting',
    title: 'Accounting',
    line: 'The books, done properly and on time, so nothing is a surprise in March.',
    detail:
      'We run the bookkeeping, the VAT returns and the year-end. You get a monthly summary in plain language — what came in, what went out, what it means — not a wall of ledgers.',
    points: [
      'Monthly close by the 10th',
      'VAT / BTW filed on schedule',
      'Year-end and corporate tax',
      'One clear monthly summary',
    ],
  },
  {
    index: '02',
    id: 'cashflow',
    title: 'Cashflow',
    line: 'A rolling picture of what you can actually spend, and when the tight months are.',
    detail:
      'A 13-week and 12-month cash forecast that updates with your real bank feed. We flag the pinch points early, model the "what ifs", and tell you the number that matters: how many months of runway you have.',
    points: [
      '13-week rolling forecast',
      'Runway in months, always current',
      'Scenario modelling for big decisions',
      'Alerts before a tight month, not after',
    ],
  },
  {
    index: '03',
    id: 'tax',
    title: 'Tax planning',
    line: 'Set the reserve, use the schemes you qualify for, keep the rest.',
    detail:
      'We work out your effective rate, set an automatic tax reserve so the bill is already sitting there, and make sure you are using the deductions and schemes a creative business actually qualifies for — investment allowance, WBSO, the lot.',
    points: [
      'Automatic tax reserve, right-sized',
      'Effective-rate review each quarter',
      'Deductions and schemes you qualify for',
      'No year-end shocks',
    ],
  },
  {
    index: '04',
    id: 'growth',
    title: 'Growth planning',
    line: 'Model the hire, the studio, the equipment — before you commit to it.',
    detail:
      'When you are deciding whether to take on a person, sign a lease or buy a camera package, we build the projection with you: what it costs fully loaded, what it needs to earn, and how long your buffer lasts if it takes a while.',
    points: [
      'Fully-loaded cost of a hire',
      'Break-even and payback timelines',
      'Buffer analysis for the transition',
      'A go / wait recommendation, in writing',
    ],
  },
  {
    index: '05',
    id: 'studio-finance',
    title: 'Studio finance',
    line: 'Project rates, margins and utilisation — the numbers behind a studio that works.',
    detail:
      'For studios billing project work: a rate card built from real cost, per-project margin tracking, utilisation targets, and a quarterly review of which kind of work is actually paying and which is quietly subsidised.',
    points: [
      'Rate card from true cost',
      'Per-project margin, live',
      'Utilisation targets and tracking',
      'Quarterly "what pays" review',
    ],
  },
]
