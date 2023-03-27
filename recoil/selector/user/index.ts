import { selector, selectorFamily } from 'recoil';
import axios from 'utils/axios';

// 국내 코인 거래소 인덱스
export const getUserInfo = selector({
    key: 'api/userInfo',
    get: () => async () => {
        const res = await axios.get(`/user`);
        console.log('res--->', res);

        return res.data;
    },
});
