import { useEffect, useMemo, useState } from 'react';
import App, { AppContext, AppProps } from 'next/app';
import Head from 'next/head';
import nextCookies from 'next-cookies';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from 'react-hot-toast';
import { RecoilRoot, MutableSnapshot } from 'recoil';
import { myPageInfo } from '@/recoil/atom/user';
import { Global } from '@emotion/react';
import Layout from '@components/Layout';
import { Modal } from '@components/Commons';
import globalReset from '@/styles/customReset';
import axios from '@/utils/axios';
import { removeTokenAll, setCookie } from '@utils/auth';
import { getMeUserInfo } from '@apis/user';
import { IUserModel } from '@/types/user';
import usePWA from '@hooks/usePWA';

interface IMyCustomApp extends AppProps {
    userInfo?: IUserModel;
}

function MyCustomApp({ Component, pageProps, userInfo }: IMyCustomApp) {
    // 이렇게 해야 서로 다른 사용자와 요청 사이에 데이터가 공유되지 않는다.
    const [queryClient] = useState(() => new QueryClient());
    const [isInstallPopup, setIsInstallPopup] = useState(false);
    const [notVisiblePopup, setNotVisiblePopup] = useState(false);

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

    const { isInstalled, canInstall, showInstallPrompt } = usePWA();
    console.log({ isInstalled, canInstall, showInstallPrompt });

    const onClickInstallPWA = () => {
        showInstallPrompt();
    };

    const onCloseModal = () => {
        setIsInstallPopup(false);
        localStorage.setItem('notVisiblePopup', '');
    };

    useEffect(() => {
        setNotVisiblePopup(localStorage.getItem('notVisiblePopup') !== null);
    }, []);

    useEffect(() => {
        if (!notVisiblePopup && !isInstalled && canInstall) {
            setIsInstallPopup(true);
        }
    }, [canInstall, isInstalled, notVisiblePopup]);

    useEffect(() => {
        if (userInfo && userInfo.id) {
            setCookie('userId', userInfo.id.toString());
        }
    }, [userInfo]);

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
                        <Toaster />
                    </Layout>
                </RecoilRoot>
                <ReactQueryDevtools />
                <Modal
                    title={'MZTI를 설치하고 싶은가요?'}
                    isModalVisible={isInstallPopup}
                    closable={false}
                    footer={
                        <>
                            <button onClick={onCloseModal}>취소</button>
                            <button onClick={onClickInstallPWA}>설치하기</button>
                        </>
                    }
                >
                    <p>아래 계정으로 다시 로그인할 수 있습니다.</p>
                </Modal>
            </QueryClientProvider>
        </>
    );
}

MyCustomApp.getInitialProps = async (appContext: AppContext) => {
    // 서버 사이드 쿠키 받아오기
    const appProps = await App.getInitialProps(appContext);
    const { ctx } = appContext;
    const allCookies = nextCookies(ctx);
    const accessToken = allCookies['accessToken'];
    const refreshToken = allCookies['refreshToken'];
    const removeAllCookies = () => {
        // 서버 사이드 쿠키 삭제
        ctx.res && ctx.res.setHeader('Set-Cookie', [`accessToken=deleted; Max-Age=0`, `refreshToken=deleted; Max-Age=0`]);
        // 클라이언트 사이드 쿠키 삭제
        removeTokenAll();
    };

    let userInfo: IUserModel | undefined;
    // 서버 사이드 쿠키가 남아있을 경우, 해당 쿠키로 인증 시도
    if (refreshToken && accessToken) {
        try {
            axios.defaults.baseURL = 'http://localhost:3000/mzti';
            axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;

            const data = await getMeUserInfo();
            if (!data) {
                removeAllCookies();
            } else {
                userInfo = data;
            }
        } catch (e) {
            console.log({ e });
        } finally {
            axios.defaults.baseURL = '/mzti';
        }
    }

    return { ...appProps, userInfo };
};
export default MyCustomApp;
