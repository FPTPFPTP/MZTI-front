if (!self.define) {
    let e,
        s = {};
    const n = (n, a) => (
        (n = new URL(n + '.js', a).href),
        s[n] ||
            new Promise((s) => {
                if ('document' in self) {
                    const e = document.createElement('script');
                    (e.src = n), (e.onload = s), document.head.appendChild(e);
                } else (e = n), importScripts(n), s();
            }).then(() => {
                let e = s[n];
                if (!e) throw new Error(`Module ${n} didn’t register its module`);
                return e;
            })
    );
    self.define = (a, c) => {
        const i = e || ('document' in self ? document.currentScript.src : '') || location.href;
        if (s[i]) return;
        let t = {};
        const r = (e) => n(e, i),
            o = { module: { uri: i }, exports: t, require: r };
        s[i] = Promise.all(a.map((e) => o[e] || r(e))).then((e) => (c(...e), t));
    };
}
define(['./workbox-588899ac'], function (e) {
    'use strict';
    importScripts(),
        self.skipWaiting(),
        e.clientsClaim(),
        e.precacheAndRoute(
            [
                { url: '/_next/static/-l50IsNVAVUqK4YVFuQ5Z/_buildManifest.js', revision: '05039f0af77bd1c6cd6e468552c2e00f' },
                { url: '/_next/static/-l50IsNVAVUqK4YVFuQ5Z/_ssgManifest.js', revision: 'b6652df95db52feb4daf4eca35380933' },
                { url: '/_next/static/chunks/16-f7d92bbc00b72425.js', revision: 'f7d92bbc00b72425' },
                { url: '/_next/static/chunks/1e280605.a36ffee4441a6d69.js', revision: 'a36ffee4441a6d69' },
                { url: '/_next/static/chunks/536-6f0aa6c80a4e4cf4.js', revision: '6f0aa6c80a4e4cf4' },
                { url: '/_next/static/chunks/559-bedf01c237ea634f.js', revision: 'bedf01c237ea634f' },
                { url: '/_next/static/chunks/562-9a293e7edd621312.js', revision: '9a293e7edd621312' },
                { url: '/_next/static/chunks/595-4df523c814876005.js', revision: '4df523c814876005' },
                { url: '/_next/static/chunks/667-e9355d37ac7c0631.js', revision: 'e9355d37ac7c0631' },
                { url: '/_next/static/chunks/760-4f51353908e510e3.js', revision: '4f51353908e510e3' },
                { url: '/_next/static/chunks/786.10d915ccc5ea9294.js', revision: '10d915ccc5ea9294' },
                { url: '/_next/static/chunks/821-3ed3343662603475.js', revision: '3ed3343662603475' },
                { url: '/_next/static/chunks/940-6a7824bc7b721af7.js', revision: '6a7824bc7b721af7' },
                { url: '/_next/static/chunks/949-b2a6dd52b0f87a0c.js', revision: 'b2a6dd52b0f87a0c' },
                { url: '/_next/static/chunks/997-3eda865cfbbc7894.js', revision: '3eda865cfbbc7894' },
                { url: '/_next/static/chunks/ccf7da5b.b701b623db0cbee4.js', revision: 'b701b623db0cbee4' },
                { url: '/_next/static/chunks/de49cc29.7d13a369a6966c59.js', revision: '7d13a369a6966c59' },
                { url: '/_next/static/chunks/fc83e031.0278d56d8426342d.js', revision: '0278d56d8426342d' },
                { url: '/_next/static/chunks/framework-73b8966a3c579ab0.js', revision: '73b8966a3c579ab0' },
                { url: '/_next/static/chunks/main-c9b8f392a798df67.js', revision: 'c9b8f392a798df67' },
                { url: '/_next/static/chunks/pages/_app-4de283992b21b24c.js', revision: '4de283992b21b24c' },
                { url: '/_next/static/chunks/pages/_error-409f831d3504c8f5.js', revision: '409f831d3504c8f5' },
                { url: '/_next/static/chunks/pages/home-adb7ab177781e1b3.js', revision: 'adb7ab177781e1b3' },
                { url: '/_next/static/chunks/pages/home/%5Bid%5D-003a138b3f8e67a5.js', revision: '003a138b3f8e67a5' },
                { url: '/_next/static/chunks/pages/index-0d1cc943845ed040.js', revision: '0d1cc943845ed040' },
                { url: '/_next/static/chunks/pages/login-721cdec047487e71.js', revision: '721cdec047487e71' },
                { url: '/_next/static/chunks/pages/mypage-832d71c72048d727.js', revision: '832d71c72048d727' },
                { url: '/_next/static/chunks/pages/mypage/edit-cd672aefa0fdb7a0.js', revision: 'cd672aefa0fdb7a0' },
                { url: '/_next/static/chunks/pages/mypage/feedback-b0a7c55114d21f44.js', revision: 'b0a7c55114d21f44' },
                { url: '/_next/static/chunks/pages/mypage/writeCommentList-2b2424ad661b3da1.js', revision: '2b2424ad661b3da1' },
                { url: '/_next/static/chunks/pages/mypage/writeList-846b568addb5a511.js', revision: '846b568addb5a511' },
                { url: '/_next/static/chunks/pages/signup-8a7fad96df358158.js', revision: '8a7fad96df358158' },
                { url: '/_next/static/chunks/pages/write-0b074080382ad0ab.js', revision: '0b074080382ad0ab' },
                { url: '/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js', revision: '837c0df77fd5009c9e46d446188ecfd0' },
                { url: '/_next/static/chunks/webpack-f9fc8c34f290f2db.js', revision: 'f9fc8c34f290f2db' },
                { url: '/_next/static/css/7a10f90797a0d4dc.css', revision: '7a10f90797a0d4dc' },
                { url: '/_next/static/css/e9fb73a7c1efc3d9.css', revision: 'e9fb73a7c1efc3d9' },
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
                        cacheWillUpdate: async ({ request: e, response: s, event: n, state: a }) =>
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
