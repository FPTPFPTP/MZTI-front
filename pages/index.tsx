import { useState, useEffect } from 'react';
import type { NextPage } from 'next';
import Login from './login';
import { isLogin } from '@/recoil/atom/user';
import { Cookies } from 'react-cookie';

import { useRecoilState, useSetRecoilState } from 'recoil';
import Splash from '@/components/Splash';

const Home: NextPage = () => {
    const [isLoding, setIsLoding] = useState<boolean>(true);
    const [isLoginUser, setIsLoginUser] = useRecoilState(isLogin);
    const cookies = new Cookies();

    // 로그인 여부
    useEffect(() => {
        console.log('dd', cookies.get('refreshToken'));
        if (cookies.get('refreshToken')) {
            console.log('하이', cookies.get('refreshToken'));
            setIsLoginUser({ login: true });
        }
    }, []);

    useEffect(() => {
        setTimeout(() => {
            setIsLoding(false);
        }, 3000);
    }, []);

    useEffect(() => {
        console.log(isLoginUser, 'isLoginUser');
    }, [isLoginUser]);
    return (
        <div>
            {isLoding ? (
                <Splash />
            ) : (
                <>
                    <Login />
                </>
            )}
        </div>
    );
};

export default Home;
