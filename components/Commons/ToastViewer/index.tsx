import '@toast-ui/editor/dist/toastui-editor-viewer.css';
import { Viewer } from '@toast-ui/react-editor';
import { ToastViewerStyle } from './styled';

interface IToastViewer {
    contentHtml: string;
}

export default function ToastViewer({ contentHtml }: IToastViewer) {
    return (
        <div css={ToastViewerStyle}>
            <Viewer
                initialValue={contentHtml}
                customHTMLRenderer={{
                    htmlBlock: {
                        iframe(node) {
                            return [
                                { type: 'openTag', tagName: 'iframe', outerNewLine: true, attributes: node.attrs },
                                { type: 'html', content: node.childrenHTML ?? '' }, // 여기 반드시 string이어야 한다
                                { type: 'closeTag', tagName: 'iframe', outerNewLine: true },
                            ];
                        },
                    },
                }}
            />
        </div>
    );
}
