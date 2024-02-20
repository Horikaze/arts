/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { hostname: "picsum.photos" },
      {
        hostname: "utfs.io",
      },
    ],
  },
};

export default nextConfig;
