import { css } from '@emotion/react';
import colors from '@/styles/color';

export const ListItemWrapCss = css`
    display: flex;
    align-items: center;
    width: 100%;
    padding: 18px 9px;
    background: none;
    border-bottom: 1px solid ${colors.GRAY_ORIGIN_1};
    cursor: pointer;
    &: hover {
        background: ${colors.GRAY_LIGHT_1};
    }
    .id {
        width: 50px;
    }
    .title {
        width: 100%;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
    .date {
        width: 90px;
        white-space: nowrap;
    }
`;
