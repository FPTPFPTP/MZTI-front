import { css } from '@emotion/react';

export const SimpleTestBaseStyle = css`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 400px;
    min-height: 100vh;
    background: #fffade;
    margin: 0 auto;
`;

export const SimpleTestStyle = css`
    ${SimpleTestBaseStyle}
    .SimpleBgImg3 {
        position: absolute;
        top: 223px;
        z-index: 16;
        width: 100%;
    }
    .logo {
        margin-bottom: 20px;
    }
    .intro {
        color: #545456;
        text-align: center;
        font-family: S-Core Dream;
        font-size: 15px;
        font-style: normal;
        font-weight: 500;
        line-height: 19.5px; /* 130% */
        letter-spacing: -0.45px;
        margin-bottom: 100px;
    }
    .title {
        position: relative;
        z-index: 9;
        margin-bottom: 103px;
        color: #1b1e26;
        text-align: center;
        font-family: S-Core Dream;
        font-size: 35px;
        font-style: normal;
        font-weight: 700;
        line-height: 35px; /* 100% */
        letter-spacing: -1.75px;
        span {
            padding: 17px 40px;
            border-radius: 35px;
            background: #fff;
        }
        .text {
            position: relative;
            z-index: 10;
            top: -21px;
        }
    }
    .action {
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 100%;
        gap: 10px;
        padding: 0 20px;
        margin-bottom: 90px;
        button {
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 10px;
        }
    }
`;

export const SimpleTestTestStyle = (isColor: boolean) => css`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 400px;
    min-height: 100vh;
    background: ${isColor ? '#fffade' : '#fff'};
    margin: 0 auto;
    .step {
        width: 100%;
        padding: 42px 20px;
    }
    .question {
        margin-top: 45px;
        p {
            color: #000;
            text-align: center;
            font-family: LOTTERIA CHAB;
            font-size: 20px;
            font-style: normal;
            font-weight: 400;
            line-height: normal;
        }
    }
    .footer {
        width: 100%;
        padding: 20px;
    }
    .loading {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-top: 207px;
        h2 {
            color: #1b1e26;
            text-align: center;
            font-family: S-Core Dream;
            font-size: 35px;
            font-style: normal;
            font-weight: 700;
            line-height: 35px; /* 100% */
            letter-spacing: -1.75px;
        }
        p {
            margin-top: 15px;
            color: #000;
            text-align: center;
            font-size: 20px;
            font-style: normal;
            font-weight: 400;
            line-height: 32.5px; /* 162.5% */
        }
        img {
            margin-top: 37px;
            margin-bottom: 177px;
        }
    }
`;

export const SimpleTestResultStyle = css`
    ${SimpleTestBaseStyle}
    padding: 38px 20px;
    .logo {
        margin-bottom: 11px;
    }
    .result_question {
        font-size: 20px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
    }
    .result_title {
        position: relative;
        width: 100%;
        margin-top: 30px;
        color: #fff;
        text-align: center;
        font-family: LOTTERIA CHAB;
        font-size: 80px;
        font-style: normal;
        font-weight: 400;
        letter-spacing: 5px;
        -webkit-text-stroke: 3px #000;
        z-index: 3;
    }
    .result_submit {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
        border-radius: 15px;
        opacity: 0.69;
        background: rgba(255, 255, 255, 0.7);
        margin: 20px;
        padding: 27px 10px;
        .submit {
            color: #1b1e26;
            text-align: center;
            font-family: S-Core Dream;
            font-style: normal;
            line-height: normal;
            h2 {
                font-size: 30px;
                font-weight: 700;
                margin-top: 5px;
            }
            h3 {
                font-size: 20px;
                font-weight: 500;
            }
        }
        .hashTag {
            width: 100%;
            margin: 10px 30px;
            padding: 17px 22px;
            border-radius: 19px;
            background: rgba(245, 99, 38, 0.3);
            color: #1b1e26;
            text-align: center;
            font-size: 15px;
            font-style: normal;
            font-weight: 600;
            line-height: normal;
        }
        .characteristic {
            margin: 10px 30px;
            color: #1b1e26;
            text-align: center;
            font-size: 13px;
            font-style: normal;
            font-weight: 400;
            line-height: 16.9px; /* 130% */
            h3 {
                font-size: 16px;
                color: #000;
                font-weight: 700;
                margin-bottom: 30px;
            }
        }
    }
    .result_btn {
        display: flex;
        flex-direction: column;
        align-items: center;
        position: relative;
        gap: 10px;
        width: 100%;
        margin-bottom: 30px;
        font-size: 13px;
        font-weight: 400;
        line-height: 16px;
        letter-spacing: 0em;
        text-align: center;
        h3 {
            color: #1b1e26;
            text-align: center;
            font-family: S-Core Dream;
            font-size: 20px;
            font-style: normal;
            font-weight: 800;
            line-height: normal;
        }
        .share {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 100%;
            height: 56px;
            border-radius: 15px;
            opacity: 0.69;
            background: rgba(255, 255, 255, 0.7);
            margin-bottom: 20px;
        }
    }
    .result_famous {
        display: flex;
        flex-direction: column;
        align-items: center;
        position: relative;
        width: 100%;
        margin: 30px 20px;
        padding: 30px 10px;
        border-radius: 15px;
        opacity: 0.69;
        background: rgba(255, 255, 255, 0.9);
        z-index: 3;
        h3 {
            color: #1b1e26;
            text-align: center;
            font-family: S-Core Dream;
            font-size: 20px;
            font-style: normal;
            font-weight: 500;
            line-height: normal;
        }
        .famous {
            display: flex;
            width: 100%;
            margin-top: 27px;
            div {
                flex: 1;
                p {
                    color: #545456;
                    text-align: center;
                    font-size: 13px;
                    font-style: normal;
                    font-weight: 400;
                    line-height: 17px; /* 130.769% */
                    letter-spacing: -0.408px;
                }
                h3 {
                    color: #1b1e26;
                    text-align: center;
                    font-size: 20px;
                    font-style: normal;
                    font-weight: 400;
                    line-height: 20px;
                    letter-spacing: -0.408px;
                }
                .icon {
                    margin: 30px 0px 10px;
                    text-align: center;
                    font-size: 50px;
                    font-style: normal;
                    font-weight: 400;
                    line-height: 50px;

                    letter-spacing: -0.408px;
                }
            }
        }
    }
    .result_question {
        color: #1b1e26;
        text-align: center;
        font-family: Pretendard;
        font-size: 13px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        margin-bottom: 17px;
    }
    .result_question1 {
        color: #000;
        text-align: center;
        font-family: S-Core Dream;
        font-size: 20px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
    }
    .result_mzti {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
        padding: 44px 20px 34px;
        border-radius: 20px;
        background: #f56326;
        img {
            width: 100%;
            height: 160px;
            margin-bottom: 10px;
            border-radius: 10px;
            border: 3px solid #000;
        }
        h3 {
            color: #000;
            text-align: center;
            font-family: S-Core Dream;
            font-size: 15px;
            font-style: normal;
            font-weight: 500;
            line-height: normal;
            margin: 20px 0px 30px;
        }
        span {
            color: #fff;
            text-align: center;
            font-family: Inter;
            font-size: 20px;
            font-style: normal;
            font-weight: 400;
            line-height: normal;
            margin-top: 34px;
        }
        .btn {
            display: flex;
            flex-direction: column;
            width: 100%;
            gap: 10px;
            margin-bottom: 27px;
        }
    }
`;
