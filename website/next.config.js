const withHashicorp = require('@hashicorp/platform-nextjs-plugin')
const redirects = require('./redirects.next')

// log out our primary environment variables for clarity in build logs
console.log(`HASHI_ENV: ${process.env.HASHI_ENV}`)
console.log(`NODE_ENV: ${process.env.NODE_ENV}`)
console.log(`VERCEL_ENV: ${process.env.VERCEL_ENV}`)
console.log(`MKTG_CONTENT_API: ${process.env.MKTG_CONTENT_API}`)
console.log(`ENABLE_VERSIONED_DOCS: ${process.env.ENABLE_VERSIONED_DOCS}`)

module.exports = withHashicorp({
  nextOptimizedImages: true,
})({
  svgo: { plugins: [{ removeViewBox: false }] },
  rewrites: () => [
    {
      source: '/api/:path*',
      destination: '/api-docs/:path*',
    },
  ],
  redirects: () => redirects,
  env: {
    HASHI_ENV: process.env.HASHI_ENV || 'development',
    SEGMENT_WRITE_KEY: 'OdSFDq9PfujQpmkZf03dFpcUlywme4sC',
    BUGSNAG_CLIENT_KEY: '07ff2d76ce27aded8833bf4804b73350',
    BUGSNAG_SERVER_KEY: 'fb2dc40bb48b17140628754eac6c1b11',
    ENABLE_VERSIONED_DOCS: process.env.ENABLE_VERSIONED_DOCS || false,
  },
})
