/**
 * Bottom-of-page disclosure for demo builds.
 *
 * Replaces the old top banner, which interrupted the design before a visitor had seen
 * any of it. Kept deliberately quiet but unambiguous, and always the last thing on the
 * page, so a demo can never be mistaken for a real business's live site.
 */
export function DemoFooter({ business, dark = false }: { business: string; dark?: boolean }) {
  return (
    <div className={dark ? 'bg-black/40' : 'bg-slate-900'}>
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-1.5 px-4 py-5 text-center sm:flex-row sm:justify-center sm:gap-3 sm:px-6">
        <span className="rounded bg-white/10 px-2 py-0.5 text-[10px] font-bold uppercase tracking-[0.14em] text-white/80">
          Demo website
        </span>
        <p className="text-xs leading-relaxed text-white/55">
          {business} is not a real business. Built by{' '}
          <a href="/#work" className="font-medium text-white/80 underline underline-offset-2 hover:text-white">
            Nacovate
          </a>{' '}
          to show design and functionality.
        </p>
      </div>
    </div>
  )
}
