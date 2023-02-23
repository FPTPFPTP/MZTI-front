/** @type {import('next').NextConfig} */
const withPWA = require('next-pwa')({
    dest: 'public',
});

module.exports = withPWA({
    async rewrites() {
        return [
            {
                source: '/:path*',
                destination: 'http://ip-set-nlp-2cce1cff97b66aa1.elb.ap-northeast-2.amazonaws.com/:path*',
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
});
