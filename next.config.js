/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["firebasestorage.googleapis.com", "image-bucket-eindproject.s3.eu-west-3.amazonaws.com"],
  },
}

module.exports = nextConfig
