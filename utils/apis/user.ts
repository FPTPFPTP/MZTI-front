import Axios from '@utils/axios';

interface IDetailPost {
    tag?: string;
    view: number;
    page: number;
    content: string;
}

// 마이페이지
export const getMyPage = async () => {
    const res = await Axios.get('/user');
    return res.data.data;
};

// 마이페이지 게시물 갯수 조회 (작성한 글, 댓글, 받은 추천수)
export const getMyPageActive = async () => {
    const res = await Axios.get('/post/user');
    return res.data.data;
};

// 피드 불러오기
export const getFeedPost = async ({ page, content, view, tag }: IDetailPost) => {
    const res = await Axios.get(`/post`, {
        params: {
            page,
            view,
            content,
            tag,
        },
    });
    return res.data.data;
};

// 피드 불러오기
export const getDetailPost = async (id: number) => {
    const res = await Axios.get(`/post/${id}`);
    return res.data;
};
