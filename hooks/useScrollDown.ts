import { useEffect, useState } from 'react';
import { throttle } from 'lodash';

export function useScrollDown(scrollPointer?: number) {
    const [isCurrentScrollTop, setIsCurrentScrollTop] = useState<boolean>(true);

    const delay = 300;

    const listener = () => {
        const scrollTop = window.scrollY;
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
        window.addEventListener('scroll', throttle(listener, delay));
        return () => window.removeEventListener('scroll', throttle(listener, delay));
    }, []);

    return isCurrentScrollTop;
}

export default useScrollDown;
