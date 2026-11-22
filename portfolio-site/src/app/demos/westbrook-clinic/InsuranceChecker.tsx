'use client'

import { useState } from 'react'

/**
 * Answers the question a family practice's front desk fields more than any other.
 * Plan names are invented — a real build would read from the practice's own list.
 */
const PLANS = [
  { name: 'Meridian Health PPO', status: 'in', note: 'In network. Copay shown at booking.' },
  { name: 'Northstar Blue Choice', status: 'in', note: 'In network for primary care and labs.' },
  { name: 'Civic Employee Plan', status: 'in', note: 'In network. Referrals not required.' },
  { name: 'Harbor Point HMO', status: 'referral', note: 'Accepted with a referral from your assigned PCP.' },
  { name: 'Lakeview Choice', status: 'out', note: 'Out of network — we can still see you at our self-pay rate ($95 for a standard visit).' },
  { name: 'Something else / no insurance', status: 'out', note: 'Self-pay is $95 for a standard visit, $140 for a new-patient visit, quoted up front.' },
] as const

const STATUS_STYLE = {
  in: 'bg-green-50 text-green-800 ring-green-600/20',
  referral: 'bg-amber-50 text-amber-800 ring-amber-600/20',
  out: 'bg-slate-100 text-slate-700 ring-slate-400/25',
} as const

const STATUS_LABEL = {
  in: 'Accepted',
  referral: 'Accepted with referral',
  out: 'Not in network',
} as const

export function InsuranceChecker() {
  const [plan, setPlan] = useState('')
  const selected = PLANS.find((p) => p.name === plan)

  return (
    <div className="rounded-2xl border border-clinic-100 bg-white p-5 sm:p-7">
      <h3 className="text-lg font-semibold text-clinic-900">Do you take my insurance?</h3>
      <p className="mt-1.5 text-sm leading-relaxed text-slate-600">
        Pick your plan and get a straight answer, including what it costs if we are not in network.
      </p>

      <label className="mt-5 block">
        <span className="text-[13px] font-medium text-slate-700">Your plan</span>
        <select
          value={plan}
          onChange={(e) => setPlan(e.target.value)}
          className="mt-1.5 w-full rounded-lg border border-slate-300 bg-white px-3.5 py-2.5 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-clinic-500/30"
        >
          <option value="">Select a plan…</option>
          {PLANS.map((p) => (
            <option key={p.name}>{p.name}</option>
          ))}
        </select>
      </label>

      <div aria-live="polite" className="mt-4 min-h-[4.5rem]">
        {selected ? (
          <div className="rounded-xl bg-slate-50 p-4">
            <span
              className={`inline-flex rounded-full px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider ring-1 ${
                STATUS_STYLE[selected.status]
              }`}
            >
              {STATUS_LABEL[selected.status]}
            </span>
            <p className="mt-2.5 text-sm leading-relaxed text-slate-700">{selected.note}</p>
          </div>
        ) : (
          <p className="rounded-xl border border-dashed border-slate-200 p-4 text-sm text-slate-400">
            Your answer appears here — no phone call, no hold music.
          </p>
        )}
      </div>
    </div>
  )
}
