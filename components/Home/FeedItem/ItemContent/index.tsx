import { ItemContentStyle } from '../styled';
import { PollListProps, TagProps } from '@/utils/types';
import VoteIcon from '@assets/icons/vote.svg';
import xss from 'xss';

interface IItemContentProps {
    id: number;
    title: string;
    content: string;
    pollList?: PollListProps[];
    tags?: TagProps[];
}

const ItemContent = ({ id, title, content, pollList, tags }: IItemContentProps) => {
    return (
        <section css={ItemContentStyle} key={id}>
            <h4 className="itemContent__title">{title}</h4>

            <div
                className="itemContent__content"
                dangerouslySetInnerHTML={{
                    __html: xss(content),
                }}
            />

            {/* 투표기능이 있을경우 */}
            {pollList?.length && (
                <div className="vote">
                    <div className="vote__top">
                        <VoteIcon />
                        <p>투표</p>
                    </div>

                    <h5 className="vote__title">{pollList[0].title}</h5>
                </div>
            )}
        </section>
    );
};

export default ItemContent;
