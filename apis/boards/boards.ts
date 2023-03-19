import Axios from '@utils/axios';
import { IResponseBase } from '@/types/global';
import { IBoardModel } from '@/types/board';

export const getBoards = async () => {
    const res = await Axios.get<IResponseBase<IBoardModel[]>>('/post/category');

    return res.data.data;
};
