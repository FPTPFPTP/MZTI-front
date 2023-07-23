import { useEffect, useMemo } from 'react';
import { GetServerSideProps } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Client } from '@notionhq/client';
import xss from 'xss';
import { useRecoilValue, useRecoilState } from 'recoil';
import NonSSRWrapper from '@components/Layout/NonSSRWrapper';
import { Button } from '@/components/Commons';
import { Share } from '@/components/SimpleMbti';
import { LinkCopy } from '@/utils/copy';
import { setConvertToHTML } from '@/utils/postItem';
import { SimpleTestResultStyle } from '@styles/pages/simpleTestStyled';
import MztiSmallLogo from '@assets/icons/simpleTest/mzti_beta_logo.svg';
import MztiBigLogo from '@assets/icons/simpleTest/mzti_beta_logo_big.svg';
import { simpleMbtiState } from '@/recoil/atom/simpleMbti';

interface IMbtiTypeObj {
    characteristic: string;
    famous: string[];
    hashTag: string;
    index: number;
    mbti: string;
    submit: string[];
}
interface IResultProps {
    mbtiTypeObj: IMbtiTypeObj[];
    mbti: string;
}
const Result = ({ mbtiTypeObj, mbti }: IResultProps) => {
    const [simpleMbtiStateObj, setSimpleMbtiStateObj] = useRecoilState(simpleMbtiState);

    const mbtiTypeMap = useMemo(() => {
        return mbtiTypeObj.reduce((result, current) => {
            result.set(current.mbti, current);
            return result;
        }, new Map<string, IMbtiTypeObj>());
    }, [mbtiTypeObj]);

    const mbtiResult = useMemo(() => {
        if (mbti.length) {
            return mbti;
        } else {
            return (simpleMbtiStateObj || [])
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
        }
    }, [mbti]);

    const router = useRouter();

    useEffect(() => {
        if (mbti) {
            setSimpleMbtiStateObj(mbti.split('').map((value) => ({ title: value, value: value })));
        }
    }, [mbti]);

    return (
        <NonSSRWrapper>
            <div css={SimpleTestResultStyle}>
                <MztiSmallLogo className={'logo'} />
                <Image className={'SimpleBgImg1'} src="/images/SimpleBgImg1.png" alt={'SimpleBgImg1'} width={340} height={300} />
                <Image className={'SimpleBgImg2'} src="/images/SimpleBgImg2.png" alt={'SimpleBgImg2'} width={340} height={300} />
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
                    <div className={'submit'}>
                        <h3>{mbtiTypeMap.get(mbtiResult)?.submit[0] || ''}</h3>
                        <h2>{mbtiTypeMap.get(mbtiResult)?.submit[1] || ''}</h2>
                    </div>
                    <div
                        className={'hashTag'}
                        dangerouslySetInnerHTML={{
                            __html: xss(setConvertToHTML(mbtiTypeMap.get(mbtiResult)?.hashTag || '')),
                        }}
                    />
                    <div
                        className={'characteristic'}
                        dangerouslySetInnerHTML={{
                            __html: xss(setConvertToHTML(mbtiTypeMap.get(mbtiResult)?.characteristic || '')),
                        }}
                    />
                </div>

                <div className={'result_btn'}>
                    <h3>테스트 결과 공유하기.. ↓</h3>
                    <div className="share">
                        <Share title={`30초만에 판단한 내 MBTI는?? [[${mbtiResult}]]`} />
                    </div>
                    <Button buttonStyle={'base'} onClick={() => router.push('/simpleMbti')}>
                        테스트 한 번 더해보기
                    </Button>
                    <a
                        href={'https://www.16personalities.com/ko/%EB%AC%B4%EB%A3%8C-%EC%84%B1%EA%B2%A9-%EC%9C%A0%ED%98%95-%EA%B2%80%EC%82%AC'}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Button buttonStyle={'text'}>공식사이트에서 MBTI 검사해보기</Button>
                    </a>
                </div>

                <div className={'result_famous'}>
                    <h3>{`${mbtiResult} 대표 유명인은?`}</h3>
                    <div className={'famous'}>
                        <div>
                            <p>맞아요</p>
                            <p className="icon">😄</p>

                            <h3>{mbtiTypeMap.get(mbtiResult)?.famous[0] || ''}</h3>
                        </div>
                        <div>
                            <p>의외에요</p>
                            <p className="icon">😲</p>

                            <h3>{mbtiTypeMap.get(mbtiResult)?.famous[1] || ''}</h3>
                        </div>
                    </div>
                </div>

                <h2 className={'result_question'}>테스트가 재밌었다면.. ↓</h2>

                <div className={'result_mzti'}>
                    <MztiBigLogo />
                    <h3>
                        MZ세대들의 <br />
                        MBTI 커뮤니티 구경하기
                    </h3>
                    <div className={'btn'}>
                        <Button className="pre_button" buttonStyle={'base'} onClick={LinkCopy}>
                            MZTI 둘러보기 →
                        </Button>
                        <Button className="pre_button" buttonStyle={'base'} onClick={LinkCopy}>
                            ESTJ 게시판 가기 →
                        </Button>
                    </div>

                    <Link href={'/relationTest'}>
                        <Button buttonStyle={'text'}>📮 운영진에게 건의하기</Button>
                    </Link>

                    <span>total 48553</span>
                </div>
            </div>
        </NonSSRWrapper>
    );
};

export default Result;

export const getServerSideProps: GetServerSideProps = async ({ req, params }: any) => {
    const notion = new Client({
        auth: process.env.NOTION_API_KEY,
    });

    const response = await notion.databases.query({
        database_id: '1e75f7f5203e4fa094c69a2d0b67fea4',
    });

    const mbtiTypeObj = response.results.reduce((result: IMbtiTypeObj[], current: any) => {
        return [
            ...result,
            {
                characteristic: current.properties.characteristic.rich_text[0].plain_text,
                famous: current.properties.famous.rich_text[0].plain_text.split('/'),
                hashTag: current.properties.hashTag.rich_text[0].plain_text,
                index: current.properties.index.number,
                mbti: current.properties.mbti.title[0].plain_text,
                submit: current.properties.submit.rich_text[0].plain_text.split('\n'),
            },
        ];
    }, []);

    if (params.mbti.length !== 4) {
        return {
            redirect: {
                destination: '/simpleMbti',
                permanent: false,
            },
        };
    }
    return {
        props: {
            mbtiTypeObj,
            mbti: params.mbti || '',
        },
    };
};
