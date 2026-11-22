import type { Metadata } from 'next'
import './globals.css'

// Fallback only. Every page under app/ sets its own title and description, and this
// project has no root page — `/` on nacovate.com is the hand-written index.html in the
// repo above, not anything built here.
export const metadata: Metadata = {
  title: 'Nacovate',
  description: 'Websites, internal tools and AI-assisted automation for small businesses.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
