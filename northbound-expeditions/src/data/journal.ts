import { media, type MediaAsset } from './media'

export interface ArticleBlock {
  readonly type: 'p' | 'h' | 'quote'
  readonly text: string
}

export interface Article {
  readonly slug: string
  readonly title: string
  readonly dek: string
  readonly category: string
  readonly date: string
  readonly readMins: number
  readonly author: string
  readonly image: MediaAsset
  readonly body: readonly ArticleBlock[]
}

export const articles: readonly Article[] = [
  {
    slug: 'why-eight',
    title: 'Why we cap every trip at eight',
    dek: 'The number is not marketing. It is the largest group one guide can actually keep track of on serious ground.',
    category: 'How we work',
    date: '2026-06-14',
    readMins: 5,
    author: 'Elin Haugland',
    image: media.groupHiking,
    body: [
      { type: 'p', text: 'People ask us fairly often whether we could take ten, or twelve — it would bring the price down, after all. The answer is always no, and it is worth explaining why.' },
      { type: 'h', text: 'A guide is a person, not a system' },
      { type: 'p', text: 'On a path in good weather, a guide can look after a lot of people. The trouble is that our trips are not paths in good weather. They are river crossings, ridge lines, whiteouts and long days when someone is quietly running out of energy and has not said so yet. Past about eight, a guide stops being able to read the whole group at once. They start managing the front and the back and losing the middle.' },
      { type: 'quote', text: 'By day two the guide should know how every single person in the group walks — their pace, their appetite, the face they make when they are tired.' },
      { type: 'p', text: 'Eight also happens to be the number that fits in one van, around one dinner, in one conversation. Bigger groups fracture into cliques. Smaller ones — we run trips with four — are wonderful but hard to make the economics work.' },
      { type: 'h', text: 'What it costs you' },
      { type: 'p', text: 'A bit more money, honestly. A trip split eight ways carries more guide cost per head than one split fifteen ways. We think the trade is obvious. If you have been on a "small group" trip that turned out to be eighteen strangers and a flag, you probably agree.' },
    ],
  },
  {
    slug: 'reading-a-river',
    title: 'How to read a glacial river before you wade it',
    dek: 'A field guide to the single most dangerous ten minutes of an Iceland crossing — and how guides make the call.',
    category: 'Skills',
    date: '2026-08-02',
    readMins: 7,
    author: 'Tomás Reyes',
    image: media.icelandRiver,
    body: [
      { type: 'p', text: 'Every year, the most serious incidents in the Icelandic highlands happen at river crossings, and almost all of them are avoidable. Here is roughly what goes through a guide’s head at the bank.' },
      { type: 'h', text: 'Time of day matters more than you think' },
      { type: 'p', text: 'Glacial rivers are fed by melt. They are lowest in the early morning after a cold night and highest in the late afternoon of a warm, sunny day — the difference can be knee-deep versus waist-deep. If a crossing looks marginal at 4pm, the answer is often simply to camp and cross at 7am.' },
      { type: 'h', text: 'Braids are your friend' },
      { type: 'p', text: 'A river split into five shallow channels across a gravel flat is far safer than the same volume of water in one deep channel. We will walk upstream or downstream for twenty minutes to find the braided section. The straightest line is rarely the right one.' },
      { type: 'quote', text: 'You never cross facing downstream, you never unclip your hip belt too late, and you never, ever cross roped together.' },
      { type: 'h', text: 'The actual technique' },
      { type: 'p', text: 'Face upstream, lean slightly into the current, shuffle sideways, keep three points of contact. In a group we link arms in a wedge with the strongest person at the upstream point. Poles help enormously. Hip belts come undone so the pack can be ditched if you go in.' },
      { type: 'p', text: 'And if the guide says no? Then it is no. The far bank is not worth it.' },
    ],
  },
  {
    slug: 'february-in-lapland',
    title: 'A week in February, from the notebook',
    dek: 'Unedited entries from the Arctic Circle Winter Traverse — what deep cold actually feels like once it becomes routine.',
    category: 'Field notes',
    date: '2026-03-01',
    readMins: 6,
    author: 'Elin Haugland',
    image: media.aurora,
    body: [
      { type: 'p', text: 'Day one. Minus fourteen at the road-head, everyone over-dressed and sweating within the hour. This always happens. You learn to start cold.' },
      { type: 'p', text: 'Day two. The big lake crossing. Wind straight down it, spindrift moving like smoke across the ice. Ninety minutes of head-down hauling and then trees, and shelter, and the sudden loud silence when the wind stops.' },
      { type: 'quote', text: 'Nobody talks much on the ice. On the third night, around the stove, everybody talks at once.' },
      { type: 'p', text: 'Day three. Clear sky after dinner. The aurora came up green and then folded into a curtain that took up half the sky. We stood outside in socks and down jackets until our feet complained.' },
      { type: 'p', text: 'Day five. Snow-shelter night. It took four hours to build three quinzhees. Inside it is genuinely warm — condensation drips, headtorches glow through the walls. Outside it dropped to minus twenty-two. I slept four hours and would do it again tomorrow.' },
      { type: 'p', text: 'Day seven. Out to Arjeplog, sauna, and the strange sensory overload of a heated room and a chair with a back. Someone put music on and it sounded absurd.' },
    ],
  },
  {
    slug: 'the-kit-that-earns-its-place',
    title: 'The kit that earns its place — and the kit that does not',
    dek: 'After a few hundred expeditions, a short and opinionated list of what actually matters in your pack.',
    category: 'Gear',
    date: '2026-05-20',
    readMins: 4,
    author: 'Marek Doyle',
    image: media.gear,
    body: [
      { type: 'p', text: 'We send everyone a full kit list before their trip, and we mean it. But if you want the short version — the things that make or break a week outside — here it is.' },
      { type: 'h', text: 'Spend money on: feet, sleep, shell' },
      { type: 'p', text: 'Boots that fit and are broken in. A sleeping bag rated for real conditions, not optimistic ones. A waterproof that still works after three days of rain. Everything else you can improvise; these three you cannot.' },
      { type: 'h', text: 'Do not bother with: most of the rest' },
      { type: 'p', text: 'Camp shoes weigh nothing and are lovely — bring them. A second "just in case" jacket usually stays in the pack all week — leave it. Gadgets that need charging will be dead by day three. A paperback is worth its weight; a drone is not, and the guides will ask you not to fly it.' },
      { type: 'quote', text: 'The best-packed rucksack we ever saw belonged to a 68-year-old on the Skye trek. It weighed nine kilos and contained nothing she did not use.' },
    ],
  },
]

export function getArticle(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug)
}
