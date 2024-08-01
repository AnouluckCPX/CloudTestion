/** @type {import('next').NextConfig} */
const nextConfig = {
    // output: "standalone",
    reactStrictMode: true,
    images: {
        dangerouslyAllowSVG: true,
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'images.pexels.com',
                pathname: '**'
            }
        ]
    }
};

export default nextConfig;
