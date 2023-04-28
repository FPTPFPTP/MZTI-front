import React, { useEffect, useState } from 'react';
import { Typography } from 'antd';
import Filter from 'badwords-ko';
import { useForm } from 'react-hook-form';
import { useRecoilState } from 'recoil';
import { signupState } from '@/recoil/atom/signup';
import { Input } from '@components/Commons';
import { getNicknameCheck } from '@apis/user';
import RegExp, { WORD_CHECK_REG, SPECIAL_WORD_CHECK_REG } from '@utils/regExp';
import { ISignupState } from '@/types/signup';
import { Container, ContentWrap } from '../styled';
import SuccessIcon from '@assets/icons/success.svg';
import WarningIcon from '@assets/icons/warning.svg';

interface INickname {
    isPossible: boolean;
    handleIsPossible: React.Dispatch<React.SetStateAction<boolean>>;
    onSubmit: (data: { nickname?: string }) => void;
}

/**
 *  닉네임 Tab
 *  @params onSubmit {function}
 * */

const Nickname = (props: INickname) => {
    const { isPossible, handleIsPossible, onSubmit } = props;
    const [validityText, setValidityText] = useState<string>('닉네임을 입력해주세요');
    const [signupStateObj, setSignupStateObj] = useRecoilState(signupState);
    const { register, watch, handleSubmit, reset, setValue } = useForm<ISignupState>();
    const { nickname } = watch();

    // 닉네임 체크
    const onNicknameCheck = async (value: string) => {
        const filter = new Filter();
        if (!value) {
            handleIsPossible(false);
            setValidityText('닉네임을 입력해주세요');
            return;
        } else if (!RegExp(SPECIAL_WORD_CHECK_REG, value)) {
            handleIsPossible(false);
            setValidityText('특수문자를 사용할 수 없습니다');
            return;
        } else if (!RegExp(WORD_CHECK_REG, value)) {
            handleIsPossible(false);
            setValidityText('2~8자 사이 한글, 영문, 숫자를 입력해주세요');
            return;
        } else if (filter.clean(value).includes('*')) {
            handleIsPossible(false);
            setValidityText('비속어를 사용할 수 없습니다');
            return;
        } else {
            const res = await getNicknameCheck({ nickname: value });
            if (res && res.code === 'SUCCESS') {
                handleIsPossible(true);
                setValidityText('사용가능한 닉네임입니다');
                return;
            } else {
                handleIsPossible(false);
                setValidityText('이미 사용중인 닉네임입니다');
                return;
            }
        }
    };

    useEffect(() => {
        setSignupStateObj((prev) => ({ ...prev, nickname: nickname }));
        onNicknameCheck(nickname);
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
                <div className="state-message">
                    {isPossible ? <SuccessIcon /> : <WarningIcon />}
                    <p>{validityText}</p>
                </div>
                <button type="submit" />
            </form>
        </div>
    );
};

export default Nickname;
