import color from '@/styles/color';
import { css } from '@emotion/react';

export const MenuContainerStyle = css`
    position: relative;
    background: ${color.WHITE};
    border-radius: 15px;
    padding: 0 10px;
    li {
        border-bottom: 1px solid ${color.GRAY_BRIGHT_3};
    }
    li:last-child {
        border-bottom: none;
    }
    .boardListItemStyle--line {
        display: flex;
        align-items: center;
        padding: 20px 10px 20px 16px;
        gap: 20px;
        color: ${color.GRAY_STRONG_6};
        svg {
            overflow: visible;
        }
        .title {
            font-size: 15px;
            font-weight: 700;
            line-height: 15px;
            color: ${color.GRAY_STRONG_6};
        }
        .subTitle {
            font-size: 12px;
            font-weight: 500;
            line-height: 15px;
            color: #54545680;
            margin-right: 20px;
        }
        button {
            position: absolute;
            right: 20px;
        }
    }
`;
