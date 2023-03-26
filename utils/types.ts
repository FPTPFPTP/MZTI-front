export enum CODE {
    SUCCESS = 'SUCCESS',
    FAILED = 'FAILED',
}

// 투표 리스트
export type PollListProps = {
    id: number;
    title: string;
    startDate: string;
    endDate: string;
    checkCount: number;
    items: PollItemProps[];
};

// 투표 아이템
export type PollItemProps = {
    id: number;
    item: string;
    image: string;
};

// 태그
export type TagProps = {
    id: number;
    tag: string;
};

// 게시글 작성자
export type WriterProps = {
    nickname: string;
    mbti: string;
    level: number;
    profileImage: string;
    moreBtn?: boolean;
    createAt?: any;
    userId?: number;
};

export type CheckProps = {
    check: boolean;
    count: number;
};

// 게시글
export type FeedItemProps = {
    id: number;
    title: string; // 제목
    categoryId?: number;
    categoryName?: string; // 카테고리명
    content: string; // 게시글 내용
    createAt?: string; // 작성시간
    updateAt?: string;
    like?: CheckProps; // 좋아요
    bookmark?: CheckProps; // 북마크 수
    command?: CheckProps; // 댓글수
    pollList?: PollListProps[]; // 투표
    tags?: TagProps[]; // 태그
    writer: WriterProps; // 작성자
};

export type PageInfo = {
    list: [];
    page: number;
    totalPage: number;
    view: number;
};
