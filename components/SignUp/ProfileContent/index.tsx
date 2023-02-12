import { Typography } from 'antd';
import Upload from '../Upload';
import { Container, ProfileCard, FlexCenter } from './styled';
import React from 'react';
import { Button } from '@components/Commons';

const ProfileContent = () => {
    return (
        <div css={Container}>
            <Typography.Title level={1} style={{ margin: '2rem' }}>
                프로필 사진을 골라주세요.
            </Typography.Title>
            <div css={ProfileCard}>
                <Upload />
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
