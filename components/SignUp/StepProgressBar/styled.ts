import { css } from '@emotion/react';

export const ProgressUl = css`
    overflow: hidden;
    counter-reset: step;
    li {
        list-style-type: none;
        color: white;
        text-transform: uppercase;
        width: 25%;
        float: left;
        position: relative;
        &::before {
            content: counter(step);
            counter-increment: step;
            width: 30px;
            padding: 4px 8px;
            font-size: 1.5rem;
            line-height: 20px;
            display: block;
            color: #333;
            background: white;
            border-radius: 3px;
            margin: 0 auto 5px auto;
            z-index: 11;
        }
        &:after {
            content: '';
            width: 84%;
            height: 4px;
            background: white;
            position: absolute;
            left: -42%;
            top: 9px;
            z-index: 10;
        }
        &:first-child:after {
            content: none;
        }
        &.active:before,
        &.active:after {
            background: #45d6c8;
            color: white;
        }
    }
`;
