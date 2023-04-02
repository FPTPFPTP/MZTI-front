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
}

export interface ILikeModel {
    check: boolean;
    count: number;
}

export interface IBookmarkModel {
    check: boolean;
    count: number;
}
export interface ICommandModel {
    check: boolean;
    count: number;
}

export interface IPostMeModel {
    id: number;
    content: string;
    createAt: string;
}

export interface IPostCommentMeModel {
    id: number;
    content: string;
    createAt: string;
}

export interface IPostBookMarkModel {
    id: number;
    content: string;
    createAt: string;
}

// 피드 불러오기 타입
export interface IDetailPost {
    tag?: string;
    view: number;
    page: number;
    content: string;
}

// 마이페이지 내 활동 조회 타입
export interface IMyPageActive {
    post: number;
    comment: number;
    like: number;
}

export interface IAddComment {
    postId: number;
    comment: string;
}
