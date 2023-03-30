import { css } from '@emotion/react';
import colors from '@styles/color';

export const EmptyWrapCss = css`
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    margin-top: 100px;
    .title {
        font-size: 1.4rem;
        font-weight: 400;
        color: ${colors.BLACK};
    }
    .sub_title {
        margin-bottom: 24px;
        font-size: 0.9rem;
        font-weight: 400;
        color: ${colors.GRAY_ORIGIN_1};
        margin-top: 10px;
    }
`;
