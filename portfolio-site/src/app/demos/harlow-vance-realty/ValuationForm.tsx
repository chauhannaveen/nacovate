'use client'

import { useState } from 'react'

const input =
  'w-full rounded-lg border border-realty-200 bg-white px-3.5 py-3 text-sm text-realty-900 placeholder:text-realty-900/35 focus:outline-none focus:ring-2 focus:ring-realty-600/25'

/**
 * Two steps on purpose. Asking for a phone number on the first screen is what kills
 * conversion on valuation forms — the address alone feels like a search, so people
 * start, and someone who has already typed their address usually finishes.
 */
export function ValuationForm() {
  const [step, setStep] = useState<1 | 2 | 3>(1)
  const [address, setAddress] = useState('')

  return (
    <div className="rounded-2xl bg-white p-6 shadow-lg ring-1 ring-realty-200 sm:p-8">
      <div className="flex items-center gap-2" aria-hidden="true">
        {[1, 2, 3].map((n) => (
          <span
            key={n}
            className={`h-1.5 flex-1 rounded-full transition ${step >= n ? 'bg-realty-700' : 'bg-realty-100'}`}
          />
        ))}
      </div>
      <p className="mt-3 text-[11px] font-semibold uppercase tracking-wider text-realty-900/50">
        Step {step} of 3
      </p>

      {step === 1 ? (
        <>
          <h3 className="mt-2 font-serif text-2xl font-semibold text-realty-900">
            What is your home worth?
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-realty-900/70">
            Start with the address. We will come back with a written valuation and the three most
            comparable sales on your street in the last year.
          </p>
          <label className="mt-5 block text-[13px] font-medium text-realty-900/80">
            Property address
            <input
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              placeholder="412 Rowan Hill Drive, Cedar Park"
              autoComplete="off"
              className={`${input} mt-1.5`}
            />
          </label>
          <button
            type="button"
            disabled={address.trim().length < 4}
            onClick={() => setStep(2)}
            className="mt-5 w-full rounded-lg bg-realty-900 px-5 py-3.5 text-sm font-semibold text-white transition hover:bg-realty-700 disabled:cursor-not-allowed disabled:bg-realty-100 disabled:text-realty-900/35"
          >
            Continue
          </button>
        </>
      ) : null}

      {step === 2 ? (
        <>
          <h3 className="mt-2 font-serif text-2xl font-semibold text-realty-900">
            A couple of details
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-realty-900/70">
            Valuing <span className="font-medium text-realty-900">{address}</span>.
          </p>
          <div className="mt-5 grid grid-cols-2 gap-3">
            <label className="text-[13px] font-medium text-realty-900/80">
              Bedrooms
              <select className={`${input} mt-1.5`} defaultValue="3">
                {[1, 2, 3, 4, 5, 6].map((n) => (
                  <option key={n}>{n}</option>
                ))}
              </select>
            </label>
            <label className="text-[13px] font-medium text-realty-900/80">
              Timeframe
              <select className={`${input} mt-1.5`} defaultValue="3–6 months">
                {['Within 3 months', '3–6 months', 'This year', 'Just curious'].map((t) => (
                  <option key={t}>{t}</option>
                ))}
              </select>
            </label>
          </div>
          <label className="mt-3 block text-[13px] font-medium text-realty-900/80">
            Email or mobile
            <input placeholder="you@example.com" autoComplete="off" className={`${input} mt-1.5`} />
          </label>
          <button
            type="button"
            onClick={() => setStep(3)}
            className="mt-5 w-full rounded-lg bg-realty-900 px-5 py-3.5 text-sm font-semibold text-white transition hover:bg-realty-700"
          >
            Get my valuation
          </button>
          <button
            type="button"
            onClick={() => setStep(1)}
            className="mt-2 w-full text-[13px] font-medium text-realty-900/50 underline underline-offset-2"
          >
            Back
          </button>
        </>
      ) : null}

      {step === 3 ? (
        <>
          <h3 className="mt-2 font-serif text-2xl font-semibold text-realty-900">
            That is everything we need
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-realty-900/70">
            In a live build this would reach the office immediately and queue a written valuation for{' '}
            <span className="font-medium text-realty-900">{address}</span> within one working day.
          </p>
          <p className="mt-4 text-[11px] font-semibold uppercase tracking-wider text-realty-900/40">
            Demo — nothing was submitted
          </p>
          <button
            type="button"
            onClick={() => {
              setStep(1)
              setAddress('')
            }}
            className="mt-3 text-sm font-semibold text-realty-700 underline underline-offset-2"
          >
            Start again
          </button>
        </>
      ) : null}

      {step !== 3 ? (
        <p className="mt-3 text-center text-[11px] text-realty-900/40">
          Demo form — it does not send anything.
        </p>
      ) : null}
    </div>
  )
}
