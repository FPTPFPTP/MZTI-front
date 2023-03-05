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
    padding: 4px 8px;
    img {
        object-fit: cover;
        position: absolute;
    }
`;
