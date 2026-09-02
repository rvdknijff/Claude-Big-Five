export interface InfoBlock {
  readonly heading: string
  readonly body: string
}

export const essentials: readonly InfoBlock[] = [
  {
    heading: 'When',
    body: 'Friday 17 and Saturday 18 October 2026. Each night runs 20:00 → 07:00. A 2-day ticket lets you re-enter both nights; a 1-day ticket is that night only.',
  },
  {
    heading: 'Where',
    body: 'Four venues along the Rotterdam waterfront: Terminal 04 (Maashaven), The Dock (RDM), Sublevel (Coolhaven) and Warehouse 11 (Merwehaven). Free shuttle buses and a night water taxi connect all four until 06:30.',
  },
  {
    heading: 'Tickets',
    body: 'Sold in tiers — when a tier sells out the price steps up. 2-day: from €89. 1-day: from €52. Under-26 and Rotterdam-resident allocations released monthly. No door sales.',
  },
  {
    heading: 'Age',
    body: '18+. Bring physical ID — a photo of it is not accepted. No exceptions, sorry.',
  },
]

export const practical: readonly InfoBlock[] = [
  {
    heading: 'Getting there',
    body: 'Start at Terminal 04 — it is the closest to a metro (Maashaven, line D/E, 8 minutes’ walk). From there the shuttle loop runs all night. Cycling is quicker than you think; guarded bike parking at every venue.',
  },
  {
    heading: 'Accessibility',
    body: 'Terminal 04 and The Dock are step-free with accessible toilets and a raised viewing area. Sublevel is two floors down with stairs only — staff can advise on the best times and an alternative programme. Email us before you book and we will make it work.',
  },
  {
    heading: 'Phones & photos',
    body: 'Cameras are fine everywhere except Sublevel, which is a strict no-phone room — it is checked at the door. Consider leaving it in your pocket in the others too. Nobody remembers the set they filmed.',
  },
  {
    heading: 'Safety & welfare',
    body: 'A welfare point at every venue, staffed all night, no questions asked. Free water at every bar. Trained crew on every floor. If something is wrong, find anyone in a marked jacket.',
  },
  {
    heading: 'What to bring',
    body: 'ID, your ticket (phone or printed), a warm layer for the shuttle and the walk between venues, earplugs. Small bags only; there is a cloakroom at Terminal 04 and Warehouse 11.',
  },
  {
    heading: 'Policy',
    body: 'Zero tolerance for harassment of any kind — you will be removed. Search on entry. Drug checking is available via the city service; details on the info wall at each venue.',
  },
]

export const faqs: readonly { q: string; a: string }[] = [
  {
    q: 'Can I come and go between venues?',
    a: 'Yes — your wristband works at all four all night. The shuttle loop and water taxi run until 06:30, then it is a short walk or a bike between any two.',
  },
  {
    q: 'Is there a timetable clash tool?',
    a: 'The Timetable page lets you switch between Friday and Saturday and see all four stages side by side. There is no personal-planner login — it is a static site on purpose — but the grid is built to be readable at a glance.',
  },
  {
    q: 'I bought a 1-day ticket. Can I upgrade?',
    a: 'Until tickets sell out, yes — email us and you pay the difference to the current 2-day tier. After sell-out it is not possible.',
  },
  {
    q: 'Refunds?',
    a: 'Tickets are refundable up to 30 days before the festival, minus the booking fee. Inside 30 days they are transferable but not refundable. If we cancel or substantially change the event, you get a full refund.',
  },
  {
    q: 'Is it really 18+?',
    a: 'Yes, and it is checked hard. Bring a passport, ID card or driving licence — the physical document, not a photo.',
  },
]
