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

export const Container = css`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 2rem;
`;

export const MbtiStyles = css`
    border: 1px solid #000000;
    border-radius: 12px;
    display: inline-block;
    padding: 4px 6px;
    background: #fff;
    margin-right: 1rem;
    margin-top: 1rem;
`;
