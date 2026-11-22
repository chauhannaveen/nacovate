import type { Metadata } from 'next'
import { DemoFooter } from '@/components/demo/DemoFooter'
import { DemoForm, fieldClass, labelClass } from '@/components/demo/DemoForm'
import { ImageGallery } from '@/components/demo/ImageGallery'
import { ReviewStrip, type Review } from '@/components/demo/ReviewStrip'
import { photosFor } from '@/lib/photos'
import { ScheduleTabs } from './ScheduleTabs'

const img = photosFor('ironside')

const REVIEWS: Review[] = [
  {
    quote:
      'I had been lifting badly for six years. Three weeks of Foundations and my back stopped hurting. Nobody at my old gym ever once looked at what I was doing.',
    name: 'Jordan M.',
    context: 'Member since 2024',
  },
  {
    quote:
      'Twelve to a class is the whole thing. You cannot hide at the back, and the coach actually knows what you lifted last Tuesday.',
    name: 'Alisha K.',
    context: 'Full Access member',
  },
  {
    quote:
      'I came in terrified of the barbell area. The free week meant I could find that out without committing to anything. Two years later I compete.',
    name: 'Tom B.',
    context: 'Member since 2023',
  },
]

export const metadata: Metadata = {
  title: 'Ironside Strength Co. — demo build',
  description: 'A demonstration website for a fictional strength and conditioning gym, built around the class schedule and membership signup.',
}

const TIERS = [
  {
    name: 'Off-Peak',
    price: '$79',
    sub: 'per month',
    line: 'Weekdays before 4pm and all weekend.',
    perks: ['Unlimited off-peak classes', 'Open gym access', 'Movement assessment on joining'],
    featured: false,
  },
  {
    name: 'Full Access',
    price: '$119',
    sub: 'per month',
    line: 'Every class, every hour we are open.',
    perks: ['Unlimited classes at any time', 'Open gym access', 'Movement assessment on joining', 'Programme reviewed every 8 weeks', 'Bring a guest once a month'],
    featured: true,
  },
  {
    name: 'Coached 1:1',
    price: '$240',
    sub: 'per month',
    line: 'Two private sessions a week, plus everything above.',
    perks: ['Everything in Full Access', '2 private sessions weekly', 'Written programme between sessions', 'Direct line to your coach'],
    featured: false,
  },
]

const FACTS = [
  ['12', 'people maximum per class'],
  ['4', 'coaches, all full-time'],
  ['No', 'joining fee, no contract'],
]

export default function IronsideDemo() {
  return (
    <div className="bg-iron-900 text-white">

      <header className="sticky top-0 z-40 border-b border-white/10 bg-iron-900/92 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3.5 sm:px-6">
          <a href="#" className="flex items-center gap-2 text-sm font-black uppercase tracking-[0.12em]">
            <span aria-hidden="true" className="h-4 w-1.5 rounded-sm bg-iron-500" />
            Ironside
          </a>
          <nav aria-label="Main" className="hidden items-center gap-6 text-sm font-semibold text-white/55 md:flex">
            <a href="#schedule" className="hover:text-white">Schedule</a>
            <a href="#how" className="hover:text-white">How it works</a>
            <a href="#pricing" className="hover:text-white">Membership</a>
            <a href="#trial" className="hover:text-white">Free trial</a>
          </nav>
          <a href="#trial" className="rounded-lg bg-iron-500 px-3.5 py-2 text-[13px] font-bold uppercase tracking-wide text-white hover:bg-iron-600 sm:px-4">
            Free week
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden border-b border-white/10">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-[radial-gradient(50rem_28rem_at_80%_-5%,rgba(228,87,46,0.25),transparent_65%)]" />
        <div className="relative mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 sm:py-20 lg:grid-cols-[1.1fr_1fr] lg:items-center lg:gap-14">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-iron-500">
              Strength &amp; conditioning · East Austin
            </p>
            <h1 className="mt-5 text-4xl font-black uppercase leading-[0.95] tracking-tight sm:text-5xl lg:text-6xl">
              Twelve people.
              <br />
              <span className="text-iron-500">One coach.</span>
              <br />
              Actual coaching.
            </h1>
            <p className="mt-6 max-w-lg text-base leading-relaxed text-white/60 sm:text-lg">
              Not a warehouse with a playlist. Classes cap at twelve so somebody watches you lift and
              fixes it, and your programme gets looked at every eight weeks by a human who remembers
              your name.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href="#trial" className="rounded-lg bg-iron-500 px-6 py-4 text-center text-sm font-bold uppercase tracking-wide transition hover:bg-iron-600">
                Claim a free week
              </a>
              <a href="#schedule" className="rounded-lg border border-white/20 px-6 py-4 text-center text-sm font-bold uppercase tracking-wide transition hover:border-white/40 hover:bg-white/5">
                See the timetable
              </a>
            </div>

            <dl className="mt-10 grid grid-cols-3 gap-4 border-t border-white/10 pt-6">
              {FACTS.map(([v, l]) => (
                <div key={l}>
                  <dt className="text-[11px] font-medium uppercase tracking-wider text-white/40">{l}</dt>
                  <dd className="mt-0.5 text-2xl font-black text-white">{v}</dd>
                </div>
              ))}
            </dl>
          </div>

          <ImageGallery
            shots={[
              { label: 'The main floor', src: img('gym-1'), motif: 'gym', variant: 0 },
              { label: 'Platforms & racks', src: img('gym-2'), motif: 'gym', variant: 2 },
              { label: 'Conditioning rig', src: img('gym-3'), motif: 'gym', variant: 4 },
              { label: 'Coaching a lift', src: img('gym-4'), motif: 'room', variant: 5 },
            ]}
            frameClass="aspect-[4/5] sm:aspect-[4/3]"
            accentClass="ring-iron-500"
          />
        </div>
      </section>

      {/* Schedule */}
      <section id="schedule" className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl font-black uppercase tracking-tight sm:text-3xl">This week</h2>
            <p className="mt-2 text-sm text-white/50">
              Book from the app, cancel up to two hours before, no charge.
            </p>
          </div>
        </div>
        <div className="mt-8">
          <ScheduleTabs />
        </div>
      </section>

      {/* How it works */}
      <section id="how" className="border-y border-white/10 bg-iron-850">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
          <h2 className="text-2xl font-black uppercase tracking-tight sm:text-3xl">
            Your first three weeks
          </h2>
          <ol className="mt-10 grid gap-8 sm:grid-cols-3">
            {[
              { n: '01', t: 'Movement assessment', b: 'Forty minutes, one-to-one, free. We find out what you can do now and what hurts.' },
              { n: '02', t: 'Foundations classes', b: 'Three sessions learning the six lifts everything else is built on. Beginners only, nobody watching.' },
              { n: '03', t: 'Into the main schedule', b: 'You join normal classes knowing what you are doing, with a programme written for you.' },
            ].map((step) => (
              <li key={step.n} className="border-t-2 border-iron-500 pt-5">
                <span aria-hidden="true" className="font-mono text-sm font-bold text-iron-500">{step.n}</span>
                <h3 className="mt-2 text-lg font-bold">{step.t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/55">{step.b}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Reviews */}
      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
        <h2 className="text-2xl font-black uppercase tracking-tight sm:text-3xl">Members</h2>
        <p className="mt-2 text-sm text-white/50">4.9 average across 180 reviews</p>
        <div className="mt-8">
          <ReviewStrip
            reviews={REVIEWS}
            cardClass="bg-white/[0.04] ring-1 ring-white/10"
            starClass="text-iron-500"
            nameClass="text-white"
            quoteClass="text-white/70"
            metaClass="text-white/40"
          />
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
        <h2 className="text-2xl font-black uppercase tracking-tight sm:text-3xl">Membership</h2>
        <p className="mt-2 text-sm text-white/50">No joining fee. Cancel any month with two weeks’ notice.</p>

        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {TIERS.map((tier) => (
            <div
              key={tier.name}
              className={`relative flex flex-col rounded-2xl p-6 ${
                tier.featured
                  ? 'bg-white text-iron-900 ring-2 ring-iron-500'
                  : 'bg-white/[0.04] text-white ring-1 ring-white/10'
              }`}
            >
              {tier.featured ? (
                <span className="absolute -top-3 left-6 rounded bg-iron-500 px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider text-white">
                  Most members
                </span>
              ) : null}

              <h3 className="text-sm font-bold uppercase tracking-wider">{tier.name}</h3>
              <p className="mt-3 flex items-baseline gap-1.5">
                <span className="text-4xl font-black">{tier.price}</span>
                <span className={tier.featured ? 'text-sm text-iron-900/50' : 'text-sm text-white/40'}>
                  {tier.sub}
                </span>
              </p>
              <p className={`mt-2 text-sm ${tier.featured ? 'text-iron-900/65' : 'text-white/55'}`}>
                {tier.line}
              </p>

              <ul className="mt-5 flex-1 space-y-2.5 text-sm">
                {tier.perks.map((perk) => (
                  <li key={perk} className="flex gap-2.5">
                    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-iron-500">
                      <path d="m5 13 4 4L19 7" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span className={tier.featured ? 'text-iron-900/80' : 'text-white/65'}>{perk}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#trial"
                className={`mt-6 rounded-lg px-5 py-3.5 text-center text-sm font-bold uppercase tracking-wide transition ${
                  tier.featured
                    ? 'bg-iron-500 text-white hover:bg-iron-600'
                    : 'border border-white/20 text-white hover:border-white/40 hover:bg-white/5'
                }`}
              >
                Start with a free week
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Trial — light section on purpose, so the one form on the page is the brightest thing on it. */}
      <section id="trial" className="bg-iron-50 text-slate-900">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 sm:py-20 lg:grid-cols-2 lg:items-center lg:gap-14">
          <div>
            <h2 className="text-2xl font-black uppercase tracking-tight sm:text-3xl">
              Train free for a week
            </h2>
            <p className="mt-4 text-base leading-relaxed text-slate-600">
              Every class, open gym, and the movement assessment. No card, no contract, and nobody will
              ring you five times — we will text you once with times that have space.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-slate-500">
              Three fields, because a signup form that asks for your postcode and your goals before
              you have been through the door is how gyms lose people at the first step.
            </p>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow-lg ring-1 ring-slate-200 sm:p-8">
            <DemoForm
              submitLabel="Claim my free week"
              successTitle="That is booked in"
              successBody="In a live build this would text back the next three classes with space in them and add the lead to the gym's CRM."
              buttonClass="w-full rounded-lg bg-iron-500 px-5 py-3.5 text-sm font-bold uppercase tracking-wide text-white transition hover:bg-iron-600"
              accentClass="text-iron-600"
            >
              <label className={labelClass}>
                First name
                <input className={`${fieldClass} mt-1.5`} placeholder="Sam" autoComplete="off" />
              </label>
              <label className={labelClass}>
                Mobile number
                <input className={`${fieldClass} mt-1.5`} placeholder="(512) 555-0199" inputMode="tel" autoComplete="off" />
              </label>
              <label className={labelClass}>
                Which suits you best?
                <select className={`${fieldClass} mt-1.5`} defaultValue="Early morning">
                  {['Early morning', 'Lunchtime', 'After work', 'Weekends'].map((t) => (
                    <option key={t}>{t}</option>
                  ))}
                </select>
              </label>
            </DemoForm>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 bg-iron-900">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 sm:grid-cols-3 sm:px-6">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.12em]">Ironside Strength Co.</p>
            <p className="mt-2 text-sm text-white/45">
              Unit 6, Fenwick Yard
              <br />
              Austin, TX 78702
            </p>
          </div>
          <div className="text-sm text-white/45">
            <p className="font-semibold text-white">Opening hours</p>
            <p className="mt-2">Mon – Fri, 5:30 am – 9:00 pm</p>
            <p>Sat – Sun, 7:30 am – 1:00 pm</p>
          </div>
          <div className="text-sm text-white/45">
            <p className="font-semibold text-white">Contact</p>
            <p className="mt-2">(512) 555-0166</p>
            <p>train@ironsidestrength.example</p>
          </div>
        </div>
      </footer>

      {/* Sticky mobile CTA */}
      <div className="sticky bottom-0 z-40 border-t border-white/10 bg-iron-900/95 p-3 backdrop-blur md:hidden">
        <a href="#trial" className="block rounded-lg bg-iron-500 px-5 py-3.5 text-center text-sm font-bold uppercase tracking-wide text-white">
          Claim a free week
        </a>
      </div>

      <DemoFooter business="Ironside Strength Co." dark />
    </div>
  )
}
