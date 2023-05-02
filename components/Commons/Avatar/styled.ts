import { css } from '@emotion/react';

export const ContainerStyle = ({ size }: { size?: number }) => css`
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    width: ${size}px;
    height: ${size}px;
    border-radius: 50%;
    overflow: hidden;
    .profileSize {
        width: 250px;
        height: 250px;
    }
    img {
        object-fit: cover;
        width: 100%;
        height: 100%;
    }
`;
