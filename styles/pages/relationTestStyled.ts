import { css } from '@emotion/react';
import colors from '@/styles/color';

export const RelationBaseStyle = css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
`;
export const RelationTestStyle = css`
    ${RelationBaseStyle}
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

export const RelationResultStyle = css`
    ${RelationBaseStyle}
    padding: 20px 0;
    .logo {
        margin-bottom: 20px;
    }
    .result_relation {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 20px;
        margin-bottom: 47px;
        h3 {
            font-size: 20px;
            font-weight: 400;
            line-height: 24px;
            letter-spacing: 0em;
            text-align: center;
        }
    }
    .result_title {
        margin-bottom: 47px;
        h3 {
            font-size: 20px;
            font-weight: 400;
            line-height: 24px;
            letter-spacing: 0em;
            text-align: center;
        }
        h1 {
            font-size: 40px;
            font-weight: 400;
            line-height: 48px;
            letter-spacing: 0em;
            text-align: center;
        }
    }
    .result_submit {
        width: 250px;
        margin-top: 34px;
        margin-bottom: 34px;
        h3 {
            font-size: 15px;
            font-weight: 400;
            line-height: 18px;
            letter-spacing: 0em;
            text-align: center;
            margin-bottom: 20px;
        }
        p {
            font-size: 13px;
            font-weight: 400;
            line-height: 16px;
            letter-spacing: 0em;
            text-align: center;
        }
    }
    .result_btn {
        margin-bottom: 65px;
        font-size: 13px;
        font-weight: 400;
        line-height: 16px;
        letter-spacing: 0em;
        text-align: center;
    }
    .result_other {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        p {
            font-size: 15px;
            font-weight: 400;
            line-height: 18px;
            letter-spacing: 0em;
            text-align: center;
            margin: 20px 0 10px;
        }
    }
    .banner_wrap {
        width: 307px;
    }
`;
