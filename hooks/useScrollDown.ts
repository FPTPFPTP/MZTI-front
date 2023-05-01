import { useEffect, useState } from 'react';
import debounce from 'lodash/debounce';

export function useScrollDown(ref: React.MutableRefObject<HTMLDivElement | null>) {
    const [isCurrentScrollTop, setIsCurrentScrollTop] = useState<boolean>(true);

    const delay = 15;

    const listener = () => {
        if (ref.current) {
            const currentScrollPos = ref.current.scrollTop;

            if (currentScrollPos === 0) {
                setIsCurrentScrollTop(true);
            } else {
                setIsCurrentScrollTop(false);
            }
        }
    };

    useEffect(() => {
        if (ref.current) {
            ref.current.addEventListener('scroll', debounce(listener, delay));
            return () => (ref.current ? ref.current.removeEventListener('scroll', debounce(listener, delay)) : console.log(''));
        }
    }, []);

    return isCurrentScrollTop;
}

export default useScrollDown;
