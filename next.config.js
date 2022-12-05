const withSvgr = require("next-svgr");

/** @type {import('next').NextConfig} */

const nextConfig = withSvgr({
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    styledComponents: true
  }
})

module.exports = nextConfig
