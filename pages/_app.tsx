import { useState } from 'react';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { RecoilRoot } from 'recoil';
import { Global } from '@emotion/react';
import Layout from '../components/Layout';
import globalReset from '@/styles/customReset';

export default function App({ Component, pageProps }: AppProps) {
    // 이렇게 해야 서로 다른 사용자와 요청 사이에 데이터가 공유되지 않는다.
    const [queryClient] = useState(() => new QueryClient());

    return (
        <>
            <QueryClientProvider client={queryClient}>
                <RecoilRoot>
                    <Head>
                        <title>MZTI</title>
                        <meta charSet="utf-8" />
                        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                        <meta name="viewport" content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no" />
                        <meta name="description" content="Description" />
                        <meta name="keywords" content="Keywords" />
                        <meta name="theme-color" content="#FF98BA" />
                    </Head>
                    <Global styles={globalReset} />
                    <Layout>
                        <Component {...pageProps} />
                    </Layout>
                </RecoilRoot>
                <ReactQueryDevtools />
            </QueryClientProvider>
        </>
    );
}
