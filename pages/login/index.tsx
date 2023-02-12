import React from 'react';
import Image from 'next/image';
import { Login } from './styled';

const login = () => {
    const REST_API_KEY = process.env.NEXT_PUBLIC_KAKAO_API;
    const REDIRECT_URI = 'http://localhost:3000/login';
    const link = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;

    const handleKaKao = () => {
        window.location.href = link;
        console.log('카카오');
    };
    const handleFacebook = () => {
        console.log('페이스북');
    };
    return (
        <>
            <h1>MBTI에 과몰입 할 MZ들 모여라!</h1>

            <div css={Login}>
                <button onClick={handleKaKao}>
                    <Image src="/images/kakao.png" alt="카카오톡으로 시작하기" width={500} height={500} />
                </button>
                <button onClick={handleFacebook}>
                    <Image src="/images/facebook.png" alt="페이스북으로 시작하기" width={500} height={500} />
                </button>
            </div>
        </>
    );
};

export default login;
