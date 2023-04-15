import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';
import { v1 } from 'uuid';

const localStorage = typeof window !== 'undefined' ? window.localStorage : undefined;

const { persistAtom } = recoilPersist({
    key: 'search-histories',
    storage: localStorage,
});

export const searchHistory = atom<{ searchText: string; date: string }[]>({
    key: `search-histories`,
    default: [],
    effects: [persistAtom],
});
