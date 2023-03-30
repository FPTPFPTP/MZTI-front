import Axios from '@utils/axios';
import { IPaginationResponseFake } from '@/types/global';
import { IMypageWriteModel } from '@/types/mypageWrite';

export const getWriteList = async ({ pageParam, search }: { pageParam: number; search: string }) => {
    const res = await Axios.get<IPaginationResponseFake<IMypageWriteModel>>('/post/me', { params: { pageParam, search } });

    return res.data;
};
