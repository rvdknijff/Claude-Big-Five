import { useId, useState } from 'react'
import { CheckCircle2 } from 'lucide-react'
import { services } from '@/data/services'
import { cn } from '@/lib/cn'
import { Button } from '@/components/ui/Button'

type Status = 'idle' | 'submitting' | 'success' | 'error'

interface Values {
  name: string
  email: string
  phone: string
  car: string
  interest: string
  message: string
}

const empty: Values = { name: '', email: '', phone: '', car: '', interest: '', message: '' }

function validate(v: Values) {
  const errors: Partial<Record<keyof Values, string>> = {}
  if (v.name.trim().length < 2) errors.name = 'Please enter your name.'
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.email)) errors.email = 'Enter a valid email address.'
  if (v.car.trim().length < 2) errors.car = 'Which car is this about?'
  if (v.message.trim().length < 10) errors.message = 'A sentence or two about the project helps.'
  return errors
}

export function ContactForm() {
  const [values, setValues] = useState<Values>(empty)
  const [errors, setErrors] = useState<Partial<Record<keyof Values, string>>>({})
  const [status, setStatus] = useState<Status>('idle')
  const uid = useId()

  const field = (name: keyof Values) => ({
    id: `${uid}-${name}`,
    name,
    value: values[name],
    'aria-invalid': errors[name] ? true : undefined,
    'aria-describedby': errors[name] ? `${uid}-${name}-error` : undefined,
    onChange: (
      e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
    ) => {
      setValues((prev) => ({ ...prev, [name]: e.target.value }))
      if (errors[name]) setErrors((prev) => ({ ...prev, [name]: undefined }))
    },
  })

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault()
    const found = validate(values)
    setErrors(found)
    if (Object.keys(found).length > 0) {
      setStatus('error')
      return
    }
    setStatus('submitting')
    // Front-end demo only — this never reaches a server.
    await new Promise((r) => setTimeout(r, 1200))
    setStatus('success')
  }

  if (status === 'success') {
    return (
      <div className="border border-line bg-surface p-8 md:p-10">
        <CheckCircle2 className="size-8 text-signal" aria-hidden="true" />
        <h3 className="mt-4 font-display text-2xl font-bold uppercase tracking-tight">
          Request received
        </h3>
        <p className="mt-3 max-w-md text-sm leading-relaxed text-fg-muted">
          Thanks, {values.name.split(' ')[0]}. We&rsquo;ll come back to you within one working day to
          find a slot for the {values.car}.
        </p>
        <p className="mt-4 font-mono text-[0.68rem] uppercase tracking-[0.12em] text-fg-dim">
          Demo note — no message was actually sent.
        </p>
        <button
          type="button"
          onClick={() => {
            setValues(empty)
            setStatus('idle')
          }}
          className="mt-6 font-mono text-[0.7rem] uppercase tracking-[0.16em] text-fg underline underline-offset-4 hover:text-signal-bright"
        >
          Send another request
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={onSubmit} noValidate className="grid gap-6">
      <div className="grid gap-6 sm:grid-cols-2">
        <Field label="Name" error={errors.name} htmlFor={`${uid}-name`}>
          <input {...field('name')} type="text" autoComplete="name" className={inputCls(!!errors.name)} />
        </Field>
        <Field label="Email" error={errors.email} htmlFor={`${uid}-email`}>
          <input {...field('email')} type="email" autoComplete="email" className={inputCls(!!errors.email)} />
        </Field>
        <Field label="Phone (optional)" htmlFor={`${uid}-phone`}>
          <input {...field('phone')} type="tel" autoComplete="tel" className={inputCls(false)} />
        </Field>
        <Field label="Car (make, model, year)" error={errors.car} htmlFor={`${uid}-car`}>
          <input
            {...field('car')}
            type="text"
            placeholder="e.g. Porsche 992 Carrera S, 2023"
            className={inputCls(!!errors.car)}
          />
        </Field>
      </div>

      <Field label="What can we help with?" htmlFor={`${uid}-interest`}>
        <select {...field('interest')} className={inputCls(false)}>
          <option value="">Select a service</option>
          {services.map((s) => (
            <option key={s.id} value={s.title}>
              {s.title}
            </option>
          ))}
          <option value="Full programme">Full programme / not sure yet</option>
        </select>
      </Field>

      <Field label="About the project" error={errors.message} htmlFor={`${uid}-message`}>
        <textarea {...field('message')} rows={5} className={inputCls(!!errors.message)} />
      </Field>

      {status === 'error' && (
        <p role="alert" className="font-mono text-[0.72rem] uppercase tracking-[0.1em] text-signal-bright">
          Please check the highlighted fields.
        </p>
      )}

      <div className="flex items-center gap-4">
        <Button type="submit" disabled={status === 'submitting'} withArrow>
          {status === 'submitting' ? 'Sending…' : 'Send request'}
        </Button>
        <p className="font-mono text-[0.62rem] uppercase tracking-[0.1em] text-fg-dim">
          Front-end demo — nothing is submitted
        </p>
      </div>
    </form>
  )
}

function inputCls(invalid: boolean) {
  return cn(
    'w-full border bg-base px-4 py-3 text-sm text-fg outline-none transition-colors placeholder:text-fg-dim',
    'focus-visible:border-fg',
    invalid ? 'border-signal' : 'border-line hover:border-line-bright',
  )
}

function Field({
  label,
  error,
  htmlFor,
  children,
}: {
  label: string
  error?: string
  htmlFor: string
  children: React.ReactNode
}) {
  return (
    <div className="grid gap-2">
      <label htmlFor={htmlFor} className="label">
        {label}
      </label>
      {children}
      {error && (
        <p id={`${htmlFor}-error`} className="font-mono text-[0.68rem] text-signal-bright">
          {error}
        </p>
      )}
    </div>
  )
}
