import { css } from '@emotion/react';
import colors from '@/styles/color';

export const HotKeywordStyle = css`
    .keyowordBox__content {
        padding: 24px 35px 18px;
        background-color: ${colors.GRAY_LIGHT_5};
        h3 {
            font-weight: 500;
            font-size: 1.5rem;
            color: ${colors.BLACK};
        }
    }
    .keyword {
        margin-top: 18px;
        li {
            display: inline-block;
            margin-right: 10px;
            padding: 6px 12px;
            border-radius: 12.5px;
            margin-bottom: 6px;
            background-color: ${colors.WHITE};
            color: ${colors.GRAY_STRONG_3};
            font-size: 1.2rem;
        }
    }
`;
