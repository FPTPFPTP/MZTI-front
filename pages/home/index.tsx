import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import BottomMenu from '@/components/Commons/BottomMenu';
import FeedItem from '@/components/Home/FeedItem';
import HotKeyword from '@/components/Home/HotKeyword';
import { Header, Input } from '@components/Commons';
import AlarmIcon from '@assets/icons/header/alarm.svg';
import MyPageIcon from '@assets/icons/header/mypage.svg';
import { useInfiniteQuery } from '@tanstack/react-query';
import InfiniteScroll from 'react-infinite-scroller';
import { getFeedPost } from '@/utils/apis/user';
import Link from 'next/link';
import { HomeMenu, searchWrap } from './styled';
import ListTab from '@/components/Home/ListTab';

const home = () => {
    // 검색
    const [searchValue, setSearchValue] = useState<string>('');
    const { register, watch, handleSubmit, reset } = useForm<{ search: string }>();
    const { search } = watch();

    const onSubmit = (data: { search: string }) => {
        setSearchValue(data.search);
    };

    // 데이터 패칭
    const { data, fetchNextPage, hasNextPage, isLoading, isError, isFetchingNextPage } = useInfiniteQuery(
        ['page'],
        ({ pageParam = 0 }) => getFeedPost(pageParam),
        {
            getNextPageParam: (lastPage, allPosts) => {
                return lastPage.page !== allPosts[0].totalPage ? lastPage.page + 1 : undefined;
            },
        },
    );

    if (isLoading) return <h3>로딩중</h3>;
    if (isError) return <h3>잘못된 데이터 입니다.</h3>;

    return (
        <main>
            {/* 헤더 */}
            <Header
                isPrevBtn={false}
                rightElement={
                    <div css={HomeMenu}>
                        <h1>MZTI</h1>

                        <div className="right">
                            <Link href="/alarm" className="alarm">
                                <AlarmIcon />
                            </Link>
                            <Link href="/mypage">
                                <MyPageIcon />
                            </Link>
                        </div>
                    </div>
                }
            />

            <div css={searchWrap}>
                <form onSubmit={handleSubmit(onSubmit)}>
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

            {/* 인기 게시판 & 전체 게시판 */}
            <ListTab />

            {/* 핫토픽 키워드 */}
            <HotKeyword />

            {/* 피드 게시물 */}
            <InfiniteScroll hasMore={hasNextPage} loadMore={() => fetchNextPage()}>
                <FeedItem data={data} />
            </InfiniteScroll>

            {/* 메뉴 */}
            <BottomMenu />
        </main>
    );
};

export default home;
