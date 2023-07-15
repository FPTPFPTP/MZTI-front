import Image from 'next/image';
import Link from 'next/link';
import josa from 'josa-js';
import { useRecoilValue } from 'recoil';
import { relationTestState } from '@/recoil/atom/relationTest';
import NonSSRWrapper from '@components/Layout/NonSSRWrapper';
import { Button, MultiCarousel } from '@/components/Commons';
import Banner from '@/components/MyPageCom/Banner';
import useWindowSize from '@/hooks/useWindowSize';
import { LinkCopy } from '@/utils/copy';
import { SimpleTestResultStyle } from '@styles/pages/simpleTestStyled';
import MztiSmallLogo from '@assets/icons/simpleTest/mzti_beta_logo.svg';
import MztiBigLogo from '@assets/icons/simpleTest/mzti_beta_logo_big.svg';
import { simpleMbtiState } from '@/recoil/atom/simpleMbti';

const Result = () => {
    const simpleMbtiStateObj = useRecoilValue(simpleMbtiState);
    const { width } = useWindowSize();

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

    return (
        <NonSSRWrapper>
            <div css={SimpleTestResultStyle}>
                <MztiSmallLogo className={'logo'} />
                <div className={'result_question'}>
                    <h3>
                        30초만에 판단한 <br />
                        당신의 MBTI는?
                    </h3>
                </div>

                <div className={'result_title'}>
                    <h3>{mbtiResult}</h3>
                </div>
                <div className={'result_submit'}>
                    <h3>어쩌면 꼰대일수도..?</h3>
                    <h1>엄격한 관리자 타입</h1>
                    <div>
                        #모든MBTI중 연봉순위 1위 <br />
                        #한국인 중 15% 차지 , 2위 비중
                    </div>
                    <p>
                        ESTJ 특: 사람이든 사물이든 관리하는데 타고남 책임감이 높아서 조직도 잘 이끔 뭐든 딱딱 떨어지고 확실한 것이 좋음 나한테 반박하려면 근거를
                        갖고와 호불호도 확실한 편 공.능.제(공감능력 제로) 고집이고, 현실적이고, 직설적인 편 싸우는건 싫지만, 싸워서 지는게 더 싫음 가치관 확실함
                        한 번 시작한 일은 철저하게 끝냄 자기관리에 철저
                    </p>
                </div>

                <div className={'result_btn'}>
                    <Button className="pre_button" buttonStyle={'base'} onClick={LinkCopy}>
                        테스트 결과 공유하기
                    </Button>
                    <Link href={'/relationTest'}>
                        <Button buttonStyle={'text'}>테스트 한 번 더해보기</Button>
                    </Link>
                </div>
            </div>
        </NonSSRWrapper>
    );
};

export default Result;
