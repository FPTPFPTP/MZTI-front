import React from 'react';

interface IMbtiRadioItem {
    defaultValue?: string;
    value: string;
    onClick: (value: string) => void;
}

/**
 *  MBTI 항목 유형
 *  @params defaultValue {string | undefined}
 *  @params value {string} 유형값
 *  @params onClick {function}
 * */

const MbtiRadioItem = (props: IMbtiRadioItem) => {
    const { defaultValue, value, onClick } = props;

    return (
        <fieldset className="input-container">
            <input
                className="radio-button"
                type="radio"
                name="radio"
                id={value}
                value={value}
                checked={defaultValue === value}
                onChange={(e) => onClick(e.target.value)}
            />
            <div className="radio-tile">
                <label htmlFor="radio" className="radio-tile-label">
                    {value}
                </label>
            </div>
        </fieldset>
    );
};

export default MbtiRadioItem;
