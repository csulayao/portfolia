/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    //appDir: true,
    serverComponentsExternalPackages: ["mongoose"],
    missingSuspenseWithCSRBailout: false,
  },
  images: {
    //domains: ["lh3.googleusercontent.com"], //Removing this as Next 14 has deprected remotepattern
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "placehold.co",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "i.imgur.com",
        pathname: "**",
      },
    ],
  },
  webpack(config) {
    config.experiments = {
      ...config.experiments,
      topLevelAwait: true,
    };
    return config;
  },
};

//Updating this to a common JS module "export"
//module.exports = nextConfig;
export default nextConfig;
