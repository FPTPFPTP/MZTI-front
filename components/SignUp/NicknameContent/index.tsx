import React, { useEffect, useState } from 'react';
import { Typography } from 'antd';
import { QuestionCircleFilled, CaretUpFilled, CaretDownFilled } from '@ant-design/icons';
import { useForm } from 'react-hook-form';
import { useRecoilState } from 'recoil';
import { signupState } from '@/recoil/atom/signup';
import { Input } from '@components/Commons';
import { ISignupState } from '@/types/signup';
import { Container, ContentWrap, FlexStart } from './styled';
import colors from '@styles/color';

const Nickname = ({ onSubmit, isError, handleIsError }: { onSubmit: (data: any) => void; isError: boolean; handleIsError: (isError: boolean) => void }) => {
    const [signupStateObj, setSignupStateObj] = useRecoilState(signupState);
    const [isNicknameRule, setIsNicknameRule] = useState<boolean>(false);
    const {
        register,
        watch,
        handleSubmit,
        reset,
        setValue,
        formState: { errors },
    } = useForm<ISignupState>();
    const { nickname } = watch();

    const onNicknameRule = () => {
        setIsNicknameRule((prev) => !prev);
    };

    useEffect(() => {
        setSignupStateObj((prev) => ({ ...prev, nickname: nickname }));
        if (!nickname && !isError) {
            handleIsError(true);
        } else if (nickname && isError) {
            handleIsError(false);
        }
    }, [nickname, isError]);

    useEffect(() => {
        if (signupStateObj.nickname && signupStateObj.nickname.length) {
            setValue('nickname', signupStateObj.nickname);
        }
    }, []);

    return (
        <div css={Container}>
            <Typography.Title level={2} style={{ margin: '2rem', whiteSpace: 'nowrap' }}>
                닉네임을 입력해주세요.
            </Typography.Title>
            <form css={ContentWrap} onSubmit={handleSubmit(onSubmit)}>
                <Input
                    inputStyle={'borderLess'}
                    placeholder={'닉네임을 입력해주세요'}
                    isResetBtn={!!nickname}
                    handleReset={() => reset()}
                    {...register('nickname', { required: true })}
                />
                {errors.nickname && <span className={'form-item-error'}>닉네임 입력은 필수에요.</span>}
                <button type="submit" />
            </form>
            <div css={FlexStart}>
                <QuestionCircleFilled />
                <Typography.Text style={{ color: colors.GRAY_ORIGIN_1 }}>닉네임 설정 규칙</Typography.Text>
                {isNicknameRule ? (
                    <CaretUpFilled onClick={onNicknameRule} style={{ cursor: 'pointer' }} />
                ) : (
                    <CaretDownFilled onClick={onNicknameRule} style={{ cursor: 'pointer' }} />
                )}
            </div>
            {isNicknameRule && (
                <Typography.Text style={{ color: colors.GRAY_ORIGIN_1, float: 'left' }}>
                    1. 2~8자 내외의 한글, 영문(대,소문자), 숫자의 조합만 가능해요.
                    <br />
                    2. 특수문자(?, !, *, ^)등의 사용은 불가해요.
                    <br />
                    3. 다른 사용자와 중복되는 닉네임의 사용은 불가해요.
                    <br />
                    4. 욕설, 비속어등의 사용은 불가해요.
                </Typography.Text>
            )}
        </div>
    );
};

export default Nickname;
