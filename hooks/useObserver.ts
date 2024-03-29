import { useEffect, RefObject } from 'react';

interface IUseObserverProps {
    target: RefObject<HTMLElement> | null; // 감지할 대상, ref를 넘길 예정
    onIntersect: IntersectionObserverCallback; // 감지 시 실행할 callback 함수
    root?: Element | Document | null; // 교차할 부모 요소, 아무것도 넘기지 않으면 document가 기본이다.
    rootMargin?: string; // root와 target이 감지하는 여백의 거리
    threshold?: number | number[]; // 임계점. 1.0이면 root내에서 target이 100% 보여질 때 callback이 실행된다.
}

export const useObserver = ({ target, onIntersect, root = null, rootMargin = '0px', threshold = 1.0 }: IUseObserverProps) => {
    useEffect(() => {
        let observer: IntersectionObserver | undefined;
        // 넘어오는 element가 있어야 observer를 생성할 수 있도록 한다.
        if (target && target.current) {
            // callback의 인자로 들어오는 entry는 기본적으로 순환자이기 때문에
            // 복잡한 로직을 필요로 할때가 많다.
            // callback을 선언하는 곳에서 로직을 짜서 통째로 넘기도록 하겠다.
            observer = new IntersectionObserver(onIntersect, {
                root,
                rootMargin,
                threshold,
            });
            // 실제 Element가 들어있는 current 관측을 시작한다.
            observer.observe(target.current);
        }

        // observer를 사용하는 컴포넌트가 해제되면 observer 역시 꺼준다.
        return () => observer && observer.disconnect();
    }, [target, root, rootMargin, threshold]);
};
