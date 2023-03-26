import { css } from '@emotion/react';

export const HeaderContainer = css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: sticky;
    top: 0;
    width: 100%;
    height: 80px;
    padding: 33px;
    z-index: 100;
    background-color: #fff;
`;

export const TitleStyle = () => css`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 1.3rem;
    font-weight: 300;
`;

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
