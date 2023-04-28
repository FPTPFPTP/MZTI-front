import Axios from '@utils/axios';
import { IResponseBase } from '@/types/global';
import { useQuery } from '@tanstack/react-query';

export const getKeyword = async () => {
    const res = await Axios.get<IResponseBase<any>>(`/keyword`, {
        params: {
            page: 0,
            view: 8,
        },
    });

    return res.data.data;
};

/**
 * [API] GET 신고 유형
 * @returns
 */
export const useGetKeyword = () => {
    const { data } = useQuery(['getKeyword'], async () => {
        const data = await getKeyword();

        return data;
    });

    return data;
};
