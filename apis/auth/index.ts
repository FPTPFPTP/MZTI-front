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

            return res.data.data;
        } catch (error: any) {
            removeTokenAll();
            return false;
        }
    },
    { maxAge: 1000 },
);
