import { media, type MediaAsset } from './media'

export interface Installation {
  readonly no: string
  readonly title: string
  readonly artist: string
  readonly kind: string
  readonly where: string
  readonly blurb: string
  readonly image: MediaAsset
}

export const installations: readonly Installation[] = [
  {
    no: 'A/01',
    title: 'LOAD-BEARING',
    artist: 'Studio Grauw',
    kind: 'Projection mapping',
    where: 'Terminal 04 · exterior',
    blurb:
      'The whole west face of the grain terminal becomes a slow-moving structural diagram — stresses, loads, the building explaining itself in light. Runs from dusk.',
    image: media.projection,
  },
  {
    no: 'A/02',
    title: 'CONSENT',
    artist: 'Marije Bl.',
    kind: 'Interactive light',
    where: 'The Dock · walkway',
    blurb:
      'A corridor of vertical tubes that only light where people choose to walk. Stand still and it goes dark around you. The more the crowd moves as one, the brighter the whole run gets.',
    image: media.neonRings,
  },
  {
    no: 'A/03',
    title: 'NULL ISLAND',
    artist: 'e/static',
    kind: 'Generative visuals',
    where: 'Sublevel · main ring',
    blurb:
      'A visual system with no fixed output — it takes the room’s sound and its own previous frame as the only inputs, and never repeats. Different every set, every night.',
    image: media.laserGreen,
  },
  {
    no: 'A/04',
    title: 'ROOM TONE',
    artist: 'K-HÔLE Collective',
    kind: 'Spatial audio',
    where: 'Sublevel · seated hours',
    blurb:
      'A 16-channel composition performed live for the ambient slots. Recorded material from the four venues, played back so it moves through the space around you.',
    image: media.smoke,
  },
  {
    no: 'A/05',
    title: 'AFTER',
    artist: 'Studio Grauw + e/static',
    kind: 'Projection / light',
    where: 'Warehouse 11 · ceiling',
    blurb:
      'From 05:00 the ceiling of the cold store slowly fills with a false dawn — a projected sunrise timed to the last set, so you leave into something that feels like morning.',
    image: media.redroom,
  },
]
