import React, { useEffect } from 'react';
import { Typography } from 'antd';
import { useForm } from 'react-hook-form';
import { useRecoilState } from 'recoil';
import { signupState } from '@/recoil/atom/signup';
import { Input } from '@components/Commons';
import { Container, ContentWrap } from '../styled';

interface IIntroduceContent {
    onSubmit: (data: { introduce?: string }) => void;
}

/**
 *  자기소개 Tab
 *  @params onSubmit {function} 프로필 사진 이미지 주소
 * */

const IntroduceContent = (props: IIntroduceContent) => {
    const { onSubmit } = props;
    const [signupStateObj, setSignupStateObj] = useRecoilState(signupState);
    const { register, watch, handleSubmit, reset, setValue } = useForm();
    const { introduce } = watch();

    useEffect(() => {
        setSignupStateObj((prev) => ({ ...prev, introduce: introduce }));
    }, [introduce]);

    // 페이지 접근시 이전에 작성한 값이 있으면 적용
    useEffect(() => {
        if (signupStateObj.introduce.length) {
            setValue('introduce', signupStateObj.introduce);
        }
    }, []);

    return (
        <div css={Container}>
            <Typography.Title className="title">한 줄 소개를 입력해주세요</Typography.Title>
            <form css={ContentWrap} onSubmit={handleSubmit(onSubmit)}>
                <Input
                    inputStyle={'borderLess'}
                    placeholder={'예) 인프제콜렉터, 뇌절전문가'}
                    isResetBtn={!!introduce}
                    handleReset={() => reset()}
                    maxLength={30}
                    {...register('introduce')}
                />
                <button type="submit" />
            </form>
        </div>
    );
};

export default IntroduceContent;
