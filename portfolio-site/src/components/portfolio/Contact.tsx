import { site } from '@/lib/site'

const STEPS = [
  'Tell us what the business needs to happen more often — bookings, enquiries, fewer phone calls to the front desk.',
  'We come back with what we would build, what it costs and how long it takes. No deck, no discovery fee.',
  'If it is a fit, we build it. If it is not, we will say so and point you somewhere better.',
]

export function Contact() {
  return (
    <section id="contact">
      <div className="mx-auto max-w-content px-5 py-16 sm:px-8 sm:py-24">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
          <div>
            <h2 className="font-serif text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Start with a reply, not a sales call
            </h2>
            <p className="mt-5 text-base leading-relaxed text-slate-300">
              We are a small studio and we do the work ourselves, so the person who answers is the
              person who would build it. The fastest way in is one email describing the thing that is
              currently annoying you.
            </p>

            <ol className="mt-8 space-y-4">
              {STEPS.map((step, i) => (
                <li key={step.slice(0, 24)} className="flex gap-3.5">
                  <span
                    aria-hidden="true"
                    className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-ember-500/15 font-mono text-[11px] font-bold text-ember-400 ring-1 ring-ember-500/25"
                  >
                    {i + 1}
                  </span>
                  <span className="text-sm leading-relaxed text-slate-400">{step}</span>
                </li>
              ))}
            </ol>
          </div>

          <div className="rounded-2xl border border-white/10 bg-ink-800/60 p-6 sm:p-8">
            <p className="text-[11px] font-semibold uppercase tracking-wider text-slate-500">Email</p>
            <a
              href={`mailto:${site.email}`}
              className="mt-2 block break-all font-serif text-xl font-semibold text-white underline decoration-ember-500/40 decoration-2 underline-offset-4 transition hover:decoration-ember-400 sm:text-2xl"
            >
              {site.email}
            </a>

            {site.calendlyUrl ? (
              <a
                href={site.calendlyUrl}
                className="mt-6 inline-flex w-full items-center justify-center rounded-lg border border-white/15 px-5 py-3 text-sm font-semibold text-white transition hover:border-white/30 hover:bg-white/5"
              >
                Or pick a time directly
              </a>
            ) : null}

            <hr className="my-7 border-white/10" />

            <p className="text-sm leading-relaxed text-slate-400">
              Worth saying plainly: this studio is new. The product in the case study above is our own,
              and the three builds above are demonstrations rather than delivered client sites. We would
              rather tell you that up front than have you find out later.
            </p>
          </div>
        </div>
      </div>

      <footer className="border-t border-white/10">
        <div className="mx-auto flex max-w-content flex-col gap-2 px-5 py-8 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <p>
            {site.name} · {site.domain}
          </p>
          <p>Built with Next.js and Tailwind. Statically exported — no server, no tracking scripts.</p>
        </div>
      </footer>
    </section>
  )
}
