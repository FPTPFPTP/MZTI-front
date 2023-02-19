import React, { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import { signupState } from '@/recoil/atom/signup';
import { Layout, BodyWrapper, FooterWrapper } from './styled';
import { Button, ProgressLineBar } from '@components/Commons';
import { IntroduceContent, MbtiContent, NicknameContent, ProfileContent } from '@components/SignUp';

const STEP_ITEMS = ['닉네임', 'MBTI 입력', '한줄소개 입력', '프로필 입력'];

const SignUp = () => {
    const [stepActive, setStepActive] = useState<number>(1);
    const [isError, setIsError] = useState<boolean>(false);
    const [signupStateObj, setSignupStateObj] = useRecoilState(signupState);

    const onSubmit = (data: { nickname?: string; introduce: string }) => {
        if (data.nickname) {
            onNext();
        }
        if (data.introduce) {
            onNext();
        }
    };

    const onPrev = () => {
        if (stepActive <= 1) {
            return;
        }
        setStepActive((prev) => prev - 1);
        setSignupStateObj((prev) => ({ ...prev, step: prev.step - 1 }));
    };

    const onNext = () => {
        if (stepActive >= STEP_ITEMS.length) {
            return;
        }
        setStepActive((prev) => prev + 1);
        setSignupStateObj((prev) => ({ ...prev, step: prev.step + 1 }));
    };

    useEffect(() => {
        if (signupStateObj.step) {
            setStepActive(signupStateObj.step);
        }
    }, []);

    return (
        <div css={Layout}>
            {/*<StepProgressBar items={STEP_ITEMS} active={stepActive} />*/}
            <div css={BodyWrapper}>
                <ProgressLineBar percent={(stepActive / 4) * 100} />
                {stepActive === 1 && <NicknameContent onSubmit={onSubmit} isError={isError} handleIsError={(isError) => setIsError(isError)} />}
                {stepActive === 2 && <MbtiContent isError={isError} handleIsError={(isError) => setIsError(isError)} />}
                {stepActive === 3 && <IntroduceContent onSubmit={onSubmit} />}
                {stepActive === 4 && <ProfileContent />}
            </div>
            <div css={FooterWrapper}>
                <Button buttonStyle={'text'} disabled={stepActive === 1 ? true : false} onClick={onPrev}>
                    이전단계로
                </Button>
                <Button buttonStyle={'base'} disabled={isError ? true : false} onClick={onNext}>
                    {stepActive === 4 ? 'MZTI 시작해보기 !' : '다음단계로'}
                </Button>
            </div>
        </div>
    );
};

export default SignUp;
