/** @type {import('next').NextConfig} */
module.exports = {
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    })
    return config
  },
  typescript: {
    tsconfigPath: process.env?.VERCEL_URL ? 'tsconfig.build.json' : 'tsconfig.json',
  },

  reactStrictMode: false,
}
