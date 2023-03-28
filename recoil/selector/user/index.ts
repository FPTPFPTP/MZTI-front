import { IUserModel } from '@/types/user';
import { selector } from 'recoil';
import axios from 'utils/axios';

const getUserInfo = async () => {
    const res = await axios.get(`/user`);
    return res.data.data;
};

export const userSelector = selector<IUserModel>({
    key: 'userInfo',
    get: async () => {
        try {
            const res = await getUserInfo();
            return res;
        } catch (error: any) {
            console.log('error', error);
        }
    },
});
