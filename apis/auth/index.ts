import Axios from '@utils/axios';
import { removeTokenAll, setToken } from '@/utils/auth';
import { IResponseBase } from '@/types/global';
import { ITokenModel } from '@/types/auth';
/**
 * [API] POST 토큰 재발급
 * @returns
 */
export const postLoginRefresh = async ({ userId, refresh }: { userId: string; refresh: string }) => {
    try {
        const res = await Axios.post<IResponseBase<ITokenModel>>('/login/refresh', {
            userId,
            refresh,
        });

        if (res.data.data) {
            const tokenObj = res.data.data;
            const originalRequest = res.config;

            setToken('accessToken', tokenObj.accessToken);
            setToken('refreshToken', tokenObj.refreshToken);

            await Axios({
                ...originalRequest,
                headers: {
                    Authorization: `${tokenObj.grantType} ${tokenObj.accessToken}`,
                },
            });
        }
        return true;
    } catch (error: any) {
        if (error.status === 400) {
            removeTokenAll();
        }
        return false;
    }
};
