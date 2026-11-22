'use client'

import { useState } from 'react'

interface Process {
  key: string
  name: string
  machines: string
  envelope: string
  materials: string
  tolerance: string
  capacity: string
  icon: string
}

/**
 * A buyer sourcing fabrication is checking one thing: can this shop hold my tolerance on
 * my material at my thickness. Marketing copy cannot answer that — a spec table can, and
 * it is what gets a shop onto a shortlist without a phone call.
 */
const PROCESSES: Process[] = [
  {
    key: 'laser',
    name: 'Laser cutting',
    machines: '2 × 4kW fibre laser (Trumpf-class), 1 × 3kW CO₂',
    envelope: '3000 × 1500 mm bed',
    materials: 'MS up to 20 mm · SS up to 12 mm · Aluminium up to 8 mm',
    tolerance: '± 0.1 mm',
    capacity: '~18,000 running metres / month',
    icon: 'M3 12h7m4 0h7M12 3v7m0 4v7',
  },
  {
    key: 'bending',
    name: 'CNC bending',
    machines: '3 × press brake, 100T / 160T / 220T',
    envelope: 'Up to 3200 mm bend length',
    materials: 'MS, SS, Aluminium — 0.8 to 16 mm',
    tolerance: '± 0.2 mm, ± 0.5°',
    capacity: '6-axis back gauge, 40+ tool sets',
    icon: 'M4 18h7l9-9M4 18V9m0 9h9',
  },
  {
    key: 'welding',
    name: 'Welding & assembly',
    machines: '12 MIG/TIG stations, 2 welding positioners',
    envelope: 'Assemblies to 6 m × 2.5 m × 2 m',
    materials: 'MS, SS 304/316, Aluminium',
    tolerance: 'Weld class per IS 822 / AWS D1.1',
    capacity: '6 certified welders (3G/4G)',
    icon: 'M5 19 19 5M8 5h11v11M5 8v11h11',
  },
  {
    key: 'finishing',
    name: 'Powder coating',
    machines: 'In-house 7-tank pre-treatment, 2 ovens',
    envelope: '6 m × 1.8 m × 2 m oven',
    materials: 'RAL and custom shades, 60–120 micron',
    tolerance: 'Salt spray tested to 500 hrs',
    capacity: '~900 m² / day',
    icon: 'M7 3h10v6a5 5 0 0 1-10 0V3ZM12 14v7M9 21h6',
  },
]

export function CapabilityMatrix() {
  const [active, setActive] = useState(PROCESSES[0].key)
  const p = PROCESSES.find((x) => x.key === active) ?? PROCESSES[0]

  return (
    <div className="overflow-hidden rounded-2xl bg-shakti-850 ring-1 ring-white/10">
      <div role="tablist" aria-label="Processes" className="flex overflow-x-auto border-b border-white/10">
        {PROCESSES.map((proc) => (
          <button
            key={proc.key}
            role="tab"
            aria-selected={active === proc.key}
            onClick={() => setActive(proc.key)}
            className={`flex shrink-0 items-center gap-2.5 px-5 py-4 text-sm font-semibold transition ${
              active === proc.key
                ? 'bg-shakti-amber text-shakti-900'
                : 'text-white/55 hover:bg-white/5 hover:text-white'
            }`}
          >
            <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="h-4 w-4">
              <path d={proc.icon} stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            {proc.name}
          </button>
        ))}
      </div>

      <dl className="grid gap-px bg-white/10 sm:grid-cols-2">
        {[
          ['Equipment', p.machines],
          ['Working envelope', p.envelope],
          ['Materials & thickness', p.materials],
          ['Tolerance', p.tolerance],
          ['Capacity', p.capacity],
          ['Lead time', 'Typically 5–9 working days from approved drawing'],
        ].map(([k, v]) => (
          <div key={k} className="bg-shakti-850 px-5 py-4">
            <dt className="text-[11px] font-semibold uppercase tracking-wider text-shakti-amber/80">{k}</dt>
            <dd className="mt-1.5 text-sm leading-relaxed text-white/80">{v}</dd>
          </div>
        ))}
      </dl>
    </div>
  )
}
