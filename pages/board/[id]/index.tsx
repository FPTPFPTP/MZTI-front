import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';
import Link from 'next/link';
import FeedItem from '@/components/Home/FeedItem';
import { Input, BottomMenu } from '@components/Commons';
import MyPageIcon from '@assets/icons/header/mypage.svg';
import { useInfiniteQuery } from '@tanstack/react-query';
import InfiniteScroll from 'react-infinite-scroller';
import { HomeMenu, searchWrap } from '@styles/pages/homeStyled';
import { getFeedPost } from '@/apis/post';

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
        <main>
            {/* 헤더 */}
            <div css={HomeMenu}>
                <h1>MZTI</h1>

                <div className="right">
                    {/* TODO : 2차 오픈때 개발 예정 */}
                    {/* <Link href="/alarm" className="alarm">
                        <AlarmIcon />
                    </Link> */}
                    <Link href="/mypage">
                        <MyPageIcon />
                    </Link>
                </div>
            </div>

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
            id: Number(params.id),
        },
    };
};
