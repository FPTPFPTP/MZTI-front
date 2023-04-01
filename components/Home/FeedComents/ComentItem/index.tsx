import { useState } from 'react';
import { Avatar } from '@/components/Commons';
import { timeForToday } from '@/utils/time';
import MoreButton from '@assets/icons/detailPost/moreButton.svg';
import FillreCommentLike from '@assets/icons/comment/reCommentLikeFill.svg';
import ReComment from '@assets/icons/comment/reComment.svg';
import ReCommentLike from '@assets/icons/comment/reCommentLike.svg';
import { MoreDrawer } from '@/components/Commons';
import { CommentItemSylte } from '../../styled';
import { useRecoilValue } from 'recoil';
import { myPageInfo } from '@/recoil/atom/user';
import { EType } from '@/components/Commons/MoreDrawer';

interface ICommentProps {
    nickname: string;
    mbti: string;
    profileImage: string;
    userId: number;
    comment: string;
    like: number;
    createAt: string;
}
const ComentItem = ({ nickname, mbti, profileImage, userId, comment, like, createAt }: ICommentProps) => {
    const myInfo = useRecoilValue(myPageInfo);
    const [isVisible, setIsVisible] = useState<boolean>(false);
    const openDrawer = () => setIsVisible(true);
    const closeDrawer = () => setIsVisible(false);

    return (
        <section css={CommentItemSylte} key={userId}>
            <div className="commentItemWrap">
                <div className="writer">
                    <Avatar src={profileImage} alt={`${nickname}님의 프로필입니다.`} size={60} />
                    <p className="mbti">{mbti}</p>
                    <p className="nickName">{nickname}</p>
                </div>
                <p className="coment">{comment}</p>
                <div className="commentItemFooter">
                    <p className="time">{timeForToday(createAt)}</p>
                    <button className="like">
                        {like > 0 ? (
                            <>
                                <ReCommentLike />
                                {like}
                            </>
                        ) : (
                            <>
                                <FillreCommentLike /> 좋아요
                            </>
                        )}
                    </button>
                    <button className="reComment">
                        <ReComment />
                        대댓글
                    </button>

                    <button onClick={openDrawer} className="moreButton">
                        <MoreButton />
                    </button>
                </div>
            </div>

            <MoreDrawer type={myInfo ? EType.COMMENT : EType.COMMENT_TIPOFF} onClick={closeDrawer} isVisible={isVisible} />
        </section>
    );
};

export default ComentItem;
