import { useRouter } from 'next/router';
import { Empty } from '@/components/MyPageCom';
import { useState } from 'react';
import FeedItem from '@/components/Home/FeedItem';
import HotKeyword from '@/components/Home/HotKeyword';
import { Input, BottomMenu } from '@components/Commons';
import { useInfiniteQuery } from '@tanstack/react-query';
import InfiniteScroll from 'react-infinite-scroller';
import { searchWrap, FeedContentStyle } from '@styles/pages/homeStyled';
import ListTab from '@/components/Home/ListTab';
import { getFeedPost } from '@/apis/post';
import EmptyWrite from '@assets/icons/common/empty_write.svg';
import FeedHeader from '@/components/Commons/FeedHeader';

const home = () => {
    const router = useRouter();
    const [countIndex, setCountIndex] = useState<number | undefined>(22);

    // 데이터 패칭
    const { data, fetchNextPage, hasNextPage, isLoading } = useInfiniteQuery(
        ['page', countIndex],
        ({ pageParam = 0 }) => getFeedPost({ page: pageParam, categoryId: countIndex, view: 10 }),
        {
            getNextPageParam: (lastPage, allPosts) => {
                return lastPage.page !== allPosts[0].totalPage ? lastPage.page + 1 : undefined;
            },
        },
    );

    return (
        <main className="homeLayout">
            <>
                {/* 헤더 */}
                <FeedHeader />

                <div css={searchWrap}>
                    <Input inputStyle={'search'} placeholder={'관심있는 MBTI, 키워드, 이슈 검색'} onClick={() => router.push('/search')} />
                </div>

                <div css={FeedContentStyle}>
                    {/* 인기 게시판 & 전체 게시판 */}
                    <ListTab categoryId={countIndex} handleCategoryId={(id) => setCountIndex(id)} />

                    {/* 핫토픽 키워드 */}
                    <HotKeyword title="🔥실시간 HOT 키워드" more={true} />

                    {/* 피드 게시물 */}
                    {data && data.pages.length && data.pages[0].list.length !== 0 ? (
                        <InfiniteScroll hasMore={hasNextPage} loadMore={() => fetchNextPage()}>
                            <FeedItem data={data} isLoading={isLoading} />
                        </InfiniteScroll>
                    ) : (
                        <Empty icon={<EmptyWrite />} title="작성된 글이 없습니다." subTitle={`게시글을 작성해주세요`} />
                    )}
                </div>
            </>
            {/* 메뉴 */}
            <BottomMenu />
        </main>
    );
};

export default home;
