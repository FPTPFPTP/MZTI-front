import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

import { Input, Modal } from '@/components/Commons';
import RegExp, { YOUTUBE_URL_REG } from '@utils/regExp';

import { YouTubeModalStyle } from '../styled';

interface IYouTubeModalProps {
    isModal: boolean;
    handleOk: (youtubeUrl: string) => void;
    handleCancel: () => void;
}

const YouTubeModal = (props: IYouTubeModalProps) => {
    const { isModal, handleOk, handleCancel } = props;
    const [isPossible, setIsPossible] = useState<boolean>(false);

    const { register, watch, handleSubmit, reset, setValue } = useForm();
    const { youtubeUrl } = watch();

    const onSubmit = () => {
        if (isPossible) {
            handleOk(youtubeUrl);
            handleCancel();
            setValue('youtubeUrl', '');
        } else {
            setIsPossible(false);
        }
    };

    useEffect(() => {
        if (youtubeUrl && youtubeUrl.length) {
            if (RegExp(YOUTUBE_URL_REG, youtubeUrl)) {
                setIsPossible(true);
            } else {
                setIsPossible(false);
            }
        }
    }, [youtubeUrl]);

    return (
        <Modal title="유튜브 등록하기" isModalVisible={isModal} onCancel={handleCancel} closable={false} footer={null} centered={true}>
            <div css={YouTubeModalStyle}>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Input
                        inputStyle={'borderLess'}
                        placeholder={'유튜브 URL을 입력하세요'}
                        isResetBtn={!!youtubeUrl}
                        handleReset={() => reset()}
                        {...register('youtubeUrl', {
                            required: true,
                        })}
                    />
                    {!isPossible && (
                        <div className="state-message">
                            <p>youtube url을 입력해주세요.</p>
                        </div>
                    )}
                    <button type="submit" />
                </form>
                <div className="buttons">
                    <button key="close" onClick={handleCancel} style={{ marginRight: 20 }}>
                        취소
                    </button>

                    <button key="close" onClick={onSubmit}>
                        등록
                    </button>
                </div>
            </div>
        </Modal>
    );
};

export default YouTubeModal;
