import Axios from '@utils/axios';
import { IPostModel, ITagModel, IPollModel } from '@/types/post';

export interface IPostWriteReq extends Pick<IPostModel, 'title' | 'categoryId' | 'content'> {
    tagList: Omit<ITagModel, 'tag'>[];
    pollList: Omit<IPollModel, 'id'>[];
}

export const postWrite = async (form: IPostWriteReq) => {
    console.log({ form });
    const res = await Axios.post('/post', { ...form });
    console.log({ res });
    return res.data;
};
