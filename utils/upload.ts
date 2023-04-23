import { postImage } from '@apis/post';

/**
 * 게시글 & 댓글 이미지 업로드
 * @param value {string}
 * @returns
 */
export const postImageUpload = async (file: File) => {
    const fmData = new FormData();
    fmData.append('file', file);
    return await postImage({ formData: fmData });
};
