import Axios from '@utils/axios';
import { IPaginationResponse } from '@/types/global';
import { IMypageWriteModel } from '@/types/mypageWrite';

export const getWriteList = async ({ pageParam, search }: { pageParam: number; search: string }) => {
    const res = await Axios.get<IPaginationResponse<IMypageWriteModel>>('/api/mypageList', { params: { pageParam, search } });

    return res.data;
};
