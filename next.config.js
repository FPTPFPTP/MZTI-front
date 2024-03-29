/** @type {import('next').NextConfig} */
const withPWA = require('next-pwa')({
    dest: 'public',
    disable: process.env.NODE_ENV === 'development',
    publicExcludes: ['!robots.txt', '!sitemap.xml.gz'],
});

module.exports = withPWA({
    output: 'standalone',
    reactStrictMode: false,
    async rewrites() {
        return [
            {
                source: '/mzti/:path*',
                destination: `${process.env.NEXT_PUBLIC_API_BASE_URL}/:path*`,
            },
        ];
    },
    compiler: {
        emotion: true,
    },
    webpack: (config) => {
        config.module.rules.push({
            test: /\.svg$/i,
            issuer: /\.[jt]sx?$/,
            use: ['@svgr/webpack'],
        });
        return config;
    },
    images: {
        domains: ['loremflickr.com', 'fptp-profile.s3.ap-northeast-2.amazonaws.com', 'www.mzti.kr', 'i1.ytimg.com', 'img.youtube.com'],
    },
});
