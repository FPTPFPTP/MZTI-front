import { css } from '@emotion/react';
import colors from '@styles/color';

export const MultiCarouselStyle = css`
    .react-multi-carousel-dot-list {
        margin-bottom: 10px;
        gap: 10px;

        .react-multi-carousel-dot {
            button {
                width: 7px;
                height: 7px;
                border: 1px solid ${colors.BUTTON_TEXT};
                background: ${colors.WHITE};
            }
        }
        .react-multi-carousel-dot--active {
            button {
                border: none;
                background: ${colors.POINT_COLOR};
            }
        }
    }
`;
