import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';
import { IUserModel } from '@/types/user';

const sessionStorage = typeof window !== 'undefined' ? window.sessionStorage : undefined;

const { persistAtom } = recoilPersist({
    key: 'userInfoState',
    storage: sessionStorage,
});

export const userInfoState = atom<IUserModel>({
    key: 'userInfoState',
    default: {
        nickname: '',
        mbti: '',
        introduce: '',
        profileImage: '',
    },
    effects_UNSTABLE: [persistAtom],
});
