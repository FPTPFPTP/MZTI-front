import Axios from '@utils/axios';
import { IResponseBase } from '@/types/global';
import { IUserModel } from '@/types/user';

/**
 * [API] GET 마이페이지 정보 가져오기
 * @returns
 */
export const getMeUserInfo = async () => {
    const res = await Axios.get<IResponseBase<IUserModel>>('/user');

    return res.data.data;
};

/**
 * [API] POST 마이페이지 정보 수정하기
 * @returns
 */
export const postMeUserInfo = async ({ nickname, mbti, intro }: IUserModel) => {
    const res = await Axios.post<IResponseBase<IUserModel>>('/user', {
        nickname: nickname,
        mbti: mbti,
        intro: intro,
    });

    return res.data.data;
};

/**
 * [API] Delete 회원탈퇴
 * @returns
 */
export const secessionUser = async () => {
    const res = await Axios.delete<IResponseBase<any>>('/user');

    return res.data.data;
};
