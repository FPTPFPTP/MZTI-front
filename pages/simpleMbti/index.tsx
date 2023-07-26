import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import MztiLogoIcon from '@assets/icons/simpleTest/mzti_logo_1.svg';
import RightArrowIcon from '@assets/icons/simpleTest/right_arrow.svg';
import ShareIcon from '@assets/icons/simpleTest/share.svg';

import { Button } from '@/components/Commons';
import { LinkCopy } from '@/utils/copy';
import { SimpleTestStyle } from '@styles/pages/simpleTestStyled';

const simpleMbti = () => {
    const router = useRouter();

    return (
        <div css={SimpleTestStyle}>
            <Image className={'SimpleBgImg3'} src="/images/SimpleBgImg3.png" alt={'SimpleBgImg2'} width={340} height={300} />

            <div className={'logo'}>
                <MztiLogoIcon />
            </div>
            <div className={'intro'}>
                10분 걸리는 MBTI 검사,
                <br /> 10초만에 간단히 해보자!
            </div>
            <div className={'title'}>
                <span className={'text'}>10초 끝!</span>
                <br />
                <span>
                    간단 <em style={{ color: '#F56326' }}>MBTI</em> 테스트
                </span>
            </div>

            <div className={'action'}>
                <Button buttonStyle="base" onClick={() => router.push('/simpleMbti/test')}>
                    바로 테스트하기
                    <RightArrowIcon />
                </Button>
                <Button buttonStyle="base" onClick={LinkCopy} style={{ background: '#86888D' }}>
                    테스트 공유하기
                    <ShareIcon />
                </Button>
            </div>
        </div>
    );
};

export default simpleMbti;
