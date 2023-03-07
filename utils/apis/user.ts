import Axios from '@utils/axios';
// import { IUserModel } from '@/types/user';

/**
 * TODO : response 타입 지정하기
 * @returns
 */
export const getMyPage = async () => {
    const res = await Axios.get('/user');
    return res.data.data;
};

// 프로필 사진 수정
export const patchProfile = async () => {
    const res = await Axios.patch('/user/profile');
    return res.data.data;
};

// 닉네임 수정
export const patchNickName = async () => {
    const res = await Axios.patch('/user/nickname');
    return res.data.data;
};

// mbti 수정
export const patchMbti = async () => {
    const res = await Axios.patch('/user/mbti');
    return res.data.data;
};

// 한 줄 소개 수정
export const patchIntro = async () => {
    const res = await Axios.patch('/user/intro');
    return res.data.data;
};
