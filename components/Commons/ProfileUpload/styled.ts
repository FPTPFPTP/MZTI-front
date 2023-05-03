import { css } from '@emotion/react';
import colors from '@styles/color';

export const AvatarWrapStyle = css`
    overflow: hidden;
    position: relative;
    border-radius: 50%;
    box-sizing: border-box;
    /* width: 50%;
    height: 50%; */
    input {
        display: none;
    }
`;

export const UploadWrapStyle = css`
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 50px;
    background: rgba(0, 0, 0, 0.5);
    cursor: pointer;
    &:hover {
    }
`;
