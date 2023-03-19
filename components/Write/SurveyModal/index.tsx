import { Modal } from 'antd';
import { DefaultModeEditor as SurveyEditor, SurveyType } from '@khunjeong/basic-survey-template';

interface ISurveyModalProps {
    isModal: boolean;
    handleOk: (result: SurveyType.IDefaultModeSurveyResult) => void;
    handleCancel: () => void;
}

const SurveyModal = (props: ISurveyModalProps) => {
    const { isModal, handleOk, handleCancel } = props;

    return (
        <Modal title="투표 작성하기" open={isModal} onCancel={handleCancel} footer={[]}>
            <SurveyEditor onSubmit={handleOk} onClose={handleCancel} submitButtonText={'첨부하기'} />
        </Modal>
    );
};

export default SurveyModal;
