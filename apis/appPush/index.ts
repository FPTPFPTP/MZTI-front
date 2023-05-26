import Axios from '@utils/axios';
import { IResponseBase } from '@/types/global';
/**
 * [API] POST App Push Token 서버에 전달
 * @returns
 */
export const postUserPushToken = async ({ token }: { token: string }) => {
    try {
        const res = await Axios.post<IResponseBase<any>>(`/user/push`, null, {
            params: { token },
        });

        return res.data;
    } catch (error: any) {
        return false;
    }
};
