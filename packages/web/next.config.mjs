/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ["sp-workbench"],
  rewrites: async () => {
    return [
        {
            source: "/((?!api).*)",
            destination: "/",
        },
    ];
  },
};

export default nextConfig;
