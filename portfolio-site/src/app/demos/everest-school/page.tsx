import type { Metadata } from 'next'
import { DemoFooter } from '@/components/demo/DemoFooter'
import { DemoForm, fieldClass, labelClass } from '@/components/demo/DemoForm'
import { DemoImage } from '@/components/demo/DemoImage'
import { ImageGallery } from '@/components/demo/ImageGallery'
import { ReviewStrip, type Review } from '@/components/demo/ReviewStrip'
import { photosFor } from '@/lib/photos'
import { FeeTable } from './FeeTable'

const img = photosFor('everest')

export const metadata: Metadata = {
  title: 'Everest Public School, Faridabad — demo build',
  description:
    'A demonstration website for a fictional CBSE school, built around published fees, a clear admission timeline and bus routes.',
}

const WHATSAPP = 'https://wa.me/917678101800'

const TIMELINE = [
  { d: '15 Nov', t: 'Forms open', b: 'Online and at the school office. ₹500, non-refundable.' },
  { d: '20 Dec', t: 'Last date to apply', b: 'For the main round. Late applications go to the waiting list.' },
  { d: '8–12 Jan', t: 'Interaction', b: 'A relaxed session with the child and both parents. Not a test.' },
  { d: '25 Jan', t: 'First list', b: 'Published here and sent by SMS. Fees due within 10 days.' },
]

const FACILITIES = [
  { t: 'Science & robotics labs', b: 'Three labs plus a robotics room running an Atal Tinkering Lab curriculum from Class VI.', icon: 'M9 3h6m-5 0v7l-3.5 7A2 2 0 0 0 8.3 20h7.4a2 2 0 0 0 1.8-3L14 10V3' },
  { t: '400m track & courts', b: 'Athletics track, two basketball courts, a cricket net and a covered badminton hall.', icon: 'M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18ZM3.6 9h16.8M3.6 15h16.8M12 3c3 4.5 3 13.5 0 18M12 3c-3 4.5-3 13.5 0 18' },
  { t: 'Library, 14,000 titles', b: 'Open before and after school. Every child gets a period a week in it, including Class XII.', icon: 'M4 5v14l8-3 8 3V5l-8 3-8-3Z' },
  { t: 'Air-conditioned buses', b: 'Nineteen buses, GPS tracked, a female attendant on every route. Parents get live location.', icon: 'M4 6h16v9H4zM6 15v3m12-3v3M7 18a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm10 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM4 10h16' },
]

const RESULTS = [
  ['Class X — 2026', '100% pass', '38 students above 95%'],
  ['Class XII — Science', '100% pass', 'Average 86.4%'],
  ['Class XII — Commerce', '100% pass', 'Average 84.1%'],
]

const ROUTES = [
  'Sector 15 · 15A · 16',
  'Sector 21A · 21B · 21C',
  'NIT 1 · NIT 3 · NIT 5',
  'Old Faridabad · Ajronda',
  'Sector 46 · 46A · Greenfield',
  'Ballabgarh · Sector 64',
]

const REVIEWS: Review[] = [
  {
    quote:
      'Fees puri website pe likhi hui hain. Humne char school dekhe, sirf yahan number pehle se pata tha — office jaake pata karne ki zaroorat hi nahi padi.',
    name: 'Meenakshi Tomar',
    context: 'Parent, Class IV',
  },
  {
    quote:
      'The interaction was genuinely relaxed. They spoke to our son about his drawings for twenty minutes. No flashcards, no rote questions, no pressure on a six-year-old.',
    name: 'Arun Bhatia',
    context: 'Parent, Class I',
  },
  {
    quote:
      'Bus tracking app actually works. I can see exactly where the bus is every morning instead of standing at the gate guessing.',
    name: 'Shalini Grover',
    context: 'Parent, Class VII',
  },
]

export default function EverestSchoolDemo() {
  return (
    <div className="bg-everest-50 text-everest-900">
      {/* Admissions ribbon — the one thing a parent landing here in winter is looking for. */}
      <div className="bg-everest-500 text-white">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-1 px-4 py-2 text-center text-[13px] sm:flex-row sm:justify-center sm:gap-3 sm:px-6">
          <span className="rounded bg-white/15 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider">
            Admissions open
          </span>
          <span>Session 2027–28 · forms close 20 December</span>
          <a href="#apply" className="font-semibold underline underline-offset-2 hover:text-everest-gold">
            Apply now
          </a>
        </div>
      </div>

      <header className="sticky top-0 z-40 border-b border-everest-200 bg-everest-50/95 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3 sm:px-6">
          <a href="#" className="flex items-center gap-2.5">
            <span aria-hidden="true" className="grid h-10 w-10 place-items-center rounded-full bg-everest-500 text-sm font-bold text-everest-gold">
              E
            </span>
            <span className="leading-tight">
              <span className="block text-[15px] font-bold">Everest Public School</span>
              <span className="hidden text-[11px] text-everest-800/55 sm:block">CBSE Affiliation No. 530XXXX · Faridabad</span>
            </span>
          </a>
          <nav aria-label="Main" className="hidden items-center gap-5 text-sm font-medium text-everest-800/70 lg:flex">
            <a href="#fees" className="hover:text-everest-500">Fees</a>
            <a href="#admissions" className="hover:text-everest-500">Admissions</a>
            <a href="#campus" className="hover:text-everest-500">Campus</a>
            <a href="#transport" className="hover:text-everest-500">Transport</a>
          </nav>
          <a href="#apply" className="rounded-lg bg-everest-500 px-3.5 py-2.5 text-[13px] font-semibold text-white transition hover:bg-everest-600 sm:px-4">
            Apply
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="border-b border-everest-200 bg-white">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:px-6 sm:py-16 lg:grid-cols-[1.05fr_1fr] lg:items-center lg:gap-14">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-everest-500">
              CBSE · Co-educational · Nursery to Class XII
            </p>
            <h1 className="mt-5 text-3xl font-bold leading-[1.12] tracking-tight sm:text-4xl lg:text-5xl">
              The fees are on this page. So is everything else you came to ask.
            </h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-everest-800/70 sm:text-lg">
              Thirty-one years in Faridabad, 1,840 children, and a class size we have capped at 32
              since 2011. Below you will find the full fee structure, the admission dates, the bus
              routes and last year&rsquo;s board results — without filling in a form first.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <a href="#apply" className="rounded-lg bg-everest-500 px-5 py-3.5 text-center text-sm font-semibold text-white transition hover:bg-everest-600">
                Start an application
              </a>
              <a href="#fees" className="rounded-lg bg-everest-50 px-5 py-3.5 text-center text-sm font-semibold text-everest-900 ring-1 ring-everest-200 transition hover:ring-everest-500/40">
                See the fee structure
              </a>
            </div>
            <dl className="mt-9 grid grid-cols-3 gap-4 border-t border-everest-200 pt-6">
              {[['31 yrs', 'in Faridabad'], ['1:32', 'teacher to class'], ['100%', 'Class X pass, 2026']].map(([v, l]) => (
                <div key={l}>
                  <dt className="text-[11px] font-medium uppercase tracking-wider text-everest-800/50">{l}</dt>
                  <dd className="mt-0.5 text-xl font-bold sm:text-2xl">{v}</dd>
                </div>
              ))}
            </dl>
          </div>

          <ImageGallery
            shots={[
              { label: 'Main building', src: img('school-1'), motif: 'house', variant: 3 },
              { label: 'Library', src: img('school-2'), motif: 'room', variant: 1 },
              { label: 'Science lab', src: img('school-3'), motif: 'clinic', variant: 5 },
              { label: 'Sports ground', src: img('school-4'), motif: 'street', variant: 4 },
              { label: 'Classroom', src: img('school-5'), motif: 'room', variant: 7 },
            ]}
            accentClass="ring-everest-500"
          />
        </div>
      </section>

      {/* Fees */}
      <section id="fees" className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
        <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">Fee structure, 2027–28</h2>
        <p className="mt-3 max-w-2xl text-base leading-relaxed text-everest-800/70">
          Pick a class. The total is the real total — there is no second conversation at the office
          where the number changes.
        </p>
        <div className="mt-8">
          <FeeTable />
        </div>
      </section>

      {/* Admissions */}
      <section id="admissions" className="border-y border-everest-200 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">How admission works</h2>
          <ol className="mt-9 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {TIMELINE.map((step) => (
              <li key={step.d} className="border-t-2 border-everest-500 pt-4">
                <span className="font-mono text-sm font-bold text-everest-500">{step.d}</span>
                <h3 className="mt-1.5 text-lg font-bold">{step.t}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-everest-800/70">{step.b}</p>
              </li>
            ))}
          </ol>

          <div className="mt-10 grid gap-5 sm:grid-cols-3">
            {RESULTS.map(([k, a, b]) => (
              <div key={k} className="rounded-2xl bg-everest-50 p-5 ring-1 ring-everest-200">
                <p className="text-[11px] font-semibold uppercase tracking-wider text-everest-800/50">{k}</p>
                <p className="mt-1.5 text-2xl font-bold text-everest-500">{a}</p>
                <p className="mt-0.5 text-[13px] text-everest-800/70">{b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Campus */}
      <section id="campus" className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
        <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">On campus</h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {FACILITIES.map((f) => (
            <div key={f.t} className="flex gap-4 rounded-2xl bg-white p-5 ring-1 ring-everest-200">
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-everest-50 text-everest-500">
                <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="h-5 w-5">
                  <path d={f.icon} stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
              <div>
                <h3 className="font-semibold">{f.t}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-everest-800/70">{f.b}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Transport */}
      <section id="transport" className="border-y border-everest-200 bg-white">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 sm:py-20 lg:grid-cols-2 lg:gap-14">
          <div className="min-w-0">
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">Bus routes</h2>
            <p className="mt-4 text-base leading-relaxed text-everest-800/70">
              Nineteen buses across six route groups. Every bus is GPS tracked and carries a female
              attendant; parents get live location on the school app from the moment it leaves the
              depot.
            </p>
            <ul className="mt-6 grid gap-2 sm:grid-cols-2">
              {ROUTES.map((r) => (
                <li key={r} className="rounded-lg bg-everest-50 px-3.5 py-2.5 text-[13px] font-medium ring-1 ring-everest-200">
                  {r}
                </li>
              ))}
            </ul>
            <p className="mt-5 text-sm text-everest-800/60">
              Not on this list? Ring the office — if four families from one sector ask, we add the stop.
            </p>
          </div>
          <DemoImage src={img('route-map')} motif="street" variant={2} className="aspect-[4/3] rounded-2xl ring-1 ring-everest-200 lg:aspect-auto lg:h-full" label="Route map — Faridabad" />
        </div>
      </section>

      {/* Reviews */}
      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
        <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">What parents say</h2>
        <div className="mt-8">
          <ReviewStrip
            reviews={REVIEWS}
            cardClass="bg-white ring-1 ring-everest-200"
            starClass="text-everest-gold"
            nameClass="text-everest-900"
            quoteClass="text-everest-800/75"
            metaClass="text-everest-800/50"
          />
        </div>
      </section>

      {/* Apply */}
      <section id="apply" className="border-t border-everest-200 bg-everest-900 text-white">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 sm:py-20 lg:grid-cols-2 lg:items-center lg:gap-14">
          <div>
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">Start an application</h2>
            <p className="mt-4 text-base leading-relaxed text-white/65">
              Fill this in and the admissions office will call within two working days with a slot
              for the interaction. Or just come to the gate on any weekday between 9 and 2 — someone
              will show you round without an appointment.
            </p>
            <p className="mt-5 text-sm text-white/55">
              Everest Public School, Sector 21D, Faridabad 121001
              <br />
              0129-4XXXXXX · admissions@everestschool.example
            </p>
          </div>

          <div className="rounded-2xl bg-white p-6 text-slate-900 sm:p-7">
            <DemoForm
              submitLabel="Submit application"
              successTitle="Application received"
              successBody="In a live build this would reach the admissions office and send the parent an SMS with their application number."
              buttonClass="w-full rounded-lg bg-everest-500 px-5 py-3.5 text-sm font-semibold text-white transition hover:bg-everest-600"
              accentClass="text-everest-500"
            >
              <div className="grid grid-cols-2 gap-3">
                <label className={labelClass}>
                  Child&rsquo;s name
                  <input className={`${fieldClass} mt-1.5`} placeholder="Aarav Tomar" autoComplete="off" />
                </label>
                <label className={labelClass}>
                  Class applying for
                  <select className={`${fieldClass} mt-1.5`} defaultValue="Class I">
                    {['Nursery', 'LKG', 'UKG', 'Class I', 'Class II', 'Class III', 'Class IV', 'Class V', 'Class VI', 'Class IX', 'Class XI'].map((o) => (
                      <option key={o}>{o}</option>
                    ))}
                  </select>
                </label>
              </div>
              <label className={labelClass}>
                Parent&rsquo;s name
                <input className={`${fieldClass} mt-1.5`} placeholder="Meenakshi Tomar" autoComplete="off" />
              </label>
              <div className="grid grid-cols-2 gap-3">
                <label className={labelClass}>
                  Mobile
                  <input className={`${fieldClass} mt-1.5`} placeholder="98xxx xxxxx" inputMode="tel" autoComplete="off" />
                </label>
                <label className={labelClass}>
                  Sector / area
                  <input className={`${fieldClass} mt-1.5`} placeholder="Sector 21C" autoComplete="off" />
                </label>
              </div>
            </DemoForm>
          </div>
        </div>
      </section>

      <div className="sticky bottom-0 z-40 grid grid-cols-2 gap-2 border-t border-everest-200 bg-everest-50/95 p-3 backdrop-blur lg:hidden">
        <a href="tel:+917678101800" className="rounded-lg bg-everest-900 px-4 py-3.5 text-center text-sm font-semibold text-white">
          Call office
        </a>
        <a href={WHATSAPP} className="rounded-lg bg-everest-500 px-4 py-3.5 text-center text-sm font-semibold text-white">
          WhatsApp
        </a>
      </div>

      <DemoFooter business="Everest Public School" />
    </div>
  )
}
