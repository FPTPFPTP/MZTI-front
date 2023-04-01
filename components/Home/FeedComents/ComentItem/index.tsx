import { useState } from 'react';
import { Avatar } from '@/components/Commons';
import { timeForToday } from '@/utils/time';
import MoreButton from '@assets/icons/detailPost/moreButton.svg';
import { MoreDrawer } from '@/components/Commons';
import { CommentItemSylte } from '../../styled';

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
                    <button className="like">{like > 0 ? like : '좋아요'}</button>
                    <button className="reComment">대댓글</button>

                    <button onClick={openDrawer} className="moreButton">
                        <MoreButton />
                    </button>
                </div>
            </div>

            <MoreDrawer desc="댓글" onClick={closeDrawer} isVisible={isVisible} />
        </section>
    );
};

export default ComentItem;
