import React, { ChangeEvent, useRef } from 'react';
import CameraSvg from '@assets/icons/camera.svg';
import { Avatar } from '@components/Commons';
import { AvatarWrapStyle, UploadWrapStyle } from './styled';

interface IProfileUpload {
    previewFileSrc: string;
    size?: number;
    handleUpdateProfileImg: (target: ChangeEvent<HTMLInputElement>) => void;
}

/**
 *  프로필 사진 업로드
 *  @params previewFileSrc {string} 프로필 사진 이미지 주소
 *  @params size {number | undefined} 크기
 *  @params handleUpdateProfileImg {function} upload 파일 전달 cb 함수
 * */
const ProfileUpload = (props: IProfileUpload) => {
    const { previewFileSrc, size = 200, handleUpdateProfileImg } = props;

    const profileImgInputRef = useRef<HTMLInputElement | null>(null);

    return (
        <form css={AvatarWrapStyle}>
            <Avatar src={previewFileSrc} alt={'프로필'} size={size} />
            <div css={UploadWrapStyle} onClick={() => profileImgInputRef.current && profileImgInputRef.current.click()}>
                <CameraSvg style={{ fontSize: '1.5rem' }} />
            </div>
            <input ref={profileImgInputRef} type="file" name="file" accept="image/*" style={{ display: 'none' }} onChange={handleUpdateProfileImg} />
        </form>
    );
};

export default ProfileUpload;
