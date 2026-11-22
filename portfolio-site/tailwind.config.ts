import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
        serif: ['var(--font-serif)', 'Georgia', 'serif'],
      },
      colors: {
        // Taken from nacovate.com's own dark theme, so pages served under that domain
        // read as the same site rather than a bolt-on. Keep these in sync with the
        // :root[data-theme=dark] block in the Nacovate index.html.
        ink: {
          950: '#14120E', // --bg
          900: '#1D1A14', // --surface
          800: '#26221A', // --surface-2
          700: '#2E2920', // --border
          600: '#3D362A', // --border-strong
        },
        ember: {
          300: '#E8A571', // --signal-ink (dark)
          400: '#D98A48', // --signal (dark)
          500: '#A65B23', // --signal (light) — brand copper
          ink: '#17150F', // --on-signal (dark)
        },
        // Demo palettes, one per build so they never read as the same template.
        clinic: { 50: '#eff7f9', 100: '#d8ecf1', 500: '#0f6e86', 600: '#0b5a6e', 900: '#06303c' },
        realty: { 50: '#faf7f2', 100: '#f2ebe0', 200: '#e5d9c7', 600: '#8a6a43', 700: '#6d5334', 900: '#2a241c' },
        iron: { 50: '#f4f5f7', 500: '#e4572e', 600: '#c7431f', 850: '#15171c', 900: '#0d0e12' },
        // India demos
        shanti: { 50: '#eff8f4', 100: '#d7ede3', 500: '#0e8a6b', 600: '#0a6e55', 700: '#085843', 900: '#042a20' },
        aravali: { 50: '#f5f6fa', 100: '#e8ebf4', 200: '#d3d9ea', 500: '#2f3f7a', 700: '#1d2850', 900: '#121932', gold: '#c9a227' },
        // Commercial leasing — cool graphite, deliberately corporate
        crest: { 50: '#f4f6f8', 100: '#e6eaef', 200: '#d0d8e1', 500: '#4a6076', 600: '#38485b', 800: '#1f2a36', 900: '#141c25', accent: '#d98b2b' },
        // School — classic maroon on cream
        everest: { 50: '#fcf7f5', 100: '#f6e9e5', 200: '#ebd3cc', 500: '#8c2f39', 600: '#73252d', 800: '#4a171d', 900: '#2e0e12', gold: '#c08a2e' },
        // Fabrication — steel grey with a safety-amber accent
        shakti: { 50: '#f5f6f6', 100: '#e4e7e8', 200: '#c9ced1', 500: '#5a646b', 700: '#333b41', 850: '#1d2328', 900: '#12171a', amber: '#f0a022' },
      },
      maxWidth: { content: '68rem' },
    },
  },
  plugins: [],
}

export default config
