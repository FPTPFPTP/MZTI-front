import { GetServerSideProps } from 'next';
import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';
import { message } from 'antd';
import { Header } from '@components/Commons';
import BookMarkIcon from '@assets/icons/header/HeaderBookMark.svg';
import FillBookMarkIcon from '@assets/icons/header/HeaderBookMarkFill.svg';
import { PostStyle } from '@styles/pages/homeStyled';
import ItemHeader from '@/components/Home/FeedItem/ItemHeader';
import ItemFooter from '@/components/Home/FeedItem/ItemFooter';
import FeedComents from '@/components/Home/FeedComents';
import Axios from '@utils/axios';
import { getPost } from '@apis/posts';
import { IResponseBase } from '@/types/global';
import { IPostModel } from '@/types/post';
import { DefaultModeResult, DefaultModeViewer, SurveyType, ESurveyTypes } from '@khunjeong/basic-survey-template';
import CommentInput from '@/components/Commons/CommentInput';

const ToastViewer = dynamic(() => import('@/components/Commons/ToastViewer'), {
    ssr: false,
});
interface IPostProps {
    data?: IPostModel;
    commentData: any;
}
export const getServerSideProps: GetServerSideProps = async ({ req, params }: any) => {
    let data;
    let commentData;
    try {
        const token = req.cookies['refreshToken'];
        Axios.defaults.baseURL = 'http://ip-set-nlp-2cce1cff97b66aa1.elb.ap-northeast-2.amazonaws.com/';
        Axios.defaults.headers.common['Authorization'] = token ? `Bearer ${token}` : '';
        const res = await Axios.get<IResponseBase<IPostModel>>(`/post/${params.id}`);
        const commentRes = await Axios.get<IResponseBase<any>>('/post/comment', {
            params: { postId: params.id, page: 0, view: 10 },
        });
        data = res.data.data;
        commentData = commentRes.data.data.list;
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
    const [postData, setPostData] = useState<IPostModel | undefined>(data);
    const [isBookMark, setIsBookMark] = useState<boolean>(false);
    const [surveyData, setSurveyData] = useState<SurveyType.IDefaultModeSurveyResult[]>([]);
    const [comment, setComment] = useState<[]>(commentData);
    const handleBookMark = () => [setIsBookMark((isBookMark) => !isBookMark)];
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
    const onSuccessComment = async () => {
        const commentRes = await Axios.get<IResponseBase<any>>('/post/comment', {
            params: { postId: data?.id, page: 0, view: 10 },
        });
        setComment(commentRes.data.data.list);
    };

    useEffect(() => {
        if (postData && postData.pollList.length) {
            console.log({ data });
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
                    <div className="right">
                        <button onClick={handleBookMark}>{isBookMark ? <FillBookMarkIcon /> : <BookMarkIcon />}</button>
                    </div>
                }
            />
            {postData && (
                <div css={PostStyle}>
                    <div className="postHeaderWrap">
                        <h3 className="postTitle">{postData.title}</h3>
                        <ItemHeader writer={postData.writer} createAt={postData.updateAt} />
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
                    command={data.command?.count === 0 ? 0 : data.command?.count}
                    isFeed={false}
                    viewCount={data.viewCount}
                />
            )}

            <FeedComents commentData={comment} />
            <CommentInput postId={data?.id} onSuccess={onSuccessComment} />
        </main>
    );
};
export default post;
