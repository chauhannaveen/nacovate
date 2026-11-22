'use client'

import { useState } from 'react'

const DAYS = [
  { label: 'Today', date: 'Mon 20', slots: ['11:40 am', '2:15 pm', '4:00 pm'] },
  { label: 'Tomorrow', date: 'Tue 21', slots: ['8:30 am', '9:15 am', '1:00 pm', '3:45 pm'] },
  { label: 'Wed', date: 'Wed 22', slots: ['8:00 am', '10:30 am', '11:15 am', '2:30 pm', '4:15 pm'] },
  { label: 'Thu', date: 'Thu 23', slots: ['9:00 am', '12:30 pm'] },
  { label: 'Fri', date: 'Fri 24', slots: ['8:15 am', '10:00 am', '1:30 pm', '3:00 pm'] },
]

const REASONS = ['New patient visit', 'Annual physical', 'Sick visit', 'Follow-up', 'Vaccination']

export function BookingWidget() {
  const [dayIndex, setDayIndex] = useState(0)
  const [slot, setSlot] = useState<string | null>(null)
  const [reason, setReason] = useState(REASONS[0])
  const [confirmed, setConfirmed] = useState(false)

  const day = DAYS[dayIndex]

  if (confirmed && slot) {
    return (
      <div className="min-w-0 rounded-2xl bg-white p-6 shadow-xl ring-1 ring-clinic-900/10 sm:p-7">
        <div className="grid h-11 w-11 place-items-center rounded-full bg-clinic-50 text-clinic-600">
          <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" aria-hidden="true">
            <path d="m5 13 4 4L19 7" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <h3 className="mt-4 text-lg font-semibold text-clinic-900">Appointment held</h3>
        <p className="mt-1.5 text-sm leading-relaxed text-slate-600">
          {reason} · {day.date} at {slot}. In a live build this is where the intake form and insurance
          details would be collected, then confirmed by text.
        </p>
        <p className="mt-4 text-[11px] font-semibold uppercase tracking-wider text-slate-400">
          Demo — nothing was booked
        </p>
        <button
          type="button"
          onClick={() => {
            setConfirmed(false)
            setSlot(null)
          }}
          className="mt-3 text-sm font-semibold text-clinic-600 underline underline-offset-2"
        >
          Start again
        </button>
      </div>
    )
  }

  return (
    // `min-w-0` matters: as a grid item this defaults to min-width:auto, and the widget's
    // min-content width then pushes the whole hero wider than a 375px phone screen.
    <div className="min-w-0 rounded-2xl bg-white p-5 shadow-xl ring-1 ring-clinic-900/10 sm:p-7">
      <div className="flex items-center justify-between gap-3">
        <h3 className="text-base font-semibold text-clinic-900 sm:text-lg">Book an appointment</h3>
        <span className="flex items-center gap-1.5 rounded-full bg-green-50 px-2.5 py-1 text-[11px] font-semibold text-green-700">
          <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-green-500" />
          3 slots today
        </span>
      </div>

      <label className="mt-5 block">
        <span className="text-[13px] font-medium text-slate-700">Reason for visit</span>
        <select
          value={reason}
          onChange={(e) => setReason(e.target.value)}
          className="mt-1.5 w-full rounded-lg border border-slate-300 bg-white px-3.5 py-2.5 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-clinic-500/30"
        >
          {REASONS.map((r) => (
            <option key={r}>{r}</option>
          ))}
        </select>
      </label>

      <p className="mt-5 text-[13px] font-medium text-slate-700">Pick a day</p>
      {/* Horizontal scroll rather than a wrapped grid — on a phone this stays one row. */}
      <div className="-mx-1 mt-2 flex gap-2 overflow-x-auto px-1 pb-1">
        {DAYS.map((d, i) => (
          <button
            key={d.date}
            type="button"
            onClick={() => {
              setDayIndex(i)
              setSlot(null)
            }}
            aria-pressed={i === dayIndex}
            className={`shrink-0 rounded-xl border px-3.5 py-2.5 text-left transition ${
              i === dayIndex
                ? 'border-clinic-600 bg-clinic-600 text-white'
                : 'border-slate-200 bg-white text-slate-700 hover:border-clinic-500/50'
            }`}
          >
            <span className="block text-[11px] font-medium opacity-80">{d.label}</span>
            <span className="block text-sm font-semibold">{d.date}</span>
          </button>
        ))}
      </div>

      <p className="mt-5 text-[13px] font-medium text-slate-700">Available times</p>
      <div className="mt-2 grid grid-cols-3 gap-2">
        {day.slots.map((t) => (
          <button
            key={t}
            type="button"
            onClick={() => setSlot(t)}
            aria-pressed={slot === t}
            className={`rounded-lg border px-2 py-2.5 text-[13px] font-semibold transition ${
              slot === t
                ? 'border-clinic-600 bg-clinic-50 text-clinic-600 ring-1 ring-clinic-600'
                : 'border-slate-200 text-slate-700 hover:border-clinic-500/50 hover:bg-clinic-50/60'
            }`}
          >
            {t}
          </button>
        ))}
      </div>

      <button
        type="button"
        disabled={!slot}
        onClick={() => setConfirmed(true)}
        className="mt-6 w-full rounded-lg bg-clinic-600 px-5 py-3.5 text-sm font-semibold text-white transition hover:bg-clinic-900 disabled:cursor-not-allowed disabled:bg-slate-200 disabled:text-slate-400"
      >
        {slot ? `Hold ${day.date} at ${slot}` : 'Choose a time to continue'}
      </button>
      <p className="mt-2.5 text-center text-[11px] text-slate-400">
        Demo booking flow — no appointment is created.
      </p>
    </div>
  )
}
