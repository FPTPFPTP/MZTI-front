import { Header, Input } from '@components/Commons';
import { useForm } from 'react-hook-form';
import { EditButton } from './styled';
import { ISignupState } from '@/types/signup';
import { BottomButton } from '@/components/Commons/Button';

const edit = () => {
    const { register, watch, handleSubmit, reset, setValue } = useForm<ISignupState>();
    const { nickname } = watch();

    return (
        <div>
            <Header title="회원정보 수정" />

            <form>
                <div>
                    <p>닉네임</p>

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
                    <p>한 줄 소개</p>
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
                    <p>프로필 사진</p>
                </div>

                <div>
                    <p>MBTI</p>
                </div>
            </form>

            <BottomButton>수정 완료하기</BottomButton>
        </div>
    );
};

export default edit;
