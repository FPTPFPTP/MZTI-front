import { useState } from 'react';
import { ItemFooterStyle } from '../styled';
import BookMarkIcon from '@assets/icons/detailPost/bookMark.svg';
import CommentIcon from '@assets/icons/detailPost/comment.svg';
import HeartIcon from '@assets/icons/detailPost/heart.svg';
import FillHeartIcon from '@assets/icons/detailPost/heartFill.svg';
import ShareIcon from '@assets/icons/comment/share.svg';
import { LinkCopy } from '@/utils/copy';

type ItemProps = {
    like?: number;
    command?: number;
    className?: string;
    isFeed?: boolean;
};
const ItemFooter = ({ like, command, className, isFeed = true }: ItemProps) => {
    const [isLike, setIsLike] = useState<boolean>(false);
    const [isBookMark, setIsBookMark] = useState<boolean>(false);

    const handleLike = () => [setIsLike((isLike) => !isLike)];

    const handleBookMark = () => [setIsBookMark((isBookMark) => !isBookMark)];
    return (
        <section css={ItemFooterStyle} className={className}>
            <button onClick={handleLike}>
                {isLike ? (
                    <>
                        <FillHeartIcon />
                        <span>{like && like + 1}</span>
                    </>
                ) : (
                    <>
                        <HeartIcon />
                        <span>{like && like + 1}</span>
                    </>
                )}
            </button>

            <button>
                <CommentIcon />
                <span>{command ? command : 0}</span>
            </button>

            {isFeed ? (
                <>
                    <button onClick={handleBookMark}>
                        {isBookMark ? (
                            <>
                                <BookMarkIcon />
                                <span>35</span>
                            </>
                        ) : (
                            <>
                                <BookMarkIcon />
                                <span>35</span>
                            </>
                        )}
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
