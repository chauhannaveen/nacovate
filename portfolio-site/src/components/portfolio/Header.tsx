import { site } from '@/lib/site'

const NAV = [
  { href: '#leadforge', label: 'Case study' },
  { href: '#demos', label: 'Demo builds' },
  { href: '#contact', label: 'Contact' },
]

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-ink-950/85 backdrop-blur">
      <div className="mx-auto flex max-w-content items-center justify-between gap-4 px-5 py-3.5 sm:px-8">
        <a href="#top" className="flex items-center gap-2.5 text-sm font-semibold tracking-tight text-white">
          <span
            aria-hidden="true"
            className="grid h-7 w-7 place-items-center rounded-md bg-ember-500/15 text-[13px] font-bold text-ember-400 ring-1 ring-ember-500/30"
          >
            ◆
          </span>
          <span className="hidden sm:inline">{site.name}</span>
        </a>

        <nav aria-label="Sections" className="flex items-center gap-1 sm:gap-2">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-md px-2.5 py-1.5 text-[13px] font-medium text-slate-400 transition hover:bg-white/5 hover:text-white sm:px-3 sm:text-sm"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  )
}
