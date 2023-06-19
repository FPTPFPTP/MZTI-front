import { css } from '@emotion/react';

export const AdminStyled = () => css`
    position: fixed;
    top: 0;
    left: 0;
    background-color: #fff;
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: space-around;
    section {
        width: 80%;
        padding: 40px;
    }
    .css-10hburv-MuiTypography-root {
        display: flex;
    }
    .css-10hburv-MuiTypography-root {
        font-size: 1.2rem;
    }
    .css-156df9n-MuiPaper-root {
        padding-top: 7rem;
    }
    .email,
    .nickname {
        font-size: 1.2rem;
        display: flex;
        flex-direction: column;
    }
    .css-t89xny-MuiDataGrid-columnHeaderTitle {
        font-size: 1.2rem;
    }
    .adminMainWrap {
        display: flex;
        align-items: center;
        justify-content: center;
        h3 {
            font-size: 2.5rem;
            font-weight: 400;
            text-align: center;
            line-height: 1.2;
            strong {
                font-weight: 700;
            }
        }
    }
    .content {
        h1 {
            padding: 4rem 0;
            font-size: 2rem;
        }
    }
`;
