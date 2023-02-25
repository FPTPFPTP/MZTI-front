import { css } from '@emotion/react';
import colors from '@styles/color';

const DefaultStyle = css`
    width: 100%;
    min-width: 180px;
    font-size: 1.5rem;
    padding: 0.5rem 2rem;
    box-sizing: border-box;
    white-space: nowrap;
`;

export const BaseButtonStyle = css`
    ${DefaultStyle};
    background: ${colors.PRIMARY};
    border-radius: 25px;
    color: ${colors.WHITE};
    box-shadow: ${colors.BOX_SHADOW};
    &:hover {
        transform: scale(1.02);
        box-shadow: ${colors.BOX_SHADOW};
    }
    &:disabled {
        background: ${colors.GRAY_BRIGHT_1};
        cursor: not-allowed;
        &:hover {
            transform: scale(1);
        }
    }
`;

export const LinkButtonStyle = css`
    ${DefaultStyle};
    background: ${colors.BLACK};
    color: ${colors.WHITE};
    box-shadow: ${colors.BOX_SHADOW};
    &:hover {
        transform: scale(1.01);
        box-shadow: ${colors.BOX_SHADOW};
    }
    &:disabled {
        background: ${colors.GRAY_BRIGHT_1};
        cursor: not-allowed;
        &:hover {
            transform: scale(1);
        }
    }
`;

export const TextButtonStyle = css`
    ${DefaultStyle};
    background: none;
    color: ${colors.BLACK};
    text-decoration: underline;
    text-underline-position: under;
    &:hover {
        transform: scale(1.05);
    }
    &:disabled {
        color: ${colors.GRAY_BRIGHT_1};
        cursor: not-allowed;
        &:hover {
            transform: scale(1);
        }
    }
`;
