import { ItemContentStyle } from '../styled';
import { PollListProps, TagProps } from '@/utils/types';
import VoteIcon from '@assets/icons/vote.svg';

type ItemContentProps = {
    id: number;
    title: string;
    content: string;
    pollList?: PollListProps[];
    tags?: TagProps[];
};
const ItemContent = ({ id, title, content, pollList, tags }: ItemContentProps) => {
    return (
        <section css={ItemContentStyle} key={id}>
            <h4 className="itemContent__title">{title}</h4>
            <div className="itemContent__content">{content}</div>
            {/* 투표기능이 있을경우 */}
            {pollList?.length === 1 &&
                pollList.map((item: PollListProps) => {
                    return (
                        <div className="vote" key={item.id}>
                            <div className="vote__top">
                                <VoteIcon />
                                <p>투표</p>
                            </div>

                            <h5 className="vote__title">{item.title}</h5>
                        </div>
                    );
                })}
        </section>
    );
};

export default ItemContent;
