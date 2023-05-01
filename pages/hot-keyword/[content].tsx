import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';
import FeedItem from '@/components/Home/FeedItem';
import { Input, BottomMenu, Header } from '@components/Commons';
import { useInfiniteQuery } from '@tanstack/react-query';
import InfiniteScroll from 'react-infinite-scroller';
import { searchWrap } from '@styles/pages/homeStyled';
import HotKeyword from '@/components/Home/HotKeyword';
import { getFeedPost } from '@/apis/post';
import FeedHeader from '@/components/Commons/FeedHeader';

interface IBoardProps {
    content: string; // 키워드
}

const keywordBoard = ({ content }: IBoardProps) => {
    const router = useRouter();

    // 데이터 패칭
    const { data, fetchNextPage, hasNextPage, isLoading } = useInfiniteQuery(
        ['page'],
        ({ pageParam = 0 }) => getFeedPost({ page: pageParam, content: content }),
        {
            getNextPageParam: (lastPage, allPosts) => {
                return lastPage.page !== allPosts[0].totalPage ? lastPage.page + 1 : undefined;
            },
        },
    );

    return (
        <main className="homeLayout">
            {/* 헤더 */}
            <Header isPrevBtn={true} title="🔥실시간 HOT 키워드" />

            <HotKeyword title="지금 사람들이 가장 궁금해하는건?" more={false} content={content} />
            <section className="titleSection">
                <h3>#{content}</h3>
            </section>

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

export default keywordBoard;

export const getServerSideProps: GetServerSideProps = async ({ req, params }: any) => {
    return {
        props: {
            content: params.content,
        },
    };
};
