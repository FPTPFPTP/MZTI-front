import { GetServerSideProps } from 'next';
import dynamic from 'next/dynamic';
import { useCallback, useEffect, useState } from 'react';
import { Header } from '@components/Commons';
import BookMarkIcon from '@assets/icons/header/HeaderBookMark.svg';
import FillBookMarkIcon from '@assets/icons/header/HeaderBookMarkFill.svg';
import { BookMarkIconStyle, PostStyle } from '@styles/pages/homeStyled';
import ItemHeader from '@/components/Home/FeedItem/ItemHeader';
import ItemFooter from '@/components/Home/FeedItem/ItemFooter';
import FeedComents from '@/components/Home/FeedComents';
import Axios from '@utils/axios';
import { getPost, postBookmark, getComments, commentPut } from '@apis/post';
import { IResponseBase, IPaginationResponse } from '@/types/global';
import { ICommentModel, IEditComment, IPostModel } from '@/types/post';
import { useMutation } from '@tanstack/react-query';
import { DefaultModeResult, DefaultModeViewer, SurveyType, ESurveyTypes } from '@khunjeong/basic-survey-template';
import CommentInput from '@/components/Commons/CommentInput';
import classNames from 'classnames';
import { useRecoilState, useRecoilValue } from 'recoil';
import { commentModify, commentText, replayCommentState, commentModifyId } from '@/recoil/atom/user';
import ReplayComment from '@/components/Home/FeedComents/ReplayComment';
import CommentModifyInput from '@/components/Commons/CommentModifyInput';
import { openToast } from '@utils/toast';
import { postImageUpload } from '@utils/upload';

const ToastViewer = dynamic(() => import('@/components/Commons/ToastViewer'), {
    ssr: false,
});

interface IPostDetailProps {
    data?: IPostModel;
    commentData: IPaginationResponse<ICommentModel>;
}

const postDetail = ({ data, commentData }: IPostDetailProps) => {
    const usePostLike = useMutation((id: any) => postBookmark(id));
    const [postData, setPostData] = useState<IPostModel | undefined>(data);
    const [isBookMark, setIsBookMark] = useState<boolean>(false);
    const [surveyData, setSurveyData] = useState<SurveyType.IDefaultModeSurveyResult[]>([]);
    const [comment, setComment] = useState<ICommentModel[]>(commentData.list);
    const [commentCount, setCommentCount] = useState<number>(commentData.totalCount);
    const replayState = useRecoilValue(replayCommentState);
    const [commentValue, setCommentValue] = useRecoilState(commentText);
    const [pageParam, setPagePagram] = useState<number>(0);
    //  댓글 호출
    const reRenderComment = getComments({ postId: Number(postData?.id), page: pageParam, view: 15 });
    const [getCommentModifyState, setCommentModifyState] = useRecoilState(commentModify);
    const getCommentModifyId = useRecoilValue(commentModifyId);
    // 댓글 수정
    const { mutate } = useMutation(({ id, comment, image }: IEditComment) => commentPut({ id: id, comment: comment, image: image }));

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

    const handleContact = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCommentValue(e.target.value);
    };

    const onSuccessComment = async () => {
        const commentRes = await Axios.get<IResponseBase<any>>('/post/comment', {
            params: { postId: data?.id },
        });
        setComment(commentRes.data.data.list);
        setCommentCount(commentCount + 1);
    };

    // 댓글 추가
    const AddComment = async (imageFile?: File) => {
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
            setCommentValue('');
        }
    };

    // 댓글 수정!!!
    const PutComment = useCallback(
        async (imageFile?: File) => {
            let imageSrc;
            if (imageFile) {
                imageSrc = await postImageUpload(imageFile);
            }
            mutate(
                { id: getCommentModifyId, comment: commentValue, image: imageSrc },
                {
                    onSuccess: () => {
                        onSuccessComment();
                        setCommentValue('');
                        setCommentModifyState(false);
                    },
                },
            );
        },
        [getCommentModifyId, commentValue],
    );

    // 새로고침
    const handleRefrash = () => {
        if (postData) {
            onSuccessComment();
        }
    };

    const handleMoreComment = () => {
        setPagePagram(pageParam + 1);
    };

    useEffect(() => {
        if (pageParam >= 1) {
            if (postData) {
                reRenderComment.then((result: any) => {
                    const resultList = result.list;
                    const sortList = [...comment, ...resultList];
                    const sorted_list = sortList.sort(function (a, b) {
                        return new Date(a.createAt).getTime() - new Date(b.createAt).getTime();
                    });

                    setComment(sorted_list);
                });
            }
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

    return (
        <main className="homeLayout">
            {/* 헤더 */}
            <Header
                isPrevBtn={true}
                title={postData?.categoryName}
                rightElement={
                    <div className="right" css={BookMarkIconStyle}>
                        <button onClick={handleBookMark} className={classNames(isBookMark ? 'fill' : 'notFill')}>
                            {postData?.bookmark.check === true ? <FillBookMarkIcon /> : <BookMarkIcon />}
                        </button>
                    </div>
                }
            />
            {postData && (
                <div css={PostStyle}>
                    <div className="postHeaderWrap">
                        <h3 className="postTitle">{postData.title}</h3>
                        <ItemHeader writer={postData.writer} createAt={postData.updateAt} writerID={postData.id} categoryId={postData.categoryId} />
                    </div>
                    <ToastViewer contentHtml={postData.content} />
                    {surveyData.map((survey) => (
                        <>
                            {survey.self ? (
                                <DefaultModeResult key={survey.id} survey={survey} onSubmit={onPoll} />
                            ) : (
                                <DefaultModeViewer key={survey.id} survey={survey} onSubmit={onPoll} />
                            )}
                        </>
                    ))}
                </div>
            )}

            {data && (
                <ItemFooter
                    postId={data.id}
                    className="postFooter"
                    like={data.like.count === 0 ? '좋아요' : data.like?.count}
                    command={data.command.count}
                    isFeed={false}
                    viewCount={data.viewCount}
                    likeCheck={data.like.check}
                />
            )}

            {/* 대댓글 */}
            {replayState && <ReplayComment />}

            {postData && (
                <FeedComents
                    isLastPage={commentData.totalPage === pageParam}
                    commentData={comment}
                    writerId={postData.writer.nickname}
                    userId={postData.id}
                    handleRefrash={handleRefrash}
                    handleMoreComment={handleMoreComment}
                />
            )}

            {getCommentModifyState ? (
                // 댓글 수정용
                <CommentModifyInput
                    onSuccess={onSuccessComment}
                    handleContact={(e: React.ChangeEvent<HTMLInputElement>) => handleContact(e)}
                    PutComment={PutComment}
                    comment={commentValue}
                />
            ) : (
                // 일반 댓글용
                <CommentInput
                    onSuccess={onSuccessComment}
                    handleContact={(e: React.ChangeEvent<HTMLInputElement>) => handleContact(e)}
                    AddComment={AddComment}
                    comment={commentValue}
                />
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
            params: { postId: params.detailId },
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
