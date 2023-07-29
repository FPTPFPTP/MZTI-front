import React, { useEffect, useMemo, useState } from 'react';
import { GetServerSidePropsContext } from 'next';
import { Login } from '@styles/pages/loginStyled';
import axios from 'utils/axios';
import { useRouter } from 'next/router';
import FacebookLogin from '@greatsumini/react-facebook-login';
import { setToken } from '@/utils/auth';
import { FCM } from '@components/Commons';
import CopyText from '@assets/icons/login/copy_text.svg';
import Logo from '@assets/icons/common/logo.svg';
import Kakao from '@assets/icons/login/kakao.svg';
import Facebook from '@assets/icons/login/facebook.svg';
import Link from 'next/link';

const login = () => {
    const REST_API_KEY = process.env.NEXT_PUBLIC_KAKAO_API;
    const REDIRECT_URI = process.env.NEXT_PUBLIC_REDIRECT_URL;
    const link = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;
    const router = useRouter();
    const [isLogin, setIsLogin] = useState<boolean>(false);

    // 코드값 추출
    const codeValue = useMemo(() => {
        return router.asPath.split('=')[1];
    }, [router.asPath]);

    // 카카오 로그인 버튼 클릭
    const handleKaKao = () => {
        router.push(link);
    };

    useEffect(() => {
        if (codeValue) {
            // 카카오
            axios
                .post('/login/oauth/kakao', {
                    redirectUrl: REDIRECT_URI,
                    code: codeValue,
                })
                .then((res) => {
                    setToken('accessToken', res.data.data.accessToken);
                    setToken('refreshToken', res.data.data.refreshToken);
                    setIsLogin(true);
                    router.reload();
                })
                .catch((error) => {
                    console.log(error);
                });
        }
    }, [codeValue]);

    return (
        <>
            <div css={Login}>
                <p>
                    <Logo width={160} height={60} />
                </p>
                <h1 className="login_copyText">
                    <CopyText />
                </h1>

                <div className="login_button">
                    <p className="login_button--descTop">회원가입 / 로그인</p>
                    <button onClick={handleKaKao} className="kakao_login">
                        <Kakao />
                    </button>
                    <FacebookLogin
                        appId={process.env.NEXT_PUBLIC_FACEBOOK_URL!}
                        onSuccess={(response) => {
                            axios
                                .post('/login/oauth/facebook', {
                                    accessToken: response.accessToken,
                                })
                                .then((res) => {
                                    setToken('accessToken', res.data.data.accessToken);
                                    setToken('refreshToken', res.data.data.refreshToken);
                                    setIsLogin(true);
                                    router.reload();
                                });
                            console.log('Login Success!', response);
                        }}
                        onFail={(error) => {
                            console.log('Login Failed!', error);
                        }}
                        onProfileSuccess={(response) => {
                            console.log('Get Profile Success!', response);
                        }}
                        render={(renderProps) => (
                            <button onClick={renderProps.onClick}>
                                <Facebook />
                            </button>
                        )}
                    />
                    <p className="login_button--descBottom">
                        회원가입을 건너뛸까요?{' '}
                        <Link href="/home">
                            <strong>둘러보기</strong>
                        </Link>
                    </p>
                </div>
            </div>
            {isLogin && <FCM />}
        </>
    );
};

export async function getServerSideProps({ req }: GetServerSidePropsContext) {
    if (req.cookies['accessToken'] && req.cookies['refreshToken']) {
        return {
            redirect: {
                destination: '/',
                permanent: false,
            },
        };
    }

    return {
        props: {},
    };
}
export default login;
