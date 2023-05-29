import { css } from '@emotion/react';
import color from '../color';

export const BoardListStyle = () => css`
    background: #f8f8f8;
    padding-bottom: 60px;
`;

export const BoardListSection = () => css`
    padding: 30px 20px 0px;
`;

export const MbtiMenuGroupStyle = css`
    display: flex;
    align-items: center;
    padding: 0px 0px 20px;
    gap: 21px;
    white-space: nowrap;
    h3 {
        font-size: 17px;
        font-weight: 700;
        line-height: 17px;
        color: ${color.GRAY_STRONG_6};
    }
    span {
        font-size: 12px;
        font-weight: 500;
        line-height: 15px;
        color: #54545680;
    }
`;
