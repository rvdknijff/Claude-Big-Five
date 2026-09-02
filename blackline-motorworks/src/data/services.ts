import { media, type MediaAsset } from './media'

export interface Service {
  readonly id: string
  readonly index: string
  readonly title: string
  readonly summary: string
  readonly detail: string
  readonly deliverables: readonly string[]
  readonly image?: MediaAsset
}

export const services: readonly Service[] = [
  {
    id: 'engine',
    index: '01',
    title: 'Engine & ECU calibration',
    summary: 'Bench-referenced calibration for turbo and naturally aspirated platforms.',
    detail:
      'We calibrate on our own data, not someone else’s map file. Every project starts with a baseline pull, a full sensor log and a health check on fuelling, ignition and charge-air temperature. Changes are made in small increments and verified on the dyno before the car leaves the building.',
    deliverables: [
      'Baseline and final dyno graphs',
      'Knock, lambda and IAT logging',
      'Stage 1–3 calibration paths',
      'E-fuel and pump-fuel maps',
    ],
    image: media.engineDetail,
  },
  {
    id: 'exhaust',
    index: '02',
    title: 'Exhaust systems',
    summary: 'Valved and fixed systems built around back-pressure targets, not volume.',
    detail:
      'A good exhaust is a flow problem first and an acoustic problem second. We spec primary diameter, collector design and silencer volume to the power target, then measure the result. Systems are fabricated in 1.4301/1.4404 stainless or Inconel for the hot section.',
    deliverables: [
      'Cat-back and turbo-back systems',
      'Sport and OPF-legal catalyst options',
      'Valve control integration',
      'Sound pressure measured at 2 m',
    ],
    image: media.detailExhaust,
  },
  {
    id: 'chassis',
    index: '03',
    title: 'Suspension & chassis',
    summary: 'Corner-weighted setups with damping matched to the intended use.',
    detail:
      'Road, fast road or track — each asks for a different balance. We fit coilovers or adaptive kits, then corner-weight the car with driver ballast, set geometry to a target sheet and log a shakedown. The setup sheet goes home with the car.',
    deliverables: [
      'Coilover and adaptive kit fitment',
      'Corner weighting with driver ballast',
      'Geometry to a documented target',
      'Spring and damper revalving',
    ],
    image: media.detailSuspension,
  },
  {
    id: 'brakes',
    index: '04',
    title: 'Brakes',
    summary: 'Pad, fluid and cooling packages before you spend on big calipers.',
    detail:
      'Most cars that “need brakes” need a pad compound, fresh fluid and a cooling duct. We start there. When a big-brake kit is genuinely warranted we fit two-piece discs and braided lines, then bed the system on a controlled procedure.',
    deliverables: [
      'Pad and fluid specification',
      'Brake cooling ducting',
      'Two-piece disc upgrades',
      'Bedding-in on a set procedure',
    ],
    image: media.detailBrakes,
  },
  {
    id: 'dyno',
    index: '05',
    title: 'Dyno testing',
    summary: '4WD rolling road for development pulls, health checks and before/after runs.',
    detail:
      'Our cell runs a 4WD dyno with wide-band lambda on each bank, weather correction and controlled cooling. Book a session to verify a claim, diagnose a driveability issue or record a clean baseline before work begins.',
    deliverables: [
      'Power and torque at the wheels',
      'Air/fuel ratio per bank',
      'Boost and intake-air temp traces',
      'Printed and digital report',
    ],
    image: media.dynoBay,
  },
  {
    id: 'track',
    index: '06',
    title: 'Track preparation',
    summary: 'Getting a road car ready for a hard weekend — and back home again.',
    detail:
      'Fluids, fasteners, brake ducting, harness and extinguisher mounting, alignment and a pre-event inspection. We can crew a weekend at Zandvoort or the Nürburgring, or hand you a checklist and a sealed spares kit.',
    deliverables: [
      'Pre-event safety inspection',
      'Fluid and consumable strategy',
      'Alignment for the circuit',
      'Trackside support on request',
    ],
    image: media.track,
  },
  {
    id: 'maintenance',
    index: '07',
    title: 'Performance maintenance',
    summary: 'Servicing for cars that are actually driven hard.',
    detail:
      'Manufacturer intervals assume a gentle life. We service to how the car is used: oil analysis, gearbox and differential fluid on a shorter clock, driveline inspection and a borescope on forced-induction engines.',
    deliverables: [
      'Used-oil analysis',
      'Shortened driveline fluid intervals',
      'Borescope on boosted engines',
      'Digital service history',
    ],
    image: media.workshopEngine,
  },
] as const
