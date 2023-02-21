import '@/styles/globals.css';
import { useState, useEffect } from 'react';
import type { AppProps } from 'next/app';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { RecoilRoot } from 'recoil';
import Layout from '../components/Layout';
import { Header } from '@components/Commons';
import Splash from '@/components/Splash';

export default function App({ Component, pageProps }: AppProps) {
    // 이렇게 해야 서로 다른 사용자와 요청 사이에 데이터가 공유되지 않는다.
    const [queryClient] = useState(() => new QueryClient());
    const [isLoding, setIsLoding] = useState<boolean>(true);

    useEffect(() => {
        setTimeout(() => {
            setIsLoding(false);
        }, 3000);
    }, []);

    return (
        <QueryClientProvider client={queryClient}>
            <RecoilRoot>
                <Layout>
                    {isLoding ? (
                        <Splash />
                    ) : (
                        <>
                            <Header />
                            <Component {...pageProps} />
                        </>
                    )}
                </Layout>
            </RecoilRoot>
        </QueryClientProvider>
    );
}
