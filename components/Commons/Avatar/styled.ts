import { css } from '@emotion/react';
import colors from '@styles/color';

export const ContainerStyle = ({ size }: { size: number }) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    width: ${size}px;
    height: ${size}px;
    border: 1px solid ${colors.GRAY_ORIGIN_1};
    border-radius: 50%;
    img {
        object-fit: cover;
    }
`;
