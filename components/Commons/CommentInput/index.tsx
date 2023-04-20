import { CommentInputStyle } from './styled';
import PhotoIcon from '@assets/icons/comment/photo.svg';
import SubmitButtonIcon from '@assets/icons/comment/submitButton.svg';
import FillSubmitButtonIcon from '@assets/icons/comment/fillSubmitButton.svg';

interface PostIdProps {
    onSuccess: () => void; // 성공시 다시 refresh 할 데이터
    AddComment?: () => void; // 댓글 추가 api
    handleContact?: (e: any) => void; // 댓글 내용 바뀔 때
    commentId?: number;
    comment: string; // value 값
}

const CommentInput = ({ comment, AddComment, handleContact }: PostIdProps) => {
    return (
        <div css={CommentInputStyle}>
            <div>
                <button>
                    <PhotoIcon />
                </button>

                <input type="text" value={comment} placeholder="댓글을 입력해주세요" onChange={handleContact} />

                <button type="submit" onClick={AddComment} disabled={!comment}>
                    {comment ? <FillSubmitButtonIcon /> : <SubmitButtonIcon />}
                </button>
            </div>
        </div>
    );
};

export default CommentInput;
