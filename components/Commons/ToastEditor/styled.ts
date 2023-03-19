import { css } from '@emotion/react';
import colors from '@styles/color';

export const ToastEditorCss = css`
    > div > div {
        overflow: hidden;
        border: none;

        > div > div > div > div > div {
            border: none;
        }
    }
`;
