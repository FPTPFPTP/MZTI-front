import { css } from '@emotion/react';
import colors from '@styles/color';

export const Container = css`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const AvatarWrap = css`
    position: relative;
    border-radius: 50%;
    overflow: hidden;
    input {
        display: none;
    }
`;

export const UploadWrap = css`
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 15%;
    background: ${colors.GRAY_BRIGHT_1};
    cursor: pointer;
    &:hover {
    }
`;
