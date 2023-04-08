import { useMemo } from 'react';
import { Modal } from 'antd';
import { Cookies } from 'react-cookie';
import { DefaultModeEditor as SurveyEditor, SurveyType } from '@khunjeong/basic-survey-template';

interface ISurveyModalProps {
    isModal: boolean;
    handleOk: (result: SurveyType.IDefaultModeSurveyResult) => void;
    handleCancel: () => void;
}

const SurveyModal = (props: ISurveyModalProps) => {
    const { isModal, handleOk, handleCancel } = props;

    // 업로드 옵션 설정
    const uploadOptions: SurveyType.IUploadOptions = useMemo(() => {
        const cookies = new Cookies();

        return {
            baseUrl: 'https://api.mzti.kr', // proxy url
            actionUrl: '/mzti/post/image', // 업로드 url 경로
            authorization: cookies.get('accessToken'), // 토큰
        };
    }, []);

    return (
        <Modal title="투표 작성하기" open={isModal} onCancel={handleCancel} footer={[]}>
            <SurveyEditor onSubmit={handleOk} submitButtonText={'첨부하기'} uploadOptions={uploadOptions} />
        </Modal>
    );
};

export default SurveyModal;
