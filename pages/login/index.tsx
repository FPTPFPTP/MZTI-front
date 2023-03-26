import React, { useEffect, useMemo } from 'react';
import Image from 'next/image';
import { Login } from '@styles/pages/loginStyled';
import axios from 'utils/axios';
import { useRouter } from 'next/router';
import { accessTokenState } from '@/recoil/atom/auth';
import { useSetRecoilState } from 'recoil';
import FacebookLogin from '@greatsumini/react-facebook-login';
import { Cookies } from 'react-cookie';

const login = () => {
    const REST_API_KEY = process.env.NEXT_PUBLIC_KAKAO_API;
    const REDIRECT_URI = process.env.NEXT_PUBLIC_REDIRECT_URL;
    const link = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;
    const router = useRouter();
    const cookies = new Cookies();
    const setAccessToken = useSetRecoilState(accessTokenState);

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
                    setAccessToken(res.data.data.accessToken);
                    cookies.set('refreshToken', res.data.data.refreshToken);
                    axios.get('/user').then((res) => {
                        if (res.data.data.nickname === undefined) {
                            router.push('/signup');
                        } else {
                            router.push('/home');
                        }
                    });
                })
                .catch((error) => {
                    console.log(error);
                });
        }
    }, [codeValue]);

    return (
        <>
            <div css={Login}>
                <h1>MBTI에 과몰입 할 MZ들 모여라!</h1>
                <button onClick={handleKaKao}>
                    <Image src="/images/kakao.png" alt="카카오톡으로 시작하기" width={400} height={100} />
                </button>
                <FacebookLogin
                    appId={process.env.NEXT_PUBLIC_FACEBOOK_URL!}
                    onSuccess={(response) => {
                        axios
                            .post('/login/oauth/facebook', {
                                accessToken: response.accessToken,
                            })
                            .then((res) => {
                                setAccessToken(res.data.data.accessToken);
                                cookies.set('refreshToken', res.data.data.refreshToken);
                                axios.get('/user').then((res) => {
                                    if (res.data.data.nickname === undefined) {
                                        router.push('/signup');
                                    } else {
                                        router.push('/home');
                                    }
                                });
                            });
                    }}
                    render={(renderProps) => (
                        <button onClick={renderProps.onClick}>
                            <Image src="/images/facebook.png" alt="페이스북으로 시작하기" width={400} height={100} />
                        </button>
                    )}
                />
                <p>
                    회원가입을 건너뛸까요?{' '}
                    <button>
                        <strong>둘러보기</strong>
                    </button>
                </p>
            </div>
        </>
    );
};

export default login;
