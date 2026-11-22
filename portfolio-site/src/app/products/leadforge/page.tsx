import type { Metadata } from 'next'
import { CaseStudy } from '@/components/site/CaseStudy'
import { NacovateFooter, NacovateHeader } from '@/components/site/NacovateChrome'

export const metadata: Metadata = {
  title: 'LeadForge — a sales system we built end to end | Nacovate',
  description:
    'A case study on LeadForge: the full-stack lead generation and outreach tool we designed, built and run ourselves. Thirteen server routes, four external data sources, and a human approval step that cannot be bypassed.',
}

export default function LeadForgeCaseStudyPage() {
  return (
    <div className="min-h-screen bg-ink-950">
      <NacovateHeader crumb="LeadForge" />
      <main>
        <CaseStudy />
      </main>
      <NacovateFooter />
    </div>
  )
}
