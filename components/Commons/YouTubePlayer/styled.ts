import { css } from '@emotion/react';

export const YoutubeStyle = css`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    margin: 15px 0px;
    .youtube {
        position: relative;
        width: 100%;
        iframe {
            width: 100%;
            height: 100%;
            min-height: 300px;
        }
    }
`;
