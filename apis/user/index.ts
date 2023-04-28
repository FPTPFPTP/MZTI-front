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

/**
 * [API] POST 마이페이지 수정
 * @returns
 */
export const postMyPage = async ({ nickname, mbti, intro }: IUserModel) => {
    const res = await Axios.post<IResponseBase<IUserModel>>('/user', {
        nickname: nickname,
        mbti: mbti,
        intro: intro,
    });

    return res.data.data;
};

/**
 * [API] PATCH 넥네임 수정
 * @returns
 */
export const patchNickname = async ({ nickname }: { nickname: string }) => {
    const res = await Axios.patch<IResponseBase<IUserModel>>('/user/nickname', {
        nickname,
    });

    return res.data.data;
};

/**
 * [API] GET 넥네임 중복체크
 * @returns
 */
export const getNicknameCheck = async ({ nickname }: { nickname: string }) => {
    try {
        const res = await Axios.get<IResponseBase<any>>('/user/nickname/check', { params: { nickname } });

        return res.data;
    } catch (error) {
        return false;
    }
};

/**
 * [API] PATCH Mbti 수정
 * @returns
 */
export const patchMbti = async ({ mbti }: { mbti: string }) => {
    const res = await Axios.patch<IResponseBase<IUserModel>>('/user/mbti', {
        mbti,
    });

    return res.data.data;
};

/**
 * [API] PATCH 자기소개 수정
 * @returns
 */
export const patchIntroduce = async ({ intro }: { intro: string }) => {
    const res = await Axios.patch<IResponseBase<IUserModel>>('/user/intro', {
        intro,
    });

    return res.data.data;
};

/**
 * [API] PATCH 프로필 이미지 수정
 * @returns
 */
export const patchProfile = async ({ fmData }: { fmData: FormData }) => {
    const res = await Axios.patch<IResponseBase<IUserModel>>(`/user/profile`, fmData, {
        headers: {
            'content-type': 'multipart/form-data',
        },
    });

    return res.data.data;
};
