import { InfiniteData } from '@tanstack/react-query';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { myPageInfo } from '@/recoil/atom/user';
import { prevScrollState } from '@/recoil/atom/scroll';
import ItemContent from './ItemContent';
import ItemFooter from './ItemFooter';
import ItemHeader from './ItemHeader';
import { FeedItemStyle } from '../styled';
import { useRouter } from 'next/router';
import FeedSkeleton from '@/components/Skeleton/FeedSkeleton';
import { IPaginationResponse } from '@/types/global';
import { IPostModel, EActionEditType } from '@/types/post';
import useScrollDown from '@/hooks/useScrollDown';

interface IFeedItemProps {
    data: InfiniteData<IPaginationResponse<IPostModel>>;
    isLoading: boolean;
    openDrawer?: (id: number, type: EActionEditType) => void;
}

const FeedItem = ({ data, isLoading, openDrawer }: IFeedItemProps) => {
    const myInfo = useRecoilValue(myPageInfo);
    const setPrevScroll = useSetRecoilState(prevScrollState);

    const router = useRouter();

    const { currentScrollY } = useScrollDown();

    const onClickItem = (id: number) => {
        setPrevScroll(currentScrollY);
        router.push(`/boardDetail/${id}`);
    };

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
                                        <ItemHeader
                                            writer={item.writer}
                                            createAt={item.createAt}
                                            openDrawer={() =>
                                                openDrawer &&
                                                openDrawer(item.id, myInfo?.id === item.writer.userId ? EActionEditType.WRITE : EActionEditType.WRITET_TIPOFF)
                                            }
                                        />
                                        <div onClick={() => onClickItem(item.id)}>
                                            <ItemContent
                                                id={item.id}
                                                title={item.title}
                                                content={item.content}
                                                pollList={item.pollList}
                                                tags={item.tags && item.tags}
                                            />
                                        </div>
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
