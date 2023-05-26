import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useRecoilState } from 'recoil';
import { relationTestState } from '@/recoil/atom/relationTest';
import { Input, Mbti } from '@components/Commons';
import { IRelationTestModel } from '@/types/relationTest';
import { ContainerStyle } from './styled';

const MyMbti = () => {
    const [relationTestStateObj, setRelationTestStateObj] = useRecoilState(relationTestState);

    const { register, handleSubmit, watch, reset, setValue } = useForm<IRelationTestModel>();
    const { myName } = watch();

    const onSubmit = (data: { myName?: string }) => {
        setRelationTestStateObj({ ...relationTestStateObj, myName: data.myName || '' });
    };

    const onUpdateMbti = (mbti: string) => {
        setRelationTestStateObj({ ...relationTestStateObj, myMbti: mbti });
    };

    // 페이지 접근시 이전에 작성한 값이 있으면 적용
    useEffect(() => {
        if (relationTestStateObj.myName && relationTestStateObj.myName.length) {
            setValue('myName', relationTestStateObj.myName);
        }
    }, []);

    useEffect(() => {
        if (myName && myName.length) {
            setRelationTestStateObj({ ...relationTestStateObj, myName: myName });
        }
    }, [myName]);

    return (
        <div css={ContainerStyle}>
            <div className="name">
                <p>내 이름</p>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Input
                        inputStyle={'borderLess'}
                        placeholder={'실명이 아닌 별명도 괜찮아요'}
                        isResetBtn={!!relationTestStateObj.myName}
                        handleReset={() => reset()}
                        maxLength={8}
                        {...register('myName', {
                            required: true,
                        })}
                    />
                    <button type="submit" />
                </form>
            </div>
            <div className="mbti">
                <p>내 MBTI</p>
                <Mbti mbti={relationTestStateObj.myMbti} onUpdateMbti={onUpdateMbti} />
            </div>
        </div>
    );
};

export default MyMbti;
