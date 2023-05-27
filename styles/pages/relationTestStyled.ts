import { css } from '@emotion/react';
import colors from '@/styles/color';

export const RelationTestStyle = css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    .intro {
        font-size: 15px;
        font-weight: 400;
        line-height: 18px;
        letter-spacing: 0em;
        text-align: center;
        margin-bottom: 57px;
    }
    .title {
        font-size: 30px;
        font-weight: 400;
        line-height: 36px;
        letter-spacing: 0em;
        text-align: center;
        margin-bottom: 170px;
    }
    .action {
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 60%;
        gap: 10px;
        margin-bottom: 90px;
    }
`;

export const RelationTestWrapStyle = css`
    position: relative;
    height: 100vh;
`;

export const RelationTestBodyStyle = css`
    padding: 42px 20px;
    height: calc(100% - 250px);
`;

export const RelationTestFooterStyle = css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 20px;
    gap: 0.5rem;
`;
