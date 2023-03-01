import { useInfiniteQuery } from '@tanstack/react-query';
import { getWriteCommentList } from '@apis/mypage';

export const useGetComments = (search: string) => {
    const res = useInfiniteQuery(['writeList'], ({ pageParam = 0 }) => getWriteCommentList({ pageParam, search }), {
        getNextPageParam: (lastPage, allPages) => {
            const nextPage = allPages.length;

            return lastPage.contents.length !== 0 ? nextPage : undefined;
        },
    });
    const { data } = res;

    const contents = data
        ? data.pages.map((page) => page.contents).reduce((mergedContents, currentContents) => [...mergedContents, ...(currentContents || [])], [])
        : [];

    return { ...res, contents };
};
