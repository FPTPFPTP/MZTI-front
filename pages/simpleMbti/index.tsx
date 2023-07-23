import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/Commons';
import { LinkCopy } from '@/utils/copy';
import { SimpleTestStyle } from '@styles/pages/simpleTestStyled';

const simpleMbti = () => {
    return (
        <div css={SimpleTestStyle}>
            <div className={'intro'}>
                <p>MBTI 검사 개귀찮다면? 👎❣️</p>
                <p>내 MBTI는 멀까? ❣️</p>
            </div>
            <h2 className={'title'}>
                초(완전)! 간단(30초?)!
                <br />
                MBTI 확인하기!
            </h2>
            <div className={'action'}>
                <Link href={'/simpleMbti/test'}>
                    <Button buttonStyle="base">초간단 MBTI 알아보기</Button>
                </Link>
                <Button buttonStyle="base" onClick={LinkCopy}>
                    테스트 공유하기
                </Button>
            </div>
            {/* <Button buttonStyle="text">내 MBTI를 모른다면?</Button> */}
        </div>
    );
};

export default simpleMbti;
