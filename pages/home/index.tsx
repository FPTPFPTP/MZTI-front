import React, { useCallback, useEffect, useState } from 'react';
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
import { HomeMenu, searchWrap } from '@styles/pages/homeStyled';
import ListTab from '@/components/Home/ListTab';

const home = () => {
    const [searchText, setSearchText] = useState<string>('');
    const { register, watch, reset } = useForm<{ search: string }>();
    const { search } = watch();

    // 데이터 패칭
    const { data, fetchNextPage, hasNextPage, isLoading, isError } = useInfiniteQuery(
        ['page', searchText],
        ({ pageParam = 0 }) => getFeedPost({ page: pageParam, content: searchText, view: 5 }),
        {
            getNextPageParam: (lastPage, allPosts) => {
                return lastPage.page !== allPosts[0].totalPage ? lastPage.page + 1 : undefined;
            },
        },
    );

    useEffect(() => {
        console.log(data);
    }, [data]);

    if (isLoading) return <h3>로딩중</h3>;
    if (isError) return <h3>잘못된 데이터 입니다.</h3>;

    const handleOnKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            console.log('searchText', searchText);
            setSearchText(search);
        }
    };

    return (
        <main>
            {/* 헤더 */}

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

            <div css={searchWrap}>
                <form>
                    <Input
                        inputStyle={'search'}
                        placeholder={'관심있는 MBTI, 키워드, 이슈 검색'}
                        isResetBtn={!!search}
                        handleReset={() => reset()}
                        maxLength={8}
                        onKeyPress={handleOnKeyPress}
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
                {data.pages[0].list.length === 0 ? <h1>검색 결과가 없습니다.</h1> : <FeedItem data={data} />}
            </InfiniteScroll>
            {/* 메뉴 */}
            <BottomMenu />
        </main>
    );
};

export default home;
