import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/Commons';
import { LinkCopy } from '@/utils/copy';
import { RelationTestStyle } from '@styles/pages/relationTestStyled';

const RelationTest = () => {
    return (
        <div css={RelationTestStyle}>
            <div className={'intro'}>
                <p>천생연분일까? ❣️</p>
                <p>최악일까? 👎</p>
            </div>
            <h2 className={'title'}>
                우리 사이
                <br />
                MBTI 궁합 확인하기
            </h2>
            <div className={'action'}>
                <Link href={'/relationTest/test'}>
                    <Button buttonStyle="base">궁합보기</Button>
                </Link>
                <Button buttonStyle="base" onClick={LinkCopy}>
                    테스트 공유하기
                </Button>
            </div>
            <Button buttonStyle="text">내 MBTI를 모른다면?</Button>
        </div>
    );
};

export default RelationTest;
