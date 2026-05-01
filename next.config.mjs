/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/luna',
  assetPrefix: '/luna/',
  trailingSlash: true,
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
}

export default nextConfig
