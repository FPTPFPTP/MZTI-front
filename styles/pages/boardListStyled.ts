import { css } from '@emotion/react';
import color from '../color';

export const BoardListStyle = () => css`
    background-color: ${color.WHITE};
    .boardListStyle--line {
        border-bottom: 1px solid ${color.GRAY_BRIGHT_3};
        padding-bottom: 44px;
        li {
            padding: 40px 0 0 20px;
            color: ${color.GRAY_STRONG_5};
            &.title {
                font-weight: 700;
            }
        }
        &:last-of-type {
            border-bottom: none;
        }
    }
    .titleSection {
        color: ${color.GRAY_STRONG_3};
        padding: 31px 0 15px 35px;
    }
`;
