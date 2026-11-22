'use client'

import { useState } from 'react'

const LAKH = 100_000
const CRORE = 10_000_000

/** Indian number formatting — ₹1.85 Cr reads correctly, ₹18,500,000 does not. */
function inrShort(n: number): string {
  if (n >= CRORE) return `₹${(n / CRORE).toFixed(2).replace(/\.00$/, '')} Cr`
  if (n >= LAKH) return `₹${Math.round(n / LAKH)} L`
  return `₹${Math.round(n).toLocaleString('en-IN')}`
}

const inrFull = (n: number) => `₹${Math.round(n).toLocaleString('en-IN')}`

function emiFor(principal: number, annualRate: number, years: number): number {
  const r = annualRate / 12 / 100
  const n = years * 12
  if (r === 0) return principal / n
  const pow = Math.pow(1 + r, n)
  return (principal * r * pow) / (pow - 1)
}

const sliderClass =
  'mt-2 w-full accent-aravali-500 [--tw-ring-color:theme(colors.aravali.500)] focus:outline-none'

/**
 * Nearly every Indian property enquiry starts with "EMI kitni banegi?". Answering it on
 * the page, before the enquiry form, is what turns a browser into a site visit — and it
 * doubles as a soft qualifier, because someone who has set the sliders has told you
 * their budget before you have spoken to them.
 */
export function EmiCalculator() {
  const [price, setPrice] = useState(18_500_000)
  const [downPct, setDownPct] = useState(20)
  const [rate, setRate] = useState(8.5)
  const [years, setYears] = useState(20)

  const down = (price * downPct) / 100
  const loan = price - down
  const emi = emiFor(loan, rate, years)
  const totalInterest = emi * years * 12 - loan

  return (
    <div className="rounded-2xl bg-white p-6 shadow-lg ring-1 ring-aravali-200 sm:p-7">
      <h3 className="text-lg font-semibold text-aravali-900">What will the EMI be?</h3>
      <p className="mt-1.5 text-sm text-slate-600">
        Move the sliders. Nothing is sent anywhere — this is just arithmetic.
      </p>

      <div className="mt-6 space-y-5">
        <label className="block">
          <span className="flex items-baseline justify-between text-[13px] font-medium text-slate-700">
            Property price
            <span className="font-semibold text-aravali-900">{inrShort(price)}</span>
          </span>
          <input
            type="range"
            min={3_000_000}
            max={100_000_000}
            step={500_000}
            value={price}
            onChange={(e) => setPrice(Number(e.target.value))}
            className={sliderClass}
            aria-label="Property price"
          />
        </label>

        <label className="block">
          <span className="flex items-baseline justify-between text-[13px] font-medium text-slate-700">
            Down payment
            <span className="font-semibold text-aravali-900">
              {downPct}% · {inrShort(down)}
            </span>
          </span>
          <input
            type="range"
            min={10}
            max={60}
            step={5}
            value={downPct}
            onChange={(e) => setDownPct(Number(e.target.value))}
            className={sliderClass}
            aria-label="Down payment percentage"
          />
        </label>

        <div className="grid grid-cols-2 gap-4">
          <label className="block">
            <span className="flex items-baseline justify-between text-[13px] font-medium text-slate-700">
              Interest
              <span className="font-semibold text-aravali-900">{rate}%</span>
            </span>
            <input
              type="range"
              min={7}
              max={12}
              step={0.1}
              value={rate}
              onChange={(e) => setRate(Number(e.target.value))}
              className={sliderClass}
              aria-label="Annual interest rate"
            />
          </label>
          <label className="block">
            <span className="flex items-baseline justify-between text-[13px] font-medium text-slate-700">
              Tenure
              <span className="font-semibold text-aravali-900">{years} yrs</span>
            </span>
            <input
              type="range"
              min={5}
              max={30}
              step={1}
              value={years}
              onChange={(e) => setYears(Number(e.target.value))}
              className={sliderClass}
              aria-label="Loan tenure in years"
            />
          </label>
        </div>
      </div>

      <div className="mt-7 rounded-xl bg-aravali-50 p-5 text-center">
        <p className="text-[11px] font-semibold uppercase tracking-wider text-slate-500">
          Monthly EMI
        </p>
        <p aria-live="polite" className="mt-1 text-3xl font-bold text-aravali-900 tabular-nums sm:text-4xl">
          {inrFull(emi)}
        </p>
        <dl className="mt-4 grid grid-cols-2 gap-3 border-t border-aravali-200 pt-4 text-left">
          <div>
            <dt className="text-[11px] uppercase tracking-wider text-slate-500">Loan amount</dt>
            <dd className="mt-0.5 text-sm font-semibold text-aravali-900">{inrShort(loan)}</dd>
          </div>
          <div>
            <dt className="text-[11px] uppercase tracking-wider text-slate-500">Total interest</dt>
            <dd className="mt-0.5 text-sm font-semibold text-aravali-900">{inrShort(totalInterest)}</dd>
          </div>
        </dl>
      </div>

      <p className="mt-4 text-[11px] leading-relaxed text-slate-400">
        Indicative only. Actual rates depend on your lender, credit score and profile. Not a loan
        offer, and we are not a lending institution.
      </p>
    </div>
  )
}
