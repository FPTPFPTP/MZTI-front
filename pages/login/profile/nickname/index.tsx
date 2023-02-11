import React from 'react';
import { Layout, HeaderWrapper, BodyWrapper, FooterWrapper } from './styled';
import { useForm } from 'react-hook-form';
import { Button, Input } from '@components/Commons';
import { StepProgressBar } from '@components/Layout/SignUpLayout';
const nickname = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const onSubmit = (data: any) => console.log(data);

    return (
        <div css={Layout}>
            <div css={HeaderWrapper}>
                <StepProgressBar items={['닉네임', 'MBTI 입력', '한줄소개 입력', '프로필 입력']} active={2} />
            </div>
            <div css={BodyWrapper}>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Input inputStyle={'borderLess'} {...register('nickname', { required: true })} />
                    {errors.exampleRequired && <span>This field is required</span>}

                    <input type="submit" />
                </form>
            </div>
            <div css={FooterWrapper}>
                <Button buttonStyle={'text'}>이전단계로</Button>
                <Button buttonStyle={'base'}>다음단계로</Button>
            </div>
        </div>
    );
};

export default nickname;
