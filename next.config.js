/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "localhost",
      "firebasestorage.googleapis.com",
      "image-bucket-eindproject.s3.eu-west-3.amazonaws.com",
      "herrmans.eu"
    ],
  },
  env: {
    stripe_public_key: process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
  }
}

module.exports = nextConfig
