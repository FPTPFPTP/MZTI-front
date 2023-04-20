if (!self.define) {
    let e,
        s = {};
    const a = (a, c) => (
        (a = new URL(a + '.js', c).href),
        s[a] ||
            new Promise((s) => {
                if ('document' in self) {
                    const e = document.createElement('script');
                    (e.src = a), (e.onload = s), document.head.appendChild(e);
                } else (e = a), importScripts(a), s();
            }).then(() => {
                let e = s[a];
                if (!e) throw new Error(`Module ${a} didn’t register its module`);
                return e;
            })
    );
    self.define = (c, n) => {
        const i = e || ('document' in self ? document.currentScript.src : '') || location.href;
        if (s[i]) return;
        let t = {};
        const r = (e) => a(e, i),
            d = { module: { uri: i }, exports: t, require: r };
        s[i] = Promise.all(c.map((e) => d[e] || r(e))).then((e) => (n(...e), t));
    };
}
define(['./workbox-588899ac'], function (e) {
    'use strict';
    importScripts(),
        self.skipWaiting(),
        e.clientsClaim(),
        e.precacheAndRoute(
            [
                { url: '/_next/static/0DW5qKn80kUaar2qKqMSP/_buildManifest.js', revision: '611e118da21b20f8a383bba0b00eaa62' },
                { url: '/_next/static/0DW5qKn80kUaar2qKqMSP/_ssgManifest.js', revision: 'b6652df95db52feb4daf4eca35380933' },
                { url: '/_next/static/chunks/1326-53fae7b8cc7ed166.js', revision: '53fae7b8cc7ed166' },
                { url: '/_next/static/chunks/1917-1d82811056aec098.js', revision: '1d82811056aec098' },
                { url: '/_next/static/chunks/1e280605.310cf0428eaef5ce.js', revision: '310cf0428eaef5ce' },
                { url: '/_next/static/chunks/2032-5d23ec6918fc8265.js', revision: '5d23ec6918fc8265' },
                { url: '/_next/static/chunks/2221-3590f373cbf3b3ba.js', revision: '3590f373cbf3b3ba' },
                { url: '/_next/static/chunks/2629-5a75d1a9c7e700e2.js', revision: '5a75d1a9c7e700e2' },
                { url: '/_next/static/chunks/2808-25546909a85b6c8c.js', revision: '25546909a85b6c8c' },
                { url: '/_next/static/chunks/2882-be62f236a4abbe9f.js', revision: 'be62f236a4abbe9f' },
                { url: '/_next/static/chunks/29107295-d19fb005c0c45fad.js', revision: 'd19fb005c0c45fad' },
                { url: '/_next/static/chunks/3828-00ff68a8bd4e7135.js', revision: '00ff68a8bd4e7135' },
                { url: '/_next/static/chunks/3832.63c13a673aadb8ed.js', revision: '63c13a673aadb8ed' },
                { url: '/_next/static/chunks/4779.b738a41343f982ec.js', revision: 'b738a41343f982ec' },
                { url: '/_next/static/chunks/5479.e7855fafff0bd9f6.js', revision: 'e7855fafff0bd9f6' },
                { url: '/_next/static/chunks/6826-e833a5905bb77e60.js', revision: 'e833a5905bb77e60' },
                { url: '/_next/static/chunks/6961-a059a365d5e3db69.js', revision: 'a059a365d5e3db69' },
                { url: '/_next/static/chunks/7536-919eb235bb480963.js', revision: '919eb235bb480963' },
                { url: '/_next/static/chunks/8036-804285bd852d591a.js', revision: '804285bd852d591a' },
                { url: '/_next/static/chunks/8259-95c1e3f4ee4f8485.js', revision: '95c1e3f4ee4f8485' },
                { url: '/_next/static/chunks/8423-28d71e2e47074b80.js', revision: '28d71e2e47074b80' },
                { url: '/_next/static/chunks/8765.fa7cadb546badeda.js', revision: 'fa7cadb546badeda' },
                { url: '/_next/static/chunks/ccf7da5b.3a9c12a82a995a94.js', revision: '3a9c12a82a995a94' },
                { url: '/_next/static/chunks/de49cc29.790e34103c815e4c.js', revision: '790e34103c815e4c' },
                { url: '/_next/static/chunks/fc83e031.ba9a4b797160c213.js', revision: 'ba9a4b797160c213' },
                { url: '/_next/static/chunks/framework-ce84985cd166733a.js', revision: 'ce84985cd166733a' },
                { url: '/_next/static/chunks/main-866f8ad4854cad3e.js', revision: '866f8ad4854cad3e' },
                { url: '/_next/static/chunks/pages/404-cb92c86195567414.js', revision: 'cb92c86195567414' },
                { url: '/_next/static/chunks/pages/_app-7b463705d3fdb6e8.js', revision: '7b463705d3fdb6e8' },
                { url: '/_next/static/chunks/pages/_error-7e4cac70dcef969f.js', revision: '7e4cac70dcef969f' },
                { url: '/_next/static/chunks/pages/board-list-1fa4b02e38d6eb3d.js', revision: '1fa4b02e38d6eb3d' },
                { url: '/_next/static/chunks/pages/board/%5Bid%5D-9d6438822a3f5a3b.js', revision: '9d6438822a3f5a3b' },
                { url: '/_next/static/chunks/pages/board/%5Bid%5D/%5BdetailId%5D-c048b8cb03c3747d.js', revision: 'c048b8cb03c3747d' },
                { url: '/_next/static/chunks/pages/home-636d2a0b5da7b4d7.js', revision: '636d2a0b5da7b4d7' },
                { url: '/_next/static/chunks/pages/home/%5Bid%5D-4a165acc714d1480.js', revision: '4a165acc714d1480' },
                { url: '/_next/static/chunks/pages/hot-keyword-8ceaeee26cf074e1.js', revision: '8ceaeee26cf074e1' },
                { url: '/_next/static/chunks/pages/index-7fbe89babe7d0e4c.js', revision: '7fbe89babe7d0e4c' },
                { url: '/_next/static/chunks/pages/login-3383220c4cf66932.js', revision: '3383220c4cf66932' },
                { url: '/_next/static/chunks/pages/mypage-ff1146923031b1ab.js', revision: 'ff1146923031b1ab' },
                { url: '/_next/static/chunks/pages/mypage/bookmark-d500944137b873c3.js', revision: 'd500944137b873c3' },
                { url: '/_next/static/chunks/pages/mypage/edit-63b2607a7d9c354d.js', revision: '63b2607a7d9c354d' },
                { url: '/_next/static/chunks/pages/mypage/etc-ee9135d6df1d1b9f.js', revision: 'ee9135d6df1d1b9f' },
                { url: '/_next/static/chunks/pages/mypage/etc/secession-90b612b0016e7286.js', revision: '90b612b0016e7286' },
                { url: '/_next/static/chunks/pages/mypage/feedback-7fb081b78f3d93fd.js', revision: '7fb081b78f3d93fd' },
                { url: '/_next/static/chunks/pages/mypage/notice-053de4dcd8e1549b.js', revision: '053de4dcd8e1549b' },
                { url: '/_next/static/chunks/pages/mypage/notice/%5Bid%5D-ce85e880c8bab191.js', revision: 'ce85e880c8bab191' },
                { url: '/_next/static/chunks/pages/mypage/writeCommentList-7b2a6de93c7d5830.js', revision: '7b2a6de93c7d5830' },
                { url: '/_next/static/chunks/pages/mypage/writeList-9da1cab8b2f91fd7.js', revision: '9da1cab8b2f91fd7' },
                { url: '/_next/static/chunks/pages/report/%5Bid%5D-08e060d111133d80.js', revision: '08e060d111133d80' },
                { url: '/_next/static/chunks/pages/search-e25f80499d51b05b.js', revision: 'e25f80499d51b05b' },
                { url: '/_next/static/chunks/pages/search/%5Bid%5D-338efcedff5c6e62.js', revision: '338efcedff5c6e62' },
                { url: '/_next/static/chunks/pages/signup-b1ee866da394dd8a.js', revision: 'b1ee866da394dd8a' },
                { url: '/_next/static/chunks/pages/write-6587db40243ee601.js', revision: '6587db40243ee601' },
                { url: '/_next/static/chunks/pages/write/%5Bid%5D-dd315fd733126610.js', revision: 'dd315fd733126610' },
                { url: '/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js', revision: '837c0df77fd5009c9e46d446188ecfd0' },
                { url: '/_next/static/chunks/webpack-f13a34fd48f6025a.js', revision: 'f13a34fd48f6025a' },
                { url: '/_next/static/css/7a10f90797a0d4dc.css', revision: '7a10f90797a0d4dc' },
                { url: '/_next/static/css/ae73b05d5fb97e2d.css', revision: 'ae73b05d5fb97e2d' },
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
                        cacheWillUpdate: async ({ request: e, response: s, event: a, state: c }) =>
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
