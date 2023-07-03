import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

const sessionStorage = typeof window !== 'undefined' ? window.sessionStorage : undefined;

const { persistAtom } = recoilPersist({
    key: 'homeListTab_state',
    storage: sessionStorage,
});

export const homeListTabState = atom<number | undefined>({
    key: `homeListTab`,
    default: 22,
    effects_UNSTABLE: [persistAtom],
});
