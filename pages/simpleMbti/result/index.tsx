import { useEffect, useMemo } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import josa from 'josa-js';
import { Client } from '@notionhq/client';
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

interface IMbtiTypeObj {
    characteristic: string;
    famous: string;
    hashTag: string;
    index: number;
    mbti: string;
    submit: string;
}
interface IResultProps {
    mbtiTypeObj: IMbtiTypeObj[];
}
const Result = ({ mbtiTypeObj }: IResultProps) => {
    const simpleMbtiStateObj = useRecoilValue(simpleMbtiState);
    const { width } = useWindowSize();
    const mbtiTypeMap = useMemo(() => {
        return mbtiTypeObj.reduce((result, current) => {
            result.set(current.mbti, current);
            return result;
        }, new Map<string, IMbtiTypeObj>());
    }, [mbtiTypeObj]);

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

    useEffect(() => {
        console.log({ mbtiTypeMap });
    }, [mbtiTypeMap]);

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
                    <h3>{mbtiTypeMap.get(mbtiResult)?.submit}</h3>
                    <div>{mbtiTypeMap.get(mbtiResult)?.hashTag}</div>
                    <p>{mbtiTypeMap.get(mbtiResult)?.characteristic}</p>
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

export async function getStaticProps() {
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
                famous: current.properties.famous.rich_text[0].plain_text,
                hashTag: current.properties.hashTag.rich_text[0].plain_text,
                index: current.properties.index.number,
                mbti: current.properties.mbti.title[0].plain_text,
                submit: current.properties.submit.rich_text[0].plain_text,
            },
        ];
    }, []);

    return {
        props: {
            mbtiTypeObj,
        },
    };
}
