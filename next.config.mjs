import createNextIntlPlugin from 'next-intl/plugin'
/** @type {import('next').NextConfig} */

const withNextIntl = createNextIntlPlugin()

const nextConfig = {
  trailingSlash: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'tailwindui.com'
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com'
      },
      {
        protocol: 'https',
        hostname: 'i.ibb.co'
      },
      {
        protocol: 'https',
        hostname: 'tuk-cdn.s3.amazonaws.com'
      }
    ]
  }
}

export default withNextIntl(nextConfig)
