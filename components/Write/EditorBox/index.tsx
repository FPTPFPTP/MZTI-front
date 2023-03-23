import React, { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/router';
import { message, Select } from 'antd';
import { useForm } from 'react-hook-form';
import { Editor } from '@toast-ui/react-editor';
import { Button, Header, Input, Tag } from '@components/Commons';
import EditSvg from '@assets/icons/edit.svg';
import PlusSvg from '@assets/icons/plus.svg';
import VoteSvg from '@assets/icons/vote.svg';
import ToastEditor from '@/components/Commons/ToastEditor';
import { Layout, KeywordWrapStyle } from './styled';
import { DefaultModeViewer, SurveyType } from '@khunjeong/basic-survey-template';
import { postWrite } from '@apis/write';
import { useGetBoards } from '@/apis/boards';
import { useGetTags } from '@apis/posts';
import Axios from '@utils/axios';
import SurveyModal from '../SurveyModal';
import KeywordDrawer from '../KeywordDrawer';
import { ITagModel } from '@/types/post';

interface IEditorBox {
    contents: string;
}

const EditorBox = (props: IEditorBox) => {
    const { contents } = props;
    const router = useRouter();
    const [isSurveyModal, setIsSurveyModal] = useState<boolean>(false);
    const [isKeywordDrawer, setIsKeywordDrawer] = useState<boolean>(false);
    const [selectCategory, setSelectCategory] = useState<number>(1);
    const [surveyData, setSurveyData] = useState<SurveyType.IDefaultModeSurveyResult[]>([]);
    const [selectKeyword, setSelectKeyword] = useState<ITagModel[]>([]);
    const editorRef = useRef<Editor>(null);
    const { register, watch, reset, setValue } = useForm();
    const { title } = watch();

    // 게시판 메뉴
    const categorys = useGetBoards();

    const onBackPage = () => {
        router.back();
    };

    const handleCategoryChange = (value: string) => {
        setSelectCategory(Number(value));
    };

    // 등록 버튼 핸들러
    const handleRegisterButton = async () => {
        if (editorRef.current) {
            // 입력창에 입력한 내용을 HTML 태그 형태로 취득
            // console.log(editorRef.current?.getInstance().getHTML());
            // 입력창에 입력한 내용을 MarkDown 형태로 취득
            // console.log(editorRef.current?.getInstance().getMarkdown());
            console.log({ selectKeyword });
            try {
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
                    tagList: selectKeyword.map((keyword) => keyword.id),
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
            <ul css={KeywordWrapStyle}>
                <button onClick={() => setIsKeywordDrawer(true)}>
                    <PlusSvg />
                    {!selectKeyword.length && '키워드 입력(최대 10개)'}
                </button>
                {selectKeyword.length > 0 &&
                    selectKeyword.map((keyword) => (
                        <Tag
                            key={keyword.id}
                            title={keyword.tag}
                            onClick={() => {
                                console.log(`${keyword.tag} 클릭`);
                            }}
                            onDelete={() => setSelectKeyword(selectKeyword.filter((tag) => tag.id !== keyword.id))}
                        />
                    ))}
            </ul>
            <SurveyModal isModal={isSurveyModal} handleOk={onSurveyAdd} handleCancel={onSurveyClose} />
            <KeywordDrawer
                isDrawer={isKeywordDrawer}
                selectKeyword={selectKeyword}
                handleSetSelectKeyword={setSelectKeyword}
                onClose={() => {
                    setIsKeywordDrawer(false);
                }}
            />
        </div>
    );
};

export default EditorBox;
