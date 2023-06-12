import mem from 'mem';
import Axios from '@utils/axios';
import { removeTokenAll, getCookie, getRefreshToken } from '@/utils/auth';
import { IResponseBase } from '@/types/global';
import { ITokenModel } from '@/types/auth';

/**
 * [API] POST 토큰 재발급
 * @returns
 */
export const postLoginRefresh = mem(
    async () => {
        try {
            const res = await Axios.post<IResponseBase<ITokenModel>>('/login/refresh', {
                userId: getCookie('userId'),
                refresh: getRefreshToken(),
            });
            console.log('로그인 재요청에 성공했어요');
            return res.data.data;
        } catch (error: any) {
            console.log('로그인 재요청에 실패했어요');
            removeTokenAll();
            return false;
        }
    },
    { maxAge: 1000 },
);
