import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';
import FeedItem from '@/components/Home/FeedItem';
import { Input, BottomMenu } from '@components/Commons';
import { useInfiniteQuery } from '@tanstack/react-query';
import InfiniteScroll from 'react-infinite-scroller';
import { getFeedPost } from '@/apis/post';
import FeedHeader from '@/components/Commons/FeedHeader';
import { categoryUrlToId } from '@utils/category';
import { Empty } from '@/components/MyPageCom';
import EmptyWrite from '@assets/icons/common/empty_write.svg';

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
            <FeedHeader categoryId={id} />

            {/* 피드 게시물 */}
            {data && data.pages.length && data.pages[0].list.length !== 0 ? (
                <InfiniteScroll hasMore={hasNextPage} loadMore={() => fetchNextPage()}>
                    <FeedItem data={data} isLoading={isLoading} />
                </InfiniteScroll>
            ) : (
                <Empty icon={<EmptyWrite />} title="작성된 글이 없습니다." subTitle={`게시글을 작성해주세요`} />
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
