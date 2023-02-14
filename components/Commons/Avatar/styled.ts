import { css } from '@emotion/react';
import colors from '@styles/color';

export const Container = ({ size }: { size: number }) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    width: ${size}px;
    height: ${size}px;
    border: 1px solid ${colors.GRAY_ORIGIN_1};
    border-radius: 50%;
    margin-bottom: 1rem;
    padding: 4px 8px;
    img {
        object-fit: contain;
    }
`;