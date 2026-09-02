export interface ArticleBlock {
  readonly type: 'p' | 'h' | 'quote' | 'list'
  readonly text?: string
  readonly items?: readonly string[]
}

export interface Article {
  readonly slug: string
  readonly title: string
  readonly dek: string
  readonly topic: string
  readonly date: string
  readonly readMins: number
  readonly body: readonly ArticleBlock[]
}

export const articles: readonly Article[] = [
  {
    slug: 'the-tax-reserve',
    title: 'Pay yourself the tax bill first',
    dek: 'The single habit that removes most year-end stress: a separate account, a fixed percentage, moved on the day money lands.',
    topic: 'Tax',
    date: '2026-01-20',
    readMins: 4,
    body: [
      { type: 'p', text: 'Almost every year-end panic we are called about has the same root cause: the money that was always going to be tax was spent because it was sitting in the same account as everything else.' },
      { type: 'h', text: 'The fix is boring and it works' },
      { type: 'p', text: 'Open a second business savings account. Every time a client invoice is paid, move a fixed percentage of it — not the profit, the invoice — into that account the same day. Do not touch it. When the tax bill arrives, it is already there.' },
      { type: 'h', text: 'What percentage?' },
      { type: 'p', text: 'It depends on your structure and your deductions, which is exactly the sort of thing we work out for clients. As a rough starting point for a sole trader in the Netherlands, somewhere between 25% and 35% of turnover is a sensible holding figure until the real number is known. Over-reserving is annoying; under-reserving is a crisis. Round up.' },
      { type: 'quote', text: 'You will feel poorer for about two months and then you will never think about the tax bill again.' },
    ],
  },
  {
    slug: 'runway-not-profit',
    title: 'Runway is the number, not profit',
    dek: 'Profit is an opinion about a period that has ended. Runway is a fact about how long you can keep going.',
    topic: 'Cashflow',
    date: '2025-11-08',
    readMins: 5,
    body: [
      { type: 'p', text: 'Creative businesses are told to watch their profit margin. It is not a bad thing to watch, but it is a lagging, arguable figure — it depends on when you recognise revenue, how you treat work-in-progress, and what you count as an overhead.' },
      { type: 'h', text: 'Runway is simpler and harder to fool' },
      { type: 'p', text: 'Runway is: cash in the bank, divided by your average monthly burn, adjusted for money you are genuinely confident is coming in. It answers the only question that actually keeps founders up: if things go quiet, how long have I got?' },
      { type: 'list', items: [
        'Under 2 months: this is an emergency, act today',
        '2–4 months: fragile, no big commitments',
        '4–6 months: workable, keep building the buffer',
        '6+ months: you can make decisions from choice, not fear',
      ] },
      { type: 'p', text: 'We put a live runway figure at the top of every client’s monthly summary. It is the first thing they look at, and usually the only thing they need to.' },
    ],
  },
  {
    slug: 'pricing-from-cost',
    title: 'Your day rate is probably a guess',
    dek: 'How to build a project rate from what the work actually costs, so margin is a decision and not a surprise.',
    topic: 'Studio finance',
    date: '2025-09-15',
    readMins: 6,
    body: [
      { type: 'p', text: 'Most studios set their rate by looking at what they charged last time, or what they think the market will bear. Both are fine as a sanity check and terrible as a foundation.' },
      { type: 'h', text: 'Start from the fully-loaded cost of an hour' },
      { type: 'p', text: 'Take everyone’s salary including employer costs. Add the rent, the software, the accountant, the insurance, the hardware you replace every three years. Divide by the number of hours you can realistically bill — not the hours you work, the hours a client pays for, which is usually 55–65% of them. That number is what an hour costs you before you have made a cent.' },
      { type: 'quote', text: 'If your rate is below your fully-loaded cost, you are not running a business, you are running a hobby with invoices.' },
      { type: 'h', text: 'Then add the margin you actually want' },
      { type: 'p', text: 'Now the markup is a choice. Twenty per cent, thirty, forty — you can see exactly what each one means and defend it. And when a client pushes back on price, you are negotiating from a number you understand instead of a number you hoped for.' },
    ],
  },
  {
    slug: 'first-hire',
    title: 'Can you afford the first hire? Here is the maths',
    dek: 'The fully-loaded cost of an employee, the buffer you need for a slow start, and the trigger that makes it a decision.',
    topic: 'Growth',
    date: '2026-02-28',
    readMins: 5,
    body: [
      { type: 'p', text: 'The first hire is the scariest financial decision a lot of creative founders make, and the fear is rational: you are turning a variable cost (your own time) into a fixed one (someone’s salary) at the exact moment you have the least data.' },
      { type: 'h', text: 'Cost it fully' },
      { type: 'p', text: 'A €42,000 salary is not a €42,000 decision. Add roughly 20–30% for employer contributions, then software seats, a laptop, a desk, and the time you will spend managing rather than billing in the first few months. Call it €58,000–€62,000 all-in for year one.' },
      { type: 'h', text: 'Then size the buffer' },
      { type: 'p', text: 'Assume the new person is not fully productive for three months and the pipeline has a wobble somewhere in the first year. How many months of that all-in cost do you need in reserve to ride it out without stress? For most studios the answer is between four and eight.' },
      { type: 'h', text: 'Set the trigger' },
      { type: 'p', text: 'Do not hire when you feel ready — feelings lag. Hire when a written condition is met: for example, "signed and likely work covers six months of the new cost". Then it is arithmetic, and arithmetic is much less frightening at 2am.' },
    ],
  },
]

export function getArticle(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug)
}
