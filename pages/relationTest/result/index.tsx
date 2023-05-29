import Image from 'next/image';
import Link from 'next/link';
import { useRecoilValue } from 'recoil';
import { relationTestState } from '@/recoil/atom/relationTest';
import NonSSRWrapper from '@components/Layout/NonSSRWrapper';
import { Button, MultiCarousel } from '@/components/Commons';
import Banner from '@/components/MyPageCom/Banner';
import { LinkCopy } from '@/utils/copy';
import { RelationResultStyle } from '@styles/pages/relationTestStyled';

const Result = () => {
    const relationTestStateObj = useRecoilValue(relationTestState);

    return (
        <NonSSRWrapper>
            <div css={RelationResultStyle}>
                <Image className={'logo'} src="/images/mzti_logo.png" alt={'logo'} width={81} height={53} />
                <div className={'result_relation'}>
                    <h3>{relationTestStateObj.relation}</h3>
                    <p>으로서 우리 관계는</p>
                </div>

                <div className={'result_title'}>
                    <h3>궁합볼 필요도 없는</h3>
                    <h1>천생연분 커플</h1>
                </div>
                <Image src="/images/mzti_promote.png" alt={'logo'} width={250} height={250} />
                <div className={'result_submit'}>
                    <h3>궁합 요약</h3>
                    <p>
                        {`${relationTestStateObj.myName}와 ${relationTestStateObj.partnerName}은 이미 완벽한 커플! MBTI학에서도 최고의 궁합을 자랑하는 ${relationTestStateObj.myMbti}-${relationTestStateObj.partnerMbti} 조합이지! 더 이상 완벽할 게 없어보이는 우리 커플이 앞으로도
                    연애를 잘 하려면 어떤 노력을 하면 좋을까? 바로 바로 바로 아 이런글 쓰는것도 시간 정말 오래 걸린다 아무튼 이렇게 테스트결과 요약본`}
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

                <div className={'result_other'}>
                    <Image src="/images/mzti_logo.png" alt={'logo'} width={156} height={99} />
                    <p>
                        MZ세대들의 <br />
                        MBTI 커뮤니티 구경하기
                    </p>
                    <div className={'result_btn'}>
                        <Link href={'/'}>
                            <Button className="pre_button" buttonStyle={'base'}>
                                MZTI 둘러보기
                            </Button>
                        </Link>
                        <Link href={'/mypage/feedback'}>
                            <Button buttonStyle={'text'}>운영진에게 건의하기</Button>
                        </Link>
                    </div>
                </div>

                <div className="banner_wrap">
                    <MultiCarousel>
                        <Banner link={'https://www.mzti.kr'} imageSrc={'/images/mzti_promote.png'} imageAlt={'mzti'} />
                        <Banner link={'https://www.mzti.kr'} imageSrc={'/images/mzti_promote_v2.png'} imageAlt={'mzti'} />
                    </MultiCarousel>
                </div>
            </div>
        </NonSSRWrapper>
    );
};

export default Result;
