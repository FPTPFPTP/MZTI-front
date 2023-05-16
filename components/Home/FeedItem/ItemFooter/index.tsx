import { useState } from 'react';
import { ItemFooterStyle } from '../../styled';
import { useRouter } from 'next/router';
import Views from '@assets/icons/feedItem/outline_eye.svg';
import CommentIcon from '@assets/icons/feedItem/outline_message.svg';
import HeartIcon from '@assets/icons/feedItem/outline_heart.svg';
import FillHeartIcon from '@assets/icons/feedItem/fill_heart.svg';
import ShareIcon from '@assets/icons/comment/share.svg';
import { LinkCopy } from '@/utils/copy';
import { useMutation } from '@tanstack/react-query';
import { postLike } from '@/apis/post';
import Link from 'next/link';
import { ILikeModel } from '@/types/post';
import { useRecoilValue } from 'recoil';
import { myPageInfo } from '@/recoil/atom/user';
import { Modal } from '@components/Commons';
import { ModalStyle } from '@/components/Commons/Modal/styled';

interface IItemProps {
    like?: number | string;
    command?: number;
    className?: string;
    isFeed?: boolean;
    postId?: number;
    viewCount: number;
    likeCheck: boolean;
}
const ItemFooter = ({ postId, likeCheck, like, command, className, viewCount, isFeed = true }: IItemProps) => {
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

            {router.asPath.indexOf('boardDetail') === 1 ? (
                <div className="comment">
                    <CommentIcon />
                    <span>{command}</span>
                </div>
            ) : (
                <Link href={`/boardDetail/${postId}`}>
                    <CommentIcon />
                    <span>{command}</span>
                </Link>
            )}

            {isFeed ? (
                <Link href={`/boardDetail/${postId}`} className="viewIcon">
                    <Views />
                    <span className="count">{viewCount}</span>
                </Link>
            ) : (
                <button onClick={LinkCopy}>
                    <ShareIcon />
                    <span className="share">공유</span>
                </button>
            )}

            <Modal title={'로그인이 필요한 기능입니다'} isModalVisible={isLogoutModal} closable={false} footer={null} centered={true}>
                <div css={ModalStyle}>
                    <p>회원가입이나 로그인을 해주세요.</p>
                    <div className="buttons">
                        <button onClick={() => setIsLogoutModal(false)} className="button cancel">
                            취소
                        </button>
                        <button onClick={handleLogin} className="button">
                            확인
                        </button>
                    </div>
                </div>
            </Modal>
        </section>
    );
};

export default ItemFooter;
