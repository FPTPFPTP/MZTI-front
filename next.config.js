/** @type {import('next').NextConfig} */
module.exports = {
    async rewrites() {
        return [
            {
                source: '/:path*',
                destination: 'http://192.168.110.194:8080/:path*',
            },
        ];
    },
    compiler: {
        emotion: true,
    },
};
