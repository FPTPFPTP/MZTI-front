import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useSetRecoilState } from 'recoil';
import { simpleMbtiState } from '@/recoil/atom/simpleMbti';
import MztiLogoIcon from '@assets/icons/simpleTest/mzti_logo_1.svg';
import RightArrowIcon from '@assets/icons/simpleTest/right_arrow.svg';
import ShareIcon from '@assets/icons/simpleTest/share.svg';
import { Button, HeadMeta } from '@/components/Commons';
import { LinkCopy } from '@/utils/copy';
import { SimpleTestStyle } from '@styles/pages/simpleTestStyled';
import { device } from '@/utils/window';

const simpleMbti = () => {
    const [isMobile, setIsMobile] = useState<boolean>(false);

    const router = useRouter();

    const setSimpleMbtiStateObj = useSetRecoilState(simpleMbtiState);

    useEffect(() => {
        setIsMobile(!!device());
        setSimpleMbtiStateObj([]);
    }, []);

    return (
        <>
            <HeadMeta title={'10초 MBTI 테스트'} description={'10분 걸리는 MBTI 검사, 10초만에 간단히 해보자!'} url={router.asPath} />
            <main css={SimpleTestStyle(isMobile)}>
                <div className={'logo'}>
                    <MztiLogoIcon />
                </div>
                <div className={'intro'}>
                    10분 걸리는 MBTI 검사,
                    <br /> 10초만에 간단히 해보자!
                </div>
                <div className={'title'}>
                    <p className={'text'}>10초 끝!</p>
                    <br />
                    <p>
                        간단 <span style={{ color: '#F56326' }}>MBTI</span> 테스트
                    </p>
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
            </main>
        </>
    );
};

export default simpleMbti;
