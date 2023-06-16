import { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import { prevScrollState } from '@/recoil/atom/scroll';
import { throttle } from 'lodash';

export function useScrollDown(scrollPointer?: number) {
    const [isCurrentScrollTop, setIsCurrentScrollTop] = useState<boolean>(true);
    const [currentScrollY, setCurrentScrollY] = useState<number>(0);
    const delay = 300;

    const listener = () => {
        const scrollTop = window.scrollY;

        setCurrentScrollY(scrollTop);
        if (scrollPointer !== undefined) {
            if (scrollTop <= scrollPointer) {
                setIsCurrentScrollTop(true);
            } else {
                setIsCurrentScrollTop(false);
            }
        } else {
            if (scrollTop === 0) {
                setIsCurrentScrollTop(true);
            } else {
                setIsCurrentScrollTop(false);
            }
        }
    };

    useEffect(() => {
        const handleScroll = throttle(() => listener(), delay);

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return { currentScrollY, isCurrentScrollTop };
}

export default useScrollDown;
