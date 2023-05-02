import { useState } from 'react';
import Image from 'next/image';
import { Avatar } from '@/components/Commons';
import { timeForToday } from '@/utils/time';
import MoreButton from '@assets/icons/detailPost/moreButton.svg';
import FillreCommentLike from '@assets/icons/comment/reCommentLikeFill.svg';
import ReCommentLike from '@assets/icons/comment/reCommentLike.svg';
import WriterMainIcon from '@assets/icons/comment/writerMain.svg';
import { MoreDrawer } from '@/components/Commons';
import { CommentItemSylte } from '../../../styled';
import { useRecoilValue } from 'recoil';
import { myPageInfo } from '@/recoil/atom/user';
import { useMutation } from '@tanstack/react-query';
import { deleteComment, commentLike } from '@/apis/post';
import { ILikeModel, ICommentModel } from '@/types/post';

interface IReplayCommentItemProps {
    replayCommentItem: ICommentModel;
    postWriterId?: number;
}

const ReplayCommentItem = ({ replayCommentItem, postWriterId }: IReplayCommentItemProps) => {
    const { id, writer, comment, like, createAt, image } = replayCommentItem;
    const myInfo = useRecoilValue(myPageInfo);
    const [isLike, setIsLike] = useState<boolean>(like.check);
    const [isVisible, setIsVisible] = useState<boolean>(false);
    const [likeCount, setLikeCount] = useState<number>(like.count);
    const openDrawer = () => setIsVisible(true);
    const closeDrawer = () => setIsVisible(false);
    // 댓글 삭제
    const commentDelete = useMutation((id: number) => deleteComment(id));
    // 대댓글 좋아요
    const reCommentLike = useMutation((id: number) => commentLike(id));

    const handleCommentDelete = () => {
        confirm('댓글을 삭제하시겠습니까?');
        commentDelete.mutate(id, {
            onSuccess: () => {
                alert('삭제 완료되었습니다.');
            },
        });
    };

    const handleReCommentLike = () => {
        reCommentLike.mutate(id, {
            onSuccess: (data: ILikeModel) => {
                if (data.check === true) {
                    setLikeCount(data.count);
                } else {
                    setLikeCount(data.count);
                }

                setIsLike((isLike) => !isLike);
            },
        });
    };

    return (
        <>
            <section css={CommentItemSylte}>
                <div className="commentItemWrap replay">
                    <div className="writer">
                        <Avatar
                            src={writer.profileImage ? writer.profileImage : ''}
                            alt={`${writer.nickname}님의 프로필입니다.`}
                            size={60}
                            mbti={writer.mbti}
                        />
                        <p className="mbti">{writer.mbti}</p>
                        <p className="nickName">
                            <span>{writer.nickname}</span>

                            {postWriterId === writer.id && (
                                <span>
                                    <WriterMainIcon />
                                </span>
                            )}
                        </p>
                    </div>

                    <p className="coment">{comment}</p>
                    {image && <Image src={image} alt={'댓글이미지'} width={100} height={100} />}

                    <div className="commentItemFooter">
                        <p className="time">{timeForToday(createAt)}</p>
                        <button onClick={handleReCommentLike} className="like">
                            {isLike === false ? <ReCommentLike /> : <FillreCommentLike />}
                            <span>{likeCount === 0 ? '좋아요' : likeCount}</span>
                        </button>

                        <button onClick={openDrawer} className="moreButton">
                            <MoreButton />
                        </button>
                    </div>
                </div>
            </section>
        </>
    );
};
export default ReplayCommentItem;
