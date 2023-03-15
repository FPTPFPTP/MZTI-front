import { forwardRef, useEffect, useRef, useState } from 'react';

// Toast 에디터
import '@toast-ui/editor/dist/toastui-editor.css';
import 'tui-color-picker/dist/tui-color-picker.css';
import '@toast-ui/editor-plugin-color-syntax/dist/toastui-editor-plugin-color-syntax.css';
import '@toast-ui/editor/dist/i18n/ko-kr';

import { Editor } from '@toast-ui/react-editor';
import colorSyntax from '@toast-ui/editor-plugin-color-syntax';

interface IToastEditorProps {
    placaholder?: string;
}

const ToastEditor = forwardRef<Editor, IToastEditorProps>(({ placaholder }, ref) => {
    return (
        <div>
            <Editor
                ref={ref} // DOM 선택용 useRef
                placeholder={placaholder}
                previewStyle="vertical" // 미리보기 스타일 지정
                height="300px" // 에디터 창 높이
                initialEditType="wysiwyg"
                toolbarItems={[
                    // 툴바 옵션 설정
                    ['heading', 'bold', 'italic', 'strike'],
                    ['hr', 'quote'],
                    ['ul', 'ol', 'task', 'indent', 'outdent'],
                    ['table', 'image', 'link'],
                    ['code', 'codeblock'],
                ]}
                useCommandShortcut={false} // 키보드 입력 컨트롤 방지
                plugins={[colorSyntax]}
                language="ko-KR"
            ></Editor>

            {/* <button onClick={handleRegisterButton}>등록</button> */}
        </div>
    );
});

ToastEditor.displayName = 'ToastEditor';

export default ToastEditor;
