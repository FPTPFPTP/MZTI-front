import { useState } from 'react';
import { ItemFooterStyle } from '../../styled';
import Views from '@assets/icons/detailPost/eyes.svg';
import CommentIcon from '@assets/icons/detailPost/comment.svg';
import HeartIcon from '@assets/icons/detailPost/heart.svg';
import FillHeartIcon from '@assets/icons/detailPost/heartFill.svg';
import ShareIcon from '@assets/icons/comment/share.svg';
import { LinkCopy } from '@/utils/copy';
import { useMutation } from '@tanstack/react-query';
import { postLike } from '@/apis/post';
import Link from 'next/link';
interface IItemProps {
    like?: number | string;
    command?: number;
    className?: string;
    isFeed?: boolean;
    bookmark?: number;
    postId?: number;
    viewCount: number;
    likeCheck: boolean;
    postLink: number;
}
const ItemFooter = ({ postLink, postId, likeCheck, like, command, className, viewCount, isFeed = true, bookmark }: IItemProps) => {
    const [isLike, setIsLike] = useState<boolean>(likeCheck);
    const [likeCount, setLikeCount] = useState<any>(like);
    // 게시글 좋아요
    const usePostLike = useMutation((id: any) => postLike(id));

    const handleLike = () => {
        usePostLike.mutate(postId, {
            onSuccess: () => {
                setLikeCount(likeCount + 1);
            },
        });
        setIsLike((isLike) => !isLike);
        setLikeCount(likeCount);
    };

    /**
     * like.check === false이면 그냥 like count 보여주기
     * true이면 +1 해주기
     */

    return (
        <section css={ItemFooterStyle} className={className}>
            <button onClick={handleLike}>
                {isLike === false ? <HeartIcon /> : <FillHeartIcon />}
                <span>{likeCount === 0 ? '좋아요' : likeCount}</span>
            </button>

            <Link href={`home/${postLink}`}>
                <CommentIcon />
                <span>{command}</span>
            </Link>

            {isFeed ? (
                <Link href={`home/${postLink}`} className="viewIcon">
                    <Views />
                    <span className="count">{viewCount}</span>
                </Link>
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
