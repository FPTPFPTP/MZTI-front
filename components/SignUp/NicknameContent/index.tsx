import React, { useEffect } from 'react';
import { Typography } from 'antd';
import { QuestionCircleFilled } from '@ant-design/icons';
import { useForm } from 'react-hook-form';
import { useRecoilState } from 'recoil';
import { signupState } from '@/recoil/atom/signup';
import { Input } from '@components/Commons';
import { ISignupState } from '@/types/signup';
import { Container, ContentWrap, FlexStart, RuleWrap } from '../styled';
import colors from '@styles/color';

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
            <Typography.Title level={2} style={{ margin: '2rem', whiteSpace: 'nowrap' }}>
                닉네임을 입력해주세요
            </Typography.Title>
            <form css={ContentWrap} onSubmit={handleSubmit(onSubmit)}>
                <Input
                    inputStyle={'borderLess'}
                    placeholder={'닉네임을 입력해주세요'}
                    isResetBtn={!!nickname}
                    handleReset={() => reset()}
                    maxLength={8}
                    {...register('nickname', {
                        required: true,
                    })}
                />
                <button type="submit" />
            </form>
            <div css={FlexStart}>
                <QuestionCircleFilled />
                <Typography.Text style={{ color: colors.GRAY_ORIGIN_1 }}>닉네임 설정 규칙</Typography.Text>
            </div>
            <div css={RuleWrap}>
                <Typography.Text style={{ color: colors.GRAY_ORIGIN_1 }}>
                    1. 2~8자 내외의 한글, 영문(대,소문자), 숫자의 조합만 가능해요.
                    <br />
                    2. 특수문자(?, !, *, ^)등의 사용은 불가해요.
                    <br />
                    3. 다른 사용자와 중복되는 닉네임의 사용은 불가해요.
                    <br />
                    4. 욕설, 비속어등의 사용은 불가해요.
                </Typography.Text>
            </div>
        </div>
    );
};

export default Nickname;
