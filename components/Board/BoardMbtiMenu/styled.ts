import colors from '@/styles/color';
import { css } from '@emotion/react';

export const MbtiMenuContainerStyle = css`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    width: 100%;
    gap: 5px;
`;

export const MbtiMenuStyle = (mbtiColor: string) => css`
    padding: 28px 18px;
    background: ${colors.WHITE};
    border: 2px solid ${mbtiColor};
    border-radius: 15px;
    font-size: 17px;
    font-weight: 700;
    line-height: 17px;
    text-align: center;
    a {
        width: 100%;
        height: 100%;
    }
`;
