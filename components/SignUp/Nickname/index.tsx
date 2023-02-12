import React from 'react';
import { Typography } from 'antd';
import { useForm } from 'react-hook-form';
import { Input } from '@components/Commons';
import { Container, ContentWrap } from './styled';

const Nickname = ({ onSubmit }: { onSubmit: (data: any) => void }) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    return (
        <div css={Container}>
            <Typography.Title level={1} style={{ margin: '2rem' }}>
                닉네임을 입력해주세요.
            </Typography.Title>
            <form css={ContentWrap} onSubmit={handleSubmit(onSubmit)}>
                <Input inputStyle={'borderLess'} {...register('nickname', { required: true })} />
                {errors.exampleRequired && <span>This field is required</span>}
                <button type="submit" />
            </form>
        </div>
    );
};

export default Nickname;
