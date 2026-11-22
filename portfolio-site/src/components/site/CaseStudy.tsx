import { alsoBuilt, details, facts, stack } from '@/lib/case-study'

const PIPELINE = [
  { step: 'Find', text: 'Search Google Places by business type, city and radius. Every result is scored on rating, review volume and whether it has a website.' },
  { step: 'Qualify', text: 'Import into a pipeline with six stages. Duplicate detection keys on name plus the real city, not the city that was searched.' },
  { step: 'Enrich', text: 'Find a contact address — free site scrape first, metered API second. Analyse the site for things worth mentioning.' },
  { step: 'Pitch', text: 'Draft a personalised email from real findings. A human reads it and confirms before anything is sent.' },
  { step: 'Follow up', text: 'Follow-up dates set automatically on contact. Daily digest by email or WhatsApp, weekly pipeline summary with a weighted forecast.' },
]

export function CaseStudy() {
  return (
    <section id="leadforge" className="border-b border-white/10 bg-ink-900">
      <div className="mx-auto max-w-content px-5 py-16 sm:px-8 sm:py-24">
        <div className="flex flex-wrap items-center gap-3">
          <span className="rounded-full bg-ember-500/15 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-ember-400 ring-1 ring-ember-500/25">
            Case study
          </span>
          <span className="rounded-full border border-white/15 px-3 py-1 text-xs font-medium text-stone-400">
            Our own product · not client work
          </span>
        </div>

        <h2 className="mt-6 max-w-3xl font-serif text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl">
          LeadForge — a sales system we designed, built and run ourselves
        </h2>

        <p className="mt-5 max-w-3xl text-base leading-relaxed text-stone-300 sm:text-lg">
          We built this to solve our own problem, and we use it every week. Finding small US practices
          worth contacting, finding a real person to write to, and writing something specific enough to
          earn a reply are three separate jobs, and done by hand in a spreadsheet the whole thing falls
          apart somewhere around the fiftieth lead. LeadForge is the tool that does it properly: a
          full-stack application with thirteen server routes, four external data sources, two LLM
          providers and a human approval step that is impossible to bypass.
        </p>

        <dl className="mt-10 grid grid-cols-2 gap-px overflow-hidden rounded-xl bg-white/10 sm:grid-cols-4">
          {facts.map((fact) => (
            <div key={fact.label} className="bg-ink-800 px-4 py-5">
              <dt className="text-[11px] font-medium uppercase tracking-wider text-stone-500">{fact.label}</dt>
              <dd className="mt-1 font-serif text-2xl font-semibold text-white sm:text-3xl">{fact.value}</dd>
            </div>
          ))}
        </dl>

        {/* What it does */}
        <h3 className="mt-16 text-sm font-semibold uppercase tracking-[0.16em] text-ember-400">
          What it does
        </h3>
        <ol className="mt-6 space-y-px overflow-hidden rounded-xl bg-white/10">
          {PIPELINE.map((row, i) => (
            <li key={row.step} className="flex flex-col gap-1 bg-ink-800 px-5 py-4 sm:flex-row sm:gap-6 sm:px-6">
              <span className="flex shrink-0 items-baseline gap-2 sm:w-36">
                <span className="font-mono text-xs text-stone-600">{String(i + 1).padStart(2, '0')}</span>
                <span className="text-sm font-semibold text-white">{row.step}</span>
              </span>
              <span className="text-sm leading-relaxed text-stone-400">{row.text}</span>
            </li>
          ))}
        </ol>

        {/* Stack */}
        <h3 className="mt-16 text-sm font-semibold uppercase tracking-[0.16em] text-ember-400">
          How it is built
        </h3>
        <dl className="mt-6 grid gap-x-10 gap-y-5 sm:grid-cols-2">
          {stack.map((row) => (
            <div key={row.group} className="border-l-2 border-white/10 pl-4">
              <dt className="text-sm font-semibold text-white">{row.group}</dt>
              <dd className="mt-1 text-sm leading-relaxed text-stone-400">{row.items}</dd>
            </div>
          ))}
        </dl>

        {/* Engineering details */}
        <div className="mt-16 border-t border-white/10 pt-12">
          <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-ember-400">
            Three decisions worth explaining
          </h3>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-stone-400">
            Feature lists tell you nothing — anyone can list features. These are the three places where
            the obvious implementation was the wrong one, and what we did instead.
          </p>

          <div className="mt-10 space-y-12">
            {details.map((detail) => (
              <article key={detail.n} className="grid gap-5 lg:grid-cols-[6rem_1fr] lg:gap-8">
                <div aria-hidden="true" className="font-mono text-4xl font-semibold text-white/10 lg:text-5xl">
                  {detail.n}
                </div>
                <div>
                  <h4 className="font-serif text-xl font-semibold leading-snug text-white sm:text-2xl">
                    {detail.title}
                  </h4>
                  <p className="mt-2 text-sm font-medium text-ember-300/90">{detail.standfirst}</p>
                  <div className="mt-4 space-y-4">
                    {detail.body.map((para) => (
                      <p key={para.slice(0, 40)} className="text-[15px] leading-relaxed text-stone-300">
                        {para}
                      </p>
                    ))}
                  </div>
                  <p className="mt-5 border-l-2 border-ember-500/40 bg-white/[0.03] px-4 py-3 text-sm italic leading-relaxed text-stone-300">
                    {detail.takeaway}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Also built */}
        <div className="mt-16 border-t border-white/10 pt-12">
          <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-ember-400">
            Also in there
          </h3>
          <div className="mt-6 grid gap-5 sm:grid-cols-2">
            {alsoBuilt.map((item) => (
              <div key={item.title} className="rounded-xl border border-white/10 bg-ink-800/60 p-5">
                <h4 className="text-sm font-semibold text-white">{item.title}</h4>
                <p className="mt-2 text-sm leading-relaxed text-stone-400">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
