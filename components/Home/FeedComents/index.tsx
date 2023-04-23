import { DeletedComment, FeedComentsStyle, FeedNoComentsStyle, MoreCommentStyle, FeedComentsWrapStyle } from '../styled';
import CommentRefreshIcon from '@assets/icons/comment/refresh.svg';
import CommentItem from './CommentItem';
import { ICommentModel } from '@/types/post';

interface ICommentProps {
    commentData?: ICommentModel[];
    writerId?: string; // 작성자 명
    handleRefrash?: () => void; // 새로고침
    userId: number;
    handleMoreComment: () => void; // 댓글 더보기
    isLastPage?: boolean;
}

const FeedComents = ({ isLastPage, commentData, writerId, handleRefrash, handleMoreComment }: ICommentProps) => {
    return (
        <div css={FeedComentsWrapStyle}>
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
                    {commentData && commentData?.length >= 15 && (
                        <>
                            {!isLastPage && (
                                <section css={MoreCommentStyle}>
                                    <button onClick={handleMoreComment}>
                                        <span>+ 댓글 더보기</span>
                                    </button>
                                </section>
                            )}
                        </>
                    )}

                    {commentData?.map((item: ICommentModel) => {
                        return item.deleted === true ? (
                            <p css={DeletedComment} key={item.id}>
                                삭제된 댓글입니다.
                            </p>
                        ) : (
                            <CommentItem
                                likeCheck={item.like.check}
                                key={item.id}
                                nickname={item.writer.nickname}
                                mbti={item.writer.mbti}
                                profileImage={item.writer.profileImage}
                                userId={item.id}
                                comment={item.comment}
                                like={item.like.count}
                                createAt={item.createAt}
                                writerId={String(writerId)}
                                subComment={item.subComment.count}
                                image={item.image}
                            />
                        );
                    })}
                </>
            )}
        </div>
    );
};

export default FeedComents;
