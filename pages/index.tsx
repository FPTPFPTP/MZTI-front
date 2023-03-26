import { useState, useEffect } from 'react';
import type { NextPage } from 'next';
import Layout from '@components/Layout';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { myPageInfo } from '@/recoil/atom/user';

const Home: NextPage = () => {
    const [userInfo, setUserInfo] = useRecoilState(myPageInfo);
    useEffect(() => {
        console.log({ userInfo });
    }, [userInfo]);
    return <div>{userInfo?.nickname}화명</div>;
};

export default Home;
