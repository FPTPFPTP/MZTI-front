import { useState } from 'react';
import { ItemFooterStyle } from '../../styled';
import { useRouter } from 'next/router';
import Views from '@assets/icons/detailPost/eyes.svg';
import CommentIcon from '@assets/icons/detailPost/comment.svg';
import HeartIcon from '@assets/icons/detailPost/heart.svg';
import FillHeartIcon from '@assets/icons/detailPost/heartFill.svg';
import ShareIcon from '@assets/icons/comment/share.svg';
import { LinkCopy } from '@/utils/copy';
import { useMutation } from '@tanstack/react-query';
import { postLike } from '@/apis/post';
import Link from 'next/link';
import { ILikeModel } from '@/types/post';
import { useRecoilValue } from 'recoil';
import { myPageInfo } from '@/recoil/atom/user';
import { Modal } from '@components/Commons';
import { categoryIdToUrl } from '@utils/menu';
interface IItemProps {
    like?: number | string;
    command?: number;
    className?: string;
    isFeed?: boolean;
    postId?: number;
    viewCount: number;
    likeCheck: boolean;
    categoryId: number;
}
const ItemFooter = ({ categoryId, postId, likeCheck, like, command, className, viewCount, isFeed = true }: IItemProps) => {
    const [isLike, setIsLike] = useState<boolean>(likeCheck);
    const [likeCount, setLikeCount] = useState<any>(like);
    const [isLogoutModal, setIsLogoutModal] = useState<boolean>(false);

    const myInfo = useRecoilValue(myPageInfo);
    const router = useRouter();

    // 게시글 좋아요
    const { mutate } = useMutation((id: any) => postLike(id));

    // 비회원은 좋아요 막기
    const handleLike = () => {
        if (myInfo) {
            mutate(postId, {
                onSuccess: (data: ILikeModel) => {
                    if (data.check === true) {
                        setLikeCount(data.count);
                    } else {
                        setLikeCount(data.count);
                    }

                    setIsLike((isLike) => !isLike);
                },
            });
        } else {
            setIsLogoutModal(true);
        }
    };

    const handleLogin = () => {
        router.replace('/login');
    };

    return (
        <section css={ItemFooterStyle} className={className}>
            <button onClick={handleLike}>
                {isLike === false ? <HeartIcon /> : <FillHeartIcon />}
                <span>{likeCount === 0 ? '좋아요' : likeCount}</span>
            </button>

            <Link href={`/board/${categoryIdToUrl(categoryId)}/${postId}`}>
                <CommentIcon />
                <span>{command}</span>
            </Link>

            {isFeed ? (
                <Link href={`/board/${categoryIdToUrl(categoryId)}/${postId}`} className="viewIcon">
                    <Views />
                    <span className="count">{viewCount}</span>
                </Link>
            ) : (
                <button onClick={LinkCopy}>
                    <ShareIcon />
                    <span className="share">공유</span>
                </button>
            )}

            <Modal
                title={'로그인이 필요합니다 어쩌구'}
                isModalVisible={isLogoutModal}
                closable={false}
                footer={
                    <>
                        <button onClick={() => setIsLogoutModal(false)}>취소</button>
                        <button onClick={handleLogin}>로그인하러가기</button>
                    </>
                }
            ></Modal>
        </section>
    );
};

export default ItemFooter;
