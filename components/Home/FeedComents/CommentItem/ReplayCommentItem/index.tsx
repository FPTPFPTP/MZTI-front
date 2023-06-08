import { useState } from 'react';
import Image from 'next/image';
import { Avatar } from '@/components/Commons';
import { timeForToday } from '@/utils/time';
import MoreButton from '@assets/icons/detailPost/moreButton.svg';
import FillreCommentLike from '@assets/icons/comment/reCommentLikeFill.svg';
import ReCommentLike from '@assets/icons/comment/reCommentLike.svg';
import WriterMainIcon from '@assets/icons/comment/writerMain.svg';
import { CommentItemSylte } from '../../../styled';
import { useRecoilValue } from 'recoil';
import { myPageInfo } from '@/recoil/atom/user';
import { useMutation } from '@tanstack/react-query';
import { commentLike } from '@/apis/post';
import { getMbtiColor } from '@utils/postItem';
import { ILikeModel, ICommentModel, EActionEditType } from '@/types/post';

interface IReplayCommentItemProps {
    replayCommentItem: ICommentModel;
    postWriterId?: number | string;
    openDrawer: (id: number, type: EActionEditType) => void;
}

const ReplayCommentItem = ({ replayCommentItem, postWriterId, openDrawer }: IReplayCommentItemProps) => {
    const { id, writer, comment, like, createAt, image } = replayCommentItem;
    const myInfo = useRecoilValue(myPageInfo);
    const [isLike, setIsLike] = useState<boolean>(like.check);
    const [likeCount, setLikeCount] = useState<number>(like.count);

    // 대댓글 좋아요
    const reCommentLike = useMutation((id: number) => commentLike(id));

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
                            size={50}
                            mbti={writer.mbti}
                        />

                        <div className="writeInfo">
                            <div className="mbtiNlevel">
                                <p className="mbti" style={{ background: getMbtiColor(writer.mbti) }}>
                                    {writer.mbti}
                                </p>
                                <p className="level">Lv.{writer.level}</p>
                            </div>

                            <p className="nickName">
                                <span>{writer.nickname}</span>

                                {writer.nickname === postWriterId && (
                                    <span>
                                        <WriterMainIcon />
                                    </span>
                                )}
                            </p>
                        </div>

                        <div className="nickname_time">
                            <button
                                onClick={() => openDrawer(id, myInfo?.id === writer.userId ? EActionEditType.COMMENT : EActionEditType.COMMENT_TIPOFF)}
                                className="moreButton"
                            >
                                <MoreButton />
                            </button>
                            <p className="time">{timeForToday(createAt)}</p>
                        </div>
                    </div>

                    <div className="coment">
                        {comment.split('\n').map((title, index) => (
                            <p key={index}>{title}</p>
                        ))}
                    </div>
                    {image && <Image className={'image'} src={image} alt={'댓글이미지'} width={100} height={100} />}

                    <div className="commentItemFooter">
                        <button onClick={handleReCommentLike} className="like">
                            {isLike === false ? <ReCommentLike /> : <FillreCommentLike />}
                            <span>{likeCount === 0 ? '좋아요' : likeCount}</span>
                        </button>
                    </div>
                </div>
            </section>
        </>
    );
};
export default ReplayCommentItem;
