import Axios from '@utils/axios';
import { IResponseBase } from '@/types/global';
import { getAccessToken } from '@utils/auth';

/**
 * [API] POST App Push Token 서버에 전달
 * @returns
 */
export const postUserPushToken = async ({ token }: { token: string }) => {
    try {
        Axios.defaults.headers.common['Authorization'] = getAccessToken() ? `Bearer ${getAccessToken()}` : '';

        const res = await Axios.post<IResponseBase<any>>(`/alarm/token`, {
            token,
        });

        return res.data;
    } catch (error: any) {
        return false;
    }
};
