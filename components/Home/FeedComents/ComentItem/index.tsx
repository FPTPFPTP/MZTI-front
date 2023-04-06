import { useEffect, useState } from 'react';
import { Avatar } from '@/components/Commons';
import { timeForToday } from '@/utils/time';
import MoreButton from '@assets/icons/detailPost/moreButton.svg';
import FillreCommentLike from '@assets/icons/comment/reCommentLikeFill.svg';
import ReComment from '@assets/icons/comment/reComment.svg';
import ReCommentLike from '@assets/icons/comment/reCommentLike.svg';
import WriterMainIcon from '@assets/icons/comment/writerMain.svg';
import { MoreDrawer } from '@/components/Commons';
import { CommentItemSylte } from '../../styled';
import { useRecoilValue } from 'recoil';
import { myPageInfo } from '@/recoil/atom/user';
import { EType } from '@/components/Commons/MoreDrawer';
import { useMutation } from '@tanstack/react-query';
import { deleteComment } from '@/apis/post';
import { useRouter } from 'next/router';

interface ICommentProps {
    nickname: string;
    mbti: string;
    profileImage: string;
    userId: number;
    comment: string;
    like: number;
    createAt: string;
    writerId: string;
}

const ComentItem = ({ nickname, mbti, profileImage, userId, comment, like, createAt, writerId }: ICommentProps) => {
    const myInfo = useRecoilValue(myPageInfo);
    const [isVisible, setIsVisible] = useState<boolean>(false);
    const openDrawer = () => setIsVisible(true);
    const closeDrawer = () => setIsVisible(false);
    const router = useRouter();
    // 댓글 삭제
    const { mutate } = useMutation((id: any) => deleteComment(id));

    const handleCommentDelete = () => {
        confirm('댓글을 삭제하시겠습니까?');
        mutate(userId, {
            onSuccess: () => {
                alert('삭제 완료되었습니다.');
            },
        });
    };

    return (
        <section css={CommentItemSylte} key={userId}>
            <div className="commentItemWrap">
                <div className="writer">
                    <Avatar src={profileImage} alt={`${nickname}님의 프로필입니다.`} size={60} />
                    <p className="mbti">{mbti}</p>
                    <p className="nickName">
                        <span>{nickname}</span>

                        {writerId === nickname && (
                            <span>
                                <WriterMainIcon />
                            </span>
                        )}
                    </p>
                </div>
                <p className="coment">{comment}</p>
                <div className="commentItemFooter">
                    <p className="time">{timeForToday(createAt)}</p>
                    <button className="like">
                        {like > 0 ? (
                            <>
                                <FillreCommentLike />
                                {like + 1}
                            </>
                        ) : (
                            <>
                                <ReCommentLike />
                                <span>좋아요</span>
                            </>
                        )}
                    </button>
                    <button className="reComment">
                        <ReComment />
                        <span>대댓글</span>
                    </button>

                    <button onClick={openDrawer} className="moreButton">
                        <MoreButton />
                    </button>
                </div>
            </div>

            <MoreDrawer
                type={myInfo?.nickname === nickname ? EType.COMMENT : EType.COMMENT_TIPOFF}
                onClick={closeDrawer}
                isVisible={isVisible}
                writerID={userId}
                handleCommentDelete={handleCommentDelete}
            />
        </section>
    );
};

export default ComentItem;
