export interface IUserModel {
    data?(data: any): void | PromiseLike<void>;
    nickname: string;
    mbti: string;
    intro: string;
    profileImage?: string;
}
