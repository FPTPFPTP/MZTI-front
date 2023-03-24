import Axios from '@utils/axios';
import { useInfiniteQuery } from '@tanstack/react-query';

// 마이페이지
export const getMyPage = async () => {
    const res = await Axios.get('/user');
    return res.data.data;
};

// 피드 불러오기
export const getFeedPost = async (page: number) => {
    const res = await Axios.get(`/post?page=${page}&view=5`);
    return res.data.data;
};

// 피드 불러오기
export const getDetailPost = async (id: number) => {
    const res = await Axios.get(`/post/${id}`);
    return res.data;
};
