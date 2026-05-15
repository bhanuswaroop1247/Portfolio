/** @type {import('next').NextConfig} */
const BASE_PATH = process.env.NODE_ENV === 'production' ? '/Portfolio' : ''

const nextConfig = {
  experimental: {
    appDir: true,
  },
  output: 'export',
  basePath: BASE_PATH,
  images: {
    unoptimized: true
  },
  env: {
    NEXT_PUBLIC_BASE_PATH: BASE_PATH
  },
  webpack: (config) => {
    config.resolve.alias.canvas = false
    return config
  }
}

module.exports = nextConfig
