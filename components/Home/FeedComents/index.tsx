import { DeletedComment, FeedComentsStyle, FeedNoComentsStyle, MoreCommentStyle, FeedComentsWrapStyle } from '../styled';
import CommentRefreshIcon from '@assets/icons/comment/refresh.svg';
import CommentItem from './CommentItem';
import { ICommentModel, EActionEditType } from '@/types/post';

interface IFeedComentsProps {
    commentData: ICommentModel[];
    postWriterId: number; // 작성자 id
    handleRefrash?: () => void; // 새로고침
    handleMoreComment: () => void; // 댓글 더보기
    openDrawer: (id: number, type: EActionEditType) => void;
    isLastPage?: boolean;
}

const FeedComents = ({ isLastPage, commentData, postWriterId, handleRefrash, handleMoreComment, openDrawer }: IFeedComentsProps) => {
    return (
        <div css={FeedComentsWrapStyle}>
            <section css={FeedComentsStyle}>
                <div className="wrap">
                    <h4>댓글 목록</h4>
                    <button onClick={handleRefrash}>
                        <span>새로고침</span>
                        <CommentRefreshIcon />
                    </button>
                </div>
            </section>

            {commentData.length === 0 ? (
                <div css={FeedNoComentsStyle}>
                    <p>
                        댓글이 없습니다. <br />첫 댓글을 작성해보세요.
                    </p>
                </div>
            ) : (
                <>
                    {commentData.length >= 15 && (
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

                    {commentData.map((item: ICommentModel) => {
                        return item.deleted === true ? (
                            <p css={DeletedComment} key={item.id}>
                                삭제된 댓글입니다.
                            </p>
                        ) : (
                            <CommentItem key={item.id} commentItem={item} postWriterId={postWriterId} openDrawer={openDrawer} />
                        );
                    })}
                </>
            )}
        </div>
    );
};

export default FeedComents;
