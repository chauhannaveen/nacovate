'use client'

import { useState } from 'react'

interface DemoFormProps {
  children: React.ReactNode
  /** Label on the submit button. */
  submitLabel: string
  /** Shown in place of the form once submitted. */
  successTitle: string
  successBody: string
  /** Tailwind classes for the submit button, so each demo keeps its own palette. */
  buttonClass: string
  accentClass?: string
}

/**
 * Wraps a demo form so submitting it does something visible without sending anything.
 * A dead submit button makes a demo feel broken; a fake success message that does not
 * say it is fake is dishonest. This does the third thing.
 */
export function DemoForm({
  children,
  submitLabel,
  successTitle,
  successBody,
  buttonClass,
  accentClass = 'text-slate-900',
}: DemoFormProps) {
  const [sent, setSent] = useState(false)

  if (sent) {
    return (
      <div className="rounded-xl border border-dashed border-slate-300 bg-white/70 p-6 text-center">
        <p className={`font-semibold ${accentClass}`}>{successTitle}</p>
        <p className="mt-2 text-sm leading-relaxed text-slate-600">{successBody}</p>
        <p className="mt-4 text-xs font-medium uppercase tracking-wider text-slate-400">
          Demo — nothing was submitted
        </p>
        <button
          type="button"
          onClick={() => setSent(false)}
          className="mt-3 text-sm font-semibold text-slate-500 underline underline-offset-2 hover:text-slate-800"
        >
          Reset the form
        </button>
      </div>
    )
  }

  return (
    <form
      noValidate
      onSubmit={(e) => {
        e.preventDefault()
        setSent(true)
      }}
      className="space-y-4"
    >
      {children}
      <button type="submit" className={buttonClass}>
        {submitLabel}
      </button>
      <p className="text-center text-[11px] text-slate-400">
        Demo form — it does not send anything.
      </p>
    </form>
  )
}

/** Shared field styling, so the three demos differ by palette rather than by polish. */
export const fieldClass =
  'w-full rounded-lg border border-slate-300 bg-white px-3.5 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-900/15'

export const labelClass = 'block text-[13px] font-medium text-slate-700'
