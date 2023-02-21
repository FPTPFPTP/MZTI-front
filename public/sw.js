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
    self.define = (a, i) => {
        const c = e || ('document' in self ? document.currentScript.src : '') || location.href;
        if (s[c]) return;
        let r = {};
        const t = (e) => n(e, c),
            o = { module: { uri: c }, exports: r, require: t };
        s[c] = Promise.all(a.map((e) => o[e] || t(e))).then((e) => (i(...e), r));
    };
}
define(['./workbox-588899ac'], function (e) {
    'use strict';
    importScripts(),
        self.skipWaiting(),
        e.clientsClaim(),
        e.precacheAndRoute(
            [
                { url: '/_next/static/-Ce8uW3AcSOycIQD-Kjx5/_buildManifest.js', revision: 'd549ad5e98c2cb03c583327951b00aad' },
                { url: '/_next/static/-Ce8uW3AcSOycIQD-Kjx5/_ssgManifest.js', revision: 'b6652df95db52feb4daf4eca35380933' },
                { url: '/_next/static/chunks/226-71055fe5df345ca1.js', revision: '71055fe5df345ca1' },
                { url: '/_next/static/chunks/531-0525b59793aa2b28.js', revision: '0525b59793aa2b28' },
                { url: '/_next/static/chunks/639-a629b9d55868c93a.js', revision: 'a629b9d55868c93a' },
                { url: '/_next/static/chunks/760-c09db5af357f2457.js', revision: 'c09db5af357f2457' },
                { url: '/_next/static/chunks/framework-2c79e2a64abdb08b.js', revision: '2c79e2a64abdb08b' },
                { url: '/_next/static/chunks/main-1a44087b792ee0e3.js', revision: '1a44087b792ee0e3' },
                { url: '/_next/static/chunks/pages/_app-a957df6279833fea.js', revision: 'a957df6279833fea' },
                { url: '/_next/static/chunks/pages/_error-8353112a01355ec2.js', revision: '8353112a01355ec2' },
                { url: '/_next/static/chunks/pages/index-56dd75cd22d412c3.js', revision: '56dd75cd22d412c3' },
                { url: '/_next/static/chunks/pages/login-4c19ed1b05b4c355.js', revision: '4c19ed1b05b4c355' },
                { url: '/_next/static/chunks/pages/signup-c8534eaf69d66b93.js', revision: 'c8534eaf69d66b93' },
                { url: '/_next/static/chunks/pages/start-caa1cf569a03b5f8.js', revision: 'caa1cf569a03b5f8' },
                { url: '/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js', revision: '837c0df77fd5009c9e46d446188ecfd0' },
                { url: '/_next/static/chunks/webpack-6ef43a8d4a395f49.js', revision: '6ef43a8d4a395f49' },
                { url: '/_next/static/css/2eab13a50746940a.css', revision: '2eab13a50746940a' },
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
