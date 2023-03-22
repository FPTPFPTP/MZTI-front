import InfiniteScroll from 'react-infinite-scroller';
import { getFeedPost } from '@/utils/apis/user';
import { FeedItemProps } from '@/utils/types';
import { useInfiniteQuery } from '@tanstack/react-query';
import ItemContent from './ItemContent';
import ItemFooter from './ItemFooter';
import ItemHeader from './ItemHeader';
import { FeedItemStyle } from './styled';
import { useEffect } from 'react';
import Link from 'next/link';

const FeedItem = () => {
    const { data, fetchNextPage, hasNextPage, isLoading, isError } = useInfiniteQuery(['posts'], ({ pageParam = 1 }) => getFeedPost(pageParam));

    console.log('--->', data?.pages);

    if (isLoading) return <h3>로딩중</h3>;
    if (isError) return <h3>잘못된 데이터 입니다.</h3>;

    return (
        <InfiniteScroll hasMore={hasNextPage} loadMore={() => fetchNextPage}>
            <div css={FeedItemStyle}>
                {data?.pages[0].map((item: FeedItemProps) => {
                    return (
                        <div className="feedLayout" key={item.id}>
                            <div className="feedLayout__bg">
                                <ItemHeader
                                    nickname={item.writer?.nickname}
                                    mbti={item.writer?.mbti}
                                    level={item.writer?.level}
                                    profileImage={item.writer?.profileImage}
                                    createAt={item.createAt}
                                />
                                <Link href={`/home/detail`}>
                                    <ItemContent
                                        key={item.id}
                                        id={item.id}
                                        title={item.title}
                                        content={item.content}
                                        pollList={item.pollList && item.pollList}
                                        tags={item.tags && item.tags}
                                    />
                                </Link>

                                <ItemFooter like={item.like} command={item.command} />
                            </div>
                        </div>
                    );
                })}
            </div>
        </InfiniteScroll>
    );
};

export default FeedItem;
