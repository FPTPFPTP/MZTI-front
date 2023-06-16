import { atom } from 'recoil';

export const prevScrollState = atom<number>({
    key: `prevScroll`,
    default: 0,
});
