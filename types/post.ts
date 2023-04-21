export interface IPostModel {
    id: number;
    title: string;
    categoryId: number;
    categoryName: string;
    content: string;
    createAt: string;
    updateAt: string;
    like: ILikeModel;
    command: ICommandModel;
    pollList: IPollModel[];
    tags: ITagModel[];
    writer: IWriterModel;
    bookmark: IBookmarkModel;
    viewCount: number;
}

export interface IPollModel {
    id: number;
    title?: string;
    startDate: string; // 투표 시작일
    endDate: string; // 투표 종료일
    checkCount: number; // 투표 항목 선택 횟수
    count: number; // 투표 참여 인원
    items: IPollQuestionModel[]; // 투표 항목
    self: boolean; // 투표 참여 여부
}

export interface IPollQuestionModel {
    id: number | string;
    item: string;
    image: string;
    self: boolean; // 투표 항목 선택 여부
    count: number;
}

export interface ITagModel {
    id: number;
    tag: string;
}

export interface IWriterModel {
    nickname: string;
    mbti: string;
    level: number;
    profileImage: string;
    userId?: number;
    id: number;
}
export type CheckProps = {
    check: boolean;
    count: number;
};
export interface ICommentModel {
    id: number;
    comment: string;
    createAt: string;
    writer: IWriterModel;
    like: CheckProps;
    subComment: CheckProps;
    deleted: boolean;
    image: string;
}

// 대댓글 타입
export interface IReCommentModal {
    id: number;
    comment: string;
    createAt: string;
    writer: IWriterModel;
    like: CheckProps;
    deleted: boolean;
}

// 좋아요 수 타입
export interface ILikeModel {
    check: boolean;
    count: number;
}

// 북마크 수 타입
export interface IBookmarkModel {
    check: boolean;
    count: number;
}

// 댓글 수 타입
export interface ICommandModel {
    check: boolean;
    count: number;
}

// 게시글 타입
export interface IPostMeModel {
    id: number;
    title: string;
    content: string;
    createAt: string;
}

// 피드 불러오기 타입
export interface IDetailPost {
    tag?: string;
    view?: number;
    page: number;
    content?: string;
    categoryId?: number;
}

// 마이페이지 내 활동 조회 타입
export interface IMyPageActive {
    post: number;
    comment: number;
    like: number;
}

// 댓글 추가 시 param에 넘겨줄 타입
export interface IAddComment {
    postId: number;
    comment: string;
    image: string;
}

// 댓글&대댓글 업데이트 타입
export interface IEditComment {
    id: number;
    comment: string;
    image?: string;
}

// 대댓글 추가 시 param에 넘겨줄 타입
export interface IAddReComment {
    commentId: number;
    comment: string;
    image: string;
}

export interface IReComment<T> {
    list: ICommentModel[];
    page: number;
    view: number;
    totalPage: number;
    totalCount: number;
}

export interface ICommentParam {
    postId: number;
    page?: number;
    view?: number;
}
export interface IReCommentParam {
    commentId: number;
    page: number;
    view: number;
}

export interface ICommentProps {
    nickname: string;
    mbti: string;
    profileImage: string;
    userId: number;
    comment: string;
    like: number;
    createAt: string;
    writerId: string;
    likeCheck: boolean;
    subComment: number;
    image: string;
}
