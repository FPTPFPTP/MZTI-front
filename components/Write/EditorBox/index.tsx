import React, { ChangeEvent, useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import { Header, Input, CustomImage, YouTubePlayer } from '@components/Commons';
import CheckSvg from '@assets/icons/write/circle_check.svg';
import CheckFillSvg from '@assets/icons/write/circle_fill_check.svg';
import ArrowDownSvg from '@assets/icons/write/arrow_down.svg';
import { ContentWrapStyle, CategoryWrapStyle, TitleWrapStyle, BodyWrapStyle, BottomWrapStyle } from '../styled';
import { DefaultModeViewer, SurveyType } from '@khunjeong/basic-survey-template';
import { postWrite, putPost, postTag, getTags } from '@apis/post';
import { categoryIdToTitle } from '@/utils/category';
import { openToast } from '@utils/toast';
import { setConvertToHTML, setConvertToPost } from '@utils/postItem';
import { postImageUpload } from '@utils/upload';
import AddFeatureBox from '../AddFeatureBox';
import CategoryDrawer from '../CategoryDrawer';
import KeywordBox from '..//KeywordBox';
import SurveyModal from '../SurveyModal';
import YouTubeModal from '../YouTubeModal';
import { ITagModel, IPostModel } from '@/types/post';
import { ICategoryModel } from '@/types/category';

interface IEditorBox {
    postItem?: IPostModel;
}

const EditorBox = (props: IEditorBox) => {
    const { postItem } = props;
    const router = useRouter();
    const [isCategoryModal, setIsCategoryModal] = useState<boolean>(false);
    const [isSurveyModal, setIsSurveyModal] = useState<boolean>(false);
    const [isYouTubeModal, setIsYouTubeModal] = useState<boolean>(false);
    const [previewFileSrc, setPreviewFileSrc] = useState<string[]>([]);
    const [selectCategory, setSelectCategory] = useState<ICategoryModel>();
    const [contentValue, setContentValue] = useState<string>('');
    const [surveyData, setSurveyData] = useState<SurveyType.IDefaultModeSurveyResult[]>([]);
    const [keywords, setKeywords] = useState<ITagModel[]>([]);
    const [youtubeUrls, setYoutubeUrls] = useState<string[]>([]);

    const textareaRef = useRef<HTMLTextAreaElement | null>(null);

    const { register, watch, reset, setValue } = useForm();
    const { title } = watch();

    const onBackPage = () => {
        router.push('/home');
    };

    const handleCategoryChange = (catery: ICategoryModel) => {
        setSelectCategory(catery);
        setIsCategoryModal(false);
    };

    // 등록 버튼 핸들러
    const handleRegisterButton = async () => {
        if (postItem) {
            try {
                if (!title.length) {
                    openToast({ message: '게시글 타이틀을 작성해주세요' });
                    return;
                }
                const data = await putPost({
                    id: postItem.id,
                    title,
                    categoryId: selectCategory?.id || 1,
                    content: setConvertToHTML(contentValue, previewFileSrc, youtubeUrls),
                    tagList: keywords.map((keyword) => keyword.id),
                });

                if (data) {
                    openToast({ message: '작성한 글 수정에 성공했어요' });
                    router.push(`/boardDetail/${data.id}`);
                }
            } catch (error) {
                console.log(error);
                return;
            }
        } else {
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
                    categoryId: selectCategory?.id || 1,
                    content: setConvertToHTML(contentValue, previewFileSrc, youtubeUrls),
                    tagList: keywords.map((keyword) => keyword.id),
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
    };

    const onUpdateImg = async ({ target: { files } }: ChangeEvent<HTMLInputElement>) => {
        if (files && files.length) {
            const imageUrls: string[] = [];
            for (let i = 0; i < files.length; i++) {
                const file = files[i];

                const imageRes = await postImageUpload(file);
                if (imageRes) {
                    // 이미지 파일 저장
                    imageUrls.push(imageRes);
                }
            }
            setPreviewFileSrc([...previewFileSrc, ...imageUrls]);
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

    const onYoutubeModalOpen = () => {
        setIsYouTubeModal(true);
    };

    const onYoutubeModalClose = () => {
        setIsYouTubeModal(false);
    };

    const onYoutubeURLAdd = (youtubeURL: string) => {
        setYoutubeUrls([...youtubeUrls, youtubeURL]);
    };

    // 키워드 생성
    const onKeywordSubmit = async (value: string) => {
        const tags = await getTags({ tag: value });
        if (tags.length) {
            setKeywords([...keywords, tags[0]]);
        } else {
            const tagRes = await postTag(value);
            if (tagRes) {
                setKeywords([...keywords, tagRes]);
            }
        }
    };

    // 키워드 삭제
    const onKeywordDelete = (id: number) => {
        setKeywords(keywords.filter((keyword) => keyword.id !== id));
    };

    const resizeTextArea = () => {
        if (textareaRef.current) {
            textareaRef.current.style.height = 'auto';
            textareaRef.current.style.height = textareaRef.current.scrollHeight + 'px';
        }
    };

    useEffect(resizeTextArea, [contentValue]);

    useEffect(() => {
        // 전달받은 html값으로 초기화
        if (postItem) {
            const postContent = setConvertToPost(postItem.content);
            if (postContent.content.length) {
                setContentValue(postContent.content);
                setPreviewFileSrc(postContent.imgSrcs);
            } else {
                setContentValue(postItem.content);
            }

            setValue('title', postItem.title);
            setSelectCategory({
                id: postItem.categoryId,
                title: categoryIdToTitle(postItem.categoryId),
            });
            setKeywords(postItem.tags);
        }
    }, [postItem]);

    return (
        <>
            <Header
                onClickBackButton={onBackPage}
                title={postItem ? '일반 글쓰기 수정' : '일반 글쓰기'}
                rightElement={
                    title && title.length && (contentValue.length || previewFileSrc.length || youtubeUrls.length || surveyData.length) ? (
                        <button onClick={handleRegisterButton}>
                            <CheckFillSvg />
                        </button>
                    ) : (
                        <button>
                            <CheckSvg />
                        </button>
                    )
                }
                isBgWhite
                isBorderLine
            />
            <div css={ContentWrapStyle}>
                <div css={CategoryWrapStyle}>
                    <button onClick={() => setIsCategoryModal(true)}>
                        {selectCategory ? selectCategory.title : '게시판 카테고리 선택'}
                        <ArrowDownSvg />
                    </button>
                </div>
                <form css={TitleWrapStyle}>
                    <Input
                        inputStyle={'base'}
                        placeholder={'게시글 제목 입력 (최대 30자)'}
                        isResetBtn={!!title}
                        handleReset={() => reset()}
                        maxLength={30}
                        {...register('title')}
                    />
                    <button type="submit" />
                </form>
                <div css={BodyWrapStyle}>
                    <textarea
                        ref={textareaRef}
                        placeholder={'게시글 본문 입력(링크, 이미지, gif, 투표 첨부가 가능해요)'}
                        value={contentValue}
                        onChange={(e) => setContentValue(e.target.value)}
                    />
                </div>
                {previewFileSrc.map((src) => (
                    <CustomImage key={src} src={src} alt={'게시글 이미지'} />
                ))}
                {youtubeUrls.map((url, index) => (
                    <YouTubePlayer key={index} url={url} />
                ))}
                {surveyData.map((survey) => (
                    <DefaultModeViewer key={survey.id} survey={survey} onSubmit={(result) => console.log({ result })} onRemove={onSurveyRemove} />
                ))}
            </div>
            <div css={BottomWrapStyle}>
                <KeywordBox keywords={keywords} onKeywordDelete={onKeywordDelete} onKeywordSubmit={onKeywordSubmit} />
                <AddFeatureBox isEdit={!postItem} handleUpdateImg={onUpdateImg} onSurveyModalOpen={onSurveyModalOpen} onYoutubeModalOpen={onYoutubeModalOpen} />
            </div>
            {!postItem && <SurveyModal isModal={isSurveyModal} handleOk={onSurveyAdd} handleCancel={onSurveyClose} />}
            <YouTubeModal isModal={isYouTubeModal} handleOk={onYoutubeURLAdd} handleCancel={onYoutubeModalClose} />
            <CategoryDrawer
                isVisible={isCategoryModal}
                onClose={() => {
                    setIsCategoryModal(false);
                }}
                onCategory={handleCategoryChange}
            />
        </>
    );
};

export default EditorBox;
