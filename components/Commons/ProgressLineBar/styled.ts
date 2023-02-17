import { css } from '@emotion/react';
import colors from '@styles/color';

export const ProgressLineBarContainer = css`
    width: 100%;
    height: 10px;
    background: ${colors.GRAY_BRIGHT_1};
    border-radius: 10px;
`;

export const ProgressBar = (percent: number) => css`
    width: ${percent}%;
    height: 100%;
    background: ${colors.PRIMARY};
    border-radius: 10px;
`;
