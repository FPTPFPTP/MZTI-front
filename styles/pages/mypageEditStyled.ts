import { css } from '@emotion/react';
import colors from '@styles/color';

export const editLayout = css`
    padding: 0 20px;
    input {
        font-size: 1.2rem;
        margin-top: 20px;
    }
`;

export const editTitle = css`
    font-weight: 400;
    font-size: 1.4rem;
    margin-top: 40px;
    h4 {
        font-weight: 400;
        display: inline-block;
        margin-right: 15px;
    }
    .desc {
        font-weight: 400;
        font-size: 1rem;
        display: inline-block;
        color: ${colors.GRAY_ORIGIN_1};
    }
`;

export const Container = css`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 2rem;
    .css-pf00bf-ProfileUpload {
        border: 3px solid ${colors.BLACK};
    }
`;

export const MbtiStyles = css`
    border: 1px solid ${colors.BLACK};
    border-radius: 55px;
    display: inline-block;
    padding: 0.2rem 0.7rem;
    background: ${colors.WHITE};
    font-weight: 700;
    font-size: 1.7rem;
    margin-top: 13px;
`;

export const editButton = css`
    background-color: transparent;
    box-shadow: none;
    margin-top: 13px;
    &:hover {
        background: transparent !important;
    }
`;

export const MbtiFlex = css`
    display: flex;
    margin-top: 1rem;
    div {
        display: flex;
        align-items: center;
    }
`;

export const myPageEditStyle = css`
    background-color: ${colors.WHITE};
    padding-bottom: 130px;
    .buttonWrap {
        display: flex;
        position: fixed;
        left: 0;
        bottom: 0;
        width: 100%;
        height: 83px;
        z-index: 50;
        padding: 0 20px;
    }
`;
