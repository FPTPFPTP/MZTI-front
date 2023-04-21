import { ChangeEvent, useEffect, useState, useRef } from 'react';
import Image from 'next/image';
import { CommentInputStyle } from './styled';
import PhotoIcon from '@assets/icons/comment/photo.svg';
import SubmitButtonIcon from '@assets/icons/comment/submitButton.svg';
import FillSubmitButtonIcon from '@assets/icons/comment/fillSubmitButton.svg';
import CloseButtonIcon from '@assets/icons/comment/close.svg';

interface PostIdProps {
    onSuccess: () => void; // 성공시 다시 refresh 할 데이터
    AddComment?: (imageFile?: File) => void; // 댓글 추가 api
    handleContact?: (e: any) => void; // 댓글 내용 바뀔 때
    commentId?: number;
    comment: string; // value 값
}

const CommentInput = ({ comment, AddComment, handleContact }: PostIdProps) => {
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

    return (
        <div css={CommentInputStyle}>
            {previewFileSrc && (
                <div className="image_box">
                    <button onClick={revokeImageLink}>
                        <CloseButtonIcon />
                    </button>
                    <Image src={previewFileSrc} alt={'댓글이미지'} width={100} height={100} />
                </div>
            )}
            <button onClick={() => imgInputRef.current && imgInputRef.current.click()}>
                <PhotoIcon />
            </button>

            <input ref={imgInputRef} type="file" name="file" accept="image/*" style={{ display: 'none' }} onChange={handleUpdateProfileImg} />

            <input type="text" value={comment} placeholder="댓글을 입력해주세요" onChange={handleContact} />

            <button
                type="submit"
                onClick={() => {
                    AddComment && AddComment(imageFile);
                    revokeImageLink();
                }}
                disabled={!comment}
            >
                {comment ? <FillSubmitButtonIcon /> : <SubmitButtonIcon />}
            </button>
        </div>
    );
};

export default CommentInput;
