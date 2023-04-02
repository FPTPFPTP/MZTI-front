import { useForm } from 'react-hook-form';
import FeedItem from '@/components/Home/FeedItem';
import HotKeyword from '@/components/Home/HotKeyword';
import { Input, BottomMenu } from '@components/Commons';
import MyPageIcon from '@assets/icons/header/mypage.svg';
import { useInfiniteQuery } from '@tanstack/react-query';
import InfiniteScroll from 'react-infinite-scroller';
import Link from 'next/link';
import { HomeMenu, searchWrap } from '@styles/pages/homeStyled';
import ListTab from '@/components/Home/ListTab';
import { Empty } from '@/components/MyPageCom';
import { getFeedPost } from '@/apis/post';

const home = () => {
    const { register, watch, reset, setValue } = useForm<{ search: string }>();
    const { search } = watch();

    // 데이터 패칭
    const { data, fetchNextPage, hasNextPage, isLoading, isError } = useInfiniteQuery(
        ['page', search],
        ({ pageParam = 0 }) => getFeedPost({ page: pageParam, content: search, view: 5 }),
        {
            getNextPageParam: (lastPage, allPosts) => {
                return lastPage.page !== allPosts[0].totalPage ? lastPage.page + 1 : undefined;
            },
            staleTime: 3000,
        },
    );

    // if (isLoading) return <h3>로딩중</h3>;
    // if (isError) return <h3>잘못된 데이터 입니다.</h3>;

    const handleOnClick = () => {
        setValue('search', '');
    };

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
                <form>
                    <Input
                        inputStyle={'search'}
                        placeholder={'관심있는 MBTI, 키워드, 이슈 검색'}
                        isResetBtn={!!search}
                        handleReset={() => reset()}
                        maxLength={8}
                        {...register('search')}
                    />
                </form>
            </div>

            {data?.pages[0].list.length !== 0 && (
                <>
                    {/* 인기 게시판 & 전체 게시판 */}
                    <ListTab />
                    {/* 핫토픽 키워드 */}
                    <HotKeyword />
                </>
            )}

            {/* 피드 게시물 */}
            <InfiniteScroll hasMore={hasNextPage} loadMore={() => fetchNextPage()}>
                {data?.pages[0].list.length === 0 ? (
                    <Empty title="검색한 결과가 없습니다" subTitle="다른 검색어로 검색해보세요" buttonTitle="돌아가기" onClick={handleOnClick} />
                ) : (
                    <FeedItem data={data && data} />
                )}
            </InfiniteScroll>
            {/* 메뉴 */}
            <BottomMenu />
        </main>
    );
};

export default home;
