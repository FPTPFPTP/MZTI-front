import React, { useEffect, useState } from 'react';
import { Typography } from 'antd';
import { useRecoilState } from 'recoil';
import { signupState } from '@/recoil/atom/signup';
import MbtiRadioGroup from './MbtiRadioGroup';
import { Container, RadioWrap } from './styled';

const MbtiContent = () => {
    const [mapObj, setMapObj] = useState(new Map<string, string>());
    const [signupStateObj, setSignupStateObj] = useRecoilState(signupState);

    useEffect(() => {
        if (mapObj.size === 4) {
            setSignupStateObj((prev) => ({
                ...prev,
                mbti: Array.from(mapObj, ([_, value]) => {
                    return value;
                }).join(''),
            }));
        }
    }, [mapObj]);

    const upsert = (key: string, value: string) => {
        setMapObj((prev) => new Map(prev).set(key, value));
    };

    // 페이지 접근시 이전에 작성한 값이 있으면 적용
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
            <Typography.Title level={2} style={{ margin: '2rem', whiteSpace: 'nowrap' }}>
                MBTI를 입력해주세요
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
