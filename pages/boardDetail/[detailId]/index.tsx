import { useCallback, useEffect, useState, useRef } from 'react';
import { GetServerSideProps } from 'next';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import dayjs from 'dayjs';
import { ModalStyle } from '@/components/Commons/Modal/styled';
import classNames from 'classnames';
import { Modal, Tag } from '@components/Commons';
import { DefaultModeResult, DefaultModeViewer, SurveyType, ESurveyTypes } from '@khunjeong/basic-survey-template';
import { useMutation } from '@tanstack/react-query';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { myPageInfo } from '@/recoil/atom/user';
import { postEditState } from '@/recoil/atom/post';
import { Header, MoreDrawer } from '@components/Commons';
import BookMarkIcon from '@assets/icons/header/HeaderBookMark.svg';
import FillBookMarkIcon from '@assets/icons/header/HeaderBookMarkFill.svg';
import { BookMarkIconStyle, PostStyle, PostContentStyle } from '@styles/pages/boardDetailStyled';
import ItemHeader from '@/components/Home/FeedItem/ItemHeader';
import ItemFooter from '@/components/Home/FeedItem/ItemFooter';
import FeedComents from '@/components/Home/FeedComents';
import Axios from '@utils/axios';
import { getPost, postBookmark, getComments, commentPut, deletePost, deleteComment, getCommentDetail } from '@apis/post';
import CommentInput from '@/components/Commons/CommentInput';
import { openToast } from '@utils/toast';
import { postImageUpload } from '@utils/upload';
import { categoryIdToURL } from '@/utils/category';
import { IResponseBase, IPaginationResponse } from '@/types/global';
import { ICommentModel, IPostModel, EActionEditType } from '@/types/post';
import { timeForToday } from '@/utils/time';

const ToastViewer = dynamic(() => import('@/components/Commons/ToastViewer'), {
    ssr: false,
});

interface IPostDetailProps {
    data?: IPostModel;
    commentData: IPaginationResponse<ICommentModel>;
    // detailId?: number;
}

const postDetail = ({ data, commentData }: IPostDetailProps) => {
    const myInfo = useRecoilValue(myPageInfo);
    const setEditTarget = useSetRecoilState(postEditState);

    // 스크롤
    const scrollRef = useRef<HTMLDivElement | null>(null);
    const [isScrolldown, setIsScrolldown] = useState<boolean>(false);

    const usePostLike = useMutation((id: any) => postBookmark(id));
    // 상세 게시글
    const [postData, setPostData] = useState<IPostModel | undefined>(data);
    // 투표 데이터
    const [surveyData, setSurveyData] = useState<SurveyType.IDefaultModeSurveyResult[]>([]);
    // 댓글 리스트
    const [comments, setComments] = useState<ICommentModel[]>(commentData.list);
    // 댓글 수정, 삭제
    const [editComment, setEditComment] = useState<ICommentModel>();
    // 댓글 pageParam
    const [pageParam, setPagePagram] = useState<number>(0);
    // 게시글 & 댓글 수정, 삭제, 신고 Drawer
    const [isDrawerVisible, setIsDrawerVisible] = useState<boolean>(false);
    const [isLogoutModal, setIsLogoutModal] = useState<boolean>(false);

    const router = useRouter();

    // 북마크하기
    const handleBookMark = async () => {
        if (myInfo && postData) {
            await usePostLike.mutate(postData?.id);
            await getPost({ postId: postData.id }).then((result) => {
                setPostData(result);
            });
        } else {
            setIsLogoutModal(true);
        }
    };

    // 투표
    const onPoll = (result: SurveyType.IDefaultModeSurveyResult) => {
        Axios.post('/post/poll', {
            pollId: Number(result.id),
            pollList: result.answer.map((id) => Number(id)),
        }).then((res) => {
            openToast({ message: '투표 참여에 성공했어요' });

            if (postData) {
                getPost({ postId: postData.id }).then((result) => {
                    setPostData(result);
                });
            }
        });
    };

    const onSuccessComment = async () => {
        if (postData) {
            const view = (pageParam + 1) * 15;
            const commentRes = await getComments({ postId: postData.id, page: 0, view });
            setComments(commentRes.list);
        }
    };

    // 댓글 추가
    const AddComment = async (commentValue: string, imageFile?: File) => {
        if (!myInfo) {
            setIsLogoutModal(true);
            return;
        }
        let imageSrc;
        if (imageFile) {
            imageSrc = await postImageUpload(imageFile);
        }
        const comment = await Axios.post('/post/comment', {
            postId: data?.id,
            comment: commentValue,
            image: imageSrc,
        });
        if (comment) {
            await onSuccessComment();
            await setIsScrolldown(true);
        }
    };

    // 댓글 수정!!!
    const PutComment = async (id: number, commentValue: string, imageFile?: File, imageUrl?: string) => {
        let imageSrc;
        if (imageFile) {
            imageSrc = await postImageUpload(imageFile);
        } else {
            imageSrc = imageUrl;
        }
        const res = await commentPut({ id, comment: commentValue, image: imageSrc });
        if (res.code === 'SUCCESS') {
            onSuccessComment();
            setEditComment(undefined);
        }
    };

    const onTargetEdit = async (id: number, type: EActionEditType) => {
        if (type === EActionEditType.COMMENT) {
            const targetComment = await getCommentDetail(id);

            if (targetComment) {
                setEditComment(targetComment);
                closeDrawer();
            }
        }
    };

    const onTargetDelete = async (id: number, type: EActionEditType) => {
        if (type === EActionEditType.WRITE) {
            const res = await deletePost(id);
            if (res.code === 'SUCCESS') {
                openToast({ message: '삭제 완료되었습니다.' });
                postData && router.push(`/board/${categoryIdToURL(postData.categoryId)}`);
            } else {
                openToast({ message: '삭제 실패했습니다. 다시 시도해주세요.' });
            }
        } else if (type === EActionEditType.COMMENT) {
            const res = await deleteComment(id);
            if (res.code === 'SUCCESS') {
                openToast({ message: '삭제 완료되었습니다.' });
                onSuccessComment();
                closeDrawer();
            } else {
                openToast({ message: '삭제 실패했습니다. 다시 시도해주세요.' });
            }
        }
    };

    // 새로고침
    const handleRefrash = () => {
        if (postData) {
            onSuccessComment();
        }
    };

    const handleMoreComment = () => {
        setPagePagram(pageParam + 1);
    };

    const openDrawer = (id: number, type: EActionEditType) => {
        setEditTarget({
            id,
            editActionType: type,
        });
        setIsDrawerVisible(true);
    };

    const closeDrawer = () => setIsDrawerVisible(false);

    // 스크롤 내리기
    const scrollToBottom = useCallback(() => {
        if (scrollRef.current) {
            window.scrollTo({ top: scrollRef.current.scrollHeight });

            setIsScrolldown(false);
        }
    }, [isScrolldown]);

    useEffect(() => {
        // AddComment로 댓글 추가하면 데이터 갱신, 스크롤 이동 순차적으로 적용하기위해 구성
        if (isScrolldown) {
            scrollToBottom();
        }
    }, [isScrolldown]);

    useEffect(() => {
        if (postData && pageParam >= 1) {
            getComments({ postId: Number(postData.id), page: pageParam, view: 15 }).then((result: any) => {
                const resultList = result.list;
                const sortList = [...comments, ...resultList];
                const sorted_list = sortList.sort(function (a, b) {
                    return new Date(a.createAt).getTime() - new Date(b.createAt).getTime();
                });

                setComments(sorted_list);
            });
        }
    }, [pageParam]);

    useEffect(() => {
        if (postData && postData.pollList.length) {
            const survey: SurveyType.IDefaultModeSurveyResult[] = postData.pollList.map((poll) => ({
                id: poll.id.toString(),
                title: poll.title,
                type: ESurveyTypes.MULTI_SELECT,
                required: true,
                answer: [],
                startDate: poll.startDate,
                endDate: poll.endDate,
                maxChoice: poll.checkCount,
                questions: poll.items.map((item, index) => ({
                    id: item.id.toString(),
                    item: item.item,
                    index,
                    image: item.image,
                    count: item.count,
                    self: item.self,
                })),
                count: poll.count,
                self: poll.self,
            }));
            setSurveyData(survey);
        }
    }, [postData]);

    const onBackPage = () => {
        router.push(`/home`);
    };

    const handleLogin = () => {
        router.replace('/login');
    };

    return (
        <main className="homeLayout" ref={scrollRef}>
            {postData && (
                <>
                    {/* 헤더 */}
                    <Header
                        onClickBackButton={onBackPage}
                        title={postData.categoryName}
                        rightElement={
                            <div className="right" css={BookMarkIconStyle}>
                                <button onClick={handleBookMark} className={classNames(postData?.bookmark.check ? 'fill' : 'notFill')}>
                                    {postData?.bookmark.check ? <FillBookMarkIcon /> : <BookMarkIcon />}
                                </button>
                            </div>
                        }
                        isBgWhite={true}
                        isBorderLine={true}
                    />
                    <div css={PostContentStyle}>
                        {postData && (
                            <div css={PostStyle}>
                                <div className="postHeaderWrap">
                                    <h3 className="postTitle">{postData.title}</h3>
                                    <p className="time">{timeForToday(postData.createAt)}</p>
                                    <ItemHeader
                                        detailPage={true}
                                        writer={postData.writer}
                                        createAt={postData.updateAt}
                                        openDrawer={() => {
                                            openDrawer(
                                                postData.id,
                                                myInfo?.id === postData.writer.userId ? EActionEditType.WRITE : EActionEditType.WRITET_TIPOFF,
                                            );
                                        }}
                                    />
                                </div>
                                <ToastViewer contentHtml={postData.content} />
                                {surveyData.map((survey) => (
                                    <div key={survey.id}>
                                        {dayjs() > dayjs(survey.endDate) ? (
                                            <DefaultModeResult survey={survey} onSubmit={onPoll} />
                                        ) : survey.self ? (
                                            <DefaultModeResult survey={survey} onSubmit={onPoll} />
                                        ) : (
                                            <DefaultModeViewer survey={survey} onSubmit={onPoll} />
                                        )}
                                    </div>
                                ))}
                                <div className="postTags">
                                    {postData.tags.map((tag) => (
                                        <Tag
                                            key={tag.id}
                                            title={tag.tag}
                                            onClick={() => {
                                                console.log({ tag });
                                            }}
                                        />
                                    ))}
                                </div>
                            </div>
                        )}

                        <ItemFooter
                            postId={postData.id}
                            className="postFooter"
                            like={postData.like.count === 0 ? '좋아요' : postData.like?.count}
                            command={postData.command.count}
                            isFeed={false}
                            viewCount={postData.viewCount}
                            likeCheck={postData.like.check}
                        />

                        <FeedComents
                            isLastPage={commentData.totalPage === pageParam}
                            commentData={comments}
                            postWriterId={postData?.writer.nickname}
                            handleRefrash={handleRefrash}
                            handleMoreComment={handleMoreComment}
                            openDrawer={openDrawer}
                        />
                    </div>

                    <CommentInput editComment={editComment} onAddComment={AddComment} onEditComment={PutComment} onCancle={() => setEditComment(undefined)} />

                    <MoreDrawer isVisible={isDrawerVisible} onClose={closeDrawer} handleTargetEdit={onTargetEdit} handleTargetDelete={onTargetDelete} />

                    <Modal title={'로그인이 필요한 기능입니다'} isModalVisible={isLogoutModal} closable={false} footer={null} centered={true}>
                        <div css={ModalStyle}>
                            <p>회원가입이나 로그인을 해주세요.</p>
                            <div className="buttons">
                                <button onClick={() => setIsLogoutModal(false)} className="button cancel">
                                    취소
                                </button>
                                <button onClick={handleLogin} className="button">
                                    확인
                                </button>
                            </div>
                        </div>
                    </Modal>
                </>
            )}
        </main>
    );
};

export default postDetail;

export const getServerSideProps: GetServerSideProps = async ({ req, params }: any) => {
    let data;
    let commentData;

    try {
        const token = req.cookies['accessToken'];
        Axios.defaults.baseURL = process.env.NEXT_PUBLIC_API_BASE_URL;
        Axios.defaults.headers.common['Authorization'] = token ? `Bearer ${token}` : '';
        const res = await Axios.get<IResponseBase<IPostModel>>(`/post/${params.detailId}`);
        const commentRes = await Axios.get<IResponseBase<IPaginationResponse<ICommentModel>>>('/post/comment', {
            params: { postId: params.detailId, page: 0, view: 15 },
        });
        data = res.data.data;
        commentData = commentRes.data.data;
    } catch (err) {
        console.log('error', err);
    }
    return {
        props: {
            data,
            commentData,
        },
    };
};
