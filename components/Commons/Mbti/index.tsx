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

    const [mapObj, setMapObj] = useState(new Map<string, { index: number; value: string }>());

    useEffect(() => {
        if (mapObj.size === 4) {
            onUpdateMbti(
                Array.from(mapObj, ([key, value]) => ({ key, value }))
                    .sort((a, b) => a.value.index - b.value.index)
                    .map((mbti) => mbti.value.value)
                    .join(''),
            );
        }
    }, [mapObj]);

    const upsert = (key: string, value: { index: number; value: string }) => {
        setMapObj((prev) => new Map(prev).set(key, value));
    };

    // 페이지 접근시 이전에 작성한 값이 있으면 적용
    useEffect(() => {
        if (mbti.length) {
            for (const chat of mbti) {
                if (chat === 'E' || chat === 'I') {
                    upsert('EorI', { index: 1, value: chat });
                } else if (chat === 'S' || chat === 'N') {
                    upsert('SorN', { index: 2, value: chat });
                } else if (chat === 'T' || chat === 'F') {
                    upsert('TorF', { index: 3, value: chat });
                } else if (chat === 'J' || chat === 'P') {
                    upsert('JorP', { index: 4, value: chat });
                }
            }
        }
    }, []);

    return (
        <div css={RadioWrapStyle}>
            <MbtiRadioGroup
                defaultValue={mapObj.get('EorI')?.value}
                firstValue={'E'}
                secondValue={'I'}
                onClick={(value) => upsert('EorI', { index: 1, value })}
            />
            <MbtiRadioGroup
                defaultValue={mapObj.get('SorN')?.value}
                firstValue={'S'}
                secondValue={'N'}
                onClick={(value) => upsert('SorN', { index: 2, value })}
            />
            <MbtiRadioGroup
                defaultValue={mapObj.get('TorF')?.value}
                firstValue={'T'}
                secondValue={'F'}
                onClick={(value) => upsert('TorF', { index: 3, value })}
            />
            <MbtiRadioGroup
                defaultValue={mapObj.get('JorP')?.value}
                firstValue={'J'}
                secondValue={'P'}
                onClick={(value) => upsert('JorP', { index: 4, value })}
            />
        </div>
    );
};

export default Mbti;
