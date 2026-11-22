import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Websites, automation and AI builds for small practices',
  description:
    'We build websites, internal tools and AI-assisted automation for small US healthcare and real-estate practices. See a full product we built end to end, plus three dental site demos.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
