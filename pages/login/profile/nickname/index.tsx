import React from 'react';
import { Layout, HeaderWrapper, BodyWrapper, FooterWrapper } from './styled';
// import { Button } from 'antd';
import { useForm } from 'react-hook-form';
import { Button, Input } from '@components/Commons';
const nickname = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();
    const onSubmit = (data: any) => console.log(data);

    return (
        <div css={Layout}>
            <div css={HeaderWrapper}>header</div>
            <div css={BodyWrapper}>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Input {...register('nickname', { required: true })} />

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
