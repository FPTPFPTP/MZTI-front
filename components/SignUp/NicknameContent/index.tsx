import React, { useEffect } from 'react';
import { Typography } from 'antd';
import { useForm } from 'react-hook-form';
import { Input } from '@components/Commons';
import { Container, ContentWrap } from './styled';

const Nickname = ({ onSubmit, isError, handleIsError }: { onSubmit: (data: any) => void; isError: boolean; handleIsError: (isError: boolean) => void }) => {
    const {
        register,
        watch,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();
    const { nickname } = watch();

    useEffect(() => {
        if (!nickname && !isError) {
            handleIsError(true);
        } else if (nickname && isError) {
            handleIsError(false);
        }
    }, [nickname, isError]);

    return (
        <div css={Container}>
            <Typography.Title level={1} style={{ margin: '2rem' }}>
                닉네임을 입력해주세요.
            </Typography.Title>
            <form css={ContentWrap} onSubmit={handleSubmit(onSubmit)}>
                <Input inputStyle={'borderLess'} isResetBtn={!!nickname} handleReset={() => reset()} {...register('nickname', { required: true })} />
                {errors.nickname && <span className={'form-item-error'}>닉네임 입력은 필수에요.</span>}
                <button type="submit" />
            </form>
        </div>
    );
};

export default Nickname;
