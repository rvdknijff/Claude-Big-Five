import { useId, useState } from 'react'
import { cn } from '@/lib/cn'
import { Button } from '@/components/ui/Button'
import { Sparkle } from '@/components/ui/decor'

type Status = 'idle' | 'submitting' | 'success' | 'error'

interface Values {
  ouder: string
  kind: string
  leeftijd: string
  email: string
  telefoon: string
  onderwerp: string
  bericht: string
  wenafspraak: boolean
}

const empty: Values = {
  ouder: '',
  kind: '',
  leeftijd: '',
  email: '',
  telefoon: '',
  onderwerp: '',
  bericht: '',
  wenafspraak: false,
}

const onderwerpen = [
  'Eerste bezoek / kennismaken',
  'Overstappen van een andere tandarts',
  'Een klacht of pijn',
  'Een vraag',
]

function validate(v: Values) {
  const e: Partial<Record<keyof Values, string>> = {}
  if (v.ouder.trim().length < 2) e.ouder = 'Vul je naam in.'
  if (v.kind.trim().length < 2) e.kind = 'Vul de naam van je kind in.'
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.email)) e.email = 'Vul een geldig e-mailadres in.'
  if (v.telefoon.replace(/\D/g, '').length < 8) e.telefoon = 'Vul een telefoonnummer in waarop we je kunnen bereiken.'
  if (!v.onderwerp) e.onderwerp = 'Kies waar het om gaat.'
  return e
}

export function AfspraakForm() {
  const [values, setValues] = useState<Values>(empty)
  const [errors, setErrors] = useState<Partial<Record<keyof Values, string>>>({})
  const [status, setStatus] = useState<Status>('idle')
  const uid = useId()

  function update<K extends keyof Values>(key: K, value: Values[K]) {
    setValues((p) => ({ ...p, [key]: value }))
    if (errors[key]) setErrors((p) => ({ ...p, [key]: undefined }))
  }

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault()
    const found = validate(values)
    setErrors(found)
    if (Object.keys(found).length) {
      setStatus('error')
      return
    }
    setStatus('submitting')
    await new Promise((r) => setTimeout(r, 1200)) // front-end demo — niets wordt verstuurd
    setStatus('success')
  }

  if (status === 'success') {
    return (
      <div className="relative overflow-hidden rounded-[2rem] bg-sage-soft p-8 md:p-10">
        <Sparkle className="absolute right-6 top-6 h-8 w-8 text-sun" />
        <h3 className="font-display text-2xl font-semibold">Dankjewel, {values.ouder.split(' ')[0]}!</h3>
        <p className="mt-3 max-w-md leading-relaxed text-ink-soft">
          We hebben je bericht over {values.kind} ontvangen en bellen je binnen één werkdag terug om
          samen een moment te kiezen.
        </p>
        <p className="mt-4 text-sm font-bold text-sage-deep">
          Demo — er is niets echt verstuurd.
        </p>
        <button
          type="button"
          onClick={() => {
            setValues(empty)
            setStatus('idle')
          }}
          className="mt-6 font-extrabold text-ink underline decoration-2 underline-offset-4 hover:text-sage-deep"
        >
          Nog een bericht sturen
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={onSubmit} noValidate className="grid gap-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Jouw naam" htmlFor={`${uid}-ouder`} error={errors.ouder}>
          <input
            id={`${uid}-ouder`}
            value={values.ouder}
            autoComplete="name"
            onChange={(e) => update('ouder', e.target.value)}
            className={inputCls(!!errors.ouder)}
          />
        </Field>
        <Field label="Naam van je kind" htmlFor={`${uid}-kind`} error={errors.kind}>
          <input
            id={`${uid}-kind`}
            value={values.kind}
            onChange={(e) => update('kind', e.target.value)}
            className={inputCls(!!errors.kind)}
          />
        </Field>
        <Field label="Leeftijd van je kind (optioneel)" htmlFor={`${uid}-leeftijd`}>
          <input
            id={`${uid}-leeftijd`}
            value={values.leeftijd}
            inputMode="numeric"
            placeholder="bijv. 4 jaar"
            onChange={(e) => update('leeftijd', e.target.value)}
            className={inputCls(false)}
          />
        </Field>
        <Field label="Telefoon" htmlFor={`${uid}-telefoon`} error={errors.telefoon}>
          <input
            id={`${uid}-telefoon`}
            value={values.telefoon}
            type="tel"
            autoComplete="tel"
            onChange={(e) => update('telefoon', e.target.value)}
            className={inputCls(!!errors.telefoon)}
          />
        </Field>
      </div>

      <Field label="E-mail" htmlFor={`${uid}-email`} error={errors.email}>
        <input
          id={`${uid}-email`}
          value={values.email}
          type="email"
          autoComplete="email"
          onChange={(e) => update('email', e.target.value)}
          className={inputCls(!!errors.email)}
        />
      </Field>

      <Field label="Waar gaat het om?" htmlFor={`${uid}-onderwerp`} error={errors.onderwerp}>
        <select
          id={`${uid}-onderwerp`}
          value={values.onderwerp}
          onChange={(e) => update('onderwerp', e.target.value)}
          className={inputCls(!!errors.onderwerp)}
        >
          <option value="">Maak een keuze</option>
          {onderwerpen.map((o) => (
            <option key={o} value={o}>
              {o}
            </option>
          ))}
        </select>
      </Field>

      <Field label="Iets dat we van tevoren moeten weten? (optioneel)" htmlFor={`${uid}-bericht`}>
        <textarea
          id={`${uid}-bericht`}
          value={values.bericht}
          rows={4}
          placeholder="Bijvoorbeeld: mijn kind is erg bang, of heeft een nare ervaring gehad."
          onChange={(e) => update('bericht', e.target.value)}
          className={inputCls(false)}
        />
      </Field>

      <label className="flex items-start gap-3 rounded-2xl bg-cream p-4 text-sm font-bold text-ink">
        <input
          type="checkbox"
          checked={values.wenafspraak}
          onChange={(e) => update('wenafspraak', e.target.checked)}
          className="mt-0.5 h-5 w-5 shrink-0 rounded-md accent-[var(--color-sage-deep)]"
        />
        Ik wil graag eerst een korte wenafspraak zonder behandeling.
      </label>

      {status === 'error' && (
        <p role="alert" className="text-sm font-bold text-blush-deep">
          Bijna klaar — check even de rood gemarkeerde velden.
        </p>
      )}

      <div className="flex flex-wrap items-center gap-4">
        <Button type="submit" variant="blush" size="lg" disabled={status === 'submitting'}>
          {status === 'submitting' ? 'Versturen…' : 'Verstuur aanvraag'}
        </Button>
        <p className="text-sm text-ink-faint">Front-end demo — er wordt niets verstuurd.</p>
      </div>
    </form>
  )
}

function inputCls(invalid: boolean) {
  return cn(
    'w-full rounded-2xl border-2 bg-paper px-4 py-3 text-ink outline-none transition-colors placeholder:text-ink-faint',
    'focus-visible:border-sage-deep',
    invalid ? 'border-blush-deep' : 'border-ink/15 hover:border-ink/30',
  )
}

function Field({
  label,
  htmlFor,
  error,
  children,
}: {
  label: string
  htmlFor: string
  error?: string
  children: React.ReactNode
}) {
  return (
    <div className="grid gap-1.5">
      <label htmlFor={htmlFor} className="text-sm font-extrabold text-ink">
        {label}
      </label>
      {children}
      {error && (
        <p id={`${htmlFor}-error`} className="text-sm font-bold text-blush-deep">
          {error}
        </p>
      )}
    </div>
  )
}
