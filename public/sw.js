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
        let r = {};
        const t = (e) => c(e, i),
            o = { module: { uri: i }, exports: r, require: t };
        s[i] = Promise.all(a.map((e) => o[e] || t(e))).then((e) => (n(...e), r));
    };
}
define(['./workbox-588899ac'], function (e) {
    'use strict';
    importScripts(),
        self.skipWaiting(),
        e.clientsClaim(),
        e.precacheAndRoute(
            [
                { url: '/_next/static/YgVawm-CCFz2e1SAnI8CE/_buildManifest.js', revision: 'cd513c2859210af192f69dd6d8d47c4d' },
                { url: '/_next/static/YgVawm-CCFz2e1SAnI8CE/_ssgManifest.js', revision: 'b6652df95db52feb4daf4eca35380933' },
                { url: '/_next/static/chunks/1271-520b1a8cda76f460.js', revision: '520b1a8cda76f460' },
                { url: '/_next/static/chunks/1326-53fae7b8cc7ed166.js', revision: '53fae7b8cc7ed166' },
                { url: '/_next/static/chunks/1917-8316a6ea938fa7d9.js', revision: '8316a6ea938fa7d9' },
                { url: '/_next/static/chunks/1e280605.310cf0428eaef5ce.js', revision: '310cf0428eaef5ce' },
                { url: '/_next/static/chunks/2032-f6fb42b7328ab12e.js', revision: 'f6fb42b7328ab12e' },
                { url: '/_next/static/chunks/2221-2e57440005efe039.js', revision: '2e57440005efe039' },
                { url: '/_next/static/chunks/2629-5a75d1a9c7e700e2.js', revision: '5a75d1a9c7e700e2' },
                { url: '/_next/static/chunks/2808-25546909a85b6c8c.js', revision: '25546909a85b6c8c' },
                { url: '/_next/static/chunks/2882-be62f236a4abbe9f.js', revision: 'be62f236a4abbe9f' },
                { url: '/_next/static/chunks/29107295-d19fb005c0c45fad.js', revision: 'd19fb005c0c45fad' },
                { url: '/_next/static/chunks/3424-4ca1cc478bf9c4ad.js', revision: '4ca1cc478bf9c4ad' },
                { url: '/_next/static/chunks/3828-00ff68a8bd4e7135.js', revision: '00ff68a8bd4e7135' },
                { url: '/_next/static/chunks/3832.63c13a673aadb8ed.js', revision: '63c13a673aadb8ed' },
                { url: '/_next/static/chunks/4779.b738a41343f982ec.js', revision: 'b738a41343f982ec' },
                { url: '/_next/static/chunks/5479.e7855fafff0bd9f6.js', revision: 'e7855fafff0bd9f6' },
                { url: '/_next/static/chunks/6826-e833a5905bb77e60.js', revision: 'e833a5905bb77e60' },
                { url: '/_next/static/chunks/6961-844a658024bade98.js', revision: '844a658024bade98' },
                { url: '/_next/static/chunks/7453-516922f383ccf43f.js', revision: '516922f383ccf43f' },
                { url: '/_next/static/chunks/7536-919eb235bb480963.js', revision: '919eb235bb480963' },
                { url: '/_next/static/chunks/8036-dba25247d72bc3c5.js', revision: 'dba25247d72bc3c5' },
                { url: '/_next/static/chunks/8423-28d71e2e47074b80.js', revision: '28d71e2e47074b80' },
                { url: '/_next/static/chunks/8765.fa7cadb546badeda.js', revision: 'fa7cadb546badeda' },
                { url: '/_next/static/chunks/ccf7da5b.3a9c12a82a995a94.js', revision: '3a9c12a82a995a94' },
                { url: '/_next/static/chunks/de49cc29.790e34103c815e4c.js', revision: '790e34103c815e4c' },
                { url: '/_next/static/chunks/fc83e031.ba9a4b797160c213.js', revision: 'ba9a4b797160c213' },
                { url: '/_next/static/chunks/framework-ce84985cd166733a.js', revision: 'ce84985cd166733a' },
                { url: '/_next/static/chunks/main-866f8ad4854cad3e.js', revision: '866f8ad4854cad3e' },
                { url: '/_next/static/chunks/pages/404-de958111104a866f.js', revision: 'de958111104a866f' },
                { url: '/_next/static/chunks/pages/_app-1c4b9f8b89c61f72.js', revision: '1c4b9f8b89c61f72' },
                { url: '/_next/static/chunks/pages/_error-7349e60f7f9ddb96.js', revision: '7349e60f7f9ddb96' },
                { url: '/_next/static/chunks/pages/board-list-a465a803ba84d7b0.js', revision: 'a465a803ba84d7b0' },
                { url: '/_next/static/chunks/pages/board/%5Bid%5D-00b670eb441feb41.js', revision: '00b670eb441feb41' },
                { url: '/_next/static/chunks/pages/board/%5Bid%5D/%5BdetailId%5D-8c9c9f03ccf86c63.js', revision: '8c9c9f03ccf86c63' },
                { url: '/_next/static/chunks/pages/home-289bd9c3bc8e74d3.js', revision: '289bd9c3bc8e74d3' },
                { url: '/_next/static/chunks/pages/home/%5Bid%5D-757a9c1e1a8076b3.js', revision: '757a9c1e1a8076b3' },
                { url: '/_next/static/chunks/pages/hot-keyword-4944ac5876815338.js', revision: '4944ac5876815338' },
                { url: '/_next/static/chunks/pages/index-7fbe89babe7d0e4c.js', revision: '7fbe89babe7d0e4c' },
                { url: '/_next/static/chunks/pages/login-828e8b5d6ac1f6d7.js', revision: '828e8b5d6ac1f6d7' },
                { url: '/_next/static/chunks/pages/mypage-41f91e35c27b1f67.js', revision: '41f91e35c27b1f67' },
                { url: '/_next/static/chunks/pages/mypage/bookmark-796e11677b8b16a1.js', revision: '796e11677b8b16a1' },
                { url: '/_next/static/chunks/pages/mypage/edit-a78083f3cede18d2.js', revision: 'a78083f3cede18d2' },
                { url: '/_next/static/chunks/pages/mypage/etc-40f964c06237e308.js', revision: '40f964c06237e308' },
                { url: '/_next/static/chunks/pages/mypage/etc/secession-5ad60c97eaa60b35.js', revision: '5ad60c97eaa60b35' },
                { url: '/_next/static/chunks/pages/mypage/feedback-eb9f7aa60256f9b0.js', revision: 'eb9f7aa60256f9b0' },
                { url: '/_next/static/chunks/pages/mypage/notice-5214048736f05865.js', revision: '5214048736f05865' },
                { url: '/_next/static/chunks/pages/mypage/notice/%5Bid%5D-acf5a46b72357fb1.js', revision: 'acf5a46b72357fb1' },
                { url: '/_next/static/chunks/pages/mypage/writeCommentList-38109224a7b7a307.js', revision: '38109224a7b7a307' },
                { url: '/_next/static/chunks/pages/mypage/writeList-b6221d26bbc68c88.js', revision: 'b6221d26bbc68c88' },
                { url: '/_next/static/chunks/pages/report/%5Bid%5D-567a5b87c800a9cd.js', revision: '567a5b87c800a9cd' },
                { url: '/_next/static/chunks/pages/search-6b452115b056c362.js', revision: '6b452115b056c362' },
                { url: '/_next/static/chunks/pages/search/%5Bid%5D-7b9d8f4d6caf1d15.js', revision: '7b9d8f4d6caf1d15' },
                { url: '/_next/static/chunks/pages/signup-e3cfe6b2869e2f5f.js', revision: 'e3cfe6b2869e2f5f' },
                { url: '/_next/static/chunks/pages/write-0e581de58621a2b8.js', revision: '0e581de58621a2b8' },
                { url: '/_next/static/chunks/pages/write/%5Bid%5D-49fe95d9d58aa951.js', revision: '49fe95d9d58aa951' },
                { url: '/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js', revision: '837c0df77fd5009c9e46d446188ecfd0' },
                { url: '/_next/static/chunks/webpack-23e52608a4e15693.js', revision: '23e52608a4e15693' },
                { url: '/_next/static/css/7a10f90797a0d4dc.css', revision: '7a10f90797a0d4dc' },
                { url: '/_next/static/css/ae73b05d5fb97e2d.css', revision: 'ae73b05d5fb97e2d' },
                { url: '/_next/static/css/e9fb73a7c1efc3d9.css', revision: 'e9fb73a7c1efc3d9' },
                { url: '/icons/android-icon-144x144.png', revision: '059a1f01cb877d73955bbb995ef6cf9d' },
                { url: '/icons/android-icon-192x192.png', revision: '8f920fcbf7cb966a4d66647c30e9d8a8' },
                { url: '/icons/android-icon-36x36.png', revision: '10c0083f07299b91980793638f371306' },
                { url: '/icons/android-icon-48x48.png', revision: 'ff351d42d72796465cacc0b5d7ae49d3' },
                { url: '/icons/android-icon-72x72.png', revision: '500ee168747d7bad5c2fd23744a2623f' },
                { url: '/icons/android-icon-96x96.png', revision: 'e85d785a6b69b5cb8f6bcb1a3d4f9fea' },
                { url: '/icons/apple-icon-114x114.png', revision: 'd34a3b70aee39d2092eff8e3eb16395c' },
                { url: '/icons/apple-icon-120x120.png', revision: '96e0fd3274d4390e8c74e842b4cffbb8' },
                { url: '/icons/apple-icon-144x144.png', revision: '059a1f01cb877d73955bbb995ef6cf9d' },
                { url: '/icons/apple-icon-152x152.png', revision: 'f77726508f35333cd6b6796ddd74b511' },
                { url: '/icons/apple-icon-180x180.png', revision: '0b3b38b61e2acb64d179083b3f429a25' },
                { url: '/icons/apple-icon-57x57.png', revision: 'c53b5619c92c86155f1648f561c10e44' },
                { url: '/icons/apple-icon-60x60.png', revision: '37ec9c3c547f37e1134b6c52d1aa5948' },
                { url: '/icons/apple-icon-72x72.png', revision: '500ee168747d7bad5c2fd23744a2623f' },
                { url: '/icons/apple-icon-76x76.png', revision: 'c400dbbbcf939e856333d4d305a2615a' },
                { url: '/icons/apple-icon-precomposed.png', revision: 'd622c13d2071518ee7afb9817ce1b4bc' },
                { url: '/icons/apple-icon.png', revision: 'd622c13d2071518ee7afb9817ce1b4bc' },
                { url: '/icons/browserconfig.xml', revision: '653d077300a12f09a69caeea7a8947f8' },
                { url: '/icons/default_profile.png', revision: '11ce82aa42a26e93b46e547677556840' },
                { url: '/icons/favicon-16x16.png', revision: '04e8695f703ae1475254458c1751504f' },
                { url: '/icons/favicon-32x32.png', revision: '770de493802ba7e05f90f7e0accf7249' },
                { url: '/icons/favicon-96x96.png', revision: '55889014e2dbdc947a077a9e7b5cccfd' },
                { url: '/icons/favicon.ico', revision: 'e0b46e5fd28cad991b72755c35e9f485' },
                { url: '/icons/icon-128x128.png', revision: '2d339dce03bd5f1d9d36a2b67fba07c9' },
                { url: '/icons/icon-152x152.png', revision: '512b3eac0564d6ba58817cb45f9f27ec' },
                { url: '/icons/icon-384x384.png', revision: '8a0a224e634355eaa5a17040ebb8b638' },
                { url: '/icons/icon-512x512.png', revision: '6463b64bce62561fa379be53c9249b14' },
                { url: '/icons/ms-icon-144x144.png', revision: '059a1f01cb877d73955bbb995ef6cf9d' },
                { url: '/icons/ms-icon-150x150.png', revision: '721bcf2c20ecd2cfae7b399098571961' },
                { url: '/icons/ms-icon-310x310.png', revision: '89ba37200ed8065139ed876fd876b788' },
                { url: '/icons/ms-icon-70x70.png', revision: '3793742bb8eed81c5e08043dc4d5b388' },
                { url: '/images/1.jpeg', revision: '50575fe246158213ebfec7d9302f39e6' },
                { url: '/images/facebook.png', revision: 'b4f22a41806b6f9e88daf97d032b979b' },
                { url: '/images/kakao.png', revision: '26a4f1a01f924ea2c7aefff7849d1b05' },
                { url: '/manifest.json', revision: '96723423d01b9446e68ff4132c314208' },
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
