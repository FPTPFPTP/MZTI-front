import { css } from '@emotion/react';

export const BottomButtonStyle = css`
    position: fixed;
    bottom: 0;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    background: #f7f7f7;
    height: 84px;
    min-width: 390px;
    max-width: 600px;
    width: 100%;
    ul {
        display: flex;
        justify-content: space-around;
        align-items: center;
        width: 100%;
    }
    li {
        color: #fff;
        svg {
            font-size: 1.6rem;
            color: #292d32;
        }
        a {
            color: #fff;
        }
    }
`;
