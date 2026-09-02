export interface FaqItem {
  readonly q: string
  readonly a: string
}

export const faqs: readonly FaqItem[] = [
  {
    q: 'Who do you work with?',
    a: 'Independent creative professionals and small creative businesses — designers, photographers, developers, architects, video producers, studios up to about fifteen people. If you invoice for creative work and the finance side is not why you started, you are our client.',
  },
  {
    q: 'Do you replace my current accountant?',
    a: 'Usually, yes — we do the compliance work (bookkeeping, VAT, year-end) as well as the advisory. Some clients keep a separate accountant for a specific reason and we work alongside them. Either is fine; we will tell you honestly which makes sense.',
  },
  {
    q: 'How much does it cost?',
    a: 'A fixed monthly fee based on your size and how much advisory work you want, agreed up front. No hourly billing, no surprise invoices for a phone call. Most sole traders are €180–€320 a month; studios more. We will quote you a real number after a first conversation.',
  },
  {
    q: 'What software do you use?',
    a: 'We work in your existing accounting software where possible — Moneybird, e-Boekhouden, Exact, QuickBooks. The forecasting and dashboards are ours, built on top of your bank feed. You do not need to buy anything new.',
  },
  {
    q: 'I am behind on my books. Is that a problem?',
    a: 'No, it is normal — most clients arrive with a backlog. Catching up is part of onboarding. We would rather you came to us behind than kept putting it off.',
  },
  {
    q: 'Is the cashflow tool on this site real advice?',
    a: 'No. The calculator on the homepage is a simple illustration to show the shape of the maths. It ignores your structure, your deductions, your VAT position and a dozen other things that matter. Treat it as a conversation starter, not a plan.',
  },
]
