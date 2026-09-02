import { Reveal } from '@/components/ui/Reveal'
import { Button } from '@/components/ui/Button'

const philosophy = [
  {
    n: 'i',
    title: 'Runway is the number',
    body: 'Profit is an opinion about a period that has ended. Runway — how many months you can keep going — is a fact, and it is the one we put at the top of every report.',
  },
  {
    n: 'ii',
    title: 'The tax bill is already spent',
    body: 'The moment an invoice is paid, a fixed share of it belongs to the tax office. We move it to a separate account the same day, so year-end is admin, not a shock.',
  },
  {
    n: 'iii',
    title: 'Price from cost, not from hope',
    body: 'A rate built from the fully-loaded cost of an hour is one you can defend. A rate you guessed is one you apologise for.',
  },
  {
    n: 'iv',
    title: 'A decision needs a trigger',
    body: 'Big moves — a hire, a lease, a kit package — get a written condition that says exactly when to act. Arithmetic is less frightening at 2am than instinct.',
  },
]

const process = [
  { n: '01', t: 'First conversation', d: 'Free, 45 minutes. You describe the business, we ask about the money, and we tell you honestly whether we can help and what it would cost.' },
  { n: '02', t: 'Onboarding & catch-up', d: 'We take over the books, close any backlog, connect the bank feed and set up the forecast and dashboard. Two to four weeks.' },
  { n: '03', t: 'The monthly rhythm', d: 'Month closed by the 10th, a one-page summary, a 20-minute call. Runway, reserve, available cash, anything on the horizon.' },
  { n: '04', t: 'The decisions', d: 'When something big comes up — a hire, a studio, a downturn — we model it with you and give a recommendation in writing.' },
]

export function PhilosophyProcess() {
  return (
    <section className="page-x mx-auto max-w-[var(--container-page)] border-b border-ink py-14 md:py-20">
      <div className="grid12 gap-y-14">
        {/* philosophy */}
        <div className="col-span-12 lg:col-span-6 lg:border-r lg:border-line lg:pr-10">
          <p className="label">
            <span className="text-accent">D —</span> Financial philosophy
          </p>
          <h2 className="mt-4 text-[clamp(1.7rem,3.5vw,2.5rem)] leading-[1.05] tracking-[-0.03em]">
            Four things we believe, and act on
          </h2>
          <ul className="mt-8 space-y-6">
            {philosophy.map((p) => (
              <Reveal key={p.n} as="li">
                <div className="flex gap-4">
                  <span className="font-serif text-lg italic text-accent">{p.n}</span>
                  <div>
                    <h3 className="text-lg tracking-[-0.02em]">{p.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-ink-2">{p.body}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>

        {/* process */}
        <div className="col-span-12 lg:col-span-6 lg:pl-10">
          <p className="label">
            <span className="text-accent">E —</span> Process
          </p>
          <h2 className="mt-4 text-[clamp(1.7rem,3.5vw,2.5rem)] leading-[1.05] tracking-[-0.03em]">
            How working together goes
          </h2>
          <ol className="mt-8 border-t border-line">
            {process.map((s) => (
              <Reveal key={s.n} as="li">
                <div className="grid grid-cols-[3rem_1fr] gap-4 border-b border-line py-5">
                  <span className="font-mono text-sm text-line-strong">{s.n}</span>
                  <div>
                    <h3 className="text-lg tracking-[-0.02em]">{s.t}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-ink-2">{s.d}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </ol>
          <Button to="/contact" withArrow className="mt-8">
            Book a first conversation
          </Button>
        </div>
      </div>
    </section>
  )
}
