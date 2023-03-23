import Axios from '@utils/axios';
import { IPostModel, IPollModel } from '@/types/post';

export interface IPostWriteReq extends Pick<IPostModel, 'title' | 'categoryId' | 'content'> {
    tagList: number[];
    pollList: Omit<IPollModel, 'id'>[];
}

export const postWrite = async (form: IPostWriteReq) => {
    const res = await Axios.post('/post', { ...form });

    return res.data;
};
