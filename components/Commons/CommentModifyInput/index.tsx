import { CommentInputStyle } from './styled';
import PhotoIcon from '@assets/icons/comment/photo.svg';
import { useSetRecoilState } from 'recoil';
import { commentModify, commentText } from '@/recoil/atom/user';

interface PostIdProps {
    onSuccess: () => void; // 성공시 다시 refresh 할 데이터
    PutComment?: () => void; // 댓글 추가 api
    handleContact?: (e: any) => void; // 댓글 내용 바뀔 때
    commentId?: number;
    comment: string; // value 값
}

// 댓글 수정했을 때 나타나는 입력폼
const CommentModifyInput = ({ comment, PutComment, handleContact }: PostIdProps) => {
    const setCommentModifyState = useSetRecoilState(commentModify);
    const setCommentValue = useSetRecoilState(commentText);

    const CancelComment = () => {
        setCommentModifyState(false);
        setCommentValue('');
    };
    return (
        <div css={CommentInputStyle}>
            <button>
                <PhotoIcon />
            </button>

            <input type="text" value={comment} placeholder="댓글을 입력해주세요" onChange={handleContact} />

            <div>
                <button type="submit" onClick={CancelComment}>
                    취소
                </button>
                <button type="submit" onClick={PutComment} disabled={!comment}>
                    변경
                </button>
            </div>
        </div>
    );
};

export default CommentModifyInput;
