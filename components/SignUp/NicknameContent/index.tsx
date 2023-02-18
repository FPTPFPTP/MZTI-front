import React, { useEffect } from 'react';
import { Typography } from 'antd';
import { useForm } from 'react-hook-form';
import { useRecoilState } from 'recoil';
import { signupState } from '@/recoil/atom/signup';
import { Input } from '@components/Commons';
import { ISignupState } from '@/types/signup';
import { Container, ContentWrap } from './styled';

const Nickname = ({ onSubmit, isError, handleIsError }: { onSubmit: (data: any) => void; isError: boolean; handleIsError: (isError: boolean) => void }) => {
    const [signupStateObj, setSignupStateObj] = useRecoilState(signupState);
    const {
        register,
        watch,
        handleSubmit,
        reset,
        setValue,
        formState: { errors },
    } = useForm<ISignupState>();
    const { nickname } = watch();

    useEffect(() => {
        setSignupStateObj((prev) => ({ ...prev, nickname: nickname }));
        if (!nickname && !isError) {
            handleIsError(true);
        } else if (nickname && isError) {
            handleIsError(false);
        }
    }, [nickname, isError]);

    useEffect(() => {
        if (signupStateObj.nickname.length) {
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
            <div></div>
        </div>
    );
};

export default Nickname;
