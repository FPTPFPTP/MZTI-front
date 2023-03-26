import { FeedComentsStyle, MoreCommentStyle, CommentItemSylte } from './styled';
import CommentRefreshIcon from '@assets/icons/comment/refresh.svg';
import MoreComment from '@assets/icons/comment/more.svg';
import ComentItem from './ComentItem';

type TCommentProps = {
    nickname: string;
    mbti: string;
    profileImage: string;
    userId: number;
    comment: string;
    like: number;
};

const FeedComents = ({ nickname, mbti, profileImage, userId, comment, like }: TCommentProps) => {
    const handleRefrash = () => {
        location.reload();
    };

    return (
        <>
            <section css={FeedComentsStyle}>
                <h4>댓글 목록</h4>
                <button onClick={handleRefrash}>
                    <span>새로고침</span> <CommentRefreshIcon />
                </button>
            </section>

            <section css={MoreCommentStyle}>
                <button>
                    <MoreComment />
                    <span>이전 댓글 더보기</span>
                </button>
            </section>
            <ComentItem nickname={nickname} mbti={mbti} profileImage={profileImage} userId={userId} comment={comment} like={like} />
        </>
    );
};

export default FeedComents;
