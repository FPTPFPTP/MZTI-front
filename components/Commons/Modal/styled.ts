import { css } from '@emotion/react';
import colors from '@styles/color';

export const ModalStyle = css`
    .ant-modal {
        &-header {
            margin: 0px;
            padding: 24px;
        }
        &-title {
            color: ${colors.BLACK};
            font-size: 2rem;
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

        &-body {
            padding: 0px 20px;
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
