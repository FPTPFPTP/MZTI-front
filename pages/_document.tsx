import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
    return (
        <Html lang="en">
            <Head>
                <link rel="manifest" href="/manifest.json" />
                <link rel="apple-touch-icon" href="/icons/icon-152x152.png" />
                <link rel="apple-touch-icon" sizes="144x144" href="/icons/icon-144x144.png" />
                <link rel="apple-touch-icon" sizes="152x152" href="/icons/icon-152x152.png" />
                <link rel="apple-touch-icon" sizes="192x192" href="/icons/icon-192x192.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="/icons/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="96x96" href="/icons/favicon-96x96.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="/icons/favicon-16x16.png" />
                <meta name="msapplication-TileColor" content="#ffffff" />
                <meta name="msapplication-TileImage" content="/icons/ms-icon-144x144.png" />
                <meta name="theme-color" content="#ffffff" />
                <meta name="MZTI | MBTI에 과몰입할 MZ세대들 모여라!" content="MZ세대들의 MBTI 과몰입 커뮤니티" />
                <meta property="og:image" content={`https://velog.velcdn.com/images/leemember/post/7767e642-e4ec-403e-af16-6ecda22a6f36/image.png`} />
                <meta property="og:description" content="🅼🆉🆃🅸 | MBTI에 과몰입할 MZ세대들 모여라! | MBTI 뇌절 콘텐츠, MBTI 궁합, MBTI 짤 등" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="apple-mobile-web-app-capable" content="yes" />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
