import { atom } from 'recoil';

export const hotKeywordsState = atom<string>({
    key: `hotKeywords`,
    default: '',
});
