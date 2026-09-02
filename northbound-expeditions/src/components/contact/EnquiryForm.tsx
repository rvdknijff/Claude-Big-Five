import { useId, useState } from 'react'
import { expeditions } from '@/data/expeditions'
import { cn } from '@/lib/cn'
import { Button } from '@/components/ui/Button'

type Status = 'idle' | 'submitting' | 'success' | 'error'

interface Values {
  name: string
  email: string
  trip: string
  dates: string
  experience: string
  message: string
}

const empty: Values = { name: '', email: '', trip: '', dates: '', experience: '', message: '' }

const experienceOptions = [
  'This would be my first big trip',
  'I hike / camp regularly',
  'I have done expeditions like this before',
]

function validate(v: Values) {
  const e: Partial<Record<keyof Values, string>> = {}
  if (v.name.trim().length < 2) e.name = 'Please tell us your name.'
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.email)) e.email = 'Enter a valid email address.'
  if (!v.trip) e.trip = 'Which trip are you interested in?'
  if (!v.experience) e.experience = 'This helps us point you at the right route.'
  if (v.message.trim().length < 15) e.message = 'A couple of sentences about you helps a lot.'
  return e
}

export function EnquiryForm() {
  const [values, setValues] = useState<Values>(empty)
  const [errors, setErrors] = useState<Partial<Record<keyof Values, string>>>({})
  const [status, setStatus] = useState<Status>('idle')
  const uid = useId()

  function update<K extends keyof Values>(k: K, val: Values[K]) {
    setValues((p) => ({ ...p, [k]: val }))
    if (errors[k]) setErrors((p) => ({ ...p, [k]: undefined }))
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
    await new Promise((r) => setTimeout(r, 1200))
    setStatus('success')
  }

  if (status === 'success') {
    return (
      <div className="border border-ink/15 bg-paper-dim p-8 md:p-10">
        <h3 className="font-display text-2xl">Thanks, {values.name.split(' ')[0]}.</h3>
        <p className="mt-3 max-w-md leading-relaxed text-ink-soft">
          Your enquiry about the {values.trip} is with us. A guide will reply within two working
          days — usually with a question or two before anything is booked.
        </p>
        <p className="mt-4 text-xs text-ink-faint">Front-end demo — nothing was actually sent.</p>
        <button
          type="button"
          onClick={() => {
            setValues(empty)
            setStatus('idle')
          }}
          className="mt-6 text-sm text-ink underline underline-offset-4 hover:text-signal"
        >
          Send another enquiry
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={onSubmit} noValidate className="grid gap-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Name" htmlFor={`${uid}-name`} error={errors.name}>
          <input
            id={`${uid}-name`}
            value={values.name}
            autoComplete="name"
            onChange={(e) => update('name', e.target.value)}
            className={inputCls(!!errors.name)}
          />
        </Field>
        <Field label="Email" htmlFor={`${uid}-email`} error={errors.email}>
          <input
            id={`${uid}-email`}
            type="email"
            value={values.email}
            autoComplete="email"
            onChange={(e) => update('email', e.target.value)}
            className={inputCls(!!errors.email)}
          />
        </Field>
      </div>

      <Field label="Which expedition?" htmlFor={`${uid}-trip`} error={errors.trip}>
        <select
          id={`${uid}-trip`}
          value={values.trip}
          onChange={(e) => update('trip', e.target.value)}
          className={inputCls(!!errors.trip)}
        >
          <option value="">Choose a trip</option>
          {expeditions.map((x) => (
            <option key={x.slug} value={x.name}>
              {x.name} — {x.country}
            </option>
          ))}
          <option value="Not sure yet">Not sure yet — help me choose</option>
        </select>
      </Field>

      <Field label="Rough dates or month (optional)" htmlFor={`${uid}-dates`}>
        <input
          id={`${uid}-dates`}
          value={values.dates}
          placeholder="e.g. February 2027, or flexible"
          onChange={(e) => update('dates', e.target.value)}
          className={inputCls(false)}
        />
      </Field>

      <Field label="Your outdoor experience" htmlFor={`${uid}-experience`} error={errors.experience}>
        <select
          id={`${uid}-experience`}
          value={values.experience}
          onChange={(e) => update('experience', e.target.value)}
          className={inputCls(!!errors.experience)}
        >
          <option value="">Choose one</option>
          {experienceOptions.map((o) => (
            <option key={o} value={o}>
              {o}
            </option>
          ))}
        </select>
      </Field>

      <Field label="Tell us a bit about you" htmlFor={`${uid}-message`} error={errors.message}>
        <textarea
          id={`${uid}-message`}
          rows={5}
          value={values.message}
          placeholder="Your last big walk, what you're hoping for, anything we should know."
          onChange={(e) => update('message', e.target.value)}
          className={inputCls(!!errors.message)}
        />
      </Field>

      {status === 'error' && (
        <p role="alert" className="text-sm text-signal">
          Please check the highlighted fields.
        </p>
      )}

      <div className="flex flex-wrap items-center gap-4">
        <Button type="submit" disabled={status === 'submitting'} withArrow>
          {status === 'submitting' ? 'Sending…' : 'Send enquiry'}
        </Button>
        <p className="text-xs text-ink-faint">Front-end demo — nothing is submitted.</p>
      </div>
    </form>
  )
}

function inputCls(invalid: boolean) {
  return cn(
    'w-full rounded-[3px] border bg-paper px-3.5 py-2.5 text-sm text-ink outline-none transition-colors placeholder:text-ink-faint',
    'focus-visible:border-forest',
    invalid ? 'border-signal' : 'border-ink/20 hover:border-ink/40',
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
      <label htmlFor={htmlFor} className="text-sm font-medium text-ink">
        {label}
      </label>
      {children}
      {error && (
        <p id={`${htmlFor}-error`} className="text-xs text-signal">
          {error}
        </p>
      )}
    </div>
  )
}
