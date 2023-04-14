import { GetServerSideProps } from 'next';
import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';
import { message } from 'antd';
import { Header } from '@components/Commons';
import BookMarkIcon from '@assets/icons/header/HeaderBookMark.svg';
import FillBookMarkIcon from '@assets/icons/header/HeaderBookMarkFill.svg';
import { BookMarkIconStyle, PostStyle } from '@styles/pages/homeStyled';
import ItemHeader from '@/components/Home/FeedItem/ItemHeader';
import ItemFooter from '@/components/Home/FeedItem/ItemFooter';
import FeedComents from '@/components/Home/FeedComents';
import Axios from '@utils/axios';
import { getPost, postBookmark, getComments } from '@apis/post';
import { IResponseBase, IPaginationResponse } from '@/types/global';
import { ICommentModel, IPostModel } from '@/types/post';
import { useMutation } from '@tanstack/react-query';
import { DefaultModeResult, DefaultModeViewer, SurveyType, ESurveyTypes } from '@khunjeong/basic-survey-template';
import CommentInput from '@/components/Commons/CommentInput';
import classNames from 'classnames';
import { useRecoilValue } from 'recoil';
import { replayCommentState } from '@/recoil/atom/user';
import ReplayComment from '@/components/Home/FeedComents/ReplayComment';

const ToastViewer = dynamic(() => import('@/components/Commons/ToastViewer'), {
    ssr: false,
});
interface IPostProps {
    data?: IPostModel;
    commentData: IPaginationResponse<ICommentModel>;
}
export const getServerSideProps: GetServerSideProps = async ({ req, params }: any) => {
    let data;
    let commentData;
    try {
        const token = req.cookies['accessToken'];
        Axios.defaults.baseURL = process.env.NEXT_PUBLIC_API_BASE_URL;
        Axios.defaults.headers.common['Authorization'] = token ? `Bearer ${token}` : '';
        const res = await Axios.get<IResponseBase<IPostModel>>(`/post/${params.id}`);
        const commentRes = await Axios.get<IResponseBase<IPaginationResponse<ICommentModel>>>('/post/comment', {
            params: { postId: params.id, view: 15 },
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

const post = ({ data, commentData }: IPostProps) => {
    const usePostLike = useMutation((id: any) => postBookmark(id));
    const [postData, setPostData] = useState<IPostModel | undefined>(data);
    const [isBookMark, setIsBookMark] = useState<boolean>(false);
    const [surveyData, setSurveyData] = useState<SurveyType.IDefaultModeSurveyResult[]>([]);
    const [comment, setComment] = useState<ICommentModel[]>(commentData.list);
    const [commentCount, setCommentCount] = useState<number>(commentData.totalCount);
    const replayState = useRecoilValue(replayCommentState);
    const [commentText, setCommentText] = useState<string>('');
    const [pageParam, setPagePagram] = useState<number>(0);

    const handleBookMark = () => {
        setIsBookMark((isBookMark) => !isBookMark);
        usePostLike.mutate(data?.id);
    };
    const onPoll = (result: SurveyType.IDefaultModeSurveyResult) => {
        Axios.post('/post/poll', {
            pollId: Number(result.id),
            pollList: result.answer.map((id) => Number(id)),
        }).then((res) => {
            message.success('투표 참여에 성공했어요');
            if (postData) {
                getPost({ postId: postData.id }).then((result) => {
                    console.log({ result });
                    setPostData(result);
                });
            }
        });
    };

    const handleContact = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCommentText(e.target.value);
    };

    const onSuccessComment = async () => {
        const commentRes = await Axios.get<IResponseBase<any>>('/post/comment', {
            params: { postId: data?.id },
        });
        setComment(commentRes.data.data.list);
        setCommentCount(commentCount + 1);
    };

    const AddComment = () => {
        return Axios.post('/post/comment', {
            postId: data?.id,
            comment: commentText,
        }).then((res) => {
            onSuccessComment();
            setCommentText('');
        });
    };

    const handleRefrash = () => {
        if (postData) {
            getComments({ postId: postData.id }).then((result) => {
                setComment(result.list);
            });
        }
    };

    const handleMoreComment = () => {
        setPagePagram(pageParam + 1);
    };

    useEffect(() => {
        if (pageParam >= 1) {
            if (postData) {
                getComments({ postId: postData.id, page: pageParam, view: 15 }).then((result) => {
                    console.log('result-->', result.list);
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
        <main>
            {/* 헤더 */}
            <Header
                isPrevBtn={true}
                title="자유게시판"
                rightElement={
                    <div className="right" css={BookMarkIconStyle}>
                        <button onClick={handleBookMark} className={classNames(isBookMark ? 'fill' : 'notFill')}>
                            {data?.bookmark.check === true ? <FillBookMarkIcon /> : <BookMarkIcon />}
                        </button>
                    </div>
                }
            />
            {postData && (
                <div css={PostStyle}>
                    <div className="postHeaderWrap">
                        <h3 className="postTitle">{postData.title}</h3>
                        <ItemHeader writer={postData.writer} createAt={postData.updateAt} writerID={postData.id} />
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

            {data && (
                <FeedComents
                    isLastPage={commentData.totalPage === pageParam}
                    commentData={comment}
                    writerId={data.writer.nickname}
                    userId={data.id}
                    handleRefrash={handleRefrash}
                    handleMoreComment={handleMoreComment}
                />
            )}
            <CommentInput
                onSuccess={onSuccessComment}
                handleContact={(e: React.ChangeEvent<HTMLInputElement>) => handleContact(e)}
                AddComment={AddComment}
                comment={commentText}
            />
        </main>
    );
};
export default post;
