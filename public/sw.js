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
            d = { module: { uri: i }, exports: t, require: r };
        s[i] = Promise.all(a.map((e) => d[e] || r(e))).then((e) => (n(...e), t));
    };
}
define(['./workbox-588899ac'], function (e) {
    'use strict';
    importScripts(),
        self.skipWaiting(),
        e.clientsClaim(),
        e.precacheAndRoute(
            [
                { url: '/_next/static/chunks/138-bd1c9736507d782f.js', revision: 'bd1c9736507d782f' },
                { url: '/_next/static/chunks/1e280605.a36ffee4441a6d69.js', revision: 'a36ffee4441a6d69' },
                { url: '/_next/static/chunks/259-5cd39443ee106735.js', revision: '5cd39443ee106735' },
                { url: '/_next/static/chunks/32-2531cc1de070df1e.js', revision: '2531cc1de070df1e' },
                { url: '/_next/static/chunks/326-24e87a45272b0c33.js', revision: '24e87a45272b0c33' },
                { url: '/_next/static/chunks/394-72278bcfc9a0343d.js', revision: '72278bcfc9a0343d' },
                { url: '/_next/static/chunks/479.e25b3f2f2e182b9b.js', revision: 'e25b3f2f2e182b9b' },
                { url: '/_next/static/chunks/536-6f0aa6c80a4e4cf4.js', revision: '6f0aa6c80a4e4cf4' },
                { url: '/_next/static/chunks/722-ff2d194ab6757e8f.js', revision: 'ff2d194ab6757e8f' },
                { url: '/_next/static/chunks/765.6162ebc9c0823ca8.js', revision: '6162ebc9c0823ca8' },
                { url: '/_next/static/chunks/779.f1aa296182bd50ff.js', revision: 'f1aa296182bd50ff' },
                { url: '/_next/static/chunks/808-0945934f880ce8e8.js', revision: '0945934f880ce8e8' },
                { url: '/_next/static/chunks/826-587177559b8aa93a.js', revision: '587177559b8aa93a' },
                { url: '/_next/static/chunks/828-3f7929c9d4baabcf.js', revision: '3f7929c9d4baabcf' },
                { url: '/_next/static/chunks/832.e3b78f46e9ed65c1.js', revision: 'e3b78f46e9ed65c1' },
                { url: '/_next/static/chunks/882-d30208fd15dfe213.js', revision: 'd30208fd15dfe213' },
                { url: '/_next/static/chunks/ccf7da5b.b701b623db0cbee4.js', revision: 'b701b623db0cbee4' },
                { url: '/_next/static/chunks/de49cc29.7d13a369a6966c59.js', revision: '7d13a369a6966c59' },
                { url: '/_next/static/chunks/fc83e031.0278d56d8426342d.js', revision: '0278d56d8426342d' },
                { url: '/_next/static/chunks/framework-73b8966a3c579ab0.js', revision: '73b8966a3c579ab0' },
                { url: '/_next/static/chunks/main-c9b8f392a798df67.js', revision: 'c9b8f392a798df67' },
                { url: '/_next/static/chunks/pages/_app-3cd796567640d0aa.js', revision: '3cd796567640d0aa' },
                { url: '/_next/static/chunks/pages/_error-409f831d3504c8f5.js', revision: '409f831d3504c8f5' },
                { url: '/_next/static/chunks/pages/board-list-44f0efe1b02e116e.js', revision: '44f0efe1b02e116e' },
                { url: '/_next/static/chunks/pages/home-7711ff3e5e91d026.js', revision: '7711ff3e5e91d026' },
                { url: '/_next/static/chunks/pages/home/%5Bid%5D-d9395c1bfefb0d7e.js', revision: 'd9395c1bfefb0d7e' },
                { url: '/_next/static/chunks/pages/hot-keyword-bc359a329263d179.js', revision: 'bc359a329263d179' },
                { url: '/_next/static/chunks/pages/index-46621eeb1e9c9adc.js', revision: '46621eeb1e9c9adc' },
                { url: '/_next/static/chunks/pages/login-1c6453e2409870ab.js', revision: '1c6453e2409870ab' },
                { url: '/_next/static/chunks/pages/mypage-7e175504acc6685a.js', revision: '7e175504acc6685a' },
                { url: '/_next/static/chunks/pages/mypage/bookmark-a8828f55d1d34444.js', revision: 'a8828f55d1d34444' },
                { url: '/_next/static/chunks/pages/mypage/edit-ad3e69e1e270ff24.js', revision: 'ad3e69e1e270ff24' },
                { url: '/_next/static/chunks/pages/mypage/etc-e89793f0ba23b38b.js', revision: 'e89793f0ba23b38b' },
                { url: '/_next/static/chunks/pages/mypage/etc/secession-20b97abad1eab345.js', revision: '20b97abad1eab345' },
                { url: '/_next/static/chunks/pages/mypage/feedback-615c51bc94986c46.js', revision: '615c51bc94986c46' },
                { url: '/_next/static/chunks/pages/mypage/notice-81e951bc27560f4c.js', revision: '81e951bc27560f4c' },
                { url: '/_next/static/chunks/pages/mypage/notice/%5Bid%5D-a9d7a4d15da96959.js', revision: 'a9d7a4d15da96959' },
                { url: '/_next/static/chunks/pages/mypage/writeCommentList-be4c3d52a268849e.js', revision: 'be4c3d52a268849e' },
                { url: '/_next/static/chunks/pages/mypage/writeList-3213f1ad9dd346b9.js', revision: '3213f1ad9dd346b9' },
                { url: '/_next/static/chunks/pages/report-40a4c43ef3819876.js', revision: '40a4c43ef3819876' },
                { url: '/_next/static/chunks/pages/signup-f7c6df020eae9155.js', revision: 'f7c6df020eae9155' },
                { url: '/_next/static/chunks/pages/write-8aed16cbac07ddb9.js', revision: '8aed16cbac07ddb9' },
                { url: '/_next/static/chunks/pages/write/%5Bid%5D-50ce0346c62e1893.js', revision: '50ce0346c62e1893' },
                { url: '/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js', revision: '837c0df77fd5009c9e46d446188ecfd0' },
                { url: '/_next/static/chunks/webpack-e532473f93c67cdd.js', revision: 'e532473f93c67cdd' },
                { url: '/_next/static/css/7a10f90797a0d4dc.css', revision: '7a10f90797a0d4dc' },
                { url: '/_next/static/css/ae73b05d5fb97e2d.css', revision: 'ae73b05d5fb97e2d' },
                { url: '/_next/static/css/e9fb73a7c1efc3d9.css', revision: 'e9fb73a7c1efc3d9' },
                { url: '/_next/static/fk65qU_DAT1MCBZsMRVP6/_buildManifest.js', revision: '33381d78d768ea33cc13ca0ba84d7706' },
                { url: '/_next/static/fk65qU_DAT1MCBZsMRVP6/_ssgManifest.js', revision: 'b6652df95db52feb4daf4eca35380933' },
                { url: '/default_profile.png', revision: '11ce82aa42a26e93b46e547677556840' },
                { url: '/favicon.ico', revision: 'c30c7d42707a47a3f4591831641e50dc' },
                { url: '/icons/favicons/favicon-16x16.png', revision: 'b21ee42cd4b960c39107451b32886288' },
                { url: '/icons/favicons/favicon-32x32.png', revision: '454d21bbe28cf8ed3aff623903629056' },
                { url: '/icons/icon-128x128.png', revision: 'bf6f2a3deab27dff633df69528c9a0d4' },
                { url: '/icons/icon-144x144.png', revision: 'c0431d7e82809e463794a3d86db3d769' },
                { url: '/icons/icon-152x152.png', revision: '3188151b80c9046050ce9830dab9c502' },
                { url: '/icons/icon-192x192.png', revision: 'c6b3443c4965bcebd8338e0890209320' },
                { url: '/icons/icon-384x384.png', revision: 'e844e4b77c407b1b5d16cca8fed33014' },
                { url: '/icons/icon-48x48.png', revision: '77fc113ce2afce1a3ae3557a8a3eee9e' },
                { url: '/icons/icon-512x512.png', revision: '4e58d1472ef8c7e6a795bd48ec460c6d' },
                { url: '/icons/icon-72x72.png', revision: 'fb6909776e4f0a9d9c175fecfc65d133' },
                { url: '/icons/icon-96x96.png', revision: '3c11859c0db332e325023ca7e4110f48' },
                { url: '/images/1.jpeg', revision: '50575fe246158213ebfec7d9302f39e6' },
                { url: '/images/facebook.png', revision: 'b4f22a41806b6f9e88daf97d032b979b' },
                { url: '/images/kakao.png', revision: '26a4f1a01f924ea2c7aefff7849d1b05' },
                { url: '/manifest.json', revision: '56e7d635742b6f75f8c3dbbfda9e7bee' },
                { url: '/next.svg', revision: '8e061864f388b47f33a1c3780831193e' },
                { url: '/splashscreens/ipad_splash.png', revision: '052e92d22ca790a896647ec0f365c819' },
                { url: '/splashscreens/ipadpro1_splash.png', revision: '4fabc16deca523a544234ca26be8aff8' },
                { url: '/splashscreens/ipadpro2_splash.png', revision: '243f2e27a210227bbad3e3f5ad8d4140' },
                { url: '/splashscreens/ipadpro3_splash.png', revision: '77a967ce2aded9b41a332d8fb6dec7cd' },
                { url: '/splashscreens/iphone5_splash.png', revision: '62b6d7dc5a215fb0c775f9c6430dc08f' },
                { url: '/splashscreens/iphone6_splash.png', revision: '5035fc9a87315fe24f57fd4f94328a87' },
                { url: '/splashscreens/iphoneplus_splash.png', revision: 'f00b83344717ea5b2ff706838c1c8d59' },
                { url: '/splashscreens/iphonex_splash.png', revision: 'c4af1d41a6b150e4bf923426b9df2139' },
                { url: '/splashscreens/iphonexr_splash.png', revision: 'b7743638e4ee9cf5f9149d16c7897d0d' },
                { url: '/splashscreens/iphonexsmax_splash.png', revision: 'abb1ab55380ce9b89d2a0a7cb98165ee' },
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
