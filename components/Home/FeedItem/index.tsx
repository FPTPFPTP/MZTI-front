import { InfiniteData } from '@tanstack/react-query';
import { useRecoilValue } from 'recoil';
import { myPageInfo } from '@/recoil/atom/user';
import ItemContent from './ItemContent';
import ItemFooter from './ItemFooter';
import ItemHeader from './ItemHeader';
import { FeedItemStyle } from '../styled';
import Link from 'next/link';
import { IPaginationResponse } from '@/types/global';
import { IPostModel, EActionEditType } from '@/types/post';

interface IFeedItemProps {
    data: InfiniteData<IPaginationResponse<IPostModel>>;
    openDrawer?: (id: number, type: EActionEditType) => void;
}

const FeedItem = ({ data, openDrawer }: IFeedItemProps) => {
    const myInfo = useRecoilValue(myPageInfo);

    return (
        <div css={FeedItemStyle}>
            {data?.pages.map((page) => {
                return page.list.map((item) => {
                    return (
                        <div className="feedLayout" key={item.id}>
                            <div className="feedLayout__bg">
                                <ItemHeader
                                    writer={item.writer}
                                    createAt={item.createAt}
                                    openDrawer={() =>
                                        openDrawer &&
                                        openDrawer(item.id, myInfo?.id === item.writer.userId ? EActionEditType.WRITE : EActionEditType.WRITET_TIPOFF)
                                    }
                                />
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
        </div>
    );
};

export default FeedItem;
