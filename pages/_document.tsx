import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
    return (
        <Html lang="en">
            <Head>
                <link rel="manifest" href="/manifest.json" />
                <link rel="icon" type="image/png" sizes="32x32" href="/icons/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="96x96" href="/icons/favicon-96x96.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="/icons/favicon-16x16.png" />
                <link
                    href="splashscreens/iphone5_splash.png"
                    media="(device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2)"
                    rel="apple-touch-startup-image"
                />
                <link
                    href="splashscreens/iphone6_splash.png"
                    media="(device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2)"
                    rel="apple-touch-startup-image"
                />
                <link
                    href="splashscreens/iphoneplus_splash.png"
                    media="(device-width: 621px) and (device-height: 1104px) and (-webkit-device-pixel-ratio: 3)"
                    rel="apple-touch-startup-image"
                />
                <link
                    href="splashscreens/iphonex_splash.png"
                    media="(device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3)"
                    rel="apple-touch-startup-image"
                />
                <link
                    href="splashscreens/iphonexr_splash.png"
                    media="(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 2)"
                    rel="apple-touch-startup-image"
                />
                <link
                    href="splashscreens/iphonexsmax_splash.png"
                    media="(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 3)"
                    rel="apple-touch-startup-image"
                />
                <link
                    href="splashscreens/ipad_splash.png"
                    media="(device-width: 768px) and (device-height: 1024px) and (-webkit-device-pixel-ratio: 2)"
                    rel="apple-touch-startup-image"
                />
                <link
                    href="splashscreens/ipadpro1_splash.png"
                    media="(device-width: 834px) and (device-height: 1112px) and (-webkit-device-pixel-ratio: 2)"
                    rel="apple-touch-startup-image"
                />
                <link
                    href="splashscreens/ipadpro3_splash.png"
                    media="(device-width: 834px) and (device-height: 1194px) and (-webkit-device-pixel-ratio: 2)"
                    rel="apple-touch-startup-image"
                />
                <link
                    href="splashscreens/ipadpro2_splash.png"
                    media="(device-width: 1024px) and (device-height: 1366px) and (-webkit-device-pixel-ratio: 2)"
                    rel="apple-touch-startup-image"
                />
                <meta name="msapplication-TileColor" content="#ffffff" />
                <meta name="msapplication-TileImage" content="/icons/ms-icon-144x144.png" />
                <meta name="theme-color" content="#ffffff" />
                <meta name="MZTI | MBTI에 과몰입할 MZ세대들 모여라!" content="MZ세대들의 MBTI 과몰입 커뮤니티" />
                <meta
                    property="og:image"
                    content={`https://lh3.googleusercontent.com/u/0/drive-viewer/AITFw-zgy8Hf2fMDb5iv06G5u8MCAU3xf0R6t5G8P3lmBa2DgcROz5e_QFMu6J6h4V0Ln8jjgG37La0_ELJWUIVfXWsgTjL-qw=w3360-h1702`}
                />
                <meta property="og:description" content="🅼🆉🆃🅸 | MBTI에 과몰입할 MZ세대들 모여라! | MBTI 뇌절 콘텐츠, MBTI 궁합, MBTI 짤 등" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="apple-mobile-web-app-capable" content="yes" />
                <script defer src="https://developers.kakao.com/sdk/js/kakao.min.js"></script>
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
