import '@toast-ui/editor/dist/toastui-editor-viewer.css';
import { Viewer } from '@toast-ui/react-editor';
import { ToastViewerStyle } from './styled';

interface IToastViewer {
    contentHtml: string;
}

export default function ToastViewer({ contentHtml }: IToastViewer) {
    return (
        <div css={ToastViewerStyle}>
            <Viewer initialValue={contentHtml} />
        </div>
    );
}
