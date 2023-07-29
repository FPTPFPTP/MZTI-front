import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useRecoilValue } from 'recoil';
import { simpleMbtiState } from '@/recoil/atom/simpleMbti';
import MztiLogoIcon from '@assets/icons/common/mzti_default_logo.svg';
import { SimpleMbtiTest } from '@/components/SimpleMbti';
import { Button, ProgressLineBar } from '@/components/Commons';
import NonSSRWrapper from '@components/Layout/NonSSRWrapper';
import { SimpleTestTestStyle } from '@styles/pages/simpleTestStyled';
import { ISimpleMbtiQuestionModel } from '@/types/simpleMbti';

const Test = () => {
    const [stepActive, setStepActive] = useState<number>(1);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const simpleMbtiStateObj = useRecoilValue(simpleMbtiState);

    const router = useRouter();

    const questions: ISimpleMbtiQuestionModel[] = [
        {
            question: '나는 모임에 나가면\n새로운 사람들과 친해지는게',
            responseA: { title: '쉽다', value: 'E' },
            responseB: { title: '어렵다', value: 'I' },
        },
        {
            question: '한라산 트월킹하면서 등산하기\nvs 비료포대타고 내려오기',
            responseA: { title: '진지하게 고민했다', value: 'N' },
            responseB: { title: '도대체 그걸 왜 골라야해??', value: 'S' },
        },
        {
            question: `친구가 전화로\n
            ‘나 접촉사고 났어..’ 라 했을 때\n
            내 반응은?`,
            responseA: { title: '헐 보험은 가입했어? 사진은 찍어뒀어?', value: 'T' },
            responseB: { title: '헐 어떡해!! 괜찮아? 안다쳤어???', value: 'F' },
        },
        {
            question: '계획해 둔 일들이\n 맘대로 안풀렸을 때',
            responseA: { title: '일이 맘대로 안되는 순간 짜증이 밀려온다', value: 'J' },
            responseB: { title: '일단 계획도 안세웠고.. 딱히 별 생각도 없다', value: 'P' },
        },
    ];

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
        setTimeout(() => setStepActive((prev) => prev + 1), 200);
    };

    useEffect(() => {
        if (isLoading) {
            const mbtiResult = (simpleMbtiStateObj || [])
                .reduce((result, cur) => {
                    if (cur.value === 'E' || cur.value === 'I') {
                        result = [...result.slice(0, 1), cur.value, ...result.slice(2)];
                    }
                    if (cur.value === 'S' || cur.value === 'N') {
                        result = [...result.slice(0, 2), cur.value, ...result.slice(3)];
                    }
                    if (cur.value === 'F' || cur.value === 'T') {
                        result = [...result.slice(0, 3), cur.value, ...result.slice(4)];
                    }
                    if (cur.value === 'J' || cur.value === 'P') {
                        result = [...result.slice(0, 4), cur.value];
                    }
                    return result;
                }, [] as string[])
                .join('');
            setTimeout(() => router.push(`/simpleMbti/result/${mbtiResult}`), 3000);
        }
    }, [isLoading]);

    return (
        <NonSSRWrapper>
            <div css={SimpleTestTestStyle(isLoading)}>
                <div className={'step'}>
                    <ProgressLineBar color={'#F56326'} percent={stepActive} totalStep={4} />
                </div>
                {isLoading ? (
                    <div className={'loading'}>
                        <h2>간단 MBTI 테스트</h2>
                        <p>결과 확인 중</p>
                        <Image src={'/images/loading.gif'} alt={'로딩'} width={60} height={60} />
                        <MztiLogoIcon />
                    </div>
                ) : (
                    <>
                        <div className={'question'}>
                            <p>{`Q${stepActive}`}</p>
                            <SimpleMbtiTest step={stepActive} questions={questions} onNext={onNext} />
                        </div>
                        <div className={'footer'}>
                            <Button className="pre_button" buttonStyle={'text'} disabled={stepActive === 1 ? true : false} onClick={onPrev}>
                                이전단계로
                            </Button>
                        </div>
                    </>
                )}
            </div>
        </NonSSRWrapper>
    );
};

export default Test;
