import { atom } from 'recoil';

export const accessTokenState = atom({
    key: 'accessToken',
    default: '',
});

export const cookieState = atom({
    key: 'cookieState',
    default: [],
});
