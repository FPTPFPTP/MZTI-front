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

// 일반 댓글/대댓글 내용
export const commentText = atom<string>({
    key: `commentText/${v1()}`,
    default: '',
});

// 수정할 댓글/대댓글 내용
export const commentContent = atom<string>({
    key: `commentContent/${v1()}`,
    default: '',
});

// 수정하기 클릭했을 때, 수정하기 전용 댓글 입력창
export const commentModify = atom<boolean>({
    key: `commentModify/${v1()}`,
    default: false,
});

// 수정할 댓글 아이디
export const commentModifyId = atom<number>({
    key: `commentModifyId/${v1()}`,
    default: 0,
});
