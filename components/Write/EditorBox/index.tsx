import React, { useEffect, useRef, useMemo, useState } from 'react';
import { useRouter } from 'next/router';
import { Divider, Select } from 'antd';
import { useForm } from 'react-hook-form';
import { Editor } from '@toast-ui/react-editor';
import { Header, Input, Tag } from '@components/Commons';
import CheckSvg from '@assets/icons/circle_check.svg';
import PlusSvg from '@assets/icons/plus.svg';
import VoteSvg from '@assets/icons/vote.svg';
import YoutubeImg from '@assets/icons/write/youtube.png';
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
        router.push('/home');
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
                        router.push(`/boardDetail/${data.id}`);
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
                        router.push(`/boardDetail/${data.data.id}`);
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
            // editorRef.current?.getInstance().addCommand('markdown', 'addYoutube', (payload, state, dispatch, view) => {
            //     let url = prompt('추가할 youtube 영상의 주소창 url을 담아주세요!');
            //     if (!url) return false;
            //     url = url?.split('=').at(-1) ?? '';
            //     const str = `
            //       <div class="video-container">
            //         <iframe src="https://www.youtube.com/embed/${url}" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            //       </div>
            //     `;
            //     editorRef.current?.getInstance().insertText(str);
            //     return true;
            // });

            // 팝업 바디 생성
            const container = document.createElement('div');
            const description = document.createElement('p');
            description.textContent = 'Youtube 주소를 입력하고 Enter를 누르세요!';

            const urlInput = document.createElement('input');
            urlInput.style.width = '100%';
            urlInput.style.height = '30px';
            urlInput.style.border = '1px solid #000000';
            urlInput.style.marginTop = '8px';

            // 팝업 input 창에 내용 입력 시 호출됨
            urlInput.addEventListener('keyup', (e: any) => {
                // 엔터를 누르면, 입력값이 Youtube 주소인지 정규식으로 검사
                if (e.key === 'Enter') {
                    if (/https:\/\/youtu.be\/.{11,}/.test(e.target.value) || /https:\/\/www.youtube.com\/watch\?v=.{11,}/.test(e.target.value)) {
                        const str =
                            '<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/' +
                            e.target.value.slice(-11) +
                            '" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>';

                        // 마크다운 모드에서 iframe 태그 삽입 후, 팝업을 닫고 위지윅 모드로 변환
                        editorRef.current?.getInstance().changeMode('markdown');
                        editorRef.current?.getInstance().insertText(str);
                        editorRef.current?.getInstance().eventEmitter.emit('closePopup');
                        editorRef.current?.getInstance().changeMode('wysiwyg');
                    }
                }
            });

            container.appendChild(description);
            container.appendChild(urlInput);

            editorRef.current?.getInstance().insertToolbarItem(
                { groupIndex: 3, itemIndex: 3 },
                {
                    name: 'youtube',
                    tooltip: 'youtube',
                    className: 'toastui-editor-toolbar-icons',
                    style: { backgroundImage: `url(/images/youtube.png)`, backgroundSize: '25px', color: 'red' },
                    popup: {
                        body: container,
                        style: { width: 'auto' },
                    },
                },
            );

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
