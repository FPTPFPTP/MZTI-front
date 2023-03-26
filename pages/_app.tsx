import { useMemo, useState } from 'react';
import App, { AppContext, AppProps } from 'next/app';
import Head from 'next/head';
import nextCookies from 'next-cookies';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { RecoilRoot, MutableSnapshot } from 'recoil';
import { myPageInfo } from '@/recoil/atom/user';
import { Global } from '@emotion/react';
import Layout from '@components/Layout';
import globalReset from '@/styles/customReset';
import axios from '@/utils/axios';
import { removeTokenAll } from '@utils/auth';
import { getMeUserInfo } from '@apis/user';
import { IUserModel } from '@/types/user';

interface IMyCustomApp extends AppProps {
    userInfo?: IUserModel;
}

function MyCustomApp({ Component, pageProps, userInfo }: IMyCustomApp) {
    // 이렇게 해야 서로 다른 사용자와 요청 사이에 데이터가 공유되지 않는다.
    const [queryClient] = useState(() => new QueryClient());

    // user정보 초기값 설정
    const recoilInitializer = useMemo(
        () =>
            ({ set }: MutableSnapshot) => {
                if (userInfo) {
                    set(myPageInfo, userInfo);
                }
            },
        [userInfo],
    );

    return (
        <>
            <QueryClientProvider client={queryClient}>
                <RecoilRoot initializeState={recoilInitializer}>
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
            </QueryClientProvider>
        </>
    );
}

MyCustomApp.getInitialProps = async (appContext: AppContext) => {
    // 서버 사이드 쿠키 받아오기
    const appProps = await App.getInitialProps(appContext);
    const { ctx } = appContext;
    const allCookies = nextCookies(ctx);

    const accessToken = allCookies['ACCESS_TOKEN'];
    const refreshToken = allCookies['REFRESH_TOKEN'];
    const removeAllCookies = () => {
        // 서버 사이드 쿠키 삭제
        ctx.res && ctx.res.setHeader('Set-Cookie', [`ACCESS_TOKEN=deleted; Max-Age=0`, `REFRESH_TOKEN=deleted; Max-Age=0`]);
        // 클라이언트 사이드 쿠키 삭제
        removeTokenAll();
    };

    let userInfo: IUserModel | undefined;
    // 서버 사이드 쿠키가 남아있을 경우, 해당 쿠키로 인증 시도
    if (refreshToken && accessToken) {
        try {
            axios.defaults.baseURL = process.env.NEXT_PUBLIC_API_BASE_URL;
            axios.defaults.headers.common['Authorization'] = accessToken ? `Bearer ${accessToken}` : '';

            const data = await getMeUserInfo();
            if (!data) {
                removeAllCookies();
            } else {
                userInfo = data;
            }
        } catch (e) {
            console.log({ e });
        }
    }

    return { ...appProps, userInfo };
};
export default MyCustomApp;
