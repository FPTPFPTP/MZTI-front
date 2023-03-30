import Axios from '@utils/axios';
import { IResponseBase } from '@/types/global';
import { useQuery } from '@tanstack/react-query';
import { ISupportModel } from '@/types/support';

interface ISupportProps {
    type: number;
    content: string;
}
const getSupportCategory = async () => {
    const res = await Axios.get<IResponseBase<ISupportModel[]>>('/support/type');

    return res.data.data;
};

export const useGetSupportCategory = () => {
    const { data } = useQuery(['getSupportCategory'], async () => {
        const data = await getSupportCategory();

        return data;
    });

    return data;
};

export const postSupport = async (form: ISupportProps) => {
    const res = await Axios.post<IResponseBase<any>>('/support', { ...form });

    return res.data;
};
