import { css } from '@emotion/react';
import colors from '@styles/color';

export const ContainerStyle = ({ size }: { size: number }) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    width: ${size}px;
    height: ${size}px;
    border: 1px solid ${colors.GRAY_ORIGIN_1};
    border-radius: 50%;
    overflow: hidden;
    img {
        object-fit: cover;
    }
`;
