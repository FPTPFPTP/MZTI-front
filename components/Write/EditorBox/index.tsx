import React, { useEffect, useRef, useMemo, useState } from 'react';
import { useRouter } from 'next/router';
import { Divider, Select } from 'antd';
import { useForm } from 'react-hook-form';
import { Editor } from '@toast-ui/react-editor';
import { Header, Input, Tag } from '@components/Commons';
import CheckSvg from '@assets/icons/circle_check.svg';
import PlusSvg from '@assets/icons/plus.svg';
import VoteSvg from '@assets/icons/vote.svg';
import ToastEditor from '@/components/Commons/ToastEditor';
import { ContentWrapStyle, FlexCenterStyle, KeywordWrapStyle, BottomWrapStyle, BottomBtnWrapStyle } from '../styled';
import { DefaultModeViewer, SurveyType } from '@khunjeong/basic-survey-template';
import { postWrite, putPost } from '@apis/post';
import Axios from '@utils/axios';
import { openToast } from '@utils/toast';
import MenuJson from '@/constants/menu.json';
import SurveyModal from '../SurveyModal';
import KeywordDrawer from '../KeywordDrawer';
import { ITagModel, IPostModel } from '@/types/post';
import { IBoardModel, IBoardMenu } from '@/types/board';

interface IEditorBox {
    postItem?: IPostModel;
}

const EditorBox = (props: IEditorBox) => {
    const { postItem } = props;
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
    const categorys = useMemo(
        () =>
            MenuJson.reduce((prev: IBoardModel[], cur: IBoardMenu) => {
                const menus = cur.menus.filter((menu) => menu.id !== 22);
                return prev.concat(menus);
            }, []),
        [],
    );

    const onBackPage = () => {
        router.back();
    };

    const handleCategoryChange = (value: string) => {
        setSelectCategory(Number(value));
    };

    // 등록 버튼 핸들러
    const handleRegisterButton = async () => {
        if (postItem) {
            if (editorRef.current) {
                try {
                    if (!title.length) {
                        openToast({ message: '게시글 타이틀을 작성해주세요' });
                        return;
                    }
                    const data = await putPost({
                        id: postItem.id,
                        title,
                        categoryId: selectCategory,
                        content: editorRef.current?.getInstance().getHTML(),
                        tagList: selectKeyword.map((keyword) => keyword.id),
                    });

                    if (data) {
                        openToast({ message: '작성한 글 수정에 성공했어요' });
                        router.push(`/board/${data.categoryId}/${data.id}`);
                    }
                } catch (error) {
                    console.log(error);
                    return;
                }
            }
        } else {
            if (editorRef.current) {
                try {
                    const pollList = [];
                    if (!title.length) {
                        openToast({ message: '게시글 타이틀을 작성해주세요' });
                        return;
                    }
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

                    if (data && data.code === 'SUCCESS') {
                        openToast({ message: '작성한 글 업로드에 성공했어요' });
                        router.push(`/board/${data.data.categoryId}/${data.data.id}`);
                    }
                } catch (error) {
                    console.log(error);
                    return;
                }
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
        // 전달받은 html값으로 초기화
        if (editorRef.current && postItem) {
            editorRef.current.getInstance().setHTML(postItem.content);
            setValue('title', postItem.title);
            setSelectCategory(postItem.categoryId);
            setSelectKeyword(postItem.tags);
        }
    }, [postItem]);

    useEffect(() => {
        if (editorRef.current) {
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
                        callback(data.data.data, 'alt text');
                    }
                })();

                return false;
            });
        }
    }, []);

    return (
        <>
            <Header
                onClickBackButton={onBackPage}
                title={postItem ? '글쓰기 수정' : '글쓰기'}
                rightElement={
                    <button onClick={handleRegisterButton}>
                        <CheckSvg />
                    </button>
                }
            />
            <div css={ContentWrapStyle}>
                <div css={FlexCenterStyle}>
                    {categorys && categorys.length > 0 && (
                        <Select defaultValue={categorys[0].title} style={{ width: 170 }} onChange={handleCategoryChange} bordered={false}>
                            {categorys.map((category) => (
                                <Select.Option key={category.id} value={category.id} label={category.title}>
                                    {category.title}
                                </Select.Option>
                            ))}
                        </Select>
                    )}
                </div>
                <Divider />
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
                    <DefaultModeViewer key={survey.id} survey={survey} onSubmit={(result) => console.log({ result })} onRemove={onSurveyRemove} />
                ))}
            </div>
            <div css={BottomWrapStyle}>
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
                {!postItem && (
                    <ul css={BottomBtnWrapStyle}>
                        <button onClick={onSurveyModalOpen}>
                            <VoteSvg />
                        </button>
                    </ul>
                )}
            </div>
            {!postItem && <SurveyModal isModal={isSurveyModal} handleOk={onSurveyAdd} handleCancel={onSurveyClose} />}
            <KeywordDrawer
                isDrawer={isKeywordDrawer}
                selectKeywords={selectKeyword}
                onAddKeyword={setSelectKeyword}
                onClose={() => {
                    setIsKeywordDrawer(false);
                }}
            />
        </>
    );
};

export default EditorBox;
