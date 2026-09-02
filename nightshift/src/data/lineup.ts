import { media, type MediaAsset } from './media'
import type { DayId, StageId } from './festival'

export interface Artist {
  readonly slug: string
  readonly name: string
  readonly country: string
  readonly genre: string
  readonly live?: boolean
  readonly tier: 'headline' | 'main' | 'support'
  readonly image: MediaAsset
  readonly bio: string
}

export interface SetSlot {
  readonly artist: string // artist slug
  readonly stage: StageId
  readonly day: DayId
  readonly start: string // "HH:MM", 24h, may be < doors (i.e. after midnight)
  readonly end: string
  readonly b2b?: string // second artist slug
}

export const artists: readonly Artist[] = [
  { slug: 'null-pointer', name: 'NULL POINTER', country: 'NL', genre: 'Industrial techno', tier: 'headline', image: media.smoke,
    bio: 'Rotterdam’s worst-kept secret. Machine-only sets built from a modular rig the size of a fridge, mixed with the lights off.' },
  { slug: 'concrete-angel', name: 'CONCRETE ANGEL', country: 'DE', genre: 'Hypnotic techno', tier: 'headline', image: media.redroom,
    bio: 'Berlin via Leipzig. Long, patient, unrelenting — the kind of set where you look up and two hours have gone.' },
  { slug: '13th-floor', name: '13TH FLOOR', country: 'UK', genre: 'UKG / bassline', tier: 'headline', image: media.djParty,
    bio: 'Sheffield bassline weight meets London garage swing. Every drop is a decision and every decision is correct.' },
  { slug: 'het-apparaat', name: 'HET APPARAAT', country: 'NL', genre: 'Live modular', live: true, tier: 'main', image: media.projection,
    bio: 'A two-person live act performing entirely on self-built instruments. No laptop on stage, ever.' },
  { slug: 'k-hole-collective', name: 'K-HÔLE COLLECTIVE', country: 'INT', genre: 'Spatial audio', live: true, tier: 'main', image: media.neonRings,
    bio: 'A rotating group composing for the 16-speaker ring in Sublevel. Bring nothing, sit down, close your eyes.' },
  { slug: 'merkur', name: 'MERKUR', country: 'BE', genre: 'Electro / EBM', tier: 'main', image: media.lasers,
    bio: 'Antwerp. Cold, mechanical, danceable — electro with the door left open for a body-music breakdown.' },
  { slug: 'dj-ruine', name: 'DJ RUÏNE', country: 'NL', genre: 'Hard groove', tier: 'main', image: media.strobe,
    bio: 'Groove-first and fast with it. The reason Warehouse 11 exists.' },
  { slug: 'tracksuit', name: 'TRACKSUIT', country: 'UK', genre: 'Speed garage', tier: 'main', image: media.crowd1,
    bio: 'Bristol. Reload culture, no apology. Expect the same track twice if it goes off.' },
  { slug: 'static-bloom', name: 'STATIC BLOOM', country: 'UK', genre: 'Breaks / rave', tier: 'main', image: media.crowd2,
    bio: 'Old rave samples, new drum programming. Nostalgic and completely current at once.' },
  { slug: 'low-country', name: 'LOW COUNTRY', country: 'NL', genre: 'Dub techno', tier: 'main', image: media.djFence,
    bio: 'Chords like weather systems. The 20:00 slot at Terminal is theirs by right.' },
  { slug: 'panic-room', name: 'PANIC ROOM', country: 'DE', genre: 'Fast / hard', tier: 'main', image: media.laserGreen,
    bio: 'Frankfurt. 150 and climbing. Do not arrive tired.' },
  { slug: 'signal-loss', name: 'SIGNAL LOSS', country: 'NL', genre: 'Experimental live', live: true, tier: 'support', image: media.venueDark,
    bio: 'Broken transmissions, field recordings, a rhythm that arrives late and leaves early.' },
  { slug: 'moth', name: 'MOTH', country: 'UK', genre: 'Ambient / drone', live: true, tier: 'support', image: media.projection,
    bio: 'The 05:00 Sublevel set. Somewhere to land.' },
  { slug: 'gabberella', name: 'GABBERELLA', country: 'NL', genre: 'Gabber / hardcore', tier: 'support', image: media.strobe,
    bio: 'Rotterdam hardcore, played with a grin. The 04:00 Warehouse slot.' },
  { slug: 'sub-rosa', name: 'SUB ROSA', country: 'PT', genre: 'Deep / hypnotic', tier: 'support', image: media.smoke,
    bio: 'Lisbon. Slow-burn selections for the middle of the night.' },
  { slug: 'veld', name: 'VELD', country: 'NL', genre: 'House', tier: 'support', image: media.djParty,
    bio: 'Outdoor energy brought inside. The Dock opener both nights.' },
  { slug: 'afterglow', name: 'AFTERGLOW', country: 'NL', genre: 'Melodic breaks', tier: 'support', image: media.crowd1,
    bio: 'Breaks with the melody turned up. For the last hour with the doors open.' },
  { slug: 'de-nachtwacht', name: 'DE NACHTWACHT', country: 'NL', genre: 'Residents · all styles', tier: 'main', image: media.redroom,
    bio: 'The NIGHTSHIFT residents. They open the festival and they close it — whatever it takes to get there.' },
]

export function getArtist(slug: string): Artist | undefined {
  return artists.find((a) => a.slug === slug)
}

/** All sets. Times after midnight use the next hour clock (e.g. "02:00"). */
export const sets: readonly SetSlot[] = [
  // ---------- FRIDAY ----------
  { artist: 'de-nachtwacht', stage: 'TERMINAL', day: 'FRI', start: '20:00', end: '21:30' },
  { artist: 'low-country', stage: 'TERMINAL', day: 'FRI', start: '21:30', end: '23:30' },
  { artist: 'concrete-angel', stage: 'TERMINAL', day: 'FRI', start: '23:30', end: '02:00' },
  { artist: 'sub-rosa', stage: 'TERMINAL', day: 'FRI', start: '02:00', end: '04:00' },
  { artist: 'null-pointer', stage: 'TERMINAL', day: 'FRI', start: '04:00', end: '06:00' },

  { artist: 'veld', stage: 'DOCK', day: 'FRI', start: '20:00', end: '22:00' },
  { artist: 'static-bloom', stage: 'DOCK', day: 'FRI', start: '22:00', end: '00:00' },
  { artist: '13th-floor', stage: 'DOCK', day: 'FRI', start: '00:00', end: '02:00' },
  { artist: 'afterglow', stage: 'DOCK', day: 'FRI', start: '02:00', end: '04:00' },

  { artist: 'signal-loss', stage: 'SUBLEVEL', day: 'FRI', start: '21:00', end: '22:30' },
  { artist: 'het-apparaat', stage: 'SUBLEVEL', day: 'FRI', start: '22:30', end: '00:30' },
  { artist: 'k-hole-collective', stage: 'SUBLEVEL', day: 'FRI', start: '00:30', end: '02:30' },
  { artist: 'moth', stage: 'SUBLEVEL', day: 'FRI', start: '02:30', end: '04:30' },

  { artist: 'dj-ruine', stage: 'WAREHOUSE', day: 'FRI', start: '00:00', end: '02:00' },
  { artist: 'panic-room', stage: 'WAREHOUSE', day: 'FRI', start: '02:00', end: '04:00' },
  { artist: 'gabberella', stage: 'WAREHOUSE', day: 'FRI', start: '04:00', end: '06:00' },
  { artist: 'de-nachtwacht', stage: 'WAREHOUSE', day: 'FRI', start: '06:00', end: '07:00' },

  // ---------- SATURDAY ----------
  { artist: 'de-nachtwacht', stage: 'TERMINAL', day: 'SAT', start: '20:00', end: '21:30' },
  { artist: 'merkur', stage: 'TERMINAL', day: 'SAT', start: '21:30', end: '23:30' },
  { artist: 'null-pointer', stage: 'TERMINAL', day: 'SAT', start: '23:30', end: '02:00', b2b: 'concrete-angel' },
  { artist: 'low-country', stage: 'TERMINAL', day: 'SAT', start: '02:00', end: '04:00' },
  { artist: 'concrete-angel', stage: 'TERMINAL', day: 'SAT', start: '04:00', end: '06:30' },

  { artist: 'veld', stage: 'DOCK', day: 'SAT', start: '20:00', end: '22:00' },
  { artist: 'tracksuit', stage: 'DOCK', day: 'SAT', start: '22:00', end: '00:00' },
  { artist: '13th-floor', stage: 'DOCK', day: 'SAT', start: '00:00', end: '02:30' },
  { artist: 'static-bloom', stage: 'DOCK', day: 'SAT', start: '02:30', end: '04:00' },

  { artist: 'moth', stage: 'SUBLEVEL', day: 'SAT', start: '21:00', end: '22:30' },
  { artist: 'signal-loss', stage: 'SUBLEVEL', day: 'SAT', start: '22:30', end: '00:30' },
  { artist: 'k-hole-collective', stage: 'SUBLEVEL', day: 'SAT', start: '00:30', end: '03:00' },
  { artist: 'het-apparaat', stage: 'SUBLEVEL', day: 'SAT', start: '03:00', end: '05:00' },

  { artist: 'dj-ruine', stage: 'WAREHOUSE', day: 'SAT', start: '00:00', end: '02:30' },
  { artist: 'panic-room', stage: 'WAREHOUSE', day: 'SAT', start: '02:30', end: '04:30' },
  { artist: 'gabberella', stage: 'WAREHOUSE', day: 'SAT', start: '04:30', end: '07:00' },
]
