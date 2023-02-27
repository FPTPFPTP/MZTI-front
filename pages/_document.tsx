import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
    return (
        <Html lang="en">
            <Head>
                <meta charSet="utf-8" />
                <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no" />
                <meta name="description" content="Description" />
                <meta name="keywords" content="Keywords" />
                <title>MZTI</title>
                <link rel="manifest" href="/manifest.json" />
                <link href="/icons/favicons/favicon-16x16.png" rel="icon" type="image/png" sizes="16x16" />
                <link href="/icons/favicons/favicon-32x32.png" rel="icon" type="image/png" sizes="32x32" />
                <link rel="apple-touch-icon" href="/images/icons/icon-192x192.png" />
                {/* 폰트 적용 */}
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/static/pretendard.css" />
                <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@100;200;300;400;500;600;700;800;900&display=swap" />
                <meta name="theme-color" content="#FF98BA" />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
