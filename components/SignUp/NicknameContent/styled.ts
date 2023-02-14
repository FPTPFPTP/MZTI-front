import { css } from '@emotion/react';
import colors from '@styles/color';

export const Container = css`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const ContentWrap = css`
    width: 100%;
    .form-item-error {
        margin-top: 0.5rem;
        color: ${colors.RED_ORIGIN};
    }
`;
