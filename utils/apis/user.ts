import axios from '../axios';

// 마이페이지
export const getMyPage = async () => {
    return await axios.get('/user');
};
