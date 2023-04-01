import React, { ChangeEvent, useEffect, useState } from 'react';
import { Typography } from 'antd';
import { useSetRecoilState } from 'recoil';
import { signupProfileFileState } from '@/recoil/atom/signup';
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
            <Typography.Title level={2} style={{ margin: '2rem', whiteSpace: 'nowrap' }}>
                프로필 사진을 골라주세요
            </Typography.Title>
            <ProfileUpload previewFileSrc={previewFileSrc} handleUpdateProfileImg={updateProfileImg} />
        </div>
    );
};

export default ProfileContent;
