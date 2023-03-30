import Axios from '@utils/axios';
import { useInfiniteQuery } from '@tanstack/react-query';
import { IResponseBase, IPageObjReqModel, IPaginationResponse } from '@/types/global';
import { IPostMeModel } from '@/types/post';

export const getPostsMe = async ({ page, view, search }: IPageObjReqModel) => {
    const res = await Axios.get<IResponseBase<IPaginationResponse<IPostMeModel>>>('/post/me', { params: { page, view, search } });

    return res.data.data;
};

export const useGetPostsMe = (search: string) => {
    const res = useInfiniteQuery(['postsMe', search], ({ pageParam = 0 }) => getPostsMe({ page: pageParam, view: 15, search }), {
        getNextPageParam: (lastPage) => {
            const nextPage = lastPage.page + 1;

            return lastPage.list.length !== 0 ? nextPage : undefined;
        },
    });
    const { data } = res;

    const contents = data ? data.pages.map((page) => page.list).reduce((mergedList, currentlist) => [...mergedList, ...(currentlist || [])], []) : [];

    return { ...res, contents };
};
