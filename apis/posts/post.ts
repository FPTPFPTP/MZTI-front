import Axios from '@utils/axios';

import { IResponseBase } from '@/types/global';
import { IPostModel } from '@/types/post';

export const getPost = async ({ postId }: { postId: number }) => {
    const res = await Axios.get<IResponseBase<IPostModel>>(`/post/${postId}`);

    return res.data.data;
};
