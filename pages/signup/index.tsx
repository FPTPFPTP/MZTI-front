import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { message } from 'antd';
import { useRecoilState, useRecoilValue } from 'recoil';
import { signupState, signupProfileFileState } from '@/recoil/atom/signup';
import { Button, ProgressLineBar } from '@components/Commons';
import { IntroduceContent, MbtiContent, NicknameContent, ProfileContent } from '@components/SignUp';
import Axios from '@utils/axios';
import RegExp, { NICKNAME_REG } from '@utils/regExp';
import { Layout, BodyWrapper, FooterWrapper } from '@styles/pages/signupStyled';

const STEP_ITEMS = ['닉네임', 'MBTI 입력', '한줄소개 입력', '프로필 입력'];

const SignUp = () => {
    const [stepActive, setStepActive] = useState<number>(1);
    const [isError, setIsError] = useState<boolean>(false);
    const [signupStateObj, setSignupStateObj] = useRecoilState(signupState);
    const signupProfileFile = useRecoilValue(signupProfileFileState);
    const router = useRouter();

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

    const onNext = async () => {
        if (stepActive > STEP_ITEMS.length) {
            return;
        }

        switch (signupStateObj.step) {
            case 1: {
                if (!RegExp(NICKNAME_REG, signupStateObj.nickname)) {
                    message.error(`올바르지 않은 닉네임이에요. 아래의\n '닉네임 설정 규칙'을 참고해 다시 시도해주세요.`);
                    return;
                } else {
                    await Axios.patch('/user/nickname', {
                        nickname: signupStateObj.nickname,
                    });
                }
                break;
            }
            case 2: {
                if (signupStateObj.mbti.length === 4) {
                    await Axios.patch('/user/mbti', {
                        mbti: signupStateObj.mbti,
                    });
                    setIsError(false);
                } else {
                    setIsError(true);
                }
                break;
            }
            case 3: {
                if (signupStateObj.introduce.length > 0) {
                    await Axios.patch('/user/intro', {
                        intro: signupStateObj.introduce,
                    });
                }
                break;
            }
            case 4: {
                if (signupProfileFile !== null) {
                    const fmData = new FormData();
                    fmData.append('file', signupProfileFile);
                    const data = await Axios.patch(`/user/profile`, fmData, {
                        headers: {
                            'content-type': 'multipart/form-data',
                        },
                    });
                    if (data.status === 200) {
                        router.push('/');
                    }
                }
                return;
            }
            default: {
                break;
            }
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
