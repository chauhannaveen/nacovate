'use client'

import { useState } from 'react'

interface Session {
  time: string
  name: string
  coach: string
  level: 'All levels' | 'Beginner' | 'Intermediate' | 'Advanced'
  spaces: number
}

const SCHEDULE: Record<string, Session[]> = {
  Mon: [
    { time: '6:00 am', name: 'Strength — Lower', coach: 'Dev', level: 'All levels', spaces: 4 },
    { time: '7:15 am', name: 'Conditioning 45', coach: 'Marta', level: 'All levels', spaces: 0 },
    { time: '12:10 pm', name: 'Lunch Express 30', coach: 'Dev', level: 'All levels', spaces: 7 },
    { time: '5:30 pm', name: 'Barbell Club', coach: 'Ollie', level: 'Intermediate', spaces: 2 },
    { time: '6:45 pm', name: 'Strength — Upper', coach: 'Marta', level: 'All levels', spaces: 5 },
  ],
  Tue: [
    { time: '6:00 am', name: 'Conditioning 45', coach: 'Ollie', level: 'All levels', spaces: 6 },
    { time: '9:30 am', name: 'Foundations', coach: 'Marta', level: 'Beginner', spaces: 8 },
    { time: '5:30 pm', name: 'Olympic Lifting', coach: 'Dev', level: 'Advanced', spaces: 3 },
    { time: '7:00 pm', name: 'Mobility & Core', coach: 'Priya', level: 'All levels', spaces: 10 },
  ],
  Wed: [
    { time: '6:00 am', name: 'Strength — Full Body', coach: 'Dev', level: 'All levels', spaces: 2 },
    { time: '12:10 pm', name: 'Lunch Express 30', coach: 'Priya', level: 'All levels', spaces: 9 },
    { time: '5:30 pm', name: 'Barbell Club', coach: 'Ollie', level: 'Intermediate', spaces: 0 },
    { time: '6:45 pm', name: 'Conditioning 45', coach: 'Marta', level: 'All levels', spaces: 4 },
  ],
  Thu: [
    { time: '6:00 am', name: 'Strength — Lower', coach: 'Ollie', level: 'All levels', spaces: 5 },
    { time: '9:30 am', name: 'Foundations', coach: 'Priya', level: 'Beginner', spaces: 6 },
    { time: '5:30 pm', name: 'Strength — Upper', coach: 'Dev', level: 'All levels', spaces: 1 },
    { time: '7:00 pm', name: 'Conditioning 45', coach: 'Marta', level: 'All levels', spaces: 8 },
  ],
  Fri: [
    { time: '6:00 am', name: 'Conditioning 45', coach: 'Dev', level: 'All levels', spaces: 7 },
    { time: '12:10 pm', name: 'Lunch Express 30', coach: 'Ollie', level: 'All levels', spaces: 11 },
    { time: '5:30 pm', name: 'Friday Heavy', coach: 'Dev', level: 'Intermediate', spaces: 3 },
  ],
  Sat: [
    { time: '8:00 am', name: 'Partner Workout', coach: 'Marta', level: 'All levels', spaces: 12 },
    { time: '9:30 am', name: 'Foundations', coach: 'Priya', level: 'Beginner', spaces: 9 },
    { time: '11:00 am', name: 'Open Gym', coach: '—', level: 'All levels', spaces: 20 },
  ],
  Sun: [{ time: '10:00 am', name: 'Open Gym', coach: '—', level: 'All levels', spaces: 20 }],
}

const DAYS = Object.keys(SCHEDULE)

const LEVEL_STYLE: Record<Session['level'], string> = {
  'All levels': 'bg-white/10 text-white/70',
  Beginner: 'bg-emerald-400/15 text-emerald-300',
  Intermediate: 'bg-sky-400/15 text-sky-300',
  Advanced: 'bg-iron-500/20 text-iron-500',
}

export function ScheduleTabs() {
  const [day, setDay] = useState(DAYS[0])
  const sessions = SCHEDULE[day]

  return (
    <div>
      <div
        role="tablist"
        aria-label="Class schedule by day"
        className="-mx-1 flex gap-1.5 overflow-x-auto px-1 pb-1"
      >
        {DAYS.map((d) => (
          <button
            key={d}
            role="tab"
            aria-selected={day === d}
            onClick={() => setDay(d)}
            className={`shrink-0 rounded-lg px-4 py-2.5 text-sm font-bold uppercase tracking-wide transition ${
              day === d
                ? 'bg-iron-500 text-white'
                : 'bg-white/5 text-white/50 hover:bg-white/10 hover:text-white'
            }`}
          >
            {d}
          </button>
        ))}
      </div>

      <ul className="mt-5 divide-y divide-white/10 border-y border-white/10">
        {sessions.map((s) => (
          // Phone: time and availability on their own line above the class name, so a
          // name like "Strength — Lower" is never squeezed into a two-word column.
          // sm and up: `sm:contents` dissolves the wrapper and it becomes one row.
          <li
            key={`${s.time}-${s.name}`}
            className="flex flex-col gap-1.5 py-4 sm:flex-row sm:items-center sm:gap-4"
          >
            <div className="flex items-baseline justify-between gap-3 sm:contents">
              <span className="font-mono text-sm font-semibold text-iron-500 sm:w-20 sm:shrink-0">
                {s.time}
              </span>
              <span
                className={`text-[13px] sm:order-last sm:w-[6.5rem] sm:text-right ${
                  s.spaces === 0 ? 'font-semibold text-white/30' : 'font-medium text-white/50'
                }`}
              >
                {s.spaces === 0 ? 'Waitlist' : `${s.spaces} space${s.spaces === 1 ? '' : 's'}`}
              </span>
            </div>

            <div className="min-w-0 sm:flex-1">
              <span className="block font-semibold leading-snug text-white">{s.name}</span>
              <span className="mt-0.5 block text-[13px] text-white/40">
                {s.coach === '—' ? 'Unstaffed' : `with ${s.coach}`}
              </span>
            </div>

            <span
              className={`self-start rounded px-2 py-1 text-[11px] font-semibold sm:self-center ${LEVEL_STYLE[s.level]}`}
            >
              {s.level}
            </span>
          </li>
        ))}
      </ul>

      <p className="mt-4 text-xs text-white/35">
        Demo timetable — class names, coaches and availability are invented.
      </p>
    </div>
  )
}
