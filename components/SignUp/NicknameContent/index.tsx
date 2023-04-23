import React, { useEffect } from 'react';
import { Typography } from 'antd';
import { QuestionCircleFilled } from '@ant-design/icons';
import { useForm } from 'react-hook-form';
import { useRecoilState } from 'recoil';
import { signupState } from '@/recoil/atom/signup';
import { Input } from '@components/Commons';
import { ISignupState } from '@/types/signup';
import { Container, ContentWrap } from '../styled';

interface INickname {
    onSubmit: (data: { nickname?: string }) => void;
}

/**
 *  닉네임 Tab
 *  @params onSubmit {function}
 * */

const Nickname = (props: INickname) => {
    const { onSubmit } = props;
    const [signupStateObj, setSignupStateObj] = useRecoilState(signupState);
    const { register, watch, handleSubmit, reset, setValue } = useForm<ISignupState>();
    const { nickname } = watch();

    useEffect(() => {
        setSignupStateObj((prev) => ({ ...prev, nickname: nickname }));
    }, [nickname]);

    // 페이지 접근시 이전에 작성한 값이 있으면 적용
    useEffect(() => {
        if (signupStateObj.nickname && signupStateObj.nickname.length) {
            setValue('nickname', signupStateObj.nickname);
        }
    }, []);

    return (
        <div css={Container}>
            <Typography.Title className="title">닉네임을 입력해주세요</Typography.Title>

            <form css={ContentWrap} onSubmit={handleSubmit(onSubmit)}>
                <Input
                    inputStyle={'borderLess'}
                    placeholder={'ex) 인티제수집가, 극T인간'}
                    isResetBtn={!!nickname}
                    handleReset={() => reset()}
                    maxLength={8}
                    {...register('nickname', {
                        required: true,
                    })}
                />
                <button type="submit" />
            </form>
        </div>
    );
};

export default Nickname;
