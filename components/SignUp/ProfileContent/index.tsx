import React, { ChangeEvent, useEffect, useRef, useState } from 'react';
import { Typography } from 'antd';
import { CameraOutlined } from '@ant-design/icons';
import { Avatar } from '@components/Commons';
import { Container, AvatarWrap, UploadWrap } from './styled';

const ProfileContent = () => {
    const profileImgInputRef = useRef<any>(null);
    const [fileSrc, setFileSrc] = useState('');

    const updateProfileImg = async ({ target: { files } }: ChangeEvent<HTMLInputElement>) => {
        if (files) {
            const file = files[0];

            setFileSrc(URL.createObjectURL(new Blob([file])));
        }
    };

    useEffect(() => {
        return () => {
            if (fileSrc) {
                URL.revokeObjectURL(fileSrc);
            }
        };
    }, []);

    return (
        <div css={Container}>
            <Typography.Title level={2} style={{ margin: '2rem', whiteSpace: 'nowrap' }}>
                프로필 사진을 골라주세요.
            </Typography.Title>
            <div css={AvatarWrap}>
                <form>
                    <Avatar src={fileSrc} alt={'프로필'} size={200} />
                    <div css={UploadWrap} onClick={() => profileImgInputRef.current.click()}>
                        <CameraOutlined style={{ fontSize: '1.5rem' }} />
                    </div>
                    <input ref={profileImgInputRef} type="file" name="file" accept="image/*" style={{ display: 'none' }} onChange={updateProfileImg} />
                </form>
            </div>
        </div>
    );
};

export default ProfileContent;
