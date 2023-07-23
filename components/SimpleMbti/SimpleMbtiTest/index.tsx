import React, { useEffect } from 'react';
import { Typography } from 'antd';
import { useRecoilState } from 'recoil';
import { simpleMbtiState } from '@/recoil/atom/simpleMbti';
import { Container } from './styled';
import { ISimpleMbtiQuestionModel, ISimpleMbtiResponseModel } from '@/types/simpleMbti';
/**
 *  간단 MBTI Tab
 *  @params onSubmit {function}
 * */
interface ISimpleMbtiTestProps {
    step: number;
    questions: ISimpleMbtiQuestionModel[];
}

const SimpleMbtiTest = ({ step, questions }: ISimpleMbtiTestProps) => {
    const [simpleMbtiStateObj, setSimpleMbtiStateObj] = useRecoilState(simpleMbtiState);

    const isFindSimpleMbti = () => {
        return !!simpleMbtiStateObj.find(
            (simpleMbti) => simpleMbti.value === questions[step - 1].responseA.value || simpleMbti.value === questions[step - 1].responseB.value,
        );
    };
    const handleRelation = (response: ISimpleMbtiResponseModel) => {
        if (isFindSimpleMbti()) {
            const simpleValues = [questions[step - 1].responseA.value, questions[step - 1].responseB.value];

            setSimpleMbtiStateObj([...simpleMbtiStateObj.filter((simpleMbti) => !simpleValues.includes(simpleMbti.value)), response]);
        } else {
            setSimpleMbtiStateObj([...simpleMbtiStateObj, response]);
        }
    };

    useEffect(() => {
        console.log({ simpleMbtiStateObj });
    }, [simpleMbtiStateObj]);

    return (
        <div css={Container}>
            <Typography.Title className="title">{questions[step - 1].question}</Typography.Title>

            <form className="content">
                <fieldset className="input-container">
                    <input
                        className="radio-button"
                        type="radio"
                        name="radio"
                        id={'couple'}
                        value={questions[step - 1].responseA.value}
                        checked={!!simpleMbtiStateObj.find((simpleMbti) => simpleMbti.value === questions[step - 1].responseA.value)}
                        onChange={(e) => handleRelation(questions[step - 1].responseA)}
                    />
                    <div className="radio-tile">
                        <label htmlFor="radio" className="radio-tile-label">
                            {questions[step - 1].responseA.title}
                        </label>
                    </div>
                </fieldset>
                VS
                <fieldset className="input-container">
                    <input
                        className="radio-button"
                        type="radio"
                        name="radio"
                        id={'friend'}
                        value={questions[step - 1].responseB.value}
                        checked={!!simpleMbtiStateObj.find((simpleMbti) => simpleMbti.value === questions[step - 1].responseB.value)}
                        onChange={() => handleRelation(questions[step - 1].responseB)}
                    />
                    <div className="radio-tile">
                        <label htmlFor="radio" className="radio-tile-label">
                            {questions[step - 1].responseB.title}
                        </label>
                    </div>
                </fieldset>
            </form>
        </div>
    );
};

export default SimpleMbtiTest;
