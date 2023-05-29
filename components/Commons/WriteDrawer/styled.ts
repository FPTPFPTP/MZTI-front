import { css } from '@emotion/react';
import colors from '@styles/color';

export const WriteDrawerWrapStyle = css`
    .postDrawer__backdrop {
        z-index: 101;
    }
    .postDrawer {
        z-index: 105;
        height: 40vh;
        .title {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin: 30px;
            h3 {
                font-size: 20px;
                font-weight: 500;
                line-height: 20px;
            }
            button {
                width: 50px;
                height: 20px;
                display: flex;
                justify-content: right;
                align-items: center;
            }
        }
        .body {
            margin: 20px 30px;

            h3 {
                font-size: 15px;
                font-weight: 700;
                line-height: 15px;
                text-align: left;
                margin-bottom: 10px;
            }
            p {
                font-size: 12px;
                font-weight: 500;
                line-height: 12px;
                text-align: left;
                color: #54545680;
                margin-bottom: 30px;
            }
        }
        .warning {
            display: flex;
            align-items: center;
            gap: 10px;
            font-size: 12px;
            font-weight: 300;
            line-height: 15px;
            text-align: left;
            color: #54545680;
        }
    }
`;
