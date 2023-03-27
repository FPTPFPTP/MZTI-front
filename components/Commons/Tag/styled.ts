import { css } from '@emotion/react';
import colors from '@styles/color';

export const TagWrapStyle = css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: 1px solid ${colors.BLACK};
    border-radius: 15px;
    padding: 6px 8px;
    gap: 8px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`;
