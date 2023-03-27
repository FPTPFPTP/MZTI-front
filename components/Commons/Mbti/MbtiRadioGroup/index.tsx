import React from 'react';
import MbtiRadioItem from '../MbtiRadioItem';
import { RadioTileGroupStyle } from '../styled';

interface IMbtiRadioGroup {
    defaultValue?: string;
    firstValue: string;
    secondValue: string;
    onClick: (value: string) => void;
}

/**
 *  MBTI 항목 그룹
 *  @params defaultValue {string | undefined}
 *  @params firstValue {string} 유형 1
 *  @params secondValue {string} 유형 2
 *  @params onClick {function}
 * */

const MbtiRadioGroup = (props: IMbtiRadioGroup) => {
    const { defaultValue, firstValue, secondValue, onClick } = props;

    return (
        <div css={RadioTileGroupStyle}>
            <form>
                <MbtiRadioItem defaultValue={defaultValue} value={firstValue} onClick={onClick} />
                <MbtiRadioItem defaultValue={defaultValue} value={secondValue} onClick={onClick} />
            </form>
        </div>
    );
};

export default MbtiRadioGroup;
