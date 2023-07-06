/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: false,

  images: {
    domains: [
      "images.pexels.com",
      "res.cloudinary.com",
      "images.unsplash.com",
      "cdn.sanity.io",
      "ipfs.infura.io",
    ],
    //formats: ['image/avif', 'image/webp'],
  },
};

module.exports = nextConfig;
