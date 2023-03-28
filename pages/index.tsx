import { useState, useEffect } from 'react';
import type { NextPage } from 'next';
import Login from './login';
import { isLogin } from '@/recoil/atom/user';
import { Cookies } from 'react-cookie';
import { useRecoilState } from 'recoil';
import Splash from '@/components/Splash';

const Home: NextPage = () => {
    const [userInfo, setUserInfo] = useRecoilState(myPageInfo);
    useEffect(() => {
        if (cookies.get('refreshToken')) {
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
