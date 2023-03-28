import Axios from '@utils/axios';
import { IResponseBase } from '@/types/global';
import { IPostModel, IPollModel } from '@/types/post';

export interface IPostWriteReq extends Pick<IPostModel, 'title' | 'categoryId' | 'content'> {
    tagList: number[];
    pollList: Pick<IPollModel, 'title' | 'startDate' | 'endDate' | 'checkCount'>[];
}

export const postWrite = async (form: IPostWriteReq) => {
    const res = await Axios.post<IResponseBase<any>>('/post', { ...form });

    return res.data;
};
