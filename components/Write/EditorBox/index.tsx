import React, { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/router';
import { message, Select } from 'antd';
import { useForm } from 'react-hook-form';
import { Editor } from '@toast-ui/react-editor';
import { Header, Input } from '@components/Commons';
import EditSvg from '@assets/icons/edit.svg';
import VoteSvg from '@assets/icons/vote.svg';
import ToastEditor from '@/components/Commons/ToastEditor';
import { Layout } from './styled';
import { DefaultModeViewer, SurveyType } from '@khunjeong/basic-survey-template';
import { postWrite } from '@apis/write';
import { useGetBoards } from '@/apis/boards';
import { useGetTags } from '@apis/posts';
import Axios from '@utils/axios';
import SurveyModal from '../SurveyModal';

interface IEditorBox {
    contents: string;
}

const EditorBox = (props: IEditorBox) => {
    const { contents } = props;
    const router = useRouter();
    const [isSurveyModal, setIsSurveyModal] = useState<boolean>(false);
    const [selectCategory, setSelectCategory] = useState<number>(1);
    const [surveyData, setSurveyData] = useState<SurveyType.IDefaultModeSurveyResult[]>([]);
    const [tagSearchValue, setTagSearchValue] = useState<string>('');

    const editorRef = useRef<Editor>(null);
    const { register, watch, reset, setValue } = useForm();
    const { title } = watch();

    // 게시판 메뉴
    const categorys = useGetBoards();
    // tag
    const tags = useGetTags(tagSearchValue);

    const onBackPage = () => {
        router.back();
    };

    const handleCategoryChange = (value: string) => {
        setSelectCategory(Number(value));
    };

    const handleTagChange = (value: string[]) => {
        console.log(value);
    };

    const handleTagSearch = (value: string) => {
        setTagSearchValue(value);
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
                    categoryId: selectCategory,
                    content: editorRef.current?.getInstance().getHTML(),
                    tagList,
                    pollList,
                });

                if (data.code === 'SUCCESS') {
                    message.success('작성한 글 업로드에 성공했어요');

                    console.log({ data });
                }
            } catch (error) {
                console.log(error);
            }
        }
    };

    // surveyModal open
    const onSurveyModalOpen = () => {
        setIsSurveyModal(true);
    };
    // survey Arr 추가
    const onSurveyAdd = (survey: SurveyType.IDefaultModeSurveyResult) => {
        setSurveyData([...surveyData, survey]);
        setIsSurveyModal(false);
    };

    const onSurveyRemove = (key: string) => {
        setSurveyData(surveyData.filter((survey) => survey.id !== key));
    };
    // surveyModal 닫기
    const onSurveyClose = () => {
        setIsSurveyModal(false);
    };

    useEffect(() => {
        console.log({ surveyData });
    }, [surveyData]);

    useEffect(() => {
        console.log({ tags });
    }, [tags]);

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
            {categorys && categorys.length && (
                <Select defaultValue={categorys[0].title} style={{ width: 120, margin: '0 auto' }} onChange={handleCategoryChange} bordered={false}>
                    {categorys.map((category) => (
                        <Select.Option key={category.id} value={category.id} label={category.title}>
                            {category.title}
                        </Select.Option>
                    ))}
                </Select>
            )}

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
            <ToastEditor ref={editorRef} onSurvey={onSurveyModalOpen} />
            {surveyData.map((survey) => (
                <DefaultModeViewer
                    key={survey.id}
                    survey={survey}
                    onResult={() => console.log('결과 페이지 이동')}
                    onSubmit={(result) => console.log({ result })}
                    onRemove={onSurveyRemove}
                />
            ))}
            <Select
                mode="multiple"
                style={{ width: '100%' }}
                placeholder="키워드를 선택해주세요"
                onChange={handleTagChange}
                onSearch={handleTagSearch}
                options={(tags || []).map((tag) => ({
                    value: tag.id,
                    label: tag.tag,
                }))}
            />

            <SurveyModal isModal={isSurveyModal} handleOk={onSurveyAdd} handleCancel={onSurveyClose} />
        </div>
    );
};

export default EditorBox;
