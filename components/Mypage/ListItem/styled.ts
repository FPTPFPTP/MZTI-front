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
        width: 24px;
    }
    .title {
        flex-grow: 1;
    }
    .date {
        width: 90px;
    }
`;
