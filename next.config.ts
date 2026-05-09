import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  // FIX: Remove unoptimized:true — Next.js image optimization converts images
  // to WebP/AVIF and applies correct sizing, reducing the data iOS has to
  // decompress and render. Unoptimized images are a common source of
  // out-of-memory crashes on iPhones with large JPEGs (e.g. HomeBanner.jpg).
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [390, 414, 768, 1024, 1280, 1920],
  },
  async headers() {
    return [
      {
        // Cache static assets aggressively on iOS (Safari is a caching zealot)
        source: '/images/(.*)',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
        ],
      },
      {
        source: '/(.*)',
        headers: [
          // Prevents iOS from making a "cross-origin" guess and blocking resources
          { key: 'X-Content-Type-Options', value: 'nosniff' },
        ],
      },
    ]
  },
}

export default nextConfig
