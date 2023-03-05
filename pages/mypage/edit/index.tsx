import React, { ChangeEvent, useEffect, useRef, useState } from 'react';
import { Header, Input } from '@components/Commons';
import { useForm } from 'react-hook-form';
import { editLayout, editTitle } from './styled';
import { ISignupState } from '@/types/signup';
import { useRecoilState } from 'recoil';
import { BottomButton } from '@/components/Commons/Button';
import { Avatar } from '@components/Commons';
import { CameraOutlined } from '@ant-design/icons';
import { AvatarWrap, UploadWrap } from './styled';
import { signupProfileFileState } from '@/recoil/atom/signup';

const edit = () => {
    const { register, watch, handleSubmit, reset, setValue } = useForm<ISignupState>();
    const { nickname } = watch();

    const profileImgInputRef = useRef<any>(null);
    const [previewFileSrc, setPreviewFileSrc] = useState<string>('');
    const [signupProfileFile, setSignupProfileFile] = useRecoilState(signupProfileFileState);

    const updateProfileImg = async ({ target: { files } }: ChangeEvent<HTMLInputElement>) => {
        if (files) {
            const file = files[0];

            setSignupProfileFile(file);

            setPreviewFileSrc(URL.createObjectURL(new Blob([file])));
        }
    };

    useEffect(() => {
        return () => {
            if (previewFileSrc) {
                URL.revokeObjectURL(previewFileSrc);
            }
        };
    }, []);

    return (
        <div css={editLayout}>
            <Header title="회원정보 수정" />

            <form>
                <div>
                    <h4 css={editTitle}>닉네임</h4>

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
                </div>

                <div>
                    <h4 css={editTitle}>한 줄 소개</h4>
                    <Input
                        inputStyle={'borderLess'}
                        placeholder={'한 줄 소개'}
                        isResetBtn={!!nickname}
                        handleReset={() => reset()}
                        maxLength={30}
                        {...register('nickname', {
                            required: true,
                        })}
                    />
                </div>

                <div>
                    <div css={editTitle}>
                        <h4>프로필 사진</h4>
                        <span>카메라 버튼을 눌러 프로필 사진 변경</span>
                    </div>

                    <div css={AvatarWrap}>
                        <form>
                            <Avatar src={previewFileSrc} alt={'프로필'} size={200} />
                            <div css={UploadWrap} onClick={() => profileImgInputRef.current.click()}>
                                <CameraOutlined style={{ fontSize: '1.5rem' }} />
                            </div>
                            <input ref={profileImgInputRef} type="file" name="file" accept="image/*" style={{ display: 'none' }} onChange={updateProfileImg} />
                        </form>
                    </div>
                </div>

                <div>
                    <h4 css={editTitle}>MBTI</h4>
                </div>
            </form>

            <BottomButton>수정 완료하기</BottomButton>
        </div>
    );
};

export default edit;
