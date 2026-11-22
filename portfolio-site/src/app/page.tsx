import { CaseStudy } from '@/components/portfolio/CaseStudy'
import { Contact } from '@/components/portfolio/Contact'
import { DemoGrid } from '@/components/portfolio/DemoGrid'
import { Header } from '@/components/portfolio/Header'
import { Hero } from '@/components/portfolio/Hero'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-ink-950">
      <Header />
      <main>
        <Hero />
        <CaseStudy />
        <DemoGrid />
        <Contact />
      </main>
    </div>
  )
}
