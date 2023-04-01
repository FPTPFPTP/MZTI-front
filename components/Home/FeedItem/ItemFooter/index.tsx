import { useState } from 'react';
import { ItemFooterStyle } from '../../styled';
import Views from '@assets/icons/detailPost/eyes.svg';
import CommentIcon from '@assets/icons/detailPost/comment.svg';
import HeartIcon from '@assets/icons/detailPost/heart.svg';
import FillHeartIcon from '@assets/icons/detailPost/heartFill.svg';
import ShareIcon from '@assets/icons/comment/share.svg';
import { LinkCopy } from '@/utils/copy';
import axios from '@/utils/axios';
interface IItemProps {
    like?: number | string;
    command?: number;
    className?: string;
    isFeed?: boolean;
    bookmark?: number;
    postId?: number;
    viewCount: number;
}
const ItemFooter = ({ postId, like, command, className, viewCount, isFeed = true, bookmark }: IItemProps) => {
    const [isLike, setIsLike] = useState<boolean>(false);

    const handleLike = () => {
        setIsLike((isLike) => !isLike);

        return axios.post(`/post/like/${postId}`);
    };
    return (
        <>
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
                    <div className="viewIcon">
                        <Views />
                        <span className="count">{viewCount}</span>
                    </div>
                ) : (
                    <button onClick={LinkCopy}>
                        <ShareIcon />
                        <span className="share">공유</span>
                    </button>
                )}
            </section>
        </>
    );
};

export default ItemFooter;
