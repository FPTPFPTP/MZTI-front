import React, { useEffect, useMemo, useState } from 'react';
import { useRouter } from 'next/router';
import { message } from 'antd';
import Filter from 'badwords-ko';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import { myPageInfo } from '@/recoil/atom/user';
import { signupState, signupProfileFileState } from '@/recoil/atom/signup';
import { Button, Header, ProgressLineBar } from '@components/Commons';
import NonSSRWrapper from '@components/Layout/NonSSRWrapper';
import { IntroduceContent, MbtiContent, NicknameContent, ProfileContent } from '@components/SignUp';
import { getMeUserInfo, patchNickname, patchMbti, patchIntroduce, patchProfile } from '@apis/user';
import RegExp, { NICKNAME_REG } from '@utils/regExp';
import { openToast } from '@/utils/toast';
import { Layout, BodyWrapper, FooterWrapper } from '@styles/pages/signupStyled';

const SignUp = () => {
    const [stepActive, setStepActive] = useState<number>(1);

    const [signupStateObj, setSignupStateObj] = useRecoilState(signupState);
    const setMyInfo = useSetRecoilState(myPageInfo);
    const signupProfileFile = useRecoilValue(signupProfileFileState);

    // 다음단계 버튼 활성화
    const isError = useMemo(() => {
        switch (signupStateObj.step) {
            case 1: {
                if (signupStateObj.nickname) {
                    if (signupStateObj.nickname.length === 0 || !RegExp(NICKNAME_REG, signupStateObj.nickname)) {
                        return true;
                    }
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
            case 3:
            case 4: {
                return false;
            }

            default: {
                return true;
            }
        }
    }, [signupStateObj]);

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
        if (stepActive > 4) {
            return;
        }

        switch (signupStateObj.step) {
            case 1: {
                // 닉네임 Tab
                const filter = new Filter();
                if (!RegExp(NICKNAME_REG, signupStateObj.nickname)) {
                    message.error(`올바르지 않은 닉네임이에요. 아래의\n '닉네임 설정 규칙'을 참고해 다시 시도해주세요.`);
                    return;
                } else if (filter.clean(signupStateObj.nickname).includes('*')) {
                    message.error(`올바르지 않은 닉네임이에요. 아래의\n '닉네임 설정 규칙'을 참고해 다시 시도해주세요.`);
                    return;
                } else {
                    await patchNickname({ nickname: signupStateObj.nickname });
                }
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
                // 자기소개 Tab
                if (signupStateObj.introduce.length > 0) {
                    await patchIntroduce({ intro: signupStateObj.introduce });
                }
                break;
            }
            case 4: {
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
        if (signupStateObj.step) {
            setStepActive(signupStateObj.step);
        }
    }, []);

    return (
        <NonSSRWrapper>
            <div css={Layout}>
                <Header onClickBackButton={onBackPage} />
                <div css={BodyWrapper}>
                    <ProgressLineBar percent={(stepActive / 4) * 100} />
                    {stepActive === 1 && <NicknameContent onSubmit={onSubmit} />}
                    {stepActive === 2 && <MbtiContent />}
                    {stepActive === 3 && <IntroduceContent onSubmit={onSubmit} />}
                    {stepActive === 4 && <ProfileContent />}
                </div>
                <div css={FooterWrapper}>
                    {/* <Button buttonStyle={'text'} disabled={stepActive === 1 ? true : false} onClick={onPrev}>
                    이전단계로
                </Button> */}
                    <Button buttonStyle={'base'} disabled={isError ? true : false} onClick={onNext}>
                        {stepActive === 4 ? 'MZTI 시작해보기 !' : '다음단계로'}
                    </Button>
                </div>
            </div>
        </NonSSRWrapper>
    );
};

export default SignUp;
