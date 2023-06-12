import { ChangeEvent, useRef } from 'react';
import VoteSvg from '@assets/icons/write/vote.svg';
import ImageSvg from '@assets/icons/write/image.svg';
import { AddFeatureBoxStyle } from '../styled';

interface IAddFeatureBoxProps {
    isEdit: boolean;
    handleUpdateImg: (target: ChangeEvent<HTMLInputElement>) => void;
    onSurveyModalOpen: () => void;
}

const AddFeatureBox = ({ isEdit, handleUpdateImg, onSurveyModalOpen }: IAddFeatureBoxProps) => {
    const profileImgInputRef = useRef<HTMLInputElement | null>(null);

    return (
        <div css={AddFeatureBoxStyle}>
            <button onClick={() => profileImgInputRef.current && profileImgInputRef.current.click()}>
                +
                <ImageSvg />
                이미지
            </button>
            <input ref={profileImgInputRef} type="file" name="file" accept="image/*" style={{ display: 'none' }} onChange={handleUpdateImg} />

            {isEdit && (
                <button onClick={onSurveyModalOpen}>
                    +
                    <VoteSvg />
                    투표
                </button>
            )}
        </div>
    );
};

export default AddFeatureBox;
