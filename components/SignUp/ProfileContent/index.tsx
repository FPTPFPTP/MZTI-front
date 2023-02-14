import React, { ChangeEvent, useRef } from 'react';
import { Typography } from 'antd';
import { CameraOutlined } from '@ant-design/icons';
import { Avatar, Button } from '@components/Commons';
import { Container, ProfileCard, AvatarWrap, UploadWrap, FlexCenter } from './styled';
import colors from '@styles/color';

const ProfileContent = () => {
    const profileImgInputRef = useRef<any>(null);

    const updateProfileImg = async ({ target: { files } }: ChangeEvent<HTMLInputElement>) => {
        if (files) {
            const file = files[0];
            console.log({ file });
        }
    };

    return (
        <div css={Container}>
            <Typography.Title level={1} style={{ margin: '2rem' }}>
                프로필 사진을 골라주세요.
            </Typography.Title>
            <div css={ProfileCard}>
                <div css={AvatarWrap}>
                    <form>
                        <Avatar alt={'프로필'} size={200} />
                        <div css={UploadWrap} onClick={() => profileImgInputRef.current.click()}>
                            <CameraOutlined style={{ color: colors.WHITE, fontSize: '2rem' }} />
                            <Typography.Text style={{ color: colors.WHITE }}>Upload</Typography.Text>
                        </div>
                        <input ref={profileImgInputRef} type="file" name="file" style={{ display: 'none' }} onChange={updateProfileImg} />
                    </form>
                </div>

                <div css={FlexCenter}>
                    <Typography.Text keyboard>ISFP</Typography.Text>
                    <Typography.Text strong>삽살개</Typography.Text>
                </div>
                <Typography.Text type="secondary">MBTI 뇌절 좋아함. 보이는 인프제는 다 모으는 인프제 콜렉터</Typography.Text>
            </div>
            <Button buttonStyle={'text'}>개인정보 및 제 3자 동의하기</Button>
        </div>
    );
};

export default ProfileContent;
