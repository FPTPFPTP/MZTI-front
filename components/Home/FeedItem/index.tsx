import { InfiniteData } from '@tanstack/react-query';
import { IPaginationResponse } from '@/types/global';
import { IPostModel } from '@/types/post';
import ItemContent from './ItemContent';
import ItemFooter from './ItemFooter';
import ItemHeader from './ItemHeader';
import { FeedItemStyle } from '../styled';
import Link from 'next/link';
import FeedSkeleton from '@/components/Skeleton/FeedSkeleton';

const FeedItem = ({ data, isLoading }: { data: InfiniteData<IPaginationResponse<IPostModel>>; isLoading: boolean }) => {
    return (
        <div css={FeedItemStyle}>
            {isLoading ? (
                <>
                    <FeedSkeleton />
                    <FeedSkeleton />
                    <FeedSkeleton />
                </>
            ) : (
                <>
                    {data?.pages.map((page) => {
                        return page.list.map((item) => {
                            return (
                                <div className="feedLayout" key={item.id}>
                                    <div className="feedLayout__bg">
                                        <ItemHeader writer={item.writer} createAt={item.createAt} writerID={item.id} categoryId={item.categoryId} />
                                        <Link href={`/boardDetail/${item.id}`}>
                                            <ItemContent
                                                id={item.id}
                                                title={item.title}
                                                content={item.content}
                                                pollList={item.pollList}
                                                tags={item.tags && item.tags}
                                            />
                                        </Link>
                                        <ItemFooter
                                            likeCheck={item.like.check}
                                            viewCount={item.viewCount}
                                            postId={item.id}
                                            like={item.like.count}
                                            command={item.command.count}
                                        />
                                    </div>
                                </div>
                            );
                        });
                    })}
                </>
            )}
        </div>
    );
};

export default FeedItem;
