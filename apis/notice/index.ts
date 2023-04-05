import Axios from '@utils/axios';
import { IPageObjReqModel, IResponseBase, IPaginationResponse } from '@/types/global';
import { useQuery, useInfiniteQuery } from '@tanstack/react-query';

interface INoticeProps {
    id: number;
    title: string;
    createAt: string;
}

const getNotice = async ({ page, view, search }: IPageObjReqModel) => {
    const res = await Axios.get<IResponseBase<IPaginationResponse<INoticeProps>>>('/notice', { params: { page, view, search } });

    return res.data.data;
};

/**
 * [API] GET 신고 유형
 * @returns
 */
export const useGetNotice = (search: string) => {
    const res = useInfiniteQuery(['notice', search], ({ pageParam = 0 }) => getNotice({ page: pageParam, view: 15, search }), {
        getNextPageParam: (lastPage) => {
            const nextPage = lastPage.page + 1;

            return lastPage.list.length !== 0 ? nextPage : undefined;
        },
    });
    const { data } = res;

    const contents = data ? data.pages.map((page) => page.list).reduce((mergedList, currentlist) => [...mergedList, ...(currentlist || [])], []) : [];

    return { ...res, contents };
};

export const getDetailNotice = async (id?: number) => {
    const res = await Axios.get<IResponseBase<any>>(`/notice/${id}`);

    return res.data.data;
};

/**
 * [API] GET 신고 유형
 * @returns
 */
export const useGetDetailNotice = () => {
    const { data } = useQuery(['getDetailNotice'], async () => {
        const data = await getDetailNotice();

        return data;
    });

    return data;
};
