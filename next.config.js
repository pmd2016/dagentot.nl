/** @type {import('next').NextConfig} */
const nextConfig = {
  // Remove 'output: export' for Vercel deployment
  // Vercel uses its own optimized hosting
  images: {
    unoptimized: true // Keep this for static export compatibility
  },
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
        ],
      },
    ];
  },
}

module.exports = nextConfig