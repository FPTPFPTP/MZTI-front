import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';
import { ISimpleMbtiResponseModel } from '@/types/simpleMbti';

const sessionStorage = typeof window !== 'undefined' ? window.sessionStorage : undefined;

const { persistAtom } = recoilPersist({
    key: 'simple_mbti_state',
    storage: sessionStorage,
});

// 야매 테스트
export const simpleMbtiState = atom<ISimpleMbtiResponseModel[]>({
    key: `simpleMbit`,
    default: [],
    effects_UNSTABLE: [persistAtom],
});
