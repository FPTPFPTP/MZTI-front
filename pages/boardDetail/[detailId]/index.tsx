import { useCallback, useEffect, useState } from 'react';
import { GetServerSideProps } from 'next';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import dayjs from 'dayjs';
import classNames from 'classnames';
import { DefaultModeResult, DefaultModeViewer, SurveyType, ESurveyTypes } from '@khunjeong/basic-survey-template';
import { useMutation } from '@tanstack/react-query';
import { useRecoilState, useRecoilValue } from 'recoil';
import { commentModify, commentText, commentModifyId, myPageInfo } from '@/recoil/atom/user';
import { postEditState } from '@/recoil/atom/post';
import { Header, MoreDrawer } from '@components/Commons';
import BookMarkIcon from '@assets/icons/header/HeaderBookMark.svg';
import FillBookMarkIcon from '@assets/icons/header/HeaderBookMarkFill.svg';
import { BookMarkIconStyle, PostStyle, PostContentStyle } from '@styles/pages/boardDetailStyled';
import ItemHeader from '@/components/Home/FeedItem/ItemHeader';
import ItemFooter from '@/components/Home/FeedItem/ItemFooter';
import FeedComents from '@/components/Home/FeedComents';
import Axios from '@utils/axios';
import { getPost, postBookmark, getComments, commentPut, deletePost, deleteComment } from '@apis/post';
import CommentInput from '@/components/Commons/CommentInput';
import { openToast } from '@utils/toast';
import { postImageUpload } from '@utils/upload';
import { categoryIdToURL } from '@/utils/category';
import { IResponseBase, IPaginationResponse } from '@/types/global';
import { ICommentModel, IEditComment, IPostModel, EActionEditType } from '@/types/post';

const ToastViewer = dynamic(() => import('@/components/Commons/ToastViewer'), {
    ssr: false,
});

interface IPostDetailProps {
    data?: IPostModel;
    commentData: IPaginationResponse<ICommentModel>;
}

const postDetail = ({ data, commentData }: IPostDetailProps) => {
    const myInfo = useRecoilValue(myPageInfo);
    const [editTarget, setEditTarget] = useRecoilState(postEditState);

    const usePostLike = useMutation((id: any) => postBookmark(id));
    // 상세 게시글
    const [postData, setPostData] = useState<IPostModel | undefined>(data);
    // 북마크 체크
    const [isBookMark, setIsBookMark] = useState<boolean>(false);
    // 투표 데이터
    const [surveyData, setSurveyData] = useState<SurveyType.IDefaultModeSurveyResult[]>([]);
    // 댓글 리스트
    const [comments, setComments] = useState<ICommentModel[]>(commentData.list);
    // 댓글 수정, 삭제
    const [editComment, setEditComment] = useState<ICommentModel>();
    // 댓글 pageParam
    const [pageParam, setPagePagram] = useState<number>(0);
    // 댓글 수정 Drawer
    const [isDrawerVisible, setIsDrawerVisible] = useState<boolean>(false);
    //  댓글 호출
    const [getCommentModifyState, setCommentModifyState] = useRecoilState(commentModify);
    const getCommentModifyId = useRecoilValue(commentModifyId);
    // 댓글 수정
    const { mutate } = useMutation(({ id, comment, image }: IEditComment) => commentPut({ id: id, comment: comment, image: image }));

    const router = useRouter();

    // 북마크하기
    const handleBookMark = () => {
        setIsBookMark((isBookMark) => !isBookMark);
        usePostLike.mutate(postData?.id);
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
                    console.log({ result });
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
            onSuccessComment();
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
            const targetComment = comments.find((comment) => comment.id === id);
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

    useEffect(() => {
        console.log({ comments });
    }, [comments]);

    return (
        <main className="homeLayout">
            {postData && (
                <>
                    {/* 헤더 */}
                    <Header
                        isPrevBtn={true}
                        title={postData.categoryName}
                        rightElement={
                            <div className="right" css={BookMarkIconStyle}>
                                <button onClick={handleBookMark} className={classNames(isBookMark ? 'fill' : 'notFill')}>
                                    {postData?.bookmark.check === true ? <FillBookMarkIcon /> : <BookMarkIcon />}
                                </button>
                            </div>
                        }
                    />
                    <div css={PostContentStyle}>
                        {postData && (
                            <div css={PostStyle}>
                                <div className="postHeaderWrap">
                                    <h3 className="postTitle">{postData.title}</h3>
                                    <ItemHeader
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
                            postWriterId={postData.writer.id}
                            handleRefrash={handleRefrash}
                            handleMoreComment={handleMoreComment}
                            openDrawer={openDrawer}
                        />
                    </div>

                    <CommentInput editComment={editComment} onAddComment={AddComment} onEditComment={PutComment} />

                    <MoreDrawer isVisible={isDrawerVisible} onClose={closeDrawer} handleTargetEdit={onTargetEdit} handleTargetDelete={onTargetDelete} />
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
