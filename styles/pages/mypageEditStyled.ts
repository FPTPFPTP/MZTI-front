import { css } from '@emotion/react';
import colors from '@styles/color';

export const editLayout = css`
    padding: 0 30px;
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
        color: #a7a7a7;
    }
`;

export const Container = css`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 2rem;
    .css-pf00bf-ProfileUpload {
        border: 3px solid #000;
    }
`;

export const MbtiStyles = css`
    border: 1px solid #000000;
    border-radius: 55px;
    display: inline-block;
    padding: 0.2rem 0.7rem;
    background: #fff;
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
