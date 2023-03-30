import { Cookies } from 'react-cookie';

const cookies = new Cookies();

export const setToken = (key: 'accessToken' | 'refreshToken', token: string) => {
    const expires = new Date();
    expires.setDate(expires.getDate() + 14);

    cookies.set(key, token, {
        path: '/',
        expires: key === 'refreshToken' ? expires : undefined,
    });
};

export const removeToken = (key: 'accessToken' | 'refreshToken') => {
    cookies.remove(key, { path: '/' });
};

export const removeTokenAll = () => {
    removeToken('accessToken');
    removeToken('refreshToken');
};

export const getAccessToken = () => {
    return cookies.get('accessToken');
};

export const getRefreshToken = () => {
    return cookies.get('refreshToken');
};
