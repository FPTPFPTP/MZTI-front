import { useLayoutEffect } from 'react';
import { useRouter } from 'next/router';
import type { NextPage } from 'next';

const Home: NextPage = () => {
    const router = useRouter();

    useLayoutEffect(() => {
        router.push('/home');
    }, [router]);

    return null;
};

export default Home;
