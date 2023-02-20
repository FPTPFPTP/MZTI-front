import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';
import { ISignupState } from '@/types/signup';

const sessionStorage = typeof window !== 'undefined' ? window.sessionStorage : undefined;

const { persistAtom } = recoilPersist({
    key: 'signup_state',
    storage: sessionStorage,
});

// Recoil-persist를 적용시키려면 아래의 effects_UNSTABLE을 적어주어야 한다.
export const signupState = atom<ISignupState>({
    key: 'signupState',
    default: {
        step: 1,
        nickname: '',
        mbti: '',
        introduce: '',
        profileImage: '',
    },
    effects_UNSTABLE: [persistAtom],
});
