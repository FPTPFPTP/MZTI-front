import React, { ChangeEvent, useEffect, useState } from 'react';
import { Typography } from 'antd';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { signupProfileFileState, signupState } from '@/recoil/atom/signup';
import { ProfileUpload } from '@components/Commons';
import { Container } from '../styled';

/**
 *  Profile Tab
 * */

const ProfileContent = () => {
    // 이미지 링크
    const [previewFileSrc, setPreviewFileSrc] = useState<string>('');

    const setSignupProfileFile = useSetRecoilState(signupProfileFileState);

    const updateProfileImg = async ({ target: { files } }: ChangeEvent<HTMLInputElement>) => {
        if (files) {
            const file = files[0];
            // 이미지 파일 저장
            setSignupProfileFile(file);

            // 이미지 로컬 링크 생성
            setPreviewFileSrc(URL.createObjectURL(new Blob([file])));
        }
    };

    useEffect(() => {
        return () => {
            if (previewFileSrc) {
                // 이미지 로컬 링크 해제
                URL.revokeObjectURL(previewFileSrc);
            }
        };
    }, []);

    return (
        <div css={Container}>
            <Typography.Title className="title">프로필 사진을 설정해주세요</Typography.Title>
            <div className="profile">
                <ProfileUpload previewFileSrc={previewFileSrc} handleUpdateProfileImg={updateProfileImg} />
            </div>
        </div>
    );
};

export default ProfileContent;
