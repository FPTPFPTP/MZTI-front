import { useState, useEffect } from 'react';
import type { NextPage } from 'next';
import Login from './login';

import Splash from '@/components/Splash';

const Home: NextPage = () => {
    const [isLoding, setIsLoding] = useState<boolean>(true);

    useEffect(() => {
        setTimeout(() => {
            setIsLoding(false);
        }, 3000);
    }, []);

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
