export const isWindow = () => {
    return typeof window !== 'undefined';
};

/**
 * 디바이스 체크
 * @return {string / boolean}
 */
export const device = () => {
    if (/Android/i.test(navigator.userAgent)) {
        return 'Android';
    } else if (/iPhone|iPad|iPod/i.test(navigator.userAgent)) {
        return 'iPhone';
    }
    return false;
};
