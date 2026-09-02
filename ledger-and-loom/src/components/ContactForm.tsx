import { useId, useState } from 'react'
import { cn } from '@/lib/cn'
import { Button } from './ui/Button'

type Status = 'idle' | 'submitting' | 'success' | 'error'

interface Values {
  name: string
  email: string
  business: string
  stage: string
  message: string
}

const empty: Values = { name: '', email: '', business: '', stage: '', message: '' }

const businessTypes = ['Freelancer / sole trader', 'Studio (2–15 people)', 'Something else']
const stages = [
  'Just starting out',
  'Established, want it tidier',
  'Growing — a decision coming up',
  'In a mess, need help now',
]

function validate(v: Values) {
  const e: Partial<Record<keyof Values, string>> = {}
  if (v.name.trim().length < 2) e.name = 'Your name, please.'
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.email)) e.email = 'A valid email address.'
  if (!v.business) e.business = 'Pick the closest option.'
  if (v.message.trim().length < 12) e.message = 'A sentence or two about the business helps.'
  return e
}

export function ContactForm() {
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
      <div className="border border-ink p-6 md:p-8">
        <p className="label text-accent">Received</p>
        <h3 className="mt-3 text-2xl tracking-[-0.02em]">Thanks, {values.name.split(' ')[0]}.</h3>
        <p className="mt-3 max-w-md text-sm leading-relaxed text-ink-2">
          We&rsquo;ll reply within one working day to set up the 45-minute call. No preparation
          needed — just come with the questions that are actually bothering you.
        </p>
        <p className="mt-4 font-mono text-[0.68rem] text-ink-3">
          Front-end demo — nothing was actually sent.
        </p>
        <button
          type="button"
          onClick={() => {
            setValues(empty)
            setStatus('idle')
          }}
          className="mt-5 font-mono text-[0.72rem] uppercase tracking-[0.12em] text-ink underline underline-offset-4 hover:text-accent"
        >
          Send another
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

      <Field label="What kind of business?" htmlFor={`${uid}-business`} error={errors.business}>
        <select
          id={`${uid}-business`}
          value={values.business}
          onChange={(e) => update('business', e.target.value)}
          className={inputCls(!!errors.business)}
        >
          <option value="">Choose one</option>
          {businessTypes.map((b) => (
            <option key={b} value={b}>
              {b}
            </option>
          ))}
        </select>
      </Field>

      <Field label="Where are you? (optional)" htmlFor={`${uid}-stage`}>
        <select
          id={`${uid}-stage`}
          value={values.stage}
          onChange={(e) => update('stage', e.target.value)}
          className={inputCls(false)}
        >
          <option value="">Choose one</option>
          {stages.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>
      </Field>

      <Field label="What's on your mind?" htmlFor={`${uid}-message`} error={errors.message}>
        <textarea
          id={`${uid}-message`}
          rows={5}
          value={values.message}
          placeholder="The question that made you fill in this form."
          onChange={(e) => update('message', e.target.value)}
          className={inputCls(!!errors.message)}
        />
      </Field>

      {status === 'error' && (
        <p role="alert" className="font-mono text-xs text-accent">
          Please check the highlighted fields.
        </p>
      )}

      <div className="flex flex-wrap items-center gap-4">
        <Button type="submit" disabled={status === 'submitting'} withArrow>
          {status === 'submitting' ? 'Sending' : 'Book the call'}
        </Button>
        <p className="font-mono text-[0.65rem] text-ink-3">Front-end demo — nothing is submitted.</p>
      </div>
    </form>
  )
}

function inputCls(invalid: boolean) {
  return cn(
    'w-full rounded-none border bg-page px-3 py-2.5 text-sm text-ink outline-none transition-colors placeholder:text-ink-3',
    'focus-visible:border-ink',
    invalid ? 'border-accent' : 'border-line-strong hover:border-ink-3',
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
      <label htmlFor={htmlFor} className="label !text-ink-2">
        {label}
      </label>
      {children}
      {error && (
        <p id={`${htmlFor}-error`} className="font-mono text-xs text-accent">
          {error}
        </p>
      )}
    </div>
  )
}
