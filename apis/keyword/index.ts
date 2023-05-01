import Axios from '@utils/axios';
import { IResponseBase } from '@/types/global';
import { useQuery } from '@tanstack/react-query';

export const getKeyword = async (page: number) => {
    const res = await Axios.get<IResponseBase<string[]>>(`/keyword`, {
        params: {
            page: page,
            view: 8,
        },
    });

    return res.data.data;
};

/**
 * [API] GET 신고 유형
 * @returns
 */
export const useGetKeyword = (page: number) => {
    const { data } = useQuery(['getKeyword'], async () => {
        const data = await getKeyword(page);

        return data;
    });

    return data;
};
