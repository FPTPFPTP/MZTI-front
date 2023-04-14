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

// 대댓글 창 띄우기
export const replayCommentState = atom<boolean>({
    key: `replayComment/${v1()}`,
    default: false,
});

// 해당 댓글 대댓글 할 때 id값 저장
export const replayCommentId = atom<number>({
    key: `replayCommentId/${v1()}`,
    default: 0,
});

// 대댓글 창 띄우기
export const replayCommentViewState = atom<number>({
    key: `replayCommentViewState/${v1()}`,
    default: 5,
});
