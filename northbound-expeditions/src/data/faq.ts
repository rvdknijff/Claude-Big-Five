export interface FaqItem {
  readonly q: string
  readonly a: string
}

export interface FaqGroup {
  readonly title: string
  readonly items: readonly FaqItem[]
}

export const faqGroups: readonly FaqGroup[] = [
  {
    title: 'Fitness & experience',
    items: [
      {
        q: 'How fit do I need to be?',
        a: 'It depends on the trip. Skye (difficulty 2) needs you to be comfortable walking 15–20 km with a 12 kg pack over hilly ground, back-to-back for four days. The Iceland crossing (4) assumes a real training base — long days, big ascent, awkward terrain. Each expedition page has an honest fitness note; if in doubt, email us and describe your last big walk.',
      },
      {
        q: 'Do I need technical mountaineering skills?',
        a: 'No. None of our trips involve ropework, ice axes as climbing tools, or graded scrambling that a guide has to talk you through move by move. The winter traverse teaches you to ski-tour with a pulk from scratch. Everything is within reach of a fit, sensible hillwalker.',
      },
      {
        q: 'I have never wild camped. Is that a problem?',
        a: 'Not at all — most first-timers start on the Skye trek precisely for this reason. The guides run through pitching, cooking and camp routine on day one. You will be slick by day three.',
      },
    ],
  },
  {
    title: 'Groups & guides',
    items: [
      {
        q: 'How many people will be on my trip?',
        a: 'Never more than eight guests. Trips run with a minimum of four. On the difficulty-4 expeditions there are always two guides.',
      },
      {
        q: 'Can I book as a solo traveller?',
        a: 'Most of our guests do. Tents are shared same-gender two-to-a-tent by default; a single-tent supplement is available on request for the trekking trips (not the winter traverse, where tent-sharing is part of staying warm).',
      },
      {
        q: 'Can we book a private group?',
        a: 'Yes. Any expedition can run as a private departure for 4–8 people on dates that suit you, subject to guide and permit availability. Get in touch for pricing.',
      },
    ],
  },
  {
    title: 'Money & logistics',
    items: [
      {
        q: 'What is included in the price?',
        a: 'Guiding, all group equipment (tents, stoves, safety kit), all meals from the first lunch to the last, and transfers from and to the trip’s stated start and end point. Flights to that point, personal equipment, travel insurance and any pre/post-trip accommodation are not included.',
      },
      {
        q: 'What about travel insurance?',
        a: 'It is mandatory. Your policy must cover trekking to the altitude and remoteness of your trip, mountain rescue and repatriation, and — for the winter traverse — ski touring. We ask for the policy number before departure.',
      },
      {
        q: 'What is your cancellation policy?',
        a: 'A 25% deposit secures your place and is non-refundable. The balance is due 60 days before departure. Cancellations inside 60 days are refunded on a sliding scale detailed in the booking terms. If we cancel a departure (too few bookings, or a genuine safety call before the trip), you get a full refund or a transfer.',
      },
    ],
  },
  {
    title: 'On the trip',
    items: [
      {
        q: 'How heavy is my pack?',
        a: 'On the trekking trips, expect 12–16 kg once your share of group food and kit is loaded. On the winter traverse the weight goes on a pulk you pull, not your back, which is much kinder.',
      },
      {
        q: 'Is there phone signal / can I charge things?',
        a: 'Mostly no signal, and no way to charge. The guides carry a satellite communicator for emergencies and daily check-ins. Bring a power bank if you want your camera to last the week, and tell the people at home not to expect messages.',
      },
      {
        q: 'What happens if the weather is bad?',
        a: 'We walk in a lot of weather — that is the North. But every day has a foul-weather alternative and an escape route, and the guides will use them. A changed route is normal; a cancelled trip mid-expedition is very rare and always a safety decision.',
      },
    ],
  },
]
