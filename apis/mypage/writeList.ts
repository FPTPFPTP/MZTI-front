import Axios from '@utils/axios';
import { IMypageWriteModel } from '@/types/mypageWrite';

export const getWriteList = async (page: number, search: string) => {
    const res = await Axios.get<IMypageWriteModel[]>('/api/mypageList', { params: { page, search } });

    return res.data;
};
