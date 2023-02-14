import React from 'react';
import { Typography } from 'antd';
import { useForm } from 'react-hook-form';
import { Input } from '@components/Commons';
import { Container, ContentWrap } from './styled';

const IntroduceContent = ({ onSubmit }: { onSubmit: (data: any) => void }) => {
    const {
        register,
        watch,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();
    const { introduce } = watch();

    return (
        <div css={Container}>
            <Typography.Title level={1} style={{ margin: '2rem' }}>
                한 줄 소개를 입력해주세요.
            </Typography.Title>
            <form css={ContentWrap} onSubmit={handleSubmit(onSubmit)}>
                <Input inputStyle={'borderLess'} isResetBtn={!!introduce} handleReset={() => reset()} {...register('introduce', { required: true })} />
                {errors.introduce && <span>This field is required</span>}
                <button type="submit" />
            </form>
        </div>
    );
};

export default IntroduceContent;
