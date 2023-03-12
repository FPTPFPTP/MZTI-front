import { css } from '@emotion/react';

export const HomeMenu = () => css`
    display: flex;
    width: 100%;
    justify-content: space-between;
    h1 {
        font-size: 1.6rem;
    }
    .right {
        display: flex;
        .alarm {
            margin-right: 0.5rem;
        }
        a {
            font-size: 1.6rem;
            color: #000;
        }
    }
`;
