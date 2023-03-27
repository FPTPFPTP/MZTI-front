import React from 'react';
import MbtiRadioItem from '../MbtiRadioItem';

interface IMbtiRadioGroup {
    defaultValue?: string;
    firstValue: string;
    secondValue: string;
    onClick: (value: string) => void;
}

const MbtiRadioGroup = (props: IMbtiRadioGroup) => {
    const { defaultValue, firstValue, secondValue, onClick } = props;

    return (
        <div>
            <form>
                <MbtiRadioItem defaultValue={defaultValue} value={firstValue} onClick={onClick} />
                <MbtiRadioItem defaultValue={defaultValue} value={secondValue} onClick={onClick} />
            </form>
        </div>
    );
};

export default MbtiRadioGroup;
