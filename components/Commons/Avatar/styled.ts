import { css } from '@emotion/react';
import colors from '@styles/color';

export const ContainerStyle = ({ size }: { size: number }) => css`
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    width: ${size}px;
    border: 1px solid ${colors.GRAY_ORIGIN_1};
    border-radius: 50%;
    img {
        object-fit: cover;
        width: 100%;
        height: 100%;
    }
`;
