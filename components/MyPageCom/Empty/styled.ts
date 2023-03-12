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
        font-size: 24px;
        font-weight: 400;
        line-height: 32px;
        color: ${colors.BLACK};
    }
    .sub_title {
        margin-bottom: 24px;
        font-size: 14px;
        font-weight: 400;
        line-height: 22px;
        color: ${colors.GRAY_ORIGIN_1};
    }
`;
