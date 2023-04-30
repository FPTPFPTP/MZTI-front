import Image from 'next/image';
import { ItemContentStyle } from '../../styled';
import VoteIcon from '@assets/icons/feedItem/vote.svg';
import xss from 'xss';
import { IPollModel, ITagModel } from '@/types/post';
import { getThumbnail, getStripIframeTags } from '@/utils/postItem';

interface IItemContentProps {
    id: number;
    title: string;
    content: string;
    pollList: IPollModel[];
    tags: ITagModel[];
}

const ItemContent = ({ id, title, content, pollList, tags }: IItemContentProps) => {
    const thumbnail = getThumbnail(content);

    return (
        <section css={ItemContentStyle} key={id}>
            <h4 className="itemContent__title">{title}</h4>

            <div
                className="itemContent__content"
                dangerouslySetInnerHTML={{
                    __html: xss(getStripIframeTags(content)),
                }}
            />

            {/* 투표기능이 있을경우 */}
            {pollList.length ? (
                <div className="vote">
                    <VoteIcon />
                    <span>투표</span>
                    <h5 className="vote__title">{pollList[0].title}</h5>
                </div>
            ) : (
                thumbnail && <Image className={'thumbnail'} src={thumbnail} alt={'게시글 이미지'} width={300} height={250} />
            )}
        </section>
    );
};

export default ItemContent;
