import Axios from '@utils/axios';

import { IResponseBase } from '@/types/global';
import { ITagModel } from '@/types/post';

export const getTags = async ({ tag }: { tag: string }) => {
    const res = await Axios.get<IResponseBase<ITagModel[]>>('/post/tag', { params: { tag: tag.length ? tag : undefined } });

    return res.data.data;
};

export const postTag = async (tagTitle: string) => {
    const res = await Axios.post<IResponseBase<ITagModel>>('/post/tag', { tag: tagTitle });

    return res.data.data;
};
