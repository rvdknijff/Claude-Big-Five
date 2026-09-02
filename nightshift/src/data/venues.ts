import { media, type MediaAsset } from './media'
import type { StageId } from './festival'

export interface Venue {
  readonly id: StageId
  readonly code: string
  readonly name: string
  readonly sound: string
  readonly capacity: number
  readonly blurb: string
  readonly detail: string
  readonly location: string
  readonly image: MediaAsset
}

export const venues: readonly Venue[] = [
  {
    id: 'TERMINAL',
    code: 'TERMINAL 04',
    name: 'Grain terminal, Maashaven',
    sound: 'Concrete / industrial techno',
    capacity: 1400,
    blurb: 'A working grain terminal. Nine metre ceilings, a single hanging bulb until the lights drop.',
    detail:
      'The main room. Built for weight — a wall of subs against raw concrete, and an acoustic that turns a kick drum into a physical event. Doors here first, closes last.',
    location: 'Maashaven Zuidzijde · 8 min from Maashaven metro',
    image: media.concreteA,
  },
  {
    id: 'DOCK',
    code: 'THE DOCK',
    name: 'Loading dock, RDM',
    sound: 'UK garage / house / breaks',
    capacity: 700,
    blurb: 'Roller doors open to the water. Lighter, faster on its feet, the one you dance to differently.',
    detail:
      'Half inside, half out. The roller doors stay up unless it rains, so the room breathes and the river is right there. Garage, house, broken beat — the stage for footwork over force.',
    location: 'RDM Rotterdam · water taxi from Katendrecht',
    image: media.venueDark,
  },
  {
    id: 'SUBLEVEL',
    code: 'SUBLEVEL',
    name: 'Sub-basement, Coolhaven',
    sound: 'Experimental / live / ambient',
    capacity: 300,
    blurb: 'Two floors down, no phone signal, no clocks. Live sets, drone, spatial audio, the strange stuff.',
    detail:
      'The smallest room and the one people talk about afterwards. A 16-speaker ring for spatial sets, seating for the ambient hours, and a strict no-photo policy inside.',
    location: 'Coolhaven · entrance via the bike tunnel',
    image: media.projection,
  },
  {
    id: 'WAREHOUSE',
    code: 'WAREHOUSE 11',
    name: 'Cold store, Merwehaven',
    sound: 'Hard / fast / late',
    capacity: 900,
    blurb: 'A former freezer warehouse. Opens at midnight, gets faster every hour, does not stop early.',
    detail:
      'The late room. Insulated walls mean it can go loud without a neighbour complaint, and the programming knows it — hard groove, gabber-adjacent, 150+ from 03:00. Not a warm-up room.',
    location: 'Merwehaven · shuttle bus from Terminal 04 all night',
    image: media.concreteB,
  },
]

export function getVenue(id: StageId): Venue {
  return venues.find((v) => v.id === id) ?? venues[0]
}
