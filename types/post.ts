export interface IPostModel {
    id: number;
    title: string;
    categoryId: number;
    categoryName: string;
    content: string;
    createAt: string;
    updateAt: string;
    like: number;
    command: number;
    pollList: IPollModel[];
    tags: ITagModel[];
    writer: IWriterModel;
}

export interface IPollModel {
    id: number;
    title: string;
    startDate: string;
    endDate: string;
    checkCount: number;
    items: IPollQuestionModel[];
}

export interface IPollQuestionModel {
    id: number;
    item: string;
    image: string;
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
}
