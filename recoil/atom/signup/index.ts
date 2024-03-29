import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';
import { ISignupState } from '@/types/signup';
import { v1 } from 'uuid';
const sessionStorage = typeof window !== 'undefined' ? window.sessionStorage : undefined;

const { persistAtom } = recoilPersist({
    key: 'signup_state',
    storage: sessionStorage,
});

// 회원 가입 사용자 정보
export const signupState = atom<ISignupState>({
    key: `signupStates/${v1()}`,
    default: {
        step: 1,
        nickname: '',
        mbti: '',
        introduce: '',
    },
    effects_UNSTABLE: [persistAtom],
});

// 회원 가입 사용자 프로필
export const signupProfileFileState = atom<File | null>({
    key: `signupProfileFileStates/${v1()}`,
    default: null,
});
