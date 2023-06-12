import { css } from '@emotion/react';

export const ToastViewerStyle = css`
    padding: 0;
    margin-top: 50px;
    iframe {
        width: 100%;
        max-width: 500px;
        min-height: 300px;
        max-height: 500px;
    }
    .toastui-editor-contents p {
        font-size: 15px;
        font-weight: 500;
        line-height: 23px;
        margin-top: 0px;
    }
`;
