/**
 * Header and footer for pages served under nacovate.com but built by this project.
 *
 * They are deliberately plain: the real site's navigation lives in its own index.html,
 * and duplicating it here would mean two copies to keep in step. These just get the
 * visitor back to the site they came from.
 */

const HOME = '/'

export function NacovateHeader({ crumb }: { crumb: string }) {
  return (
    <header className="sticky top-0 z-50 border-b border-ink-700 bg-ink-950/90 backdrop-blur">
      <div className="mx-auto flex max-w-content items-center justify-between gap-4 px-5 py-3.5 sm:px-8">
        <a href={HOME} className="flex items-center gap-2.5 text-sm font-semibold tracking-tight text-white">
          <span
            aria-hidden="true"
            className="grid h-7 w-7 place-items-center rounded-md bg-ember-500/15 text-[13px] font-bold text-ember-400 ring-1 ring-ember-500/30"
          >
            ◆
          </span>
          Nacovate
        </a>

        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-[13px] text-stone-400">
          <span aria-hidden="true" className="hidden sm:inline">/</span>
          <span className="font-medium text-stone-300">{crumb}</span>
        </nav>

        <a
          href={`${HOME}#contact`}
          className="rounded-lg bg-ember-400 px-3.5 py-2 text-[13px] font-semibold text-ember-ink transition hover:bg-ember-300 sm:px-4"
        >
          Get in touch
        </a>
      </div>
    </header>
  )
}

export function NacovateFooter() {
  return (
    <footer className="border-t border-ink-700">
      <div className="mx-auto flex max-w-content flex-col gap-3 px-5 py-8 text-xs text-stone-500 sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <p>
          Nacovate · <a href={HOME} className="underline underline-offset-2 hover:text-stone-300">nacovate.com</a>
        </p>
        <p>team@nacovate.com · +91 96503 13207</p>
      </div>
    </footer>
  )
}
