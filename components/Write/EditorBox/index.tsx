import React, { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/router';
import { message } from 'antd';
import { useForm } from 'react-hook-form';
import { Editor } from '@toast-ui/react-editor';
import { Header, Input } from '@components/Commons';
import { Layout } from '@styles/pages/signupStyled';
import EditSvg from '@assets/icons/edit.svg';
import VoteSvg from '@assets/icons/vote.svg';
import ToastEditor from '@/components/Commons/ToastEditor';
import { BottomWrapper } from './styled';
import { DefaultModeEditor as SurveyEditor, DefaultModeViewer, SurveyType } from '@khunjeong/basic-survey-template';
import { postWrite } from '@apis/write';
import { IPollModel } from '@/types/post';
import Axios from '@utils/axios';
interface IEditorBox {
    contents: string;
}

const EditorBox = (props: IEditorBox) => {
    const { contents } = props;
    const router = useRouter();
    const [isVote, setIsVote] = useState<boolean>(false);
    const [surveyData, setSurveyData] = useState<SurveyType.IDefaultModeSurveyResult[]>([]);

    const editorRef = useRef<Editor>(null);
    const { register, watch, handleSubmit, reset, setValue } = useForm();
    const { title } = watch();

    const onBackPage = () => {
        router.back();
    };

    // 등록 버튼 핸들러
    const handleRegisterButton = async () => {
        if (editorRef.current) {
            // 입력창에 입력한 내용을 HTML 태그 형태로 취득
            console.log(editorRef.current?.getInstance().getHTML());
            // 입력창에 입력한 내용을 MarkDown 형태로 취득
            console.log(editorRef.current?.getInstance().getMarkdown());
            try {
                const tagList: any = [];
                const pollList = [];

                if (surveyData.length) {
                    for (const survey of surveyData) {
                        pollList.push({
                            title: survey.title,
                            startDate: survey.startDate,
                            endDate: survey.endDate,
                            checkCount: survey.maxChoice,
                            items: survey.questions,
                        });
                    }
                }
                const data = await postWrite({
                    title,
                    categoryId: 1,
                    content: editorRef.current?.getInstance().getHTML(),
                    tagList,
                    pollList,
                });

                console.log({ data });
            } catch (error) {
                console.log(error);
            }
        }
    };

    const onSurveyClose = () => {
        setIsVote(false);
        setSurveyData([]);
    };

    useEffect(() => {
        console.log({ surveyData });
    }, [surveyData]);

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
                    formData.append('file', blob);
                    const data = await Axios.post(`/post/image`, formData, {
                        headers: {
                            'content-type': 'multipart/form-data',
                        },
                    });
                    if (data) {
                        console.log(data.data.data);
                        callback(data.data.data, 'alt text');
                    }
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
            {surveyData.map((survey) => (
                <DefaultModeViewer
                    key={survey.id}
                    survey={survey}
                    onResult={() => console.log('결과 페이지 이동')}
                    onSubmit={(result) => console.log({ result })}
                />
            ))}

            {isVote && (
                <div>
                    <SurveyEditor onSubmit={(result) => setSurveyData([...surveyData, result])} onClose={onSurveyClose} submitButtonText={'첨부하기'} />
                </div>
            )}
            <div css={BottomWrapper}>
                <button onClick={() => setIsVote(true)}>
                    <VoteSvg />
                </button>
            </div>
        </div>
    );
};

export default EditorBox;
