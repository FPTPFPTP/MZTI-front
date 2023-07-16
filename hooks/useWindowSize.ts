import { useState, useEffect } from 'react';

interface WindowSizeType {
    width: number;
    height: number;
}

interface WindowResizeCallback {
    (width: number, height: number): void;
}

const useWindowSize = (fn?: WindowResizeCallback): WindowSizeType => {
    const [width, setWidth] = useState<number>(0);
    const [height, setHeight] = useState<number>(0);

    useEffect(() => {
        function updateSize() {
            setWidth(window.innerWidth);
            setHeight(window.innerHeight);
            fn && fn(window.innerWidth, window.innerHeight);
        }
        updateSize();
        window.addEventListener('resize', updateSize);
        return () => window.removeEventListener('resize', updateSize);
    }, []);

    return {
        width,
        height,
    };
};

export default useWindowSize;
