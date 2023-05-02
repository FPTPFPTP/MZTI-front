import { ChangeEvent, useEffect, useState, useRef } from 'react';
import Image from 'next/image';
import { CommentInputStyle } from './styled';
import { ICommentModel } from '@/types/post';
import PhotoIcon from '@assets/icons/comment/photo.svg';
import SubmitButtonIcon from '@assets/icons/comment/submitButton.svg';
import FillSubmitButtonIcon from '@assets/icons/comment/fillSubmitButton.svg';
import CloseButtonIcon from '@assets/icons/comment/close.svg';

interface ICommentInputProps {
    editComment?: ICommentModel;
    onAddComment?: (value: string, imageFile?: File) => void; // 댓글 추가 api
    onEditComment?: (id: number, value: string, imageFile?: File, imageUrl?: string) => void; // 댓글 수정 api
    onCancle: () => void;
}

const CommentInput = ({ editComment, onAddComment, onEditComment, onCancle }: ICommentInputProps) => {
    const [commentValue, setCommentValue] = useState<string>('');
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

    // 엔터
    const handleOnKeyPress = (e: any) => {
        if (e.key === 'Enter') {
            handleCommentAction();
        }
    };

    const handleCommentAction = () => {
        if (editComment) {
            onEditComment && onEditComment(editComment.id, commentValue, previewFileSrc ? imageFile : undefined, previewFileSrc ? editComment.image : '');
        } else {
            onAddComment && onAddComment(commentValue, imageFile);
        }
        revokeImageLink();
        setCommentValue('');
        setImageFile(undefined);
    };

    useEffect(() => {
        if (editComment) {
            setCommentValue(editComment.comment);
            if (editComment.image) {
                setPreviewFileSrc(editComment.image);
            }
        }
    }, [editComment]);

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

            <input
                type="text"
                value={commentValue}
                placeholder="댓글을 입력해주세요"
                onChange={(e) => setCommentValue(e.target.value)}
                onKeyPress={handleOnKeyPress}
            />
            {editComment ? (
                <div className="edit--input">
                    <button
                        type="submit"
                        onClick={() => {
                            onCancle();
                            setCommentValue('');
                        }}
                    >
                        취소
                    </button>
                    <button type="submit" onClick={handleCommentAction} disabled={!commentValue}>
                        변경
                    </button>
                </div>
            ) : (
                <button type="submit" onClick={handleCommentAction} disabled={!commentValue}>
                    {commentValue ? <FillSubmitButtonIcon /> : <SubmitButtonIcon />}
                </button>
            )}
        </div>
    );
};

export default CommentInput;
