import React from 'react';
import { Modal as AntdModal, ModalProps } from 'antd';
import { ModalStyle } from './styled';

interface IModalProps extends ModalProps {
    isModalVisible: boolean;
    closeModal?: () => void;
    onOk?: () => void;
    footer?: React.ReactNode;
    width?: number;
}

const Modal: React.FC<IModalProps> = (props) => {
    const { isModalVisible, closeModal, children, onOk, footer } = props;

    return (
        <AntdModal css={ModalStyle} visible={isModalVisible} onCancel={closeModal} onOk={onOk} footer={footer} {...props}>
            {children}
        </AntdModal>
    );
};

export default Modal;
