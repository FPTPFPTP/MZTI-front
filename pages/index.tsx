import React, { useEffect } from 'react';
import type { NextPage } from 'next';
import { useRecoilState } from 'recoil';
import { userInfoState } from '@/recoil/atom/user';
import Axios from '@utils/axios';

const Home: NextPage = () => {
    const [userInfo, setUserInfo] = useRecoilState(userInfoState);

    useEffect(() => {
        console.log({ userInfo });
    }, [userInfo]);

    useEffect(() => {
        Axios.get('/user').then((res) => {
            setUserInfo(res.data.data);
        });
    }, []);

    return (
        <div>
            <h1>메인페이지</h1>
        </div>
    );
};

export default Home;
