import React from 'react';

interface IMbtiRadioItem {
    defaultValue?: string;
    value: string;
    onClick: (value: string) => void;
}

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
