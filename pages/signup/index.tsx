import React, { useEffect, useMemo, useState } from 'react';
import { useRouter } from 'next/router';
import { message } from 'antd';
import { useRecoilState, useRecoilValue } from 'recoil';
import { myPageInfo } from '@/recoil/atom/user';
import { signupState, signupProfileFileState } from '@/recoil/atom/signup';
import { Button, Header, ProgressLineBar } from '@components/Commons';
import NonSSRWrapper from '@components/Layout/NonSSRWrapper';
import { MbtiContent, NicknameContent, ProfileContent } from '@components/SignUp';
import { getMeUserInfo, patchNickname, patchMbti, patchProfile } from '@apis/user';
import { openToast } from '@/utils/toast';
import { Layout, BodyWrapper, FooterWrapper } from '@styles/pages/signupStyled';

const SignUp = () => {
    const [stepActive, setStepActive] = useState<number>(1);
    const [isNickNamePossible, setIsNickNamePossible] = useState<boolean>(false);
    const [signupStateObj, setSignupStateObj] = useRecoilState(signupState);
    const [myInfo, setMyInfo] = useRecoilState(myPageInfo);
    const signupProfileFile = useRecoilValue(signupProfileFileState);

    // 다음단계 버튼 활성화
    const isError = useMemo(() => {
        switch (signupStateObj.step) {
            case 1: {
                if (signupStateObj.nickname && isNickNamePossible) {
                    return false;
                }
                return true;
            }
            case 2: {
                if (signupStateObj.mbti && signupStateObj.mbti.length === 4) {
                    return false;
                }

                return true;
            }
            case 3: {
                return false;
            }

            default: {
                return true;
            }
        }
    }, [signupStateObj, isNickNamePossible]);

    const router = useRouter();

    const onBackPage = () => {
        if (signupStateObj.step === 1) {
            router.back();
        } else {
            onPrev();
        }
    };

    const onSubmit = (data: { nickname?: string; introduce?: string }) => {
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
        if (stepActive > 3) {
            return;
        }

        switch (signupStateObj.step) {
            case 1: {
                // 닉네임 Tab
                await patchNickname({ nickname: signupStateObj.nickname });

                break;
            }
            case 2: {
                // MBTI Tab
                if (signupStateObj.mbti.length === 4) {
                    await patchMbti({ mbti: signupStateObj.mbti });
                }
                break;
            }
            case 3: {
                // Profile Tab
                if (signupProfileFile !== null) {
                    const fmData = new FormData();
                    fmData.append('file', signupProfileFile);
                    await patchProfile({ fmData: fmData });
                }
                const user = await getMeUserInfo();
                if (user) {
                    setMyInfo(user);
                    openToast({ message: 'MZTI 회원이 되신걸 환영해요 💓' });
                    router.replace('/');
                } else {
                    message.warning('서버에 문제가 있어요');
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
        if (myInfo) {
            if (myInfo.nickname && myInfo.mbti) router.back();
        } else {
            router.back();
        }
        if (signupStateObj.step) {
            setStepActive(signupStateObj.step);
        }
    }, []);

    return (
        <NonSSRWrapper>
            <div css={Layout}>
                <div css={BodyWrapper}>
                    <ProgressLineBar percent={stepActive} totalStep={3} />
                    {stepActive === 1 && <NicknameContent isPossible={isNickNamePossible} handleIsPossible={setIsNickNamePossible} onSubmit={onSubmit} />}
                    {stepActive === 2 && <MbtiContent />}
                    {stepActive === 3 && <ProfileContent />}
                </div>
                <div css={FooterWrapper}>
                    <Button className="pre_button" buttonStyle={'text'} disabled={stepActive === 1 ? true : false} onClick={onPrev}>
                        이전단계로
                    </Button>
                    <Button buttonStyle={'base'} disabled={isError ? true : false} onClick={onNext}>
                        {stepActive === 3 ? 'MZTI 시작해보기 !' : '다음 단계로'}
                    </Button>
                </div>
            </div>
        </NonSSRWrapper>
    );
};

export default SignUp;
