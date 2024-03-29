import { css } from '@emotion/react';
import color from '../color';

export const SecessionStyled = css`
    .wrap {
        padding: 33px 20px;
        height: 100vh;
        h3 {
            font-weight: 400;
            font-size: 1.4rem;
            margin: 5% 0;
        }
        ul {
            li {
                color: ${color.GRAY_ORIGIN_1};
                font-weight: 400;
                font-size: 1rem;
                margin-bottom: 16px;
                line-height: 1.3;
                &::before {
                    display: inline-block;
                    width: 2px;
                    height: 2px;
                    background: ${color.STRONG_TEXT};
                    border-radius: 50%;
                    margin-right: 1rem;
                }
                a {
                    color: ${color.STRONG_TEXT_1};
                    font-weight: 600;
                    text-decoration: underline;
                }
            }
        }

        .buttonWrap {
            text-align: center;
            margin-top: 60px;
        }
        .secessionAgree {
            display: flex;
            align-items: center;
            margin-top: 90px;
            label {
                font-size: 1rem;
            }
            input {
                width: 18px;
                height: 18px;
                border: 2px solid ${color.STRONG_TEXT_2};
                border-radius: 2px;
                margin-right: 8px;
            }
            p {
                color: ${color.STRONG_TEXT};
            }
        }
    }
`;
