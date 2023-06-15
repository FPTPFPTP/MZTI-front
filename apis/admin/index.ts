import Axios from '@utils/axios';
import { IAdminUser, IAdminUserList, IResponseBase } from '@/types/global';
import { useQuery } from '@tanstack/react-query';

// 어드민 페이지 서포트
export const getAdminSupportId = async (supportId: number) => {
    const res = await Axios.get<IResponseBase<IAdminUser>>(`/admin/support/${supportId}`);

    return res.data.data;
};

export const postAdminSupport = async (supportId: number) => {
    const res = await Axios.post<IResponseBase<IAdminUser>>(`/admin/support/${supportId}`);

    return res.data.data;
};

export const getAdminSupport = async () => {
    const res = await Axios.get<IResponseBase<IAdminUser>>(`/admin/support`);

    return res.data.data;
};

// 어드민 페이지 신고
export const getAdminReport = async () => {
    const res = await Axios.get<IResponseBase<IAdminUser>>(`/admin/report`);

    return res.data.data;
};

export const postAdminReport = async (id: number) => {
    const res = await Axios.post<IResponseBase<IAdminUser>>(`/admin/report/check/${id}`);

    return res.data.data;
};

// 어드민 알림
export const postAdminAlarm = async (userId: number) => {
    const res = await Axios.post<IResponseBase<IAdminUser>>(`/admin/report/user/${userId}`);

    return res.data.data;
};

// 어드민 공지사항 신고
export const getAdminNotice = async () => {
    const res = await Axios.get<IResponseBase<IAdminUser>>(`/admin/notice`);

    return res.data.data;
};

export const getAdminUser = async (page: number, view: number, email: string) => {
    const res = await Axios.get<IResponseBase<IAdminUser>>(`/admin/user`, {
        params: {
            page: page,
            view: view,
            email: email,
        },
    });

    return res.data.data;
};

/**
 * [API] 어드민 페이지 USER
 * @returns
 */
export const useGetAdminUser = (page: number, view: number, email: string) => {
    const { data } = useQuery(['getKeyword'], async () => {
        const data = await getAdminUser(page, view, email);

        return data;
    });

    return data;
};

export const getAdminUserId = async (id: number) => {
    const res = await Axios.get<IResponseBase<IAdminUser>>(`/admin/user/${id}`);

    return res.data.data;
};

export const deleteAdminPost = async (postId: number) => {
    const res = await Axios.delete<IResponseBase<number>>(`/admin/post/${postId}`);

    return res.data.data;
};

export const deleteAdminComment = async (commentId: number) => {
    const res = await Axios.delete<IResponseBase<number>>(`/admin/comment/${commentId}`);

    return res.data.data;
};
