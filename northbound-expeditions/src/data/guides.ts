import { media, type MediaAsset } from './media'

export interface Guide {
  readonly name: string
  readonly role: string
  readonly based: string
  readonly bio: string
  readonly quals: readonly string[]
  readonly image: MediaAsset
}

export const guides: readonly Guide[] = [
  {
    name: 'Elin Haugland',
    role: 'Founder & lead guide',
    based: 'Tromsø, Norway',
    bio: 'Elin spent eight winters guiding for a polar logistics company before starting Northbound in 2017. Winter travel and cold-weather medicine are her thing; she leads the Lapland traverse most years.',
    quals: ['IFMGA aspirant', 'Wilderness First Responder', 'Norwegian avalanche level 3'],
    image: media.guideElin,
  },
  {
    name: 'Tomás Reyes',
    role: 'Senior guide',
    based: 'Reykjavík, Iceland',
    bio: 'Tomás has crossed the Icelandic interior more times than he can count, on foot and on skis. He is the person you want reading a river. Off-season he maps unrecorded routes for the trip library.',
    quals: ['AIMG full member', 'Swiftwater rescue technician', 'Glacier travel instructor'],
    image: media.guideTom,
  },
  {
    name: 'Marek Doyle',
    role: 'Guide',
    based: 'Fort William, Scotland',
    bio: 'Marek came to us from mountain rescue in Lochaber. He runs the Skye and Faroe trips and does most of our first-timer briefings — patient, unflappable, quietly funny.',
    quals: ['Mountain Leader (summer & winter)', 'Wilderness First Responder', 'Sea kayak leader'],
    image: media.guideMarek,
  },
] as const

export const safetyPrinciples: readonly { title: string; body: string }[] = [
  {
    title: 'Guides carry, and know how to use, real kit',
    body: 'Satellite communicator, group shelter, comprehensive first-aid, avalanche kit in winter. Every guide holds a current wilderness medical certificate.',
  },
  {
    title: 'The ratio is low on purpose',
    body: 'One guide to eight guests, two on the serious trips. Small enough that the guide knows how everyone is walking by day two.',
  },
  {
    title: 'The plan has a Plan B',
    body: 'Every day has an escape route and a foul-weather alternative. We would rather change the route than push a bad decision. It has cost us a summit or two.',
  },
  {
    title: 'You get an honest brief before you book',
    body: 'If a trip is not right for you yet, we will say so and point you at one that is. Difficulty ratings mean what they say.',
  },
]
