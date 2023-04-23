import React from 'react';
import E from '@assets/icons/login/e.svg';
import I from '@assets/icons/login/i.svg';
import F from '@assets/icons/login/f.svg';
import P from '@assets/icons/login/p.svg';
import J from '@assets/icons/login/j.svg';
import T from '@assets/icons/login/t.svg';
import S from '@assets/icons/login/s.svg';
import N from '@assets/icons/login/n.svg';

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

    switch (value) {
        case 'E':
            return (
                <fieldset className="input-container">
                    <input
                        className="radio-button"
                        type="radio"
                        name="radio"
                        id={'E'}
                        value={'E'}
                        checked={defaultValue === 'E'}
                        onChange={(e) => onClick(e.target.value)}
                    />
                    <div className="radio-tile">
                        <label htmlFor="radio" className="radio-tile-label">
                            <E />
                        </label>
                    </div>
                </fieldset>
            );
        case 'I':
            return (
                <fieldset className="input-container">
                    <input
                        className="radio-button"
                        type="radio"
                        name="radio"
                        id={'I'}
                        value={'I'}
                        checked={defaultValue === 'I'}
                        onChange={(e) => onClick(e.target.value)}
                    />
                    <div className="radio-tile">
                        <label htmlFor="radio" className="radio-tile-label">
                            <I />
                        </label>
                    </div>
                </fieldset>
            );
        case 'S':
            return (
                <fieldset className="input-container">
                    <input
                        className="radio-button"
                        type="radio"
                        name="radio"
                        id={'S'}
                        value={'S'}
                        checked={defaultValue === 'S'}
                        onChange={(e) => onClick(e.target.value)}
                    />
                    <div className="radio-tile">
                        <label htmlFor="radio" className="radio-tile-label">
                            <S />
                        </label>
                    </div>
                </fieldset>
            );
        case 'N':
            return (
                <fieldset className="input-container">
                    <input
                        className="radio-button"
                        type="radio"
                        name="radio"
                        id={'N'}
                        value={'N'}
                        checked={defaultValue === 'N'}
                        onChange={(e) => onClick(e.target.value)}
                    />
                    <div className="radio-tile">
                        <label htmlFor="radio" className="radio-tile-label">
                            <N />
                        </label>
                    </div>
                </fieldset>
            );
        case 'F':
            return (
                <fieldset className="input-container">
                    <input
                        className="radio-button"
                        type="radio"
                        name="radio"
                        id={'F'}
                        value={'F'}
                        checked={defaultValue === 'F'}
                        onChange={(e) => onClick(e.target.value)}
                    />
                    <div className="radio-tile">
                        <label htmlFor="radio" className="radio-tile-label">
                            <F />
                        </label>
                    </div>
                </fieldset>
            );
        case 'T':
            return (
                <fieldset className="input-container">
                    <input
                        className="radio-button"
                        type="radio"
                        name="radio"
                        id={'T'}
                        value={'T'}
                        checked={defaultValue === 'T'}
                        onChange={(e) => onClick(e.target.value)}
                    />
                    <div className="radio-tile">
                        <label htmlFor="radio" className="radio-tile-label">
                            <T />
                        </label>
                    </div>
                </fieldset>
            );
        case 'P':
            return (
                <fieldset className="input-container">
                    <input
                        className="radio-button"
                        type="radio"
                        name="radio"
                        id={'P'}
                        value={'P'}
                        checked={defaultValue === 'P'}
                        onChange={(e) => onClick(e.target.value)}
                    />
                    <div className="radio-tile">
                        <label htmlFor="radio" className="radio-tile-label">
                            <P />
                        </label>
                    </div>
                </fieldset>
            );
        case 'J':
            return (
                <fieldset className="input-container">
                    <input
                        className="radio-button"
                        type="radio"
                        name="radio"
                        id={'J'}
                        value={'J'}
                        checked={defaultValue === 'J'}
                        onChange={(e) => onClick(e.target.value)}
                    />
                    <div className="radio-tile">
                        <label htmlFor="radio" className="radio-tile-label">
                            <J />
                        </label>
                    </div>
                </fieldset>
            );
        default:
            return null;
    }
};

export default MbtiRadioItem;
