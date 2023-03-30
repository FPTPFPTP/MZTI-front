import Axios from '@utils/axios';
import { IResponseBase } from '@/types/global';
import { IUserModel } from '@/types/user';

// 사용자 정보 가져오기
export const getMeUserInfo = async () => {
    const res = await Axios.get<IResponseBase<IUserModel>>('/user');

    return res.data.data;
};
