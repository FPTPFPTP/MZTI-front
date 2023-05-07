import { css } from '@emotion/react';
import colors from '@styles/color';

export const ModalStyle = css`
    border-radius: 15px;
    .ant-modal-header {
        text-align: center;
    }
    .ant-modal-body {
        text-align: center;
    }
    .ant-modal-content {
        border-radius: 20px !important;
    }

    .button {
        margin-top: 17px;
        width: 100%;
        padding: 11px 0;
        border-top: 0.5px solid rgba(0, 0, 0, 0.3);
    }
    .ant-modal {
        width: 100% !important;
        padding: 0 45px !important;
        max-width: 100% !important;
        .ant-modal-title {
            font-weight: 700;
            font-size: 17px;
            line-height: 22px;
            text-align: center;
            letter-spacing: -0.408px;
            color: #1b1e26;
        }
        .ant-modal-body {
            font-weight: 500;
            font-size: 13px;
            line-height: 16px;
            text-align: center;
            letter-spacing: -0.078px;
            color: #545456;
        }
        .ant-modal-footer {
            button {
                font-weight: 400;
                font-size: 17px;
                line-height: 22px;
                text-align: center;
                letter-spacing: -0.408px;
            }
        }
        &-header {
            margin: 0px;
            padding: 24px;
        }
        &-title {
            font-weight: 700;
            font-size: 17px;
            line-height: 22px;
            text-align: center;
            letter-spacing: -0.408px;
            color: #1b1e26;
        }

        &-content {
            overflow: hidden;
            background: ${colors.WHITE};
            border-radius: 0;
            box-shadow: 0 4px 3px rgba(103, 59, 183, 0.1);
            padding: 0px;
            color: ${colors.GRAY_STRONG_5};
            font-size: 1rem;
        }

        &-footer {
            display: flex;
            justify-content: flex-end;
            padding: 34px;
            gap: 32px;
            color: ${colors.BLACK};
            font-size: 1rem;
            font-weight: 500;
        }
    }
`;
