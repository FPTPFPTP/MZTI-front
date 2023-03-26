import { useState } from 'react';
import { ItemFooterStyle } from '../styled';
import BookMarkIcon from '@assets/icons/detailPost/bookMark.svg';
import FillBookMarkIcon from '@assets/icons/detailPost/bookMarkFill.svg';
import CommentIcon from '@assets/icons/detailPost/comment.svg';
import HeartIcon from '@assets/icons/detailPost/heart.svg';
import FillHeartIcon from '@assets/icons/detailPost/heartFill.svg';
import ShareIcon from '@assets/icons/comment/share.svg';
import { LinkCopy } from '@/utils/copy';

interface IItemProps {
    like?: number;
    command?: number;
    className?: string;
    isFeed?: boolean;
    bookmark?: number;
}
const ItemFooter = ({ like, command, className, isFeed = true, bookmark }: IItemProps) => {
    const [isLike, setIsLike] = useState<boolean>(false);
    const [isBookMark, setIsBookMark] = useState<boolean>(false);

    const handleLike = () => [setIsLike((isLike) => !isLike)];

    const handleBookMark = () => [setIsBookMark((isBookMark) => !isBookMark)];
    return (
        <section css={ItemFooterStyle} className={className}>
            <button onClick={handleLike}>
                {isLike ? <FillHeartIcon /> : <HeartIcon />}
                <span>{like === 0 ? '좋아요' : like}</span>
            </button>

            <button>
                <CommentIcon />
                <span>{command ? command : 0}</span>
            </button>

            {isFeed ? (
                <>
                    {/* TODO : 조회수로 바뀔 예정 */}
                    <button onClick={handleBookMark}>
                        {isBookMark ? <FillBookMarkIcon /> : <BookMarkIcon />}
                        <span>{bookmark}</span>
                    </button>
                </>
            ) : (
                <button onClick={LinkCopy}>
                    <ShareIcon />
                    <span className="share">공유</span>
                </button>
            )}
        </section>
    );
};

export default ItemFooter;
