import React, { useEffect, useState } from 'react';
import MbtiRadioGroup from './MbtiRadioGroup';
import { RadioWrapStyle } from './styled';

interface IMbti {
    mbti: string;
    onUpdateMbti: (mbti: string) => void;
}

/**
 *  MBTI 항목 그룹
 *  @params defaultValue {string | undefined}
 *  @params firstValue {string} 유형 1
 *  @params secondValue {string} 유형 2
 *  @params onClick {function}
 * */

const Mbti = (props: IMbti) => {
    const { mbti, onUpdateMbti } = props;

    const [mapObj, setMapObj] = useState(new Map<string, string>());
    // const [signupStateObj, setSignupStateObj] = useRecoilState(signupState);

    useEffect(() => {
        if (mapObj.size === 4) {
            onUpdateMbti(
                Array.from(mapObj, ([_, value]) => {
                    return value;
                }).join(''),
            );
        }
    }, [mapObj]);

    const upsert = (key: string, value: string) => {
        setMapObj((prev) => new Map(prev).set(key, value));
    };

    // 페이지 접근시 이전에 작성한 값이 있으면 적용
    useEffect(() => {
        if (mbti.length) {
            for (const chat of mbti) {
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
        <div css={RadioWrapStyle}>
            <MbtiRadioGroup defaultValue={mapObj.get('EorI')} firstValue={'E'} secondValue={'I'} onClick={(value) => upsert('EorI', value)} />
            <MbtiRadioGroup defaultValue={mapObj.get('SorN')} firstValue={'S'} secondValue={'N'} onClick={(value) => upsert('SorN', value)} />
            <MbtiRadioGroup defaultValue={mapObj.get('TorF')} firstValue={'T'} secondValue={'F'} onClick={(value) => upsert('TorF', value)} />
            <MbtiRadioGroup defaultValue={mapObj.get('JorP')} firstValue={'J'} secondValue={'P'} onClick={(value) => upsert('JorP', value)} />
        </div>
    );
};

export default Mbti;
