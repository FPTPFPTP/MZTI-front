import { atom } from 'recoil';
import { v1 } from 'uuid';

export const hotKeywordsState = atom<string>({
    key: `hotKeywords/${v1()}`,
    default: '',
});
