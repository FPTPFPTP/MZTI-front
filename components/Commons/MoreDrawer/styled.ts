import { css } from '@emotion/react';
import colors from '@styles/color';

export const PostMore = css`
    .postDrawer__backdrop {
        z-index: 101;
    }
    .postDrawer {
        z-index: 105;
        height: 44vh;
        h3 {
            text-align: center;
            font-weight: 500;
            font-size: 1.3rem;
            margin-top: 28px;
        }
        ul {
            margin-top: 39px;
            padding-left: 33px;
            li {
                margin-bottom: 18px;
                font-weight: 300;
                font-size: 1.3rem;
                &.none {
                    color: ${colors.GRAY_ORIGIN_1};
                }
            }
        }
    }
`;
