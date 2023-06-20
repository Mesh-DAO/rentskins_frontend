/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['avatars.steamstatic.com'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'steamcommunity-a.akamaihd.net',
      },
    ],
  },
}

module.exports = nextConfig
