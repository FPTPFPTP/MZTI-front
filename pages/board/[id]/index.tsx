import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';
import FeedItem from '@/components/Home/FeedItem';
import { Input, BottomMenu } from '@components/Commons';
import { useInfiniteQuery } from '@tanstack/react-query';
import InfiniteScroll from 'react-infinite-scroller';
import { searchWrap } from '@styles/pages/homeStyled';
import { getFeedPost } from '@/apis/post';
import FeedHeader from '@/components/Commons/FeedHeader';
import { categoryUrlToId } from '@utils/menu';

interface IBoardProps {
    id: number;
}

const board = ({ id }: IBoardProps) => {
    const router = useRouter();

    // 데이터 패칭
    const { data, fetchNextPage, hasNextPage, isLoading } = useInfiniteQuery(
        ['page'],
        ({ pageParam = 0 }) => getFeedPost({ page: pageParam, categoryId: Number(id) }),
        {
            getNextPageParam: (lastPage, allPosts) => {
                return lastPage.page !== allPosts[0].totalPage ? lastPage.page + 1 : undefined;
            },
        },
    );

    return (
        <main className="homeLayout">
            {/* 헤더 */}
            <FeedHeader />

            <div css={searchWrap}>
                <Input inputStyle={'search'} placeholder={'관심있는 MBTI, 키워드, 이슈 검색'} onClick={() => router.push(`/search/${id}`)} />
            </div>
            {/* 피드 게시물 */}
            {data && (
                <InfiniteScroll hasMore={hasNextPage} loadMore={() => fetchNextPage()}>
                    <FeedItem data={data} isLoading={isLoading} />
                </InfiniteScroll>
            )}
            {/* 메뉴 */}
            <BottomMenu />
        </main>
    );
};

export default board;

export const getServerSideProps: GetServerSideProps = async ({ req, params }: any) => {
    return {
        props: {
            id: categoryUrlToId(params.id),
        },
    };
};
