import { ChangeEvent, useEffect, useState, useRef } from 'react';
import Image from 'next/image';
import { CommentInputStyle } from './styled';
import { ICommentModel } from '@/types/post';
import PictureIcon from '@assets/icons/comment/picture.svg';
import CheckIcon from '@assets/icons/write/check.svg';
import useClickOutside from '@/hooks/useClickOutside';

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
    const textareaRef = useRef<HTMLTextAreaElement | null>(null);

    const CommentRef = useRef(null);

    useClickOutside(CommentRef, () => {
        if (editComment) {
            onCancle();
            revokeImageLink();
            setCommentValue('');
            setImageFile(undefined);
        }
    });

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
    // const handleOnKeyPress = (e: any) => {
    //     if (e.key === 'Enter') {
    //         handleCommentAction();
    //     }
    // };

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

    const resizeTextArea = () => {
        if (textareaRef.current) {
            textareaRef.current.style.height = 'auto';
            textareaRef.current.style.height = textareaRef.current.scrollHeight + 'px';
        }
    };

    useEffect(resizeTextArea, [commentValue]);

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
        <div css={CommentInputStyle} ref={CommentRef}>
            <button className="image_box" onClick={() => imgInputRef.current && imgInputRef.current.click()}>
                {previewFileSrc ? <Image src={previewFileSrc} alt={'댓글이미지'} fill={true} /> : <PictureIcon />}
            </button>

            <input ref={imgInputRef} type="file" name="file" accept="image/*" style={{ display: 'none' }} onChange={handleUpdateProfileImg} />

            <div className={'text_wrap'}>
                <textarea ref={textareaRef} placeholder={'댓글을 입력해주세요'} value={commentValue} onChange={(e) => setCommentValue(e.target.value)} />
            </div>
            <div className="comment_btn">
                <button type="submit" onClick={handleCommentAction} disabled={!commentValue}>
                    <CheckIcon fill={commentValue ? '#000000' : '#949699'} />
                </button>
            </div>
        </div>
    );
};

export default CommentInput;
