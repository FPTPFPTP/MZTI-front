import React, { useState, useMemo } from 'react';
import { useRouter } from 'next/router';
import { useRecoilValue } from 'recoil';
import { relationTestState } from '@/recoil/atom/relationTest';
import { Button, ProgressLineBar } from '@/components/Commons';
import { Relation, RelationMbti } from '@/components/RelationTest';
import NonSSRWrapper from '@components/Layout/NonSSRWrapper';
import { LinkCopy } from '@/utils/copy';
import { RelationTestWrapStyle, RelationTestBodyStyle, RelationTestFooterStyle } from '@styles/pages/relationTestStyled';

const Test = () => {
    const [stepActive, setStepActive] = useState<number>(1);
    const relationTestStateObj = useRecoilValue(relationTestState);

    const router = useRouter();

    // 다음단계 버튼 활성화
    const isError = useMemo(() => {
        switch (stepActive) {
            case 1: {
                if (relationTestStateObj.relation) {
                    return false;
                }
                return true;
            }
            case 2: {
                if (relationTestStateObj.myName.length && relationTestStateObj.myMbti.length) {
                    return false;
                }

                return true;
            }
            case 3: {
                if (relationTestStateObj.partnerName.length && relationTestStateObj.partnerMbti.length) {
                    return false;
                }

                return true;
            }

            default: {
                return true;
            }
        }
    }, [relationTestStateObj]);

    const onPrev = () => {
        if (stepActive <= 1) {
            return;
        }

        setStepActive((prev) => prev - 1);
    };

    const onNext = async () => {
        if (stepActive > 3) {
            return;
        }
        if (stepActive === 3) {
            router.push('/relationTest/result');
        }
        setStepActive((prev) => prev + 1);
    };

    return (
        <NonSSRWrapper>
            <div css={RelationTestWrapStyle}>
                <div css={RelationTestBodyStyle}>
                    <ProgressLineBar percent={stepActive} />
                    {stepActive === 1 && <Relation />}
                    {stepActive === 2 && <RelationMbti step={stepActive} />}
                    {stepActive === 3 && <RelationMbti step={stepActive} />}
                </div>
                <div css={RelationTestFooterStyle}>
                    <Button className="pre_button" buttonStyle={'text'} disabled={stepActive === 1 ? true : false} onClick={onPrev}>
                        이전단계로
                    </Button>
                    <Button buttonStyle={'base'} disabled={isError} onClick={onNext}>
                        {stepActive === 3 ? 'MBTI 궁합 확인하기' : '다음 단계로'}
                    </Button>
                </div>
            </div>
        </NonSSRWrapper>
    );
};

export default Test;
