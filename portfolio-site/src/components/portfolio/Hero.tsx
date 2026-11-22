const CAPABILITIES = [
  'Websites for small practices',
  'Internal tools and dashboards',
  'Workflow automation',
  'AI features that stay accurate',
]

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden border-b border-white/10">
      {/* Soft radial wash — keeps the fold from reading as a flat black box. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(60rem_32rem_at_15%_-10%,rgba(232,130,30,0.16),transparent_60%)]"
      />
      <div className="relative mx-auto max-w-content px-5 py-16 sm:px-8 sm:py-24">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-ember-400">
          Software studio · available for new work
        </p>

        <h1 className="mt-5 max-w-3xl font-serif text-[2.1rem] font-semibold leading-[1.12] tracking-tight text-white sm:text-5xl lg:text-[3.4rem]">
          We build the website, the tool behind it, and the automation that saves the front desk an hour a day.
        </h1>

        <p className="mt-6 max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg">
          Small clinics, agencies and studios get quoted for a brochure site and handed a template. We
          work the other way round: start from the job the business actually needs done — getting booked,
          getting enquiries, getting people through intake — and build only what serves it. Below is a
          full product we designed and shipped ourselves, and three demo builds you can click through.
        </p>

        <ul className="mt-8 flex flex-wrap gap-2">
          {CAPABILITIES.map((item) => (
            <li
              key={item}
              className="rounded-full border border-white/10 bg-white/[0.04] px-3.5 py-1.5 text-[13px] font-medium text-slate-300"
            >
              {item}
            </li>
          ))}
        </ul>

        <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
          <a
            href="#demos"
            className="inline-flex items-center justify-center rounded-lg bg-ember-400 px-5 py-3 text-sm font-semibold text-ember-ink transition hover:bg-ember-300"
          >
            See the demo builds
          </a>
          <a
            href="#leadforge"
            className="inline-flex items-center justify-center rounded-lg border border-white/15 px-5 py-3 text-sm font-semibold text-white transition hover:border-white/30 hover:bg-white/5"
          >
            Read the case study
          </a>
        </div>
      </div>
    </section>
  )
}
