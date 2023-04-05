import { FeedComentsStyle, FeedNoComentsStyle, MoreCommentStyle } from '../styled';
import CommentRefreshIcon from '@assets/icons/comment/refresh.svg';
import MoreComment from '@assets/icons/comment/more.svg';
import ComentItem from './ComentItem';
import { ICommentModel } from '@/types/post';

interface ICommentProps {
    commentData?: [];
    writerId?: any;
}

const FeedComents = ({ commentData, writerId }: ICommentProps) => {
    const handleRefrash = () => {
        location.reload();
    };
    return (
        <>
            <section css={FeedComentsStyle}>
                <h4>댓글 목록</h4>
                <button onClick={handleRefrash}>
                    <span>새로고침</span>
                    <CommentRefreshIcon />
                </button>
            </section>

            {commentData?.length === 0 ? (
                <div css={FeedNoComentsStyle}>
                    <p>
                        댓글이 없습니다. <br />첫 댓글을 작성해보세요.
                    </p>
                </div>
            ) : (
                <>
                    {commentData && commentData?.length > 9 && (
                        <section css={MoreCommentStyle}>
                            <button>
                                <MoreComment />
                                <span>이전 댓글 더보기</span>
                            </button>
                        </section>
                    )}

                    {commentData?.map((item: ICommentModel, index: number) => {
                        return (
                            <ComentItem
                                key={item.id}
                                nickname={item.writer.nickname}
                                mbti={item.writer.mbti}
                                profileImage={item.writer.profileImage}
                                userId={item.writer.id}
                                comment={item.comment}
                                like={item.like.count}
                                createAt={item.createAt}
                                writerId={writerId}
                            />
                        );
                    })}
                </>
            )}
        </>
    );
};

export default FeedComents;
