import React, { useState, useMemo, useEffect } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useRecoilValue } from 'recoil';
import { simpleMbtiState } from '@/recoil/atom/simpleMbti';
import { Button, ProgressLineBar } from '@/components/Commons';
import { SimpleMbtiTest } from '@/components/SimpleMbti';
import NonSSRWrapper from '@components/Layout/NonSSRWrapper';
import { RelationTestWrapStyle, RelationTestLodingStyle, RelationTestBodyStyle, RelationTestFooterStyle } from '@styles/pages/relationTestStyled';
import { ISimpleMbtiQuestionModel } from '@/types/simpleMbti';

const Test = () => {
    const [stepActive, setStepActive] = useState<number>(1);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const simpleMbtiStateObj = useRecoilValue(simpleMbtiState);

    const router = useRouter();

    const questions: ISimpleMbtiQuestionModel[] = [
        { question: '나는 모임에 나가면 새로운 친구를 만드는게', responseA: { title: '일상이다', value: 'E' }, responseB: { title: '어렵다', value: 'I' } },
        {
            question: '한라산 트월킹하면서 등산하기 vs 비료포대타고 내려오기',
            responseA: { title: '진지하게 고민했다', value: 'N' },
            responseB: { title: '도대체 그걸 왜 골라야해?', value: 'S' },
        },
        {
            question: '나 지금 접촉사고 났어..',
            responseA: { title: '헐 보험은 가입했어? 사진은 찍어뒀어?', value: 'T' },
            responseB: { title: '헐 어떡해!! 괜찮아? 안다쳤어???', value: 'F' },
        },
        {
            question: '계획해둔 일들이 맘대로 안풀렸을 때',
            responseA: { title: '일이 맘대로 안되는 순간 짜증이 밀려온다', value: 'J' },
            responseB: { title: '일단 계획도 안세웠을 뿐더러 딱히 별 생각도 없다', value: 'P' },
        },
    ];

    // 다음단계 버튼 활성화
    const isError = useMemo(() => {
        switch (stepActive) {
            case 1: {
                if (simpleMbtiStateObj.find((simpleMbti) => simpleMbti.value === 'E' || simpleMbti.value === 'I')) {
                    return false;
                }
                return true;
            }
            case 2: {
                if (simpleMbtiStateObj.find((simpleMbti) => simpleMbti.value === 'N' || simpleMbti.value === 'S')) {
                    return false;
                }

                return true;
            }
            case 3: {
                if (simpleMbtiStateObj.find((simpleMbti) => simpleMbti.value === 'T' || simpleMbti.value === 'F')) {
                    return false;
                }

                return true;
            }

            case 4: {
                if (simpleMbtiStateObj.find((simpleMbti) => simpleMbti.value === 'J' || simpleMbti.value === 'P')) {
                    return false;
                }

                return true;
            }

            default: {
                return true;
            }
        }
    }, [stepActive, simpleMbtiStateObj]);

    const onPrev = () => {
        if (stepActive <= 1) {
            return;
        }

        setStepActive((prev) => prev - 1);
    };

    const onNext = async () => {
        if (stepActive > 4) {
            return;
        }
        if (stepActive === 4) {
            setIsLoading(true);
        }
        setStepActive((prev) => prev + 1);
    };

    useEffect(() => {
        if (isLoading) {
            setTimeout(() => router.push('/simpleTest/result'), 3000);
        }
    }, [isLoading]);

    return (
        <NonSSRWrapper>
            <div css={RelationTestWrapStyle}>
                {isLoading ? (
                    <div css={RelationTestLodingStyle}>
                        <h1>
                            야매 MBTI
                            <br />
                            측정 하는 중
                        </h1>
                        <Image className={'logo'} src="/images/mzti_logo.png" alt={'logo'} width={90} height={45} />
                    </div>
                ) : (
                    <>
                        <div css={RelationTestBodyStyle}>
                            <ProgressLineBar percent={stepActive} totalStep={4} />
                            <SimpleMbtiTest step={stepActive} questions={questions} />
                        </div>
                        <div css={RelationTestFooterStyle}>
                            <Button className="pre_button" buttonStyle={'text'} disabled={stepActive === 1 ? true : false} onClick={onPrev}>
                                이전단계로
                            </Button>
                            <Button buttonStyle={'base'} disabled={isError} onClick={onNext}>
                                {stepActive === 4 ? 'MBTI 확인하기' : '다음 단계로'}
                            </Button>
                        </div>
                    </>
                )}
            </div>
        </NonSSRWrapper>
    );
};

export default Test;
