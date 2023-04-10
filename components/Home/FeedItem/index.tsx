import { PageInfo } from '@/utils/types';
import { IPostModel } from '@/types/post';
import ItemContent from './ItemContent';
import ItemFooter from './ItemFooter';
import ItemHeader from './ItemHeader';
import { FeedItemStyle } from '../styled';
import Link from 'next/link';

const FeedItem = ({ data }: any) => {
    return (
        <div css={FeedItemStyle}>
            {data?.pages.map((page: PageInfo) => {
                return page.list.map((item: IPostModel) => {
                    return (
                        <div className="feedLayout" key={item.id}>
                            <div className="feedLayout__bg">
                                <ItemHeader writer={item.writer} createAt={item.createAt} writerID={item.id} />
                                <Link href={`/home/${item.id}`}>
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
                                    bookmark={item.bookmark.count}
                                    postLink={item.id}
                                />
                            </div>
                        </div>
                    );
                });
            })}
        </div>
    );
};

export default FeedItem;
