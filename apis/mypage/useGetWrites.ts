import { useInfiniteQuery } from '@tanstack/react-query';
import { getWriteList } from '@apis/mypage';

export const useGetWrites = (search: string) => {
    const res = useInfiniteQuery(['writeList', search], ({ pageParam = 0 }) => getWriteList({ pageParam, search }), {
        getNextPageParam: (lastPage, allPages) => {
            const nextPage = allPages.length;

            return lastPage.contents?.length !== 0 ? nextPage : undefined;
        },
    });
    const { data } = res;

    const contents = data
        ? data.pages.map((page) => page.contents).reduce((mergedContents, currentContents) => [...mergedContents, ...(currentContents || [])], [])
        : [];

    return { ...res, contents };
};
