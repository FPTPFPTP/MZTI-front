import { ChangeEvent, useEffect, useState, useRef } from 'react';
import Image from 'next/image';
import { CommentInputStyle } from './styled';
import PhotoIcon from '@assets/icons/comment/photo.svg';
import CloseButtonIcon from '@assets/icons/comment/close.svg';
import { useSetRecoilState } from 'recoil';
import { commentModify, commentText } from '@/recoil/atom/user';

interface PostIdProps {
    onSuccess: () => void; // 성공시 다시 refresh 할 데이터
    PutComment?: (imageFile?: File) => void; // 댓글 추가 api
    handleContact?: (e: any) => void; // 댓글 내용 바뀔 때
    commentId?: number;
    comment: string; // value 값
}

// 댓글 수정했을 때 나타나는 입력폼
const CommentModifyInput = ({ comment, PutComment, handleContact }: PostIdProps) => {
    const setCommentModifyState = useSetRecoilState(commentModify);
    const setCommentValue = useSetRecoilState(commentText);

    const [previewFileSrc, setPreviewFileSrc] = useState<string>();
    const [imageFile, setImageFile] = useState<File>();

    const imgInputRef = useRef<HTMLInputElement | null>(null);

    // 이미지 로컬 링크 해제
    const revokeImageLink = () => {
        if (previewFileSrc) {
            URL.revokeObjectURL(previewFileSrc);
            setPreviewFileSrc(undefined);
        }
    };

    const handleUpdateProfileImg = ({ target: { files } }: ChangeEvent<HTMLInputElement>) => {
        if (files) {
            const file = files[0];
            // 이미지 파일 저장
            setImageFile(file);

            // 이미지 로컬 링크 생성
            setPreviewFileSrc(URL.createObjectURL(new Blob([file])));
        }
    };

    useEffect(() => {
        return () => {
            revokeImageLink();
        };
    }, []);

    const CancelComment = () => {
        setCommentModifyState(false);
        setCommentValue('');
    };
    return (
        <div css={CommentInputStyle}>
            {previewFileSrc && (
                <div className="image_box">
                    <button onClick={revokeImageLink}>
                        <CloseButtonIcon />
                    </button>
                    <Image src={previewFileSrc} alt={'대댓글이미지'} width={100} height={100} />
                </div>
            )}

            <button onClick={() => imgInputRef.current && imgInputRef.current.click()}>
                <PhotoIcon />
            </button>

            <input ref={imgInputRef} type="file" name="file" accept="image/*" style={{ display: 'none' }} onChange={handleUpdateProfileImg} />

            <input type="text" value={comment} placeholder="댓글을 입력해주세요" onChange={handleContact} />

            <div>
                <button type="submit" onClick={CancelComment}>
                    취소
                </button>
                <button
                    type="submit"
                    onClick={() => {
                        PutComment && PutComment(imageFile);
                        revokeImageLink();
                    }}
                    disabled={!comment}
                >
                    변경
                </button>
            </div>
        </div>
    );
};

export default CommentModifyInput;
