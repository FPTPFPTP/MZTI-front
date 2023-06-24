import Axios from '@utils/axios';
import { IPaginationResponse, IResponseBase, IAdminList } from '@/types/global';
import { useQuery } from '@tanstack/react-query';

// 어드민 페이지 서포트
export const getAdminSupportId = async (supportId: number) => {
    const res = await Axios.get<IResponseBase<IPaginationResponse<IAdminList>>>(`/admin/support/${supportId}`);

    return res.data.data;
};

export const postAdminSupport = async (supportId: number) => {
    const res = await Axios.post<IResponseBase<IPaginationResponse<IAdminList>>>(`/admin/support/${supportId}`);

    return res.data.data;
};

// 서포트 목록
export const getAdminSupport = async () => {
    const res = await Axios.get<IResponseBase<IPaginationResponse<IAdminList>>>(`/admin/support`);

    return res.data.data;
};

/**
 * [API] 어드민 페이지 USER
 * @returns
 */
export const useGetAdminSupport = () => {
    return useQuery(['getAdminSupport'], async () => {
        const data = await getAdminSupport();

        return data;
    });
};

// 어드민 페이지 신고
export const getAdminReport = async () => {
    const res = await Axios.get<IResponseBase<IPaginationResponse<IAdminList>>>(`/admin/report`);

    return res.data.data;
};

export const useGetAdminReport = () => {
    return useQuery(['getAdminReport'], async () => {
        const data = await getAdminReport();

        return data;
    });
};

export const postAdminReport = async (id: number) => {
    const res = await Axios.post<IResponseBase<IPaginationResponse<IAdminList>>>(`/admin/report/check/${id}`);

    return res.data.data;
};

// 어드민 알림
export const postAdminAlarm = async (userId: number) => {
    const res = await Axios.post<IResponseBase<IPaginationResponse<IAdminList>>>(`/admin/report/user/${userId}`);

    return res.data.data;
};

// 어드민 공지사항
export const getAdminNotice = async () => {
    const res = await Axios.get<IResponseBase<IPaginationResponse<IAdminList>>>(`/notice`);

    return res.data.data;
};

export const useGetAdminNotice = () => {
    return useQuery(['getNotice'], async () => {
        const data = await getAdminNotice();

        return data;
    });
};

// 어드민 공지사항 작성하기
export const postAdminNotice = async ({ title, content }: { title: string; content: string }) => {
    const res = await Axios.post<IResponseBase<IPaginationResponse<IAdminList>>>(`/admin/notice`, {
        params: {
            title: title,
            content: content,
        },
    });

    return res.data.data;
};

export const getAdminUser = async () => {
    const res = await Axios.get<IResponseBase<IPaginationResponse<IAdminList>>>(`/admin/user`);

    return res.data.data;
};

/**
 * [API] 어드민 페이지 USER
 * @returns
 */
export const useGetAdminUser = () => {
    return useQuery(['getKeyword'], async () => {
        const data = await getAdminUser();

        return data;
    });
};

export const deleteAdminPost = async (postId: number) => {
    const res = await Axios.delete<IResponseBase<number>>(`/admin/post/${postId}`);

    return res.data.data;
};

export const deleteAdminComment = async (commentId: number) => {
    const res = await Axios.delete<IResponseBase<number>>(`/admin/comment/${commentId}`);

    return res.data.data;
};
