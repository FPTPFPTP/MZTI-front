import React, { ChangeEvent, useRef } from 'react';
import CameraSvg from '@assets/icons/camera.svg';
import { Avatar } from '@components/Commons';
import { AvatarWrapStyle, UploadWrapStyle } from './styled';

interface IProfileUpload {
    previewFileSrc: string;
    mbti: string;
    handleUpdateProfileImg: (target: ChangeEvent<HTMLInputElement>) => void;
}

/**
 *  프로필 사진 업로드
 *  @params previewFileSrc {string} 프로필 사진 이미지 주소
 *  @params mbti {string} mbti
 *  @params handleUpdateProfileImg {function} upload 파일 전달 cb 함수
 * */
const ProfileUpload = (props: IProfileUpload) => {
    const { previewFileSrc, mbti, handleUpdateProfileImg } = props;

    const profileImgInputRef = useRef<HTMLInputElement | null>(null);

    return (
        <div css={AvatarWrapStyle}>
            <Avatar src={previewFileSrc ? previewFileSrc : ''} alt={'프로필'} mbti={mbti} size={250} />
            <div css={UploadWrapStyle} onClick={() => profileImgInputRef.current && profileImgInputRef.current.click()}>
                <CameraSvg style={{ fontSize: '1.5rem' }} />
            </div>

            <input ref={profileImgInputRef} type="file" name="file" accept="image/*" style={{ display: 'none' }} onChange={handleUpdateProfileImg} />
        </div>
    );
};

export default ProfileUpload;
