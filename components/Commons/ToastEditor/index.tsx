import { forwardRef } from 'react';

// Toast 에디터
import '@toast-ui/editor/dist/toastui-editor.css';
import 'tui-color-picker/dist/tui-color-picker.css';
import '@toast-ui/editor-plugin-color-syntax/dist/toastui-editor-plugin-color-syntax.css';
import '@toast-ui/editor/dist/i18n/ko-kr';

import { Editor } from '@toast-ui/react-editor';
import colorSyntax from '@toast-ui/editor-plugin-color-syntax';
import { ToastEditorCss } from './styled';

interface IToastEditorProps {
    placaholder?: string;
    // onSurvey: () => void;
}

const ToastEditor = forwardRef<Editor, IToastEditorProps>(({ placaholder }, ref) => {
    // const customPlugin = useCallback(() => {
    //     const button = document.createElement('button');

    //     button.className = 'toastui-editor-toolbar-icons last';
    //     button.style.backgroundImage = 'none';
    //     button.style.margin = '0';
    //     button.innerHTML = `<i>T</i>`;
    //     button.addEventListener('click', () => {
    //         onSurvey();
    //     });

    //     return button;
    // }, [onSurvey]);

    return (
        <div css={ToastEditorCss}>
            <Editor
                ref={ref} // DOM 선택용 useRef
                placeholder={placaholder}
                previewStyle="tab"
                height="500px"
                initialEditType="wysiwyg"
                toolbarItems={[
                    // 툴바 옵션 설정
                    ['heading', 'bold', 'italic', 'strike'],
                    ['hr', 'quote'],
                    ['ul', 'ol', 'task'],
                    ['table', 'image', 'link'],
                    ['code', 'codeblock'],
                    // [
                    //     {
                    //         el: customPlugin(),
                    //         command: 'survey',
                    //         name: 'survey',
                    //         tooltip: '투표생성',
                    //     },
                    // ],
                ]}
                hideModeSwitch={true}
                useCommandShortcut={false} // 키보드 입력 컨트롤 방지
                plugins={[colorSyntax]}
                language="ko-KR"
            />
        </div>
    );
});

ToastEditor.displayName = 'ToastEditor';

export default ToastEditor;
