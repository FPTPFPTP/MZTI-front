import React from 'react';
import xss from 'xss';
import { useRecoilState } from 'recoil';
import { simpleMbtiState } from '@/recoil/atom/simpleMbti';
import { setConvertToHTML } from '@utils/postItem';
import { Container } from './styled';
import { ISimpleMbtiQuestionModel, ISimpleMbtiResponseModel } from '@/types/simpleMbti';
/**
 *  간단 MBTI Tab
 *  @params onSubmit {function}
 * */
interface ISimpleMbtiTestProps {
    step: number;
    questions: ISimpleMbtiQuestionModel[];
    onNext: () => void;
}

const SimpleMbtiTest = ({ step, questions, onNext }: ISimpleMbtiTestProps) => {
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
        onNext();
    };

    return (
        <div css={Container}>
            <div
                className="title"
                dangerouslySetInnerHTML={{
                    __html: xss(setConvertToHTML(questions[step - 1].question) || ''),
                }}
            />
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
