import React, { useState, useMemo, useEffect } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useRecoilValue } from 'recoil';
import { relationTestState } from '@/recoil/atom/relationTest';
import { Button, ProgressLineBar } from '@/components/Commons';
import { Relation, RelationMbti } from '@/components/RelationTest';
import NonSSRWrapper from '@components/Layout/NonSSRWrapper';
import { RelationTestWrapStyle, RelationTestLodingStyle, RelationTestBodyStyle, RelationTestFooterStyle } from '@styles/pages/relationTestStyled';

const Test = () => {
    const [stepActive, setStepActive] = useState<number>(1);
    const [isLoading, setIsLoading] = useState<boolean>(false);
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
            setIsLoading(true);
        }
        setStepActive((prev) => prev + 1);
    };

    useEffect(() => {
        if (isLoading) {
            setTimeout(() => router.push('/relationTest/result'), 3000);
        }
    }, [isLoading]);
    return (
        <NonSSRWrapper>
            <div css={RelationTestWrapStyle}>
                {isLoading ? (
                    <div css={RelationTestLodingStyle}>
                        <h1>
                            MBTI 궁합
                            <br />
                            확인하는 중
                        </h1>
                        <Image className={'logo'} src="/images/mzti_logo.png" alt={'logo'} width={90} height={45} />
                    </div>
                ) : (
                    <>
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
                    </>
                )}
            </div>
        </NonSSRWrapper>
    );
};

export default Test;
