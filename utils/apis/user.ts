import Axios from '@utils/axios';

// 마이페이지
export const getMyPage = async () => {
    const res = await Axios.get('/user');
    return res.data.data;
};
