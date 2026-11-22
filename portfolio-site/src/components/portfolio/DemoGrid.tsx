import { demos } from '@/lib/site'

export function DemoGrid() {
  return (
    <section id="demos" className="border-b border-white/10">
      <div className="mx-auto max-w-content px-5 py-16 sm:px-8 sm:py-24">
        <h2 className="font-serif text-3xl font-semibold tracking-tight text-white sm:text-4xl">
          Three demo builds
        </h2>
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-slate-300">
          These are demonstration sites we built to show how we work, for businesses that do not exist.
          Each one is labelled as a demo on the page itself, and each solves a different primary job —
          they are not one layout in three colours. Open them on a phone; that is where these pages are
          actually read.
        </p>

        <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {demos.map((demo) => (
            <li key={demo.slug}>
              <a
                href={`/demos/${demo.slug}/`}
                className="group flex h-full flex-col rounded-2xl border border-white/10 bg-ink-800/60 p-6 transition hover:border-ember-500/40 hover:bg-ink-800"
              >
                <div className="flex items-center gap-2.5">
                  <span aria-hidden="true" className={`h-2.5 w-2.5 rounded-full ${demo.swatch}`} />
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-500">
                    {demo.sector}
                  </span>
                </div>

                <h3 className="mt-4 font-serif text-xl font-semibold leading-snug text-white">
                  {demo.business}
                </h3>

                <p className="mt-1.5 text-[13px] font-medium text-ember-300/90">{demo.job}</p>

                <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-400">{demo.blurb}</p>

                <span className="mt-5 flex items-center gap-2 text-sm font-semibold text-white">
                  <span className="rounded border border-white/15 px-1.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-slate-400">
                    Demo
                  </span>
                  <span className="transition group-hover:text-ember-400">
                    Open the build
                    <span aria-hidden="true" className="ml-1 inline-block transition group-hover:translate-x-0.5">
                      →
                    </span>
                  </span>
                </span>
              </a>
            </li>
          ))}
        </ul>

        <p className="mt-8 max-w-2xl text-xs leading-relaxed text-slate-500">
          Business names, staff names, prices, review quotes and photography in the demos are all
          invented placeholders. Nothing in them represents a real practice, a real client or a real
          customer.
        </p>
      </div>
    </section>
  )
}
