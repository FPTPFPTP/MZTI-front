import React, { useEffect, useMemo } from 'react';
import Image from 'next/image';
import { Login } from './styled';
import axios from 'utils/axios';
import { useRouter } from 'next/router';
import { accessTokenState } from 'recoil/atom';
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

    const handleKaKao = () => {
        window.location.href = link;
    };

    useEffect(() => {
        if (codeValue) {
            axios
                .post('/login/oauth/kakao', {
                    redirectUrl: REDIRECT_URI,
                    code: codeValue,
                })
                .then((res) => {
                    setAccessToken(res.data.data.accessToken);
                    cookies.set('refreshToken', res.data.data.refreshToken);
                });
        }
    }, [codeValue]);

    return (
        <>
            <h1>MBTI에 과몰입 할 MZ들 모여라!</h1>

            <div css={Login}>
                <button onClick={handleKaKao}>
                    <Image src="/images/kakao.png" alt="카카오톡으로 시작하기" width={500} height={500} />
                </button>
                <FacebookLogin
                    appId={process.env.NEXT_PUBLIC_FACEBOOK_URL!}
                    onSuccess={(response) => {
                        console.log('Login Success!', setAccessToken(response.accessToken));
                    }}
                    onFail={(error) => {
                        console.log('Login Failed!', error);
                    }}
                    onProfileSuccess={(response) => {
                        console.log('Get Profile Success!', response);
                    }}
                >
                    <Image src="/images/facebook.png" alt="페이스북으로 시작하기" width={500} height={500} />
                </FacebookLogin>
            </div>
        </>
    );
};

export default login;
