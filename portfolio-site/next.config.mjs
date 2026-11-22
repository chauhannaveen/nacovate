/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static export — the whole site is plain HTML/CSS/JS, so Vercel serves it
  // from the free tier with no server runtime at all.
  output: 'export',
  images: { unoptimized: true },
  trailingSlash: true,
}

export default nextConfig
