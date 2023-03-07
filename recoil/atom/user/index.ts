import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';
import { IUserModel } from '@/types/user';
import { v1 } from 'uuid';

const sessionStorage = typeof window !== 'undefined' ? window.sessionStorage : undefined;

const { persistAtom } = recoilPersist({
    key: 'userInfoState',
    storage: sessionStorage,
});

// Signup 용도
export const userInfoState = atom<IUserModel>({
    key: `userInfoState/${v1()}`,
    default: {
        nickname: '',
        mbti: '',
        intro: '',
        profileImage: '',
    },
    effects_UNSTABLE: [persistAtom],
});

// 마이페이지 정보 api get `/user`
export const myPageInfo = atom<IUserModel>({
    key: `myPageInfoState/${v1()}`,
    default: {
        nickname: '',
        mbti: '',
        intro: '',
        profileImage: '',
    },
});
