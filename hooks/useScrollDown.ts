import { useEffect, useState } from 'react';
import debounce from 'lodash/debounce';

export function useScrollDown() {
    const [isCurrentScrollTop, setIsCurrentScrollTop] = useState<boolean>(true);

    const delay = 15;

    const listener = () => {
        const scrollTop = window.scrollY;
        if (scrollTop === 0) {
            setIsCurrentScrollTop(true);
        } else {
            setIsCurrentScrollTop(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', debounce(listener, delay));
        return () => window.removeEventListener('scroll', debounce(listener, delay));
    }, []);

    return isCurrentScrollTop;
}

export default useScrollDown;
