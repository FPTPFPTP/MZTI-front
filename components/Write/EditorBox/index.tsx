import React, { useEffect, useRef } from 'react';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import { Editor } from '@toast-ui/react-editor';
import { Header, Input } from '@components/Commons';
import { Layout } from '@styles/pages/signupStyled';
import EditSvg from '@assets/icons/edit.svg';
import ToastEditor from '@/components/Commons/ToastEditor';

interface IEditorBox {
    contents: string;
}

const EditorBox = (props: IEditorBox) => {
    const { contents } = props;
    const router = useRouter();

    const editorRef = useRef<Editor>(null);
    const { register, watch, handleSubmit, reset, setValue } = useForm();
    const { title } = watch();

    const onBackPage = () => {
        router.back();
    };

    // 등록 버튼 핸들러
    const handleRegisterButton = () => {
        if (editorRef.current) {
            console.log('11231231');

            // 입력창에 입력한 내용을 HTML 태그 형태로 취득
            console.log(editorRef.current?.getInstance().getHTML());
            // 입력창에 입력한 내용을 MarkDown 형태로 취득
            console.log(editorRef.current?.getInstance().getMarkdown());
        }
    };

    useEffect(() => {
        if (editorRef.current) {
            // 전달받은 html값으로 초기화
            editorRef.current.getInstance().setHTML(contents);

            // 기존 이미지 업로드 기능 제거
            editorRef.current.getInstance().removeHook('addImageBlobHook');
            // 이미지 서버로 데이터를 전달하는 기능 추가
            editorRef.current.getInstance().addHook('addImageBlobHook', (blob, callback) => {
                (async () => {
                    const formData = new FormData();
                    formData.append('multipartFiles', blob);
                })();

                return false;
            });
        }
    }, []);

    return (
        <div css={Layout}>
            <Header
                onClickBackButton={onBackPage}
                title={'글쓰기'}
                rightElement={
                    <button onClick={handleRegisterButton}>
                        <EditSvg />
                    </button>
                }
            />
            <form>
                <Input
                    inputStyle={'borderLess'}
                    placeholder={'제목을 입력하세요'}
                    isResetBtn={!!title}
                    handleReset={() => reset()}
                    maxLength={30}
                    {...register('title')}
                />
                <button type="submit" />
            </form>
            <ToastEditor ref={editorRef} />
        </div>
    );
};

export default EditorBox;
