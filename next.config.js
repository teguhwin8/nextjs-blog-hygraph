/** @type {import('next').NextConfig} */
const withPWA = require("next-pwa");

module.exports = withPWA({
	pwa: {
    dest: "public",
		disable: process.env.NODE_ENV === 'development',
    register: true,
		skipWaiting: true
  },
  reactStrictMode: true,
  images: {
    domains: ["media.graphassets.com"],
  },
});

