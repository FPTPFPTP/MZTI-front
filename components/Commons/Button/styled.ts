import { css } from '@emotion/react';

export const BaseButtonStyle = css`
    background: #45d6c8;
    border-radius: 25px;
    color: #fafafa;
    font-size: 1.5rem;
    padding: 0.5rem 2rem;
    box-sizing: border-box;
    white-space: nowrap;
    &:hover {
        transform: scale(1.1);
        box-shadow: 0px 0px 8px rgba(240, 119, 153, 0.24);
    }
`;
