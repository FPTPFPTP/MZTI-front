'use client';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import ReactGA from 'react-ga';

export default function GoogleAnalytics() {
    const router = useRouter();

    useEffect(() => {
        ReactGA.initialize(process.env.NEXT_PUBLIC_GA_ID || '');
        ReactGA.set({ page: window.location.pathname });
        ReactGA.pageview(window.location.pathname);
    }, [router]);

    return <></>;
}
