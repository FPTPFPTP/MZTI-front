import { css } from '@emotion/react';

const DefaultStyle = css`
    font-size: 1.5rem;
    padding: 0.5rem 2rem;
    box-sizing: border-box;
    white-space: nowrap;
`;

export const BaseButtonStyle = css`
    ${DefaultStyle};
    background: #45d6c8;
    border-radius: 25px;
    color: #fafafa;
    &:hover {
        transform: scale(1.1);
        box-shadow: 0px 0px 8px rgba(240, 119, 153, 0.24);
    }
`;

export const TextButtonStyle = css`
    ${DefaultStyle};
    background: none;
    color: #000000;
    text-decoration: underline;
    text-underline-position: under;
    &:hover {
        transform: scale(1.1);
    }
`;
