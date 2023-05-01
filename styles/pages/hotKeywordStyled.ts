import { css } from '@emotion/react';
import colors from '@/styles/color';

export const HotKeywordMenu = () => css`
    width: 100%;
    padding: 10px 20px 0px;
    .titleSection {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        margin: 20px;
        padding: 0px 20px 0 2px;
        h3 {
            font-size: 17px;
            font-weight: 500;
            line-height: 17px;
            color: ${colors.GRAY_STRONG_6};
        }
        button {
            display: flex;
            align-items: center;
            font-size: 12px;
            font-weight: 500;
            line-height: 15px;
            color: ${colors.GRAY_STRONG_6}80;
            padding: 0px;
            gap: 4px;
        }
    }
`;

export const FeedContentStyle = ({ isCurrentScrollTop }: { isCurrentScrollTop: boolean }) => css`
    padding: 0px 20px;
    height: calc(100vh - ${isCurrentScrollTop ? '345px' : '260px'});
    background: ${colors.WHITE};
    overflow-y: auto;
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
    &::-webkit-scrollbar {
        display: none;
        width: 0 !important;
    }
`;
