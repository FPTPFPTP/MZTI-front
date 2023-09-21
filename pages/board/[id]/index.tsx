import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';
import { useRecoilValue } from 'recoil';
import { prevScrollState } from '@/recoil/atom/scroll';
import FeedItems from '@/components/Home/FeedItems';
import { Header, Input, BottomMenu, HeadMeta } from '@components/Commons';
import { useInfiniteQuery } from '@tanstack/react-query';
import InfiniteScroll from 'react-infinite-scroller';
import { getFeedPost, useGetMbtiNotice } from '@/apis/post';
import { categoryUrlToId, categoryIdToTitle } from '@utils/category';
import { Empty } from '@/components/MyPageCom';
import EmptyWrite from '@assets/icons/common/empty_write.svg';
import { FeedContentStyle } from '@styles/pages/homeStyled';
import { SearchWrapStyle } from '@/components/Commons/FeedHeader/styled';
import FeedSkeleton from '@/components/Skeleton/FeedSkeleton';
import { useEffect, useMemo } from 'react';
import SpeechIcon from '@assets/icons/boardList/speech.svg';
import Link from 'next/link';

interface IBoardProps {
    id: number;
}

const board = ({ id }: IBoardProps) => {
    const router = useRouter();
    const noticeApi = useGetMbtiNotice(id);

    const prevScroll = useRecoilValue(prevScrollState);

    const categoryTitle = useMemo(() => {
        if (id === 1) {
            return '자유';
        } else if (id === 22) {
            return '인기';
        } else {
            return categoryIdToTitle(id);
        }
    }, [id]);

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

    useEffect(() => {
        if (prevScroll > 0) {
            window.scrollTo(0, prevScroll);
        }
    }, [router.pathname]);

    return (
        <>
            <HeadMeta title={`${categoryTitle} 게시판`} url={router.asPath} />
            <main className="homeLayout">
                {/* 헤더 */}
                <Header isPrevBtn={true} title={`${categoryTitle} 게시판`} isBorderLine={false} />

                <div css={FeedContentStyle}>
                    <div css={SearchWrapStyle} style={{ margin: '0px 0px 10px' }}>
                        <Input inputStyle={'search'} placeholder={'관심있는 MBTI, 키워드, 이슈 검색'} onClick={() => router.push(`/search/${id}`)} />
                    </div>

                    {noticeApi?.length !== 0 && (
                        <ul className="mbtiNotice">
                            {noticeApi?.map((item) => {
                                return (
                                    <li key={item.id}>
                                        <Link href={`/boardDetail/${item.id}`}>
                                            <span>
                                                <SpeechIcon />
                                            </span>
                                            <p>{item.title}</p>
                                        </Link>
                                    </li>
                                );
                            })}
                        </ul>
                    )}

                    {/* 피드 게시물 */}
                    {isLoading ? (
                        <>
                            <FeedSkeleton />
                            <FeedSkeleton />
                            <FeedSkeleton />
                        </>
                    ) : (
                        <>
                            {data && data.pages.length && data.pages[0].list.length !== 0 ? (
                                <InfiniteScroll hasMore={hasNextPage} loadMore={() => fetchNextPage()}>
                                    <FeedItems data={data} />
                                </InfiniteScroll>
                            ) : (
                                <Empty icon={<EmptyWrite />} title="작성된 글이 없습니다." subTitle={`게시글을 작성해주세요`} />
                            )}
                        </>
                    )}
                </div>

                {/* 메뉴 */}
                <BottomMenu />
            </main>
        </>
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
