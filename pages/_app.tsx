import '@/styles/globals.css';
import { useState } from 'react';
import type { AppProps } from 'next/app';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { RecoilRoot } from 'recoil';
import Layout from '../components/Layout';
import { Header } from '@components/Commons';

export default function App({ Component, pageProps }: AppProps) {
    // 이렇게 해야 서로 다른 사용자와 요청 사이에 데이터가 공유되지 않는다.
    const [queryClient] = useState(() => new QueryClient());

    return (
        <QueryClientProvider client={queryClient}>
            <RecoilRoot>
                <Layout>
                    <Header />
                    <Component {...pageProps} />
                </Layout>
            </RecoilRoot>
        </QueryClientProvider>
    );
}
