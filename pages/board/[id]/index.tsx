import { useState } from 'react';
import { GetServerSideProps } from 'next';
import Link from 'next/link';
import FeedItem from '@/components/Home/FeedItem';
import { Input, BottomMenu } from '@components/Commons';
import MyPageIcon from '@assets/icons/header/mypage.svg';
import { useInfiniteQuery } from '@tanstack/react-query';
import InfiniteScroll from 'react-infinite-scroller';
import { HomeMenu, searchWrap } from '@styles/pages/homeStyled';
import { getFeedPost } from '@/apis/post';
import Search from '@/components/Home/Search';

interface IBoardProps {
    id: number;
}

const board = ({ id }: IBoardProps) => {
    const [search, setSearch] = useState<boolean>(false);
    // 데이터 패칭
    const { data, fetchNextPage, hasNextPage } = useInfiniteQuery(['page'], ({ pageParam = 0 }) => getFeedPost({ page: pageParam, categoryId: Number(id) }), {
        getNextPageParam: (lastPage, allPosts) => {
            return lastPage.page !== allPosts[0].totalPage ? lastPage.page + 1 : undefined;
        },
    });

    const searchClose = () => {
        setSearch(false);
    };
    return (
        <main>
            {search ? (
                <Search searchClose={searchClose} />
            ) : (
                <>
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
                        <Input inputStyle={'search'} placeholder={'관심있는 MBTI, 키워드, 이슈 검색'} onFocus={() => setSearch(true)} />
                    </div>
                    {/* 피드 게시물 */}
                    {data && (
                        <InfiniteScroll hasMore={hasNextPage} loadMore={() => fetchNextPage()}>
                            <FeedItem data={data} />
                        </InfiniteScroll>
                    )}
                </>
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
