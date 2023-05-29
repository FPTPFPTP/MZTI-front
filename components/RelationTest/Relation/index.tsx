import React from 'react';
import { Typography } from 'antd';
import { useRecoilState } from 'recoil';
import { relationTestState } from '@/recoil/atom/relationTest';
import { Container } from './styled';

/**
 *  관계 Tab
 *  @params onSubmit {function}
 * */

const Relation = () => {
    const [relationTestStateObj, setRelationTestStateObj] = useRecoilState(relationTestState);

    const handleRelation = (value: string) => {
        setRelationTestStateObj({ ...relationTestStateObj, relation: value as 'couple' | 'family' | 'friend' });
    };

    return (
        <div css={Container}>
            <Typography.Title className="title">우리 관계는</Typography.Title>

            <form className="content">
                <fieldset className="input-container">
                    <input
                        className="radio-button"
                        type="radio"
                        name="radio"
                        id={'couple'}
                        value={'couple'}
                        checked={relationTestStateObj.relation === 'couple'}
                        onChange={(e) => handleRelation(e.target.value)}
                    />
                    <div className="radio-tile">
                        <label htmlFor="radio" className="radio-tile-label">
                            연인
                        </label>
                    </div>
                </fieldset>
                <fieldset className="input-container">
                    <input
                        className="radio-button"
                        type="radio"
                        name="radio"
                        id={'friend'}
                        value={'friend'}
                        checked={relationTestStateObj.relation === 'friend'}
                        onChange={(e) => handleRelation(e.target.value)}
                    />
                    <div className="radio-tile">
                        <label htmlFor="radio" className="radio-tile-label">
                            친구
                        </label>
                    </div>
                </fieldset>
                <fieldset className="input-container">
                    <input
                        className="radio-button"
                        type="radio"
                        name="radio"
                        id={'family'}
                        value={'family'}
                        checked={relationTestStateObj.relation === 'family'}
                        onChange={(e) => handleRelation(e.target.value)}
                    />
                    <div className="radio-tile">
                        <label htmlFor="radio" className="radio-tile-label">
                            가족
                        </label>
                    </div>
                </fieldset>
            </form>
        </div>
    );
};

export default Relation;
