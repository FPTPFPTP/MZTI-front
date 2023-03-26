import { Avatar } from '@/components/Commons';
import { CommentItemSylte } from '../styled';

interface ICommentProps {
    nickname: string;
    mbti: string;
    profileImage: string;
    userId: number;
    comment: string;
    like: number;
}
const ComentItem = ({ nickname, mbti, profileImage, userId, comment, like }: ICommentProps) => {
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
                    <p className="time">2분 전</p>
                    <button className="like">{like > 0 ? like : '좋아요'}</button>
                    <button className="reComment">대댓글</button>
                </div>
            </div>
        </section>
    );
};

export default ComentItem;
