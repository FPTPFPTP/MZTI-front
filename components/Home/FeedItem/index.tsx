import { FeedItemProps, PageInfo } from '@/utils/types';
import ItemContent from './ItemContent';
import ItemFooter from './ItemFooter';
import ItemHeader from './ItemHeader';
import { FeedItemStyle } from './styled';
import Link from 'next/link';

const FeedItem = ({ data }: any) => {
    return (
        <div css={FeedItemStyle}>
            {data.pages.map((page: PageInfo) => {
                return page.list.map((item: FeedItemProps) => {
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
                                <Link href={`/home/${item.id}`}>
                                    <ItemContent
                                        id={item.id}
                                        title={item.title}
                                        content={item.content}
                                        pollList={item.pollList && item.pollList}
                                        tags={item.tags && item.tags}
                                    />
                                </Link>

                                <ItemFooter like={item.like?.count} command={item.command?.count} bookmark={item.bookmark?.count} />
                            </div>
                        </div>
                    );
                });
            })}
        </div>
    );
};

export default FeedItem;
