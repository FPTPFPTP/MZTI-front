if (!self.define) {
    let e,
        s = {};
    const c = (c, a) => (
        (c = new URL(c + '.js', a).href),
        s[c] ||
            new Promise((s) => {
                if ('document' in self) {
                    const e = document.createElement('script');
                    (e.src = c), (e.onload = s), document.head.appendChild(e);
                } else (e = c), importScripts(c), s();
            }).then(() => {
                let e = s[c];
                if (!e) throw new Error(`Module ${c} didn’t register its module`);
                return e;
            })
    );
    self.define = (a, n) => {
        const i = e || ('document' in self ? document.currentScript.src : '') || location.href;
        if (s[i]) return;
        let t = {};
        const r = (e) => c(e, i),
            o = { module: { uri: i }, exports: t, require: r };
        s[i] = Promise.all(a.map((e) => o[e] || r(e))).then((e) => (n(...e), t));
    };
}
define(['./workbox-588899ac'], function (e) {
    'use strict';
    importScripts(),
        self.skipWaiting(),
        e.clientsClaim(),
        e.precacheAndRoute(
            [
                { url: '/_next/static/2XmS7zitxNnZwitBEoGCv/_buildManifest.js', revision: '971649288b357a6270dcd99b0d29509a' },
                { url: '/_next/static/2XmS7zitxNnZwitBEoGCv/_ssgManifest.js', revision: 'b6652df95db52feb4daf4eca35380933' },
                { url: '/_next/static/chunks/1326-53fae7b8cc7ed166.js', revision: '53fae7b8cc7ed166' },
                { url: '/_next/static/chunks/1e280605.310cf0428eaef5ce.js', revision: '310cf0428eaef5ce' },
                { url: '/_next/static/chunks/2032-5d23ec6918fc8265.js', revision: '5d23ec6918fc8265' },
                { url: '/_next/static/chunks/2808-25546909a85b6c8c.js', revision: '25546909a85b6c8c' },
                { url: '/_next/static/chunks/2882-be62f236a4abbe9f.js', revision: 'be62f236a4abbe9f' },
                { url: '/_next/static/chunks/29107295-d19fb005c0c45fad.js', revision: 'd19fb005c0c45fad' },
                { url: '/_next/static/chunks/3828-00ff68a8bd4e7135.js', revision: '00ff68a8bd4e7135' },
                { url: '/_next/static/chunks/3832.63c13a673aadb8ed.js', revision: '63c13a673aadb8ed' },
                { url: '/_next/static/chunks/4779.b738a41343f982ec.js', revision: 'b738a41343f982ec' },
                { url: '/_next/static/chunks/5479.e7855fafff0bd9f6.js', revision: 'e7855fafff0bd9f6' },
                { url: '/_next/static/chunks/594-8002ed09158cc19a.js', revision: '8002ed09158cc19a' },
                { url: '/_next/static/chunks/6195-0825c78fce75b1f3.js', revision: '0825c78fce75b1f3' },
                { url: '/_next/static/chunks/6826-e833a5905bb77e60.js', revision: 'e833a5905bb77e60' },
                { url: '/_next/static/chunks/6936.6ce78b1088cf438b.js', revision: '6ce78b1088cf438b' },
                { url: '/_next/static/chunks/6961-a059a365d5e3db69.js', revision: 'a059a365d5e3db69' },
                { url: '/_next/static/chunks/7453-516922f383ccf43f.js', revision: '516922f383ccf43f' },
                { url: '/_next/static/chunks/7536-919eb235bb480963.js', revision: '919eb235bb480963' },
                { url: '/_next/static/chunks/8036-dba25247d72bc3c5.js', revision: 'dba25247d72bc3c5' },
                { url: '/_next/static/chunks/8765.fa7cadb546badeda.js', revision: 'fa7cadb546badeda' },
                { url: '/_next/static/chunks/ccf7da5b.3a9c12a82a995a94.js', revision: '3a9c12a82a995a94' },
                { url: '/_next/static/chunks/de49cc29.790e34103c815e4c.js', revision: '790e34103c815e4c' },
                { url: '/_next/static/chunks/fc83e031.ba9a4b797160c213.js', revision: 'ba9a4b797160c213' },
                { url: '/_next/static/chunks/framework-ce84985cd166733a.js', revision: 'ce84985cd166733a' },
                { url: '/_next/static/chunks/main-866f8ad4854cad3e.js', revision: '866f8ad4854cad3e' },
                { url: '/_next/static/chunks/pages/404-9850c28fc55f877c.js', revision: '9850c28fc55f877c' },
                { url: '/_next/static/chunks/pages/_app-a6e63317942bd3c4.js', revision: 'a6e63317942bd3c4' },
                { url: '/_next/static/chunks/pages/_error-8021973bffb000a4.js', revision: '8021973bffb000a4' },
                { url: '/_next/static/chunks/pages/board-list-fa8fcb43fe96fa9f.js', revision: 'fa8fcb43fe96fa9f' },
                { url: '/_next/static/chunks/pages/board/%5Bid%5D-ec5aba6d20ac8297.js', revision: 'ec5aba6d20ac8297' },
                { url: '/_next/static/chunks/pages/board/%5Bid%5D/%5BdetailId%5D-868a615e2efba4bf.js', revision: '868a615e2efba4bf' },
                { url: '/_next/static/chunks/pages/home-25ed7000613deb2c.js', revision: '25ed7000613deb2c' },
                { url: '/_next/static/chunks/pages/home/%5Bid%5D-32fcca26f4a61539.js', revision: '32fcca26f4a61539' },
                { url: '/_next/static/chunks/pages/hot-keyword-ec57e7d49389cabf.js', revision: 'ec57e7d49389cabf' },
                { url: '/_next/static/chunks/pages/index-30878bdc9826a5dc.js', revision: '30878bdc9826a5dc' },
                { url: '/_next/static/chunks/pages/login-9c823511cc86fd58.js', revision: '9c823511cc86fd58' },
                { url: '/_next/static/chunks/pages/mypage-a399daab2e38b243.js', revision: 'a399daab2e38b243' },
                { url: '/_next/static/chunks/pages/mypage/bookmark-8bc610c83ba09ab8.js', revision: '8bc610c83ba09ab8' },
                { url: '/_next/static/chunks/pages/mypage/edit-cb00b7016a889ce8.js', revision: 'cb00b7016a889ce8' },
                { url: '/_next/static/chunks/pages/mypage/etc-60b8807272a242a7.js', revision: '60b8807272a242a7' },
                { url: '/_next/static/chunks/pages/mypage/etc/secession-2526a1efe5440dc3.js', revision: '2526a1efe5440dc3' },
                { url: '/_next/static/chunks/pages/mypage/feedback-d2a471b8a656f00d.js', revision: 'd2a471b8a656f00d' },
                { url: '/_next/static/chunks/pages/mypage/notice-a15cfd789ba1eeef.js', revision: 'a15cfd789ba1eeef' },
                { url: '/_next/static/chunks/pages/mypage/notice/%5Bid%5D-357e13b0be99d73e.js', revision: '357e13b0be99d73e' },
                { url: '/_next/static/chunks/pages/mypage/writeCommentList-2ed7823ee8e29d9f.js', revision: '2ed7823ee8e29d9f' },
                { url: '/_next/static/chunks/pages/mypage/writeList-12c4d1b7a466b9db.js', revision: '12c4d1b7a466b9db' },
                { url: '/_next/static/chunks/pages/report/%5Bid%5D-d459fa2ae67af2d5.js', revision: 'd459fa2ae67af2d5' },
                { url: '/_next/static/chunks/pages/search-276cbef63ae45eb3.js', revision: '276cbef63ae45eb3' },
                { url: '/_next/static/chunks/pages/search/%5Bid%5D-3274878eff84e643.js', revision: '3274878eff84e643' },
                { url: '/_next/static/chunks/pages/signup-8dfae39cc36574ee.js', revision: '8dfae39cc36574ee' },
                { url: '/_next/static/chunks/pages/write-02e98ed6de2dab50.js', revision: '02e98ed6de2dab50' },
                { url: '/_next/static/chunks/pages/write/%5Bid%5D-05718ee7e5d9f052.js', revision: '05718ee7e5d9f052' },
                { url: '/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js', revision: '837c0df77fd5009c9e46d446188ecfd0' },
                { url: '/_next/static/chunks/webpack-2ff342f6f40fae1f.js', revision: '2ff342f6f40fae1f' },
                { url: '/_next/static/css/7a10f90797a0d4dc.css', revision: '7a10f90797a0d4dc' },
                { url: '/_next/static/css/ae73b05d5fb97e2d.css', revision: 'ae73b05d5fb97e2d' },
                { url: '/_next/static/css/e9fb73a7c1efc3d9.css', revision: 'e9fb73a7c1efc3d9' },
                { url: '/icons/browserconfig.xml', revision: '653d077300a12f09a69caeea7a8947f8' },
                { url: '/icons/default_profile.png', revision: '11ce82aa42a26e93b46e547677556840' },
                { url: '/icons/favicon-16x16.png', revision: '04e8695f703ae1475254458c1751504f' },
                { url: '/icons/favicon-32x32.png', revision: '770de493802ba7e05f90f7e0accf7249' },
                { url: '/icons/favicon-96x96.png', revision: '55889014e2dbdc947a077a9e7b5cccfd' },
                { url: '/icons/favicon.ico', revision: 'e0b46e5fd28cad991b72755c35e9f485' },
                { url: '/icons/icon-128x128.png', revision: '2d339dce03bd5f1d9d36a2b67fba07c9' },
                { url: '/icons/icon-144x144.png', revision: 'c8501e3758767809f5d5e33aacbce17e' },
                { url: '/icons/icon-152x152.png', revision: '512b3eac0564d6ba58817cb45f9f27ec' },
                { url: '/icons/icon-192x192.png', revision: 'c64b5a4c4cd8d45a0299a9f60bc32bdf' },
                { url: '/icons/icon-384x384.png', revision: '8a0a224e634355eaa5a17040ebb8b638' },
                { url: '/icons/icon-48x48.png', revision: '68f95de60a08c195bbd61a3456520bb4' },
                { url: '/icons/icon-512x512.png', revision: '6463b64bce62561fa379be53c9249b14' },
                { url: '/icons/icon-72x72.png', revision: 'd74e956c2d488bd39aba5c5699676170' },
                { url: '/icons/icon-96x96.png', revision: 'd090a4f6f035182318eeed57d92e76f1' },
                { url: '/icons/ms-icon-144x144.png', revision: '059a1f01cb877d73955bbb995ef6cf9d' },
                { url: '/icons/ms-icon-150x150.png', revision: '721bcf2c20ecd2cfae7b399098571961' },
                { url: '/icons/ms-icon-310x310.png', revision: '89ba37200ed8065139ed876fd876b788' },
                { url: '/icons/ms-icon-70x70.png', revision: '3793742bb8eed81c5e08043dc4d5b388' },
                { url: '/images/1.jpeg', revision: '50575fe246158213ebfec7d9302f39e6' },
                { url: '/images/facebook.png', revision: 'b4f22a41806b6f9e88daf97d032b979b' },
                { url: '/images/kakao.png', revision: '26a4f1a01f924ea2c7aefff7849d1b05' },
                { url: '/manifest.json', revision: 'bdf974fb417ccaaca7b748cc7fffbe9b' },
                { url: '/next.svg', revision: '8e061864f388b47f33a1c3780831193e' },
                { url: '/thirteen.svg', revision: '53f96b8290673ef9d2895908e69b2f92' },
                { url: '/vercel.svg', revision: '61c6b19abff40ea7acd577be818f3976' },
            ],
            { ignoreURLParametersMatching: [] },
        ),
        e.cleanupOutdatedCaches(),
        e.registerRoute(
            '/',
            new e.NetworkFirst({
                cacheName: 'start-url',
                plugins: [
                    {
                        cacheWillUpdate: async ({ request: e, response: s, event: c, state: a }) =>
                            s && 'opaqueredirect' === s.type ? new Response(s.body, { status: 200, statusText: 'OK', headers: s.headers }) : s,
                    },
                ],
            }),
            'GET',
        ),
        e.registerRoute(
            /^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,
            new e.CacheFirst({ cacheName: 'google-fonts-webfonts', plugins: [new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 31536e3 })] }),
            'GET',
        ),
        e.registerRoute(
            /^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,
            new e.StaleWhileRevalidate({ cacheName: 'google-fonts-stylesheets', plugins: [new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 604800 })] }),
            'GET',
        ),
        e.registerRoute(
            /\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,
            new e.StaleWhileRevalidate({ cacheName: 'static-font-assets', plugins: [new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 604800 })] }),
            'GET',
        ),
        e.registerRoute(
            /\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,
            new e.StaleWhileRevalidate({ cacheName: 'static-image-assets', plugins: [new e.ExpirationPlugin({ maxEntries: 64, maxAgeSeconds: 86400 })] }),
            'GET',
        ),
        e.registerRoute(
            /\/_next\/image\?url=.+$/i,
            new e.StaleWhileRevalidate({ cacheName: 'next-image', plugins: [new e.ExpirationPlugin({ maxEntries: 64, maxAgeSeconds: 86400 })] }),
            'GET',
        ),
        e.registerRoute(
            /\.(?:mp3|wav|ogg)$/i,
            new e.CacheFirst({
                cacheName: 'static-audio-assets',
                plugins: [new e.RangeRequestsPlugin(), new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 })],
            }),
            'GET',
        ),
        e.registerRoute(
            /\.(?:mp4)$/i,
            new e.CacheFirst({
                cacheName: 'static-video-assets',
                plugins: [new e.RangeRequestsPlugin(), new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 })],
            }),
            'GET',
        ),
        e.registerRoute(
            /\.(?:js)$/i,
            new e.StaleWhileRevalidate({ cacheName: 'static-js-assets', plugins: [new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 })] }),
            'GET',
        ),
        e.registerRoute(
            /\.(?:css|less)$/i,
            new e.StaleWhileRevalidate({ cacheName: 'static-style-assets', plugins: [new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 })] }),
            'GET',
        ),
        e.registerRoute(
            /\/_next\/data\/.+\/.+\.json$/i,
            new e.StaleWhileRevalidate({ cacheName: 'next-data', plugins: [new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 })] }),
            'GET',
        ),
        e.registerRoute(
            /\.(?:json|xml|csv)$/i,
            new e.NetworkFirst({ cacheName: 'static-data-assets', plugins: [new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 })] }),
            'GET',
        ),
        e.registerRoute(
            ({ url: e }) => {
                if (!(self.origin === e.origin)) return !1;
                const s = e.pathname;
                return !s.startsWith('/api/auth/') && !!s.startsWith('/api/');
            },
            new e.NetworkFirst({ cacheName: 'apis', networkTimeoutSeconds: 10, plugins: [new e.ExpirationPlugin({ maxEntries: 16, maxAgeSeconds: 86400 })] }),
            'GET',
        ),
        e.registerRoute(
            ({ url: e }) => {
                if (!(self.origin === e.origin)) return !1;
                return !e.pathname.startsWith('/api/');
            },
            new e.NetworkFirst({ cacheName: 'others', networkTimeoutSeconds: 10, plugins: [new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 })] }),
            'GET',
        ),
        e.registerRoute(
            ({ url: e }) => !(self.origin === e.origin),
            new e.NetworkFirst({
                cacheName: 'cross-origin',
                networkTimeoutSeconds: 10,
                plugins: [new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 3600 })],
            }),
            'GET',
        );
});
