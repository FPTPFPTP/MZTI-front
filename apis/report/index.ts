import Axios from '@utils/axios';
import { IResponseBase } from '@/types/global';
import { useQuery } from '@tanstack/react-query';

interface IReportTypeProps {
    id: number;
    name: string;
}

interface IReportProps {
    target: number; // 해당 게시글이나 댓글
    reason: number; // reason에서 받아온 사유 id갓
    content: string; // 신고 내용
}

const getReportCategory = async () => {
    const res = await Axios.get<IResponseBase<IReportTypeProps[]>>('/report');

    return res.data.data;
};

/**
 * [API] GET 신고 유형
 * @returns
 */
export const useGetReportCategory = () => {
    const { data } = useQuery(['getReportCategory'], async () => {
        const data = await getReportCategory();

        return data;
    });

    return data;
};

/**
 * [API] GET 댓글 신고하기
 * @param form
 * @returns
 */
export const postReport = async (form: IReportProps) => {
    const res = await Axios.post<IResponseBase<IReportProps>>('/report/post', { ...form });

    return res.data;
};

/**
 * [API] GET 댓글 신고하기
 * @param form
 * @returns
 */
export const commentReport = async (form: IReportProps) => {
    const res = await Axios.post<IResponseBase<IReportProps>>('/report/comment', { ...form });

    return res.data;
};
