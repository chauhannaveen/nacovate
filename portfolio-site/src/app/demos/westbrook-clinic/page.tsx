import type { Metadata } from 'next'
import { DemoFooter } from '@/components/demo/DemoFooter'
import { DemoForm, fieldClass, labelClass } from '@/components/demo/DemoForm'
import { ReviewStrip, type Review } from '@/components/demo/ReviewStrip'
import { BookingWidget } from './BookingWidget'
import { InsuranceChecker } from './InsuranceChecker'

export const metadata: Metadata = {
  title: 'Westbrook Family Medicine — demo build',
  description: 'A demonstration website for a fictional family medicine clinic, built around online booking and new-patient intake.',
}

const SERVICES = [
  { title: 'Primary care', body: 'Annual physicals, chronic condition management, referrals when you need a specialist.', icon: 'M12 6v12M6 12h12' },
  { title: 'Same-day sick visits', body: 'Slots held back each morning for people who woke up feeling wrong.', icon: 'M12 8v4l3 2M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18Z' },
  { title: 'Paediatrics', body: 'Well-child checks, school and sports forms, immunisation schedules.', icon: 'M8 14s1.5 2 4 2 4-2 4-2M9 9h.01M15 9h.01M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18Z' },
  { title: 'Labs on site', body: 'Bloodwork drawn here, most results back inside 48 hours.', icon: 'M9 3h6m-5 0v7l-3.5 7A2 2 0 0 0 8.3 20h7.4a2 2 0 0 0 1.8-3L14 10V3' },
]

const REVIEWS: Review[] = [
  {
    quote:
      'I called at 8am with a sick kid and we were seen before lunch. The booking page meant I did not have to sit on hold while juggling a toddler.',
    name: 'Dana W.',
    context: 'Patient since 2023',
  },
  {
    quote:
      'Dr. Okafor actually explains things. I came in confused about my blood pressure numbers and left understanding exactly what we were doing about them.',
    name: 'Marcus T.',
    context: 'Annual physical',
  },
  {
    quote:
      'Filling in the new-patient forms at home instead of on a clipboard in the waiting room is such a small thing, and it made the whole first visit painless.',
    name: 'Priya R.',
    context: 'New patient',
  },
]

const HOURS = [
  ['Monday – Thursday', '8:00 am – 5:30 pm'],
  ['Friday', '8:00 am – 4:00 pm'],
  ['Saturday', '9:00 am – 1:00 pm'],
  ['Sunday', 'Closed'],
]

const INTAKE_STEPS = [
  { n: '1', title: 'Who you are', body: 'Name, date of birth, contact details, and who to call in an emergency.' },
  { n: '2', title: 'Your history', body: 'Current medications, allergies, conditions and past surgeries.' },
  { n: '3', title: 'Insurance', body: 'Plan, member ID and a photo of the card — uploaded, not re-typed at the desk.' },
  { n: '4', title: 'Consent', body: 'Privacy notice and treatment consent, signed on your phone before you arrive.' },
]

export default function WestbrookClinicDemo() {
  return (
    <div className="bg-white">

      {/* Header */}
      <header className="sticky top-0 z-40 border-b border-clinic-100 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
          <a href="#" className="flex items-center gap-2.5">
            <span aria-hidden="true" className="grid h-8 w-8 place-items-center rounded-lg bg-clinic-600 text-sm font-bold text-white">W</span>
            <span className="text-[15px] font-semibold leading-tight text-clinic-900">
              Westbrook<span className="hidden font-normal text-slate-500 sm:inline"> Family Medicine</span>
            </span>
          </a>
          <nav aria-label="Main" className="hidden items-center gap-6 text-sm font-medium text-slate-600 md:flex">
            <a href="#services" className="hover:text-clinic-600">Services</a>
            <a href="#insurance" className="hover:text-clinic-600">Insurance</a>
            <a href="#intake" className="hover:text-clinic-600">New patients</a>
            <a href="#visit" className="hover:text-clinic-600">Visit us</a>
          </nav>
          <a href="#book" className="rounded-lg bg-clinic-600 px-3.5 py-2 text-[13px] font-semibold text-white hover:bg-clinic-900 sm:px-4 sm:text-sm">
            Book now
          </a>
        </div>
      </header>

      {/* Hero + booking */}
      <section id="book" className="border-b border-clinic-100 bg-gradient-to-b from-clinic-50 to-white">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:px-6 sm:py-16 lg:grid-cols-[1.05fr_1fr] lg:items-start lg:gap-14">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1.5 text-xs font-semibold text-clinic-600 ring-1 ring-clinic-500/20">
              <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-green-500" />
              Accepting new patients
            </p>
            <h1 className="mt-5 text-3xl font-semibold leading-[1.15] tracking-tight text-clinic-900 sm:text-4xl lg:text-5xl">
              A family doctor you can actually get an appointment with.
            </h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-slate-600 sm:text-lg">
              Westbrook keeps same-day slots open every morning, runs its own lab, and lets you do the
              whole new-patient form on your phone before you arrive. Most visits start within ten
              minutes of the booked time.
            </p>
            <dl className="mt-8 grid grid-cols-3 gap-4 border-t border-clinic-100 pt-6">
              {[['11 min', 'average wait'], ['4.9★', 'from 212 reviews'], ['Same day', 'sick visits']].map(([v, l]) => (
                <div key={l}>
                  <dt className="text-[11px] font-medium uppercase tracking-wider text-slate-500">{l}</dt>
                  <dd className="mt-0.5 text-xl font-semibold text-clinic-900 sm:text-2xl">{v}</dd>
                </div>
              ))}
            </dl>
          </div>
          <BookingWidget />
        </div>
      </section>

      {/* Services */}
      <section id="services" className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
        <h2 className="text-2xl font-semibold tracking-tight text-clinic-900 sm:text-3xl">What we do here</h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((s) => (
            <div key={s.title} className="rounded-2xl border border-clinic-100 bg-white p-5 transition hover:border-clinic-500/30 hover:shadow-sm">
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-clinic-50 text-clinic-600">
                <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="h-5 w-5">
                  <path d={s.icon} stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
              <h3 className="mt-4 font-semibold text-clinic-900">{s.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-slate-600">{s.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Insurance */}
      <section id="insurance" className="border-y border-clinic-100 bg-clinic-50/60">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 py-14 sm:px-6 sm:py-20 lg:grid-cols-2 lg:items-center lg:gap-12">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight text-clinic-900 sm:text-3xl">
              Insurance, answered before you call
            </h2>
            <p className="mt-4 text-base leading-relaxed text-slate-600">
              Most practices bury this on a page of plan logos and leave you to guess. The front desk
              then spends half its day answering it on the phone. One dropdown removes both problems.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-slate-500">
              Self-pay rates are published too: $95 for a standard visit, $140 for a new patient,
              quoted before you book rather than after you have been seen.
            </p>
          </div>
          <InsuranceChecker />
        </div>
      </section>

      {/* Intake */}
      <section id="intake" className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
        <div className="grid gap-10 lg:grid-cols-[1fr_22rem] lg:gap-14">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight text-clinic-900 sm:text-3xl">
              New patient? Do the paperwork in four minutes, at home.
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-600">
              The clipboard in the waiting room is the worst part of a first visit, for the patient and
              for the staff who have to type it all in afterwards. Ours is four short steps, saved as
              you go, and it reaches the clinic before you do.
            </p>
            <ol className="mt-8 grid gap-4 sm:grid-cols-2">
              {INTAKE_STEPS.map((step) => (
                <li key={step.n} className="flex gap-3.5 rounded-xl border border-clinic-100 p-4">
                  <span aria-hidden="true" className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-clinic-600 text-xs font-bold text-white">
                    {step.n}
                  </span>
                  <span>
                    <span className="block font-semibold text-clinic-900">{step.title}</span>
                    <span className="mt-1 block text-sm leading-relaxed text-slate-600">{step.body}</span>
                  </span>
                </li>
              ))}
            </ol>
          </div>

          <div className="rounded-2xl border border-clinic-100 bg-clinic-50/70 p-5 sm:p-6">
            <h3 className="font-semibold text-clinic-900">Start your intake</h3>
            <p className="mb-5 mt-1.5 text-sm text-slate-600">
              We will text you a link to finish on your phone.
            </p>
            <DemoForm
              submitLabel="Send me the intake link"
              successTitle="Intake link on its way"
              successBody="In a live build this texts a secure link that saves as the patient fills it in, then lands in the practice management system."
              buttonClass="w-full rounded-lg bg-clinic-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-clinic-900"
              accentClass="text-clinic-900"
            >
              <label className={labelClass}>
                Full name
                <input className={`${fieldClass} mt-1.5`} placeholder="Dana Whitfield" autoComplete="off" />
              </label>
              <label className={labelClass}>
                Mobile number
                <input className={`${fieldClass} mt-1.5`} placeholder="(512) 555-0142" inputMode="tel" autoComplete="off" />
              </label>
              <label className={labelClass}>
                Date of birth
                <input className={`${fieldClass} mt-1.5`} placeholder="MM / DD / YYYY" autoComplete="off" />
              </label>
            </DemoForm>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="border-y border-clinic-100 bg-clinic-50/60">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight text-clinic-900 sm:text-3xl">
                What our patients say
              </h2>
              <p className="mt-2 text-sm text-slate-600">4.9 average from 212 reviews</p>
            </div>
          </div>
          <div className="mt-8">
            <ReviewStrip reviews={REVIEWS} cardClass="bg-white ring-1 ring-clinic-100" nameClass="text-clinic-900" />
          </div>
        </div>
      </section>

      {/* Visit */}
      <section id="visit" className="border-t border-clinic-100 bg-clinic-900 text-white">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 sm:py-16 lg:grid-cols-3">
          <div>
            <h2 className="text-xl font-semibold">Visit us</h2>
            <p className="mt-3 text-sm leading-relaxed text-clinic-50/70">
              1180 Westbrook Avenue, Suite 210
              <br />
              Austin, TX 78704
            </p>
            <p className="mt-3 text-sm text-clinic-50/70">
              Parking in the rear lot, free for patients.
              <br />
              Ground-floor entrance, step-free.
            </p>
          </div>
          <div>
            <h2 className="text-xl font-semibold">Opening hours</h2>
            <dl className="mt-3 space-y-1.5 text-sm">
              {HOURS.map(([d, h]) => (
                <div key={d} className="flex justify-between gap-4 border-b border-white/10 pb-1.5">
                  <dt className="text-clinic-50/70">{d}</dt>
                  <dd className="font-medium">{h}</dd>
                </div>
              ))}
            </dl>
          </div>
          <div>
            <h2 className="text-xl font-semibold">Get in touch</h2>
            <p className="mt-3 text-sm text-clinic-50/70">
              Front desk: (512) 555-0180
              <br />
              hello@westbrookfamilymed.example
            </p>
            <a href="#book" className="mt-5 inline-flex rounded-lg bg-white px-5 py-3 text-sm font-semibold text-clinic-900 transition hover:bg-clinic-50">
              Book an appointment
            </a>
          </div>
        </div>
      </section>

      {/* Sticky mobile CTA — a phone visitor should never have to scroll back up to book. */}
      <div className="sticky bottom-0 z-40 border-t border-clinic-100 bg-white/95 p-3 backdrop-blur md:hidden">
        <a href="#book" className="block rounded-lg bg-clinic-600 px-5 py-3.5 text-center text-sm font-semibold text-white">
          Book an appointment
        </a>
      </div>

      <DemoFooter business="Westbrook Family Medicine" />
    </div>
  )
}
