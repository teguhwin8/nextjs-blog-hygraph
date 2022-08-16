const withPWA = require("next-pwa");

module.exports = withPWA({
  reactStrictMode: true,
  images: {
    domains: ["media.graphassets.com"],
  },
  pwa: {
    dest: "public",
    register: true,
    scope: '/',
    skipWaiting: true,
    disable: process.env.NODE_ENV === 'development'
  },
});

