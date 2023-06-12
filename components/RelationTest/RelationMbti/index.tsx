import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useRecoilState } from 'recoil';
import { relationTestState } from '@/recoil/atom/relationTest';
import { Input, Mbti } from '@components/Commons';
import { IRelationTestModel } from '@/types/relationTest';
import { ContainerStyle } from './styled';

interface IRelationMbti {
    step: number;
}
const RelationMbti = ({ step }: IRelationMbti) => {
    const [relationTestStateObj, setRelationTestStateObj] = useRecoilState(relationTestState);

    const { register, watch, reset, setValue } = useForm<IRelationTestModel>();
    const { myName, partnerName } = watch();

    const onUpdateMbti = (mbti: string) => {
        step === 2
            ? setRelationTestStateObj({ ...relationTestStateObj, myMbti: mbti })
            : setRelationTestStateObj({ ...relationTestStateObj, partnerMbti: mbti });
    };

    // 페이지 접근시 이전에 작성한 값이 있으면 적용
    useEffect(() => {
        if (relationTestStateObj.myName && relationTestStateObj.myName.length) {
            setValue('myName', relationTestStateObj.myName);
        }
        if (relationTestStateObj.partnerName && relationTestStateObj.partnerName.length) {
            setValue('partnerName', relationTestStateObj.partnerName);
        }
    }, []);

    useEffect(() => {
        if (myName && myName.length) {
            setRelationTestStateObj({ ...relationTestStateObj, myName });
        }
    }, [myName]);

    useEffect(() => {
        if (partnerName && partnerName.length) {
            setRelationTestStateObj({ ...relationTestStateObj, partnerName });
        }
    }, [partnerName]);

    return (
        <div css={ContainerStyle}>
            <div className="name">
                <p>{step === 2 ? '내 이름' : '상대 이름'}</p>
                <form>
                    <Input
                        inputStyle={'borderLess'}
                        placeholder={'실명이 아닌 별명도 괜찮아요'}
                        isResetBtn={!!relationTestStateObj.myName}
                        handleReset={() => reset()}
                        maxLength={8}
                        {...register(step === 2 ? 'myName' : 'partnerName', {
                            required: true,
                        })}
                    />
                    <button type="submit" />
                </form>
            </div>
            <div className="mbti">
                <p>{step === 2 ? '내 MBTI' : '상대 MBTI'}</p>
                <Mbti mbti={step === 2 ? relationTestStateObj.myMbti : relationTestStateObj.partnerMbti} onUpdateMbti={onUpdateMbti} />
            </div>
        </div>
    );
};

export default RelationMbti;
