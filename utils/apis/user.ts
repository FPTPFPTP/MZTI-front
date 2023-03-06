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
