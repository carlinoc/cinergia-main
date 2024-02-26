/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: 'export',
  images: {
    domains: [
      'image.tmdb.org',
      'cdn.cinergia.lat',
      'lh3.googleusercontent.com',
    ],
  },
};

module.exports = nextConfig;
