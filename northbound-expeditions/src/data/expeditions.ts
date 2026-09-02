import { media, type MediaAsset } from './media'

export interface ItineraryDay {
  readonly day: number
  readonly title: string
  readonly note: string
  readonly distanceKm: number
  readonly ascentM: number
  readonly sleep: string
}

export interface StoryBeat {
  readonly marker: string
  readonly headline: string
  readonly body: string
  readonly image: MediaAsset
}

export interface Expedition {
  readonly slug: string
  readonly name: string
  readonly country: string
  readonly region: string
  readonly days: number
  readonly difficulty: 1 | 2 | 3 | 4 | 5
  readonly month: string
  readonly season: string
  readonly tempRange: string
  readonly distanceKm: number
  readonly ascentM: number
  readonly priceFrom: number
  readonly summary: string
  readonly intro: string
  readonly heroImage: MediaAsset
  readonly cardImage: MediaAsset
  readonly itinerary: readonly ItineraryDay[]
  readonly included: readonly string[]
  readonly bring: readonly string[]
  readonly sleeping: string
  readonly story: readonly StoryBeat[]
  readonly featured?: boolean
}

/** Elevation profile points (metres) for the detail-page route graphic. */
export function profile(exp: Expedition): number[] {
  // build a rolling profile from each day's ascent so it reads like real terrain
  let h = 120
  const pts: number[] = [h]
  for (const d of exp.itinerary) {
    const up = d.ascentM
    const steps = 4
    for (let i = 0; i < steps; i++) {
      h += (up / steps) * (0.6 + Math.sin(i + d.day) * 0.5)
      h -= up * 0.12
      pts.push(Math.max(20, Math.round(h)))
    }
  }
  return pts
}

export const expeditions: readonly Expedition[] = [
  {
    slug: 'arctic-circle-winter-traverse',
    name: 'Arctic Circle Winter Traverse',
    country: 'Swedish Lapland',
    region: 'Pite älv headwaters → Arjeplog',
    days: 7,
    difficulty: 4,
    month: 'February',
    season: 'Deep winter',
    tempRange: '−18 °C → −5 °C',
    distanceKm: 88,
    ascentM: 1900,
    priceFrom: 2850,
    summary:
      'A week on skis and snowshoes across frozen lakes and birch forest, hauling pulks, sleeping in heated tents and one night in a snow shelter you build yourself.',
    intro:
      'This is the trip people are most nervous about and least likely to forget. You travel self-supported across a corner of Lapland that has no winter road, pulling your kit on a pulk, navigating between wind-scoured lakes and sheltered forest. The cold is real and it is the point: handled properly it becomes ordinary by day three, and the silence that comes with it is unlike anything else we run.',
    heroImage: media.lapland,
    cardImage: media.frozenLake,
    itinerary: [
      { day: 1, title: 'Road-head to first lake', note: 'Kit check, pulk packing and a short afternoon leg onto the ice to shake everything down.', distanceKm: 8, ascentM: 90, sleep: 'Heated tent' },
      { day: 2, title: 'Across the big water', note: 'A long, exposed crossing with the wind behind us. Whiteout navigation practice.', distanceKm: 17, ascentM: 140, sleep: 'Heated tent' },
      { day: 3, title: 'Into the birch', note: 'Sheltered forest travel, breaking trail in turns. Aurora likely if the sky clears.', distanceKm: 14, ascentM: 380, sleep: 'Heated tent' },
      { day: 4, title: 'The quiet valley', note: 'A rest-paced day following a frozen river between low fells.', distanceKm: 12, ascentM: 220, sleep: 'Heated tent' },
      { day: 5, title: 'Build night', note: 'Reach the high plateau early, then spend the afternoon building and sleeping in quinzhee snow shelters.', distanceKm: 10, ascentM: 460, sleep: 'Snow shelter' },
      { day: 6, title: 'Down to the treeline', note: 'A fast descent on firm snow, longest ski of the week.', distanceKm: 18, ascentM: 260, sleep: 'Heated tent' },
      { day: 7, title: 'Out to Arjeplog', note: 'Short final leg to the pick-up, sauna, and a debrief over food.', distanceKm: 9, ascentM: 150, sleep: '—' },
    ],
    included: [
      'Two IFMGA-qualified winter guides',
      'Pulk, tent, stove and group safety kit',
      'All meals from day 1 lunch to day 7 lunch',
      'Transfers from and to Arjeplog',
      'Down parka and expedition mitts for the week',
    ],
    bring: [
      'Rigid touring or backcountry ski boots',
      'A four-season sleeping bag (we can advise / hire)',
      'Vacuum flask, headtorch, sunglasses and goggles',
      'Personal medication and a booked travel insurance policy that covers ski touring',
    ],
    sleeping:
      'Six nights in four-person heated tunnel tents (two guests per tent), one night in snow shelters you dig with the guides.',
    story: [
      {
        marker: 'Day 01',
        headline: 'The road ends and does not come back',
        body: 'The transfer drops you at a plough turn-around. From here there is no tarmac for a week. You pack the pulk, clip in, and the last engine noise fades behind the first stand of trees.',
        image: media.frozenLake,
      },
      {
        marker: 'Day 03',
        headline: 'Camp above the Arctic Circle',
        body: 'By the third evening the routine has taken over — tent up, stove roaring, boots drying. When the wind drops the cold sharpens, and if the sky is clear the aurora does its slow work overhead while dinner cooks.',
        image: media.aurora,
      },
      {
        marker: 'Day 05',
        headline: 'A house made of snow',
        body: 'You spend the afternoon moving a surprising amount of snow. The shelter you sleep in that night holds a steady zero degrees while it drops to minus twenty outside. Nobody sleeps much. Nobody regrets it.',
        image: media.lapland,
      },
    ],
    featured: true,
  },
  {
    slug: 'lofoten-midnight-sun-trek',
    name: 'Lofoten Midnight Sun Trek',
    country: 'Norway',
    region: 'Moskenesøya → Austvågøya',
    days: 6,
    difficulty: 3,
    month: 'June',
    season: 'Midnight sun',
    tempRange: '6 °C → 16 °C',
    distanceKm: 74,
    ascentM: 4300,
    priceFrom: 2450,
    summary:
      'Ridge-line trekking the length of the Lofoten wall, camping on granite shelves above the sea, with light around the clock and a rest day for a sea-kayak leg.',
    intro:
      'Lofoten is a mountain range that rises straight out of the Atlantic, and in June the sun never sets on it. We walk it end to end on a route that stays high whenever the weather allows — steep grass, slabby granite and a lot of coastline seen from above. The near-continuous light changes how the days feel: you stop at a viewpoint at what your body thinks is midnight and it is still golden.',
    heroImage: media.lofoten,
    cardImage: media.lofoten,
    itinerary: [
      { day: 1, title: 'Å to the first col', note: 'Ferry in, then a stiff climb from the road to a camp on a shelf overlooking Reinefjorden.', distanceKm: 7, ascentM: 780, sleep: 'Wild camp' },
      { day: 2, title: 'The Reinebringen skyline', note: 'A committing ridge day with fixed chains on one section, huge exposure both sides.', distanceKm: 11, ascentM: 950, sleep: 'Wild camp' },
      { day: 3, title: 'Down to the water', note: 'Descend to a white-sand bay for a rest afternoon and an optional sea-kayak paddle.', distanceKm: 9, ascentM: 340, sleep: 'Wild camp' },
      { day: 4, title: 'Kvalvika and the horn', note: 'Beach camp approach with a side-trip up Ryten for the classic overhang view.', distanceKm: 14, ascentM: 720, sleep: 'Wild camp' },
      { day: 5, title: 'The long traverse', note: 'The biggest walking day, linking three summits along the spine of the island.', distanceKm: 19, ascentM: 1080, sleep: 'Wild camp' },
      { day: 6, title: 'Off the end', note: 'A gentle descent to Svolvær, showers, and a boat trip into Trollfjord before flights.', distanceKm: 14, ascentM: 430, sleep: '—' },
    ],
    included: [
      'Two mountain guides',
      'Tents, stoves, and all group equipment',
      'Sea-kayak session with a certified paddle guide',
      'All meals on the trail',
      'Ferry, local transfers and the Trollfjord boat',
    ],
    bring: [
      'Broken-in B1/B2 walking boots',
      'A 45–55 litre pack you can carry all day',
      'Full waterproofs — it is the Atlantic',
      'A sleep mask (the sun does not set)',
    ],
    sleeping: 'Five nights wild camping on established pitches, two guests per tent.',
    story: [
      {
        marker: 'Day 02',
        headline: 'Walking the top of the wall',
        body: 'The Reinebringen ridge is the day everyone photographs and nobody quite captures. Sea on the left, sea on the right, fishing villages like scattered dice a kilometre below your boots.',
        image: media.lofoten,
      },
      {
        marker: 'Day 03',
        headline: 'A rest day that involves a kayak',
        body: 'We drop to a bay for the afternoon. Those who want to paddle head out around the headland with the kayak guide; those who do not lie on warm granite and watch.',
        image: media.kayak,
      },
      {
        marker: 'Day 05',
        headline: 'Golden hour lasts all night',
        body: 'On the long traverse you reach the final top late. The light is the colour of a struck match and it stays that way for hours. You will not want to put the tent up.',
        image: media.ridge,
      },
    ],
  },
  {
    slug: 'iceland-highlands-crossing',
    name: 'Iceland Highlands Crossing',
    country: 'Iceland',
    region: 'Landmannalaugar → Þórsmörk → Skógar and beyond',
    days: 8,
    difficulty: 4,
    month: 'August',
    season: 'Short highland summer',
    tempRange: '2 °C → 14 °C',
    distanceKm: 132,
    ascentM: 5200,
    priceFrom: 3100,
    summary:
      'A true crossing of the interior — rhyolite mountains, black desert, unbridged river fords and a glacier pass — finishing under Eyjafjallajökull.',
    intro:
      'Most people walk the Laugavegur. We keep going. This crossing links the famous section to a wilder continuation over the Fimmvörðuháls pass and out across ground that sees almost no one. Expect weather that changes hourly, rivers you wade in your boots, and colour — the rhyolite around Landmannalaugar looks digitally enhanced and is not.',
    heroImage: media.iceland,
    cardImage: media.icelandVolcanic,
    itinerary: [
      { day: 1, title: 'Landmannalaugar', note: 'Bus in, an acclimatising loop through the geothermal field and obsidian flows.', distanceKm: 9, ascentM: 420, sleep: 'Hut' },
      { day: 2, title: 'Over Hrafntinnusker', note: 'Into the colour, past steaming vents, camp on a saddle in the snow patches.', distanceKm: 12, ascentM: 620, sleep: 'Hut / tent' },
      { day: 3, title: 'Álftavatn', note: 'A long descent to a lake, with the first proper river ford in the afternoon.', distanceKm: 16, ascentM: 340, sleep: 'Hut / tent' },
      { day: 4, title: 'The black desert', note: 'Emstrur across sand and moss with the Mýrdalsjökull ice cap on the skyline.', distanceKm: 16, ascentM: 380, sleep: 'Hut / tent' },
      { day: 5, title: 'Into Þórsmörk', note: 'Birch woods and braided rivers; a shorter day to rest legs before the pass.', distanceKm: 15, ascentM: 520, sleep: 'Hut' },
      { day: 6, title: 'Fimmvörðuháls', note: 'The big one — up between two glaciers, past the 2010 eruption craters, still warm underfoot.', distanceKm: 25, ascentM: 1400, sleep: 'Wild camp' },
      { day: 7, title: 'The far side', note: 'Off-route travel across ground with no path, navigating by compass and river lines.', distanceKm: 14, ascentM: 700, sleep: 'Wild camp' },
      { day: 8, title: 'Out to the ring road', note: 'A final descent past waterfalls to the pick-up at Skógar.', distanceKm: 9, ascentM: 400, sleep: '—' },
    ],
    included: [
      'Two guides, one carrying a satellite communicator',
      'Hut bookings where huts exist, tents where they do not',
      'All meals, plus river-crossing shoes',
      'Transfers from and to Reykjavík',
      'A dry bag for the fords',
    ],
    bring: [
      'B1 boots that you are happy to soak',
      'Trekking poles — not optional on the fords',
      'A warm synthetic layer that works wet',
      'Trousers you can wade in; leave the jeans',
    ],
    sleeping:
      'Four nights in mountain huts (shared bunk rooms), two nights hut-or-tent depending on space, two nights wild camping.',
    story: [
      {
        marker: 'Day 02',
        headline: 'The mountains are the wrong colour',
        body: 'Rhyolite comes in ochre, rust, pink and a green that should not exist in rock. Steam leaks from the ground between the ridges. It smells faintly of sulphur and rain.',
        image: media.icelandVolcanic,
      },
      {
        marker: 'Day 03',
        headline: 'The first river',
        body: 'You change into crossing shoes, link arms in threes, and shuffle across facing upstream. The water is glacier-cold and moving hard. On the far bank everyone is grinning.',
        image: media.icelandRiver,
      },
      {
        marker: 'Day 06',
        headline: 'Walking between two glaciers',
        body: 'The Fimmvörðuháls pass threads a gap in the ice. Near the top you pass the 2010 craters — the rock is still warm enough to melt the frost off. Then the whole south coast opens up below.',
        image: media.iceland,
      },
    ],
  },
  {
    slug: 'isle-of-skye-wild-trek',
    name: 'Isle of Skye Wild Trek',
    country: 'Scotland',
    region: 'Sligachan → Trotternish ridge → Storr',
    days: 5,
    difficulty: 2,
    month: 'May',
    season: 'Spring',
    tempRange: '4 °C → 15 °C',
    distanceKm: 61,
    ascentM: 3100,
    priceFrom: 1650,
    summary:
      'The gentlest trip we run, and a good first expedition — the whole Trotternish ridge over four days, camping wild, with the Cuillin as a backdrop and no scrambling required.',
    intro:
      'Skye has a fearsome reputation because of the Cuillin, but the Trotternish ridge on the other side of the island is a long, grassy, entirely walkable escarpment with some of the strangest landforms in Britain along its edge. This is our introductory expedition: real wild camping and self-sufficiency, but on friendly ground, with an escape route never far away.',
    heroImage: media.skye,
    cardImage: media.skyeStorr,
    itinerary: [
      { day: 1, title: 'Sligachan start', note: 'Meet, kit check, and an afternoon walk in with the Cuillin filling the sky behind.', distanceKm: 8, ascentM: 360, sleep: 'Wild camp' },
      { day: 2, title: 'Onto the ridge', note: 'Climb to the crest and follow it north — grassy underfoot, huge drops to the east.', distanceKm: 15, ascentM: 900, sleep: 'Wild camp' },
      { day: 3, title: 'The Quiraing', note: 'The weirdest ground of the trip: pinnacles, a hidden plateau and the Table.', distanceKm: 13, ascentM: 680, sleep: 'Wild camp' },
      { day: 4, title: 'Storr', note: 'The final ridge section to the Old Man of Storr, timed for evening light and empty paths.', distanceKm: 16, ascentM: 820, sleep: 'Wild camp' },
      { day: 5, title: 'Down to Portree', note: 'A short walk out, a big breakfast, and transfers to Inverness.', distanceKm: 9, ascentM: 340, sleep: '—' },
    ],
    included: [
      'One guide (two above six guests)',
      'Tents, stoves and group kit',
      'All meals on the trail',
      'Transfers from and to Inverness',
      'A loan of trekking poles if you want them',
    ],
    bring: [
      'Comfortable walking boots or sturdy trail shoes',
      'A 40–50 litre pack',
      'Waterproof jacket and trousers',
      'A midge headnet for the camps',
    ],
    sleeping: 'Four nights wild camping, two guests per tent.',
    story: [
      {
        marker: 'Day 02',
        headline: 'A path in the sky, more or less',
        body: 'The Trotternish crest is grass you could mow, with a five-hundred-metre drop a few steps to your right. You walk it for hours and the view never repeats.',
        image: media.skye,
      },
      {
        marker: 'Day 03',
        headline: 'The ground stops making sense',
        body: 'The Quiraing is a landslip that never finished moving — towers, a hidden green plateau, a flat-topped pillar called the Table. We eat lunch on it.',
        image: media.skyeStorr,
      },
      {
        marker: 'Day 04',
        headline: 'The Storr, without the crowds',
        body: 'By walking the ridge to the Old Man rather than up from the car park, you arrive in the evening as the day visitors leave. For an hour it is just the group and the pinnacles.',
        image: media.skyeStorr,
      },
    ],
  },
  {
    slug: 'faroe-islands-coast-to-coast',
    name: 'Faroe Islands Coast to Coast',
    country: 'Faroe Islands',
    region: 'Streymoy and Eysturoy',
    days: 4,
    difficulty: 3,
    month: 'September',
    season: 'Early autumn',
    tempRange: '7 °C → 12 °C',
    distanceKm: 52,
    ascentM: 3400,
    priceFrom: 1580,
    summary:
      'A short, sharp trip across two islands — old postal paths between villages, sea-cliff edges, and a lot of weather moving fast over green mountains.',
    intro:
      'The Faroes pack an enormous amount of terrain into a small space. We link village to village on the bygdaleiðir — the walking routes people used before the tunnels — climbing over the shoulder of each mountain rather than around it. Four days, no day the same, and the light does things here that are hard to describe.',
    heroImage: media.faroe,
    cardImage: media.faroe,
    itinerary: [
      { day: 1, title: 'Saksun to Tjørnuvík', note: 'The classic opener over the ridge, with the sea stacks of Risin og Kellingin at the finish.', distanceKm: 12, ascentM: 780, sleep: 'Guesthouse' },
      { day: 2, title: 'Slættaratindur shoulder', note: 'Around the flank of the highest peak, camping high with a view to Iceland on a clear day.', distanceKm: 14, ascentM: 1050, sleep: 'Wild camp' },
      { day: 3, title: 'The cliff path', note: 'A committing coastal traverse above enormous drops, birds everywhere.', distanceKm: 16, ascentM: 900, sleep: 'Wild camp' },
      { day: 4, title: 'Down to Gjógv', note: 'A short walk to the sea gorge village and the boat back to Tórshavn.', distanceKm: 10, ascentM: 670, sleep: '—' },
    ],
    included: [
      'One guide',
      'Two nights guesthouse, tents for the wild camps',
      'All meals',
      'Inter-island ferries and transfers from Tórshavn',
      'Waterproof map and route notes to keep',
    ],
    bring: [
      'Boots with a firm sole for wet grass',
      'Full waterproofs and a warm hat',
      'A 35–45 litre pack',
      'Gloves — the wind has an edge in September',
    ],
    sleeping: 'Two nights in village guesthouses, two nights wild camping.',
    story: [
      {
        marker: 'Day 01',
        headline: 'The old way between villages',
        body: 'Before the tunnels, every village was connected to the next by a marked path over the mountain. We still walk them. The cairns are older than anyone can say.',
        image: media.faroe,
      },
      {
        marker: 'Day 03',
        headline: 'A metre from the edge',
        body: 'The cliff-path day is not for everyone. The route runs along the top of vertical sea cliffs with fulmars hanging in the updraught at eye level. The guide sets the line; you follow it.',
        image: media.faroe,
      },
    ],
  },
]

export function getExpedition(slug: string): Expedition | undefined {
  return expeditions.find((e) => e.slug === slug)
}

export const featuredExpedition = expeditions.find((e) => e.featured) ?? expeditions[0]

export const difficultyLabel: Record<number, string> = {
  1: 'Gentle',
  2: 'Moderate',
  3: 'Demanding',
  4: 'Serious',
  5: 'Expedition-grade',
}
