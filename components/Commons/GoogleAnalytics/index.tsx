'use client';

import { usePathname, useSearchParams } from 'next/navigation';
import Script from 'next/script';
import { useEffect } from 'react';

// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
export function pageview(url: string) {
    window.gtag('config', process.env.NEXT_PUBLIC_API_BASE_URL, {
        page_path: url,
    });
}

type GTagEvent = {
    action: string;
    category: string;
    label: string;
    value: number;
};

// https://developers.google.com/analytics/devguides/collection/gtagjs/events
export function event({ action, category, label, value }: GTagEvent) {
    window.gtag('event', action, {
        event_category: category,
        event_label: label,
        value: value,
    });
}

const gaScript = `function gtag(){dataLayer.push(arguments)}window.dataLayer=window.dataLayer||[],gtag("js",new Date),gtag("config","${process.env.NEXT_PUBLIC_GA_ID}");`;

export default function GoogleAnalytics() {
    const pathname = usePathname();
    const searchParams = useSearchParams();

    useEffect(() => {
        if (!window.gtag || !pathname) return;
        pageview(pathname);
    }, [pathname, searchParams]);

    return (
        // https://nextjs.org/docs/messages/next-script-for-ga
        process.env.NODE_ENV === 'production' && process.env.NEXT_PUBLIC_API_BASE_URL ? (
            <>
                <Script src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_API_BASE_URL}`} strategy="afterInteractive" />
                <Script id="google-analytics" strategy="afterInteractive">
                    {gaScript}
                </Script>
            </>
        ) : null
    );
}
