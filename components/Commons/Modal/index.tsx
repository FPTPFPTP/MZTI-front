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
    const { isModalVisible, closeModal, children, onOk, footer, width } = props;

    return (
        <AntdModal css={ModalStyle} visible={isModalVisible} onCancel={closeModal} onOk={onOk} footer={footer} width={width || 312} {...props}>
            {children}
        </AntdModal>
    );
};

export default Modal;
