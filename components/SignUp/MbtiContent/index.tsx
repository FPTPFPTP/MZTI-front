import React from 'react';
import { Typography } from 'antd';
import { useRecoilState } from 'recoil';
import { signupState } from '@/recoil/atom/signup';
import { Mbti } from '@components/Commons';
import { Container } from '../styled';

const MbtiContent = () => {
    const [signupStateObj, setSignupStateObj] = useRecoilState(signupState);

    const onUpdateMbti = (mbti: string) => {
        setSignupStateObj((prev) => ({ ...prev, mbti: mbti }));
    };

    return (
        <div css={Container}>
            <Typography.Title className="title">MBTI를 입력해주세요</Typography.Title>

            <Mbti mbti={signupStateObj.mbti} onUpdateMbti={onUpdateMbti} />
        </div>
    );
};

export default MbtiContent;
