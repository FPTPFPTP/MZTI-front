import { CommentInputStyle } from './styled';
import PhotoIcon from '@assets/icons/comment/photo.svg';
import SubmitButtonIcon from '@assets/icons/comment/submitButton.svg';
import FillSubmitButtonIcon from '@assets/icons/comment/fillSubmitButton.svg';
import Axios from '@utils/axios';
import { useState } from 'react';

interface PostIdProps {
    postId?: number;
    onSuccess: () => void;
}

const CommentInput = ({ postId, onSuccess }: PostIdProps) => {
    const [comment, setComment] = useState<string>('');

    const AddComment = () => {
        return Axios.post('/post/comment', {
            postId: postId,
            comment: comment,
        }).then((res) => {
            onSuccess();
            setComment('');
        });
    };

    const handleContact = (e: React.ChangeEvent<HTMLInputElement>) => {
        setComment(e.target.value);
    };

    return (
        <div css={CommentInputStyle}>
            {/* TODO : 2차 오픈 때 */}
            {/* <button>
                <PhotoIcon />
            </button> */}

            <input type="text" value={comment} placeholder="댓글을 입력해주세요" onChange={handleContact} />

            <button type="submit" onClick={AddComment} disabled={!comment}>
                {comment ? <FillSubmitButtonIcon /> : <SubmitButtonIcon />}
            </button>
        </div>
    );
};

export default CommentInput;
