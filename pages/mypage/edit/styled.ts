import { css } from '@emotion/react';
import colors from '@styles/color';

export const editLayout = css`
    padding: 0 30px;
`;

export const editTitle = css`
    font-weight: 400;
    font-size: 21px;
    line-height: 24px;
    margin-top: 40px;
    h4 {
        font-weight: 400;
        display: inline-block;
        margin-right: 15px;
    }
    span {
        font-weight: 400;
        font-size: 15px;
        line-height: 14px;
        display: inline-block;
        color: #a7a7a7;
    }
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
