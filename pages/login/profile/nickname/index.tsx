import React, { useState } from 'react';
import { Layout, HeaderWrapper, BodyWrapper, FooterWrapper } from './styled';
import { Button, Input } from '@components/Commons';
import { MbtiTouch, StepProgressBar } from '@components/Layout/SignUpLayout';
import { IntroduceContent, MbtiContent, Nickname as NicknameContent } from '@components/SignUp';

const STEP_ITEMS = ['닉네임', 'MBTI 입력', '한줄소개 입력', '프로필 입력'];

const Nickname = () => {
    const [stepActive, setStepActive] = useState(1);

    const onSubmit = (data: any) => {
        console.log('nickname', data);
        if (data.nickname) {
            setStepActive((prev) => prev + 1);
        }
    };

    const onPrev = () => {
        if (stepActive <= 1) {
            return;
        }
        setStepActive((prev) => prev - 1);
    };
    const onNext = () => {
        if (stepActive >= STEP_ITEMS.length) {
            return;
        }
        setStepActive((prev) => prev + 1);
    };

    return (
        <div css={Layout}>
            <div css={HeaderWrapper}>
                <StepProgressBar items={STEP_ITEMS} active={stepActive} />
            </div>
            <div css={BodyWrapper}>
                {stepActive === 1 && <NicknameContent onSubmit={onSubmit} />}
                {stepActive === 2 && <MbtiContent />}
                {stepActive === 3 && <IntroduceContent onSubmit={onSubmit} />}
                {stepActive === 4 && <div>프로필ㄴ</div>}
            </div>
            <div css={FooterWrapper}>
                <Button buttonStyle={'text'} onClick={onPrev}>
                    이전단계로
                </Button>
                <Button buttonStyle={'base'} onClick={onNext}>
                    다음단계로
                </Button>
            </div>
        </div>
    );
};

export default Nickname;
