/** @type {import('next').NextConfig} */
module.exports = {
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
};
