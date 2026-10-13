/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  experimental: {
    serverActions: {
      allowedOrigins: [
        "next-app-e453a5-976a5740.app.westus2.staging.builderapps.dev",
      ],
    },
  },
  async redirects() {
    return [
      {
        source: "/legacy",
        destination: "/",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
