import { css } from '@emotion/react';
import color from '../color';

export const BoardListStyle = () => css`
    background-color: ${color.WHITE};
    padding-bottom: 80px;
    .boardListStyle--line {
        border-bottom: 1px solid ${color.GRAY_BRIGHT_3};
        padding-bottom: 44px;
        li {
            padding: 44px 0 0 43px;
            color: ${color.GRAY_STRONG_5};
            &.title {
                font-weight: 700;
            }
        }
    }
    .titleSection {
        color: ${color.GRAY_STRONG_3};
        padding: 31px 0 15px 35px;
    }
`;
