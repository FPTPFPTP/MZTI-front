import { css } from '@emotion/react';
import colors from '@styles/color';

export const TextAreaWrapStyle = css`
    display: flex;
    align-items: center;
    width: 100%;
    border: none;
    padding: 4px 8px;
    gap: 0.5rem;
`;

export const TextAreaStyle = css`
    width: 100%;
    min-height: 100px;
    font-weight: 400;
    font-size: 12px;
    line-height: 12px;
    &::placeholder {
        color: #54545680;
    }

    &:focus {
        outline: none !important;
    }
`;
