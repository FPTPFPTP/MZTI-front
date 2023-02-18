import React, { useEffect, useState } from 'react';
import { Typography } from 'antd';
import { useRecoilState } from 'recoil';
import { signupState } from '@/recoil/atom/signup';
import MbtiRadioGroup from './MbtiRadioGroup';
import { Container, RadioWrap } from './styled';

const MbtiContent = ({ isError, handleIsError }: { isError: boolean; handleIsError: (isError: boolean) => void }) => {
    const [mapObj, setMapObj] = useState(new Map());
    const [signupStateObj, setSignupStateObj] = useRecoilState(signupState);

    useEffect(() => {
        if (mapObj.size === 4) {
            setSignupStateObj((prev) => ({
                ...prev,
                mbti: Array.from(mapObj, ([_, value]) => {
                    return value;
                }).join(''),
            }));
            handleIsError(false);
        } else {
            handleIsError(true);
        }
    }, [mapObj, isError]);

    const upsert = (key: string, value: string) => {
        setMapObj((prev: any) => new Map(prev).set(key, value));
    };

    useEffect(() => {
        if (signupStateObj.mbti.length) {
            for (const chat of signupStateObj.mbti) {
                if (chat === 'E' || chat === 'I') {
                    upsert('EorI', chat);
                } else if (chat === 'S' || chat === 'N') {
                    upsert('SorN', chat);
                } else if (chat === 'T' || chat === 'F') {
                    upsert('TorF', chat);
                } else if (chat === 'J' || chat === 'P') {
                    upsert('JorP', chat);
                }
            }
        }
    }, []);

    return (
        <div css={Container}>
            <Typography.Title level={1} style={{ margin: '2rem' }}>
                MBTI를 입력해주세요.
            </Typography.Title>

            <div css={RadioWrap}>
                <MbtiRadioGroup defaultValue={mapObj.get('EorI')} firstValue={'E'} secondValue={'I'} onClick={(value) => upsert('EorI', value)} />
                <MbtiRadioGroup defaultValue={mapObj.get('SorN')} firstValue={'S'} secondValue={'N'} onClick={(value) => upsert('SorN', value)} />
                <MbtiRadioGroup defaultValue={mapObj.get('TorF')} firstValue={'T'} secondValue={'F'} onClick={(value) => upsert('TorF', value)} />
                <MbtiRadioGroup defaultValue={mapObj.get('JorP')} firstValue={'J'} secondValue={'P'} onClick={(value) => upsert('JorP', value)} />
            </div>
        </div>
    );
};

export default MbtiContent;
