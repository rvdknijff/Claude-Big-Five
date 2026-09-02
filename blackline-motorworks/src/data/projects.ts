import { media, type MediaAsset } from './media'

export interface DynoPoint {
  readonly rpm: number
  readonly stockPower: number
  readonly buildPower: number
  readonly stockTorque: number
  readonly buildTorque: number
}

export interface SpecRow {
  readonly label: string
  readonly stock: string
  readonly build: string
}

export interface ScopeItem {
  readonly area: string
  readonly work: string
}

export interface Project {
  readonly slug: string
  readonly marque: string
  readonly model: string
  readonly year: number
  readonly stage: string
  readonly headline: string
  readonly intro: string
  readonly image: MediaAsset
  readonly featured?: boolean
  readonly figures: {
    readonly powerStock: number
    readonly powerBuild: number
    readonly torqueStock: number
    readonly torqueBuild: number
    readonly sprintStock: string
    readonly sprintBuild: string
  }
  readonly specs: readonly SpecRow[]
  readonly scope: readonly ScopeItem[]
  readonly dyno: readonly DynoPoint[]
  readonly note: string
  readonly owner: string
}

/** A plausible-looking curve pair for a modern turbo flat-six / straight-six. */
function curve(
  peakStockP: number,
  peakBuildP: number,
  peakStockT: number,
  peakBuildT: number,
): DynoPoint[] {
  const rpms = [1500, 2000, 2500, 3000, 3500, 4000, 4500, 5000, 5500, 6000, 6500, 7000]
  return rpms.map((rpm) => {
    const pf = powerShape(rpm)
    const tf = torqueShape(rpm)
    return {
      rpm,
      stockPower: Math.round(peakStockP * pf),
      buildPower: Math.round(peakBuildP * pf * (1 + boost(rpm))),
      stockTorque: Math.round(peakStockT * tf),
      buildTorque: Math.round(peakBuildT * tf * (1 + boost(rpm) * 0.9)),
    }
  })
}
function powerShape(rpm: number) {
  // rises to ~1.0 around 6200 rpm, tails after
  const x = (rpm - 1500) / (6300 - 1500)
  return Math.min(1, 0.14 + 1.02 * x - 0.16 * x * x) * (rpm > 6600 ? 0.965 : 1)
}
function torqueShape(rpm: number) {
  // fat mid-range plateau
  if (rpm < 2200) return 0.6 + (rpm - 1500) / 1750
  if (rpm <= 4800) return 1
  return 1 - (rpm - 4800) / 9000
}
function boost(rpm: number) {
  // the build adds most in the mid-range where more air is available
  if (rpm < 2500) return 0.05
  if (rpm < 4500) return 0.2
  return 0.16
}

export const projects: readonly Project[] = [
  {
    slug: 'porsche-992-carrera-s-stage-2',
    marque: 'Porsche',
    model: '992 Carrera S',
    year: 2023,
    stage: 'Blackline Stage 2',
    headline: 'A Carrera S that finally uses its chassis',
    intro:
      'The 992 Carrera S leaves the factory with more grip than power. This car came to us for the opposite problem most workshops are asked to solve — the owner did not want a different character, just more of the one it already has.',
    image: media.project992,
    featured: true,
    figures: {
      powerStock: 450,
      powerBuild: 548,
      torqueStock: 530,
      torqueBuild: 660,
      sprintStock: '3.7 s',
      sprintBuild: '3.3 s',
    },
    specs: [
      { label: 'Power', stock: '450 hp @ 6500', build: '548 hp @ 6400' },
      { label: 'Torque', stock: '530 Nm', build: '660 Nm' },
      { label: '0–100 km/h', stock: '3.7 s', build: '3.3 s' },
      { label: 'Exhaust', stock: 'OPF, factory valves', build: 'Blackline valved, 200-cell cats' },
      { label: 'Suspension', stock: 'PASM, standard springs', build: 'PASM, Blackline linear springs, corner-weighted' },
      { label: 'Brake pads', stock: 'OE road', build: 'Endurance compound, front ducting' },
    ],
    scope: [
      { area: 'ECU', work: 'Stage 2 calibration on E10, 12 dyno pulls, knock and lambda verified' },
      { area: 'Exhaust', work: 'Valved cat-back with 200-cell sport catalysts, 1.4404 stainless' },
      { area: 'Intake', work: 'High-flow filters, charge-pipe seal upgrade' },
      { area: 'Suspension', work: 'Linear-rate springs, corner weighting, geometry to fast-road sheet' },
      { area: 'Brakes', work: 'Endurance pads, braided lines, front cooling ducts' },
      { area: 'Sign-off', work: 'Back-to-back dyno, 120 km road shakedown, setup sheet' },
    ],
    dyno: curve(450, 548, 530, 660),
    note: 'Every figure on this page was recorded in our own cell with weather correction. Your car will read differently — that is the point of measuring it.',
    owner: 'Owner project · Utrecht',
  },
  {
    slug: 'bmw-g80-m3-competition',
    marque: 'BMW M',
    model: 'G80 M3 Competition',
    year: 2022,
    stage: 'Blackline Stage 2 + chassis',
    headline: 'Taking the edge off, then putting a better one back',
    intro:
      'The S58 responds well to air and calibration, but the reason this M3 is here is the way it rode. We spent as long on the dampers as on the engine.',
    image: media.projectM3,
    figures: {
      powerStock: 510,
      powerBuild: 635,
      torqueStock: 650,
      torqueBuild: 780,
      sprintStock: '3.9 s',
      sprintBuild: '3.4 s',
    },
    specs: [
      { label: 'Power', stock: '510 hp', build: '635 hp' },
      { label: 'Torque', stock: '650 Nm', build: '780 Nm (limited in 1–2)' },
      { label: 'Downpipes', stock: 'OPF', build: 'Blackline 200-cell, heat-wrapped' },
      { label: 'Cooling', stock: 'Standard', build: 'Auxiliary radiator, revised ducting' },
      { label: 'Dampers', stock: 'Adaptive M', build: 'Adaptive M, Blackline valve profile' },
      { label: 'Alignment', stock: 'Factory', build: 'Blackline fast-road, reduced front toe-out' },
    ],
    scope: [
      { area: 'ECU + TCU', work: 'Stage 2 calibration, gearbox pressure and shift map revised' },
      { area: 'Exhaust', work: 'Catted downpipes, retained factory valve control' },
      { area: 'Cooling', work: 'Auxiliary radiator, oil-temp brought under control on track' },
      { area: 'Dampers', work: 'Custom valve profile, corner weighting with half tank + driver' },
      { area: 'Brakes', work: 'Track pad option, fluid to 335 °C dry boiling point' },
    ],
    dyno: curve(510, 635, 650, 780),
    note: 'Torque is deliberately capped in first and second gear to protect the driveline. Peak figures are made in the gears that matter.',
    owner: 'Owner project · Amsterdam',
  },
  {
    slug: 'audi-rs6-c8-touring',
    marque: 'Audi RS',
    model: 'RS6 Avant C8',
    year: 2021,
    stage: 'Blackline Stage 1 + comfort',
    headline: 'A 700 hp estate that the family still likes',
    intro:
      'Not every project is about the last tenth. This RS6 does 40,000 km a year with a dog in the boot. The brief was more shove for overtakes, quieter at a cruise, and nothing that shortens the service life.',
    image: media.projectRs6,
    figures: {
      powerStock: 600,
      powerBuild: 712,
      torqueStock: 800,
      torqueBuild: 950,
      sprintStock: '3.6 s',
      sprintBuild: '3.2 s',
    },
    specs: [
      { label: 'Power', stock: '600 hp', build: '712 hp' },
      { label: 'Torque', stock: '800 Nm', build: '950 Nm' },
      { label: 'Calibration', stock: 'OE', build: 'Stage 1, gearbox torque limits raised' },
      { label: 'Exhaust valves', stock: 'Sport by default', build: 'Comfort default, custom threshold' },
      { label: 'Air suspension', stock: 'Standard map', build: 'Lowered comfort profile retained' },
      { label: 'Service clock', stock: '15,000 km', build: '10,000 km, oil analysis' },
    ],
    scope: [
      { area: 'ECU + TCU', work: 'Stage 1 on 98, torque limiter and converter lock-up revised' },
      { area: 'Exhaust', work: 'Valve control re-mapped for a quieter default, no hardware change' },
      { area: 'Servicing', work: 'Shorter interval, driveline fluids, used-oil analysis baseline' },
      { area: 'Sign-off', work: 'Dyno verification, 200 km motorway shakedown' },
    ],
    dyno: curve(600, 712, 800, 950),
    note: 'No exhaust hardware was changed. The car is quieter than stock at 120 km/h and louder only when asked.',
    owner: 'Owner project · Utrecht',
  },
  {
    slug: 'mercedes-amg-gt-track',
    marque: 'Mercedes-AMG',
    model: 'AMG GT',
    year: 2020,
    stage: 'Track preparation',
    headline: 'A road GT prepared for a season of trackdays',
    intro:
      'This one barely touched the dyno. The owner wanted the car to survive twenty lapping days a year without drama, so almost all of the work is cooling, fluids, fasteners and safety.',
    image: media.projectAmgGt,
    figures: {
      powerStock: 476,
      powerBuild: 495,
      torqueStock: 630,
      torqueBuild: 650,
      sprintStock: '4.0 s',
      sprintBuild: '4.0 s',
    },
    specs: [
      { label: 'Power', stock: '476 hp', build: '495 hp (health, not chasing)' },
      { label: 'Oil cooling', stock: 'Standard', build: 'Additional engine + transaxle coolers' },
      { label: 'Brake ducts', stock: 'None', build: 'Front and rear ducting to the hubs' },
      { label: 'Fluids', stock: 'Road spec', build: 'Track fluid, 12-month clock' },
      { label: 'Safety', stock: 'Factory', build: 'Harness bar, extinguisher, tow points' },
      { label: 'Corner weights', stock: 'Unknown', build: 'Balanced to 50.4 % front' },
    ],
    scope: [
      { area: 'Cooling', work: 'Engine and transaxle oil coolers, revised air paths' },
      { area: 'Brakes', work: 'Ducting, endurance pads, stainless lines, high-temp fluid' },
      { area: 'Safety', work: 'Bolt-in harness bar, extinguisher mount, front and rear tow points' },
      { area: 'Setup', work: 'Corner weighting, circuit alignment, tyre pressure map' },
      { area: 'Inspection', work: 'Full fastener check, borescope, pre-season sign-off' },
    ],
    dyno: curve(476, 495, 630, 650),
    note: 'The 19 hp is what a fresh calibration and a clean intake are worth on a healthy engine. We did not go looking for more.',
    owner: 'Owner project · Rotterdam',
  },
] as const

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug)
}

export const featuredProject = projects.find((p) => p.featured) ?? projects[0]
