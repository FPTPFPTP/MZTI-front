import { Avatar } from '@/components/Commons';
import { CommentItemSylte } from '../styled';

const ComentItem = () => {
    return (
        <section css={CommentItemSylte}>
            <div className="commentItemWrap">
                <div className="writer">
                    <Avatar src={''} alt={''} size={60} />
                    <p className="mbti">INFP</p>
                    <p className="nickName">고슴도치의 습격</p>
                </div>
                <p className="coment">한 줄 짜리 댓글입니다</p>
                <div className="commentItemFooter">
                    <p className="time">2분 전</p>
                    <button className="like">좋아요</button>
                    <button className="reComment">대댓글</button>
                </div>
            </div>
        </section>
    );
};

export default ComentItem;
