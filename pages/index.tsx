import { useEffect } from 'react';
import { useRouter } from 'next/router';
import type { NextPage } from 'next';
import { useRecoilValue } from 'recoil';
import { myPageInfo } from '@/recoil/atom/user';

const Home: NextPage = () => {
    const myInfo = useRecoilValue(myPageInfo);
    const router = useRouter();

    useEffect(() => {
        if (myInfo && !myInfo.nickname && !myInfo.mbti) {
            router.push('/signup');
        } else {
            router.push('/home');
        }
    }, [router, myInfo]);

    return null;
};

export default Home;
