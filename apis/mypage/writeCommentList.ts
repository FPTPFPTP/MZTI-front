import axios from 'axios';
import { IPaginationResponse } from '@/types/global';
import { IMypageWriteModel } from '@/types/mypageWrite';

export const getWriteCommentList = async ({ pageParam, search }: { pageParam: number; search: string }) => {
    const res = await axios.get<IPaginationResponse<IMypageWriteModel>>('/api/mypageCommentList', { params: { pageParam, search } });

    return res.data;
};
