import React, { useEffect } from 'react';
import { Typography } from 'antd';
import { useForm } from 'react-hook-form';
import { useRecoilState } from 'recoil';
import { signupState } from '@/recoil/atom/signup';
import { Input } from '@components/Commons';
import { Container, ContentWrap } from './styled';

const IntroduceContent = ({ onSubmit }: { onSubmit: (data: any) => void }) => {
    const [signupStateObj, setSignupStateObj] = useRecoilState(signupState);
    const {
        register,
        watch,
        handleSubmit,
        reset,
        setValue,
        formState: { errors },
    } = useForm();
    const { introduce } = watch();

    useEffect(() => {
        setSignupStateObj((prev) => ({ ...prev, introduce: introduce }));
    }, [introduce]);

    useEffect(() => {
        if (signupStateObj.introduce.length) {
            setValue('introduce', signupStateObj.introduce);
        }
    }, []);

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
