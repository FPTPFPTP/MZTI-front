import React, { ChangeEvent, useRef } from 'react';
import CameraSvg from '@assets/icons/camera.svg';
import { Avatar } from '@components/Commons';
import { AvatarWrapStyle, UploadWrapStyle } from './styled';
import { useRecoilValue } from 'recoil';
import { signupState } from '@/recoil/atom/signup';

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
    const { previewFileSrc, handleUpdateProfileImg } = props;
    const mbtiInfo = useRecoilValue(signupState);

    const profileImgInputRef = useRef<HTMLInputElement | null>(null);

    return (
        <div css={AvatarWrapStyle}>
            <Avatar src={previewFileSrc ? previewFileSrc : ''} alt={'프로필'} mbti={mbtiInfo.mbti} />
            <div css={UploadWrapStyle} onClick={() => profileImgInputRef.current && profileImgInputRef.current.click()}>
                <CameraSvg style={{ fontSize: '1.5rem' }} />
            </div>
            <input ref={profileImgInputRef} type="file" name="file" accept="image/*" style={{ display: 'none' }} onChange={handleUpdateProfileImg} />
        </div>
    );
};

export default ProfileUpload;
