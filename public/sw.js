if (!self.define) {
    let e,
        s = {};
    const i = (i, c) => (
        (i = new URL(i + '.js', c).href),
        s[i] ||
            new Promise((s) => {
                if ('document' in self) {
                    const e = document.createElement('script');
                    (e.src = i), (e.onload = s), document.head.appendChild(e);
                } else (e = i), importScripts(i), s();
            }).then(() => {
                let e = s[i];
                if (!e) throw new Error(`Module ${i} didn’t register its module`);
                return e;
            })
    );
    self.define = (c, a) => {
        const n = e || ('document' in self ? document.currentScript.src : '') || location.href;
        if (s[n]) return;
        let t = {};
        const r = (e) => i(e, n),
            o = { module: { uri: n }, exports: t, require: r };
        s[n] = Promise.all(c.map((e) => o[e] || r(e))).then((e) => (a(...e), t));
    };
}
define(['./workbox-588899ac'], function (e) {
    'use strict';
    importScripts(),
        self.skipWaiting(),
        e.clientsClaim(),
        e.precacheAndRoute(
            [
                { url: '/_next/static/chunks/1326-53fae7b8cc7ed166.js', revision: '53fae7b8cc7ed166' },
                { url: '/_next/static/chunks/1e280605.310cf0428eaef5ce.js', revision: '310cf0428eaef5ce' },
                { url: '/_next/static/chunks/2032-ff152cf928cdc801.js', revision: 'ff152cf928cdc801' },
                { url: '/_next/static/chunks/2279.0801ac7e00459759.js', revision: '0801ac7e00459759' },
                { url: '/_next/static/chunks/2808-25546909a85b6c8c.js', revision: '25546909a85b6c8c' },
                { url: '/_next/static/chunks/29107295-d19fb005c0c45fad.js', revision: 'd19fb005c0c45fad' },
                { url: '/_next/static/chunks/3828-00ff68a8bd4e7135.js', revision: '00ff68a8bd4e7135' },
                { url: '/_next/static/chunks/3832.63c13a673aadb8ed.js', revision: '63c13a673aadb8ed' },
                { url: '/_next/static/chunks/4779.b738a41343f982ec.js', revision: 'b738a41343f982ec' },
                { url: '/_next/static/chunks/6581-dd42ed61b4a23923.js', revision: 'dd42ed61b4a23923' },
                { url: '/_next/static/chunks/6826-e833a5905bb77e60.js', revision: 'e833a5905bb77e60' },
                { url: '/_next/static/chunks/6936.6ce78b1088cf438b.js', revision: '6ce78b1088cf438b' },
                { url: '/_next/static/chunks/6961-844a658024bade98.js', revision: '844a658024bade98' },
                { url: '/_next/static/chunks/7453-8a96188908b5110b.js', revision: '8a96188908b5110b' },
                { url: '/_next/static/chunks/7536-919eb235bb480963.js', revision: '919eb235bb480963' },
                { url: '/_next/static/chunks/8036-a871f099643015e8.js', revision: 'a871f099643015e8' },
                { url: '/_next/static/chunks/8239-57366fb8349d9711.js', revision: '57366fb8349d9711' },
                { url: '/_next/static/chunks/8765.9c97b3b89612c98a.js', revision: '9c97b3b89612c98a' },
                { url: '/_next/static/chunks/883.28d70d35481bb3d9.js', revision: '28d70d35481bb3d9' },
                { url: '/_next/static/chunks/8997-7433fcba5a3742dc.js', revision: '7433fcba5a3742dc' },
                { url: '/_next/static/chunks/ccf7da5b.3a9c12a82a995a94.js', revision: '3a9c12a82a995a94' },
                { url: '/_next/static/chunks/de49cc29.790e34103c815e4c.js', revision: '790e34103c815e4c' },
                { url: '/_next/static/chunks/fc83e031.ba9a4b797160c213.js', revision: 'ba9a4b797160c213' },
                { url: '/_next/static/chunks/framework-ce84985cd166733a.js', revision: 'ce84985cd166733a' },
                { url: '/_next/static/chunks/main-866f8ad4854cad3e.js', revision: '866f8ad4854cad3e' },
                { url: '/_next/static/chunks/pages/404-b9cfb4e9e9d66b22.js', revision: 'b9cfb4e9e9d66b22' },
                { url: '/_next/static/chunks/pages/_app-98b33f78892a9dd2.js', revision: '98b33f78892a9dd2' },
                { url: '/_next/static/chunks/pages/_error-29a10e4328d19594.js', revision: '29a10e4328d19594' },
                { url: '/_next/static/chunks/pages/board-list-d47f0ee6f75c5602.js', revision: 'd47f0ee6f75c5602' },
                { url: '/_next/static/chunks/pages/board/%5Bid%5D-a0660e4408b63460.js', revision: 'a0660e4408b63460' },
                { url: '/_next/static/chunks/pages/boardDetail/%5BdetailId%5D-b7b81eef5daef837.js', revision: 'b7b81eef5daef837' },
                { url: '/_next/static/chunks/pages/home-a37fb2eb042e055a.js', revision: 'a37fb2eb042e055a' },
                { url: '/_next/static/chunks/pages/hot-keyword/%5Bcontent%5D-aea1ac39f3e01449.js', revision: 'aea1ac39f3e01449' },
                { url: '/_next/static/chunks/pages/index-30878bdc9826a5dc.js', revision: '30878bdc9826a5dc' },
                { url: '/_next/static/chunks/pages/login-043eac80fabe5e7d.js', revision: '043eac80fabe5e7d' },
                { url: '/_next/static/chunks/pages/mypage-df36e6b1d24bc597.js', revision: 'df36e6b1d24bc597' },
                { url: '/_next/static/chunks/pages/mypage/bookmark-a799971417e27cb9.js', revision: 'a799971417e27cb9' },
                { url: '/_next/static/chunks/pages/mypage/edit-0c9f46d18c3643af.js', revision: '0c9f46d18c3643af' },
                { url: '/_next/static/chunks/pages/mypage/etc-63c3ce221fa90068.js', revision: '63c3ce221fa90068' },
                { url: '/_next/static/chunks/pages/mypage/etc/secession-29e647f9f26de98e.js', revision: '29e647f9f26de98e' },
                { url: '/_next/static/chunks/pages/mypage/feedback-6910dfb674368ea2.js', revision: '6910dfb674368ea2' },
                { url: '/_next/static/chunks/pages/mypage/notice-6a51a5fa61ee9c16.js', revision: '6a51a5fa61ee9c16' },
                { url: '/_next/static/chunks/pages/mypage/notice/%5Bid%5D-af081093e56475d1.js', revision: 'af081093e56475d1' },
                { url: '/_next/static/chunks/pages/mypage/writeCommentList-52e557d8678f3f11.js', revision: '52e557d8678f3f11' },
                { url: '/_next/static/chunks/pages/mypage/writeList-98709f71492bb0b5.js', revision: '98709f71492bb0b5' },
                { url: '/_next/static/chunks/pages/report/%5Bid%5D-ab10ecd99e0bb66c.js', revision: 'ab10ecd99e0bb66c' },
                { url: '/_next/static/chunks/pages/search-c8bb613676e35192.js', revision: 'c8bb613676e35192' },
                { url: '/_next/static/chunks/pages/search/%5Bid%5D-6f87259934d11534.js', revision: '6f87259934d11534' },
                { url: '/_next/static/chunks/pages/signup-04e1b242615b6a5f.js', revision: '04e1b242615b6a5f' },
                { url: '/_next/static/chunks/pages/write-02e7d63afe4548f6.js', revision: '02e7d63afe4548f6' },
                { url: '/_next/static/chunks/pages/write/%5Bid%5D-f659aa6753f78cea.js', revision: 'f659aa6753f78cea' },
                { url: '/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js', revision: '837c0df77fd5009c9e46d446188ecfd0' },
                { url: '/_next/static/chunks/webpack-4e16b2b1cb5bd16c.js', revision: '4e16b2b1cb5bd16c' },
                { url: '/_next/static/css/7a10f90797a0d4dc.css', revision: '7a10f90797a0d4dc' },
                { url: '/_next/static/css/ae73b05d5fb97e2d.css', revision: 'ae73b05d5fb97e2d' },
                { url: '/_next/static/css/e9fb73a7c1efc3d9.css', revision: 'e9fb73a7c1efc3d9' },
                { url: '/_next/static/iTbeDAXb7G2TJEIlvRccQ/_buildManifest.js', revision: '56bbdb192bb769bf2f244f5000cf42a1' },
                { url: '/_next/static/iTbeDAXb7G2TJEIlvRccQ/_ssgManifest.js', revision: 'b6652df95db52feb4daf4eca35380933' },
                { url: '/default_profile.png', revision: '11ce82aa42a26e93b46e547677556840' },
                { url: '/icons/browserconfig.xml', revision: '653d077300a12f09a69caeea7a8947f8' },
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
                { url: '/images/mzti_intro.png', revision: '52cae78ceea79e59c9317280da02c509' },
                { url: '/images/youtube.png', revision: '058138307d5864b83e0fbd4f581e8c8f' },
                { url: '/manifest.json', revision: 'bdf974fb417ccaaca7b748cc7fffbe9b' },
                { url: '/mbtiProfile/ENFJ.png', revision: '13ba4d3cf8cc81bfb997d7418baafbda' },
                { url: '/mbtiProfile/ENFP.png', revision: '11881e2d4edacf375da2f21a06166b34' },
                { url: '/mbtiProfile/ENTJ.png', revision: '1bede178798e875acee19c15d9589369' },
                { url: '/mbtiProfile/ENTP.png', revision: 'aec8d32fa6b82c89f33f0899651ff457' },
                { url: '/mbtiProfile/ESFJ.png', revision: '7e34396503dbe9eca89a0af64ad58ed7' },
                { url: '/mbtiProfile/ESFP.png', revision: '3eda2c59064c4084d40cab4d35a5b48d' },
                { url: '/mbtiProfile/ESTJ.png', revision: '5ef970a83e3b24840ea95b5fde43fb86' },
                { url: '/mbtiProfile/ESTP.png', revision: 'ce9fb31ed00259323ddbd077334661e0' },
                { url: '/mbtiProfile/INFJ.png', revision: '93dd3f48f948d28379fa7f1b0fab70bf' },
                { url: '/mbtiProfile/INFP.png', revision: 'cffcd6e155fc1f592a7b2510112a07fe' },
                { url: '/mbtiProfile/INTJ.png', revision: 'e067dd21a9e461e5dd07bfe5dc5961fe' },
                { url: '/mbtiProfile/INTP.png', revision: '8779bb7046c82f2f1681ffcf4167b8fc' },
                { url: '/mbtiProfile/ISFJ.png', revision: '63052103d3346a4361a9be923ec9423a' },
                { url: '/mbtiProfile/ISFP.png', revision: '8261b9a5012777b03ec64e82958a2fb5' },
                { url: '/mbtiProfile/ISTJ.png', revision: '376561028b6dd6ace993aa0d90d9e2f2' },
                { url: '/mbtiProfile/ISTP.png', revision: '9a9c455cd7992fc1493b1c0ebda0b88b' },
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
                        cacheWillUpdate: async ({ request: e, response: s, event: i, state: c }) =>
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
