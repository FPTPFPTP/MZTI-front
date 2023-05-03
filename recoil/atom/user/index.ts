import { atom } from 'recoil';
// import { recoilPersist } from 'recoil-persist';
import { IUserModel } from '@/types/user';
import { v1 } from 'uuid';

// const sessionStorage = typeof window !== 'undefined' ? window.sessionStorage : undefined;

// const { persistAtom } = recoilPersist({
//     key: 'myPageInfoState',
//     storage: sessionStorage,
// });

// 마이페이지 정보 api get `/user`
export const myPageInfo = atom<IUserModel | undefined>({
    key: `myPageInfoState/${v1()}`,
    default: undefined,
});

export const isLogin = atom<{ login: boolean }>({
    key: `isLogin/${v1()}`,
    default: {
        login: false,
    },
});

// 댓글 신고하기
export const reportUserComment = atom<number>({
    key: `reportId/${v1()}`,
    default: undefined,
});

// 게시글 신고하기
export const reportUserWrite = atom<number>({
    key: `reportId/${v1()}`,
    default: undefined,
});
