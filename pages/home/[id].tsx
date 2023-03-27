import { GetServerSideProps, NextPageContext } from 'next';
import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';
import { message } from 'antd';

import { Header } from '@components/Commons';
import Head from 'next/head';
import BookMarkIcon from '@assets/icons/header/HeaderBookMark.svg';
import FillBookMarkIcon from '@assets/icons/header/HeaderBookMarkFill.svg';
import { PostStyle, PostContent } from '@styles/pages/homeStyled';
import ItemHeader from '@/components/Home/FeedItem/ItemHeader';
import ItemFooter from '@/components/Home/FeedItem/ItemFooter';
import FeedComents from '@/components/Home/FeedComents';
import { useRouter } from 'next/router';
import Axios from '@utils/axios';
import { getPost } from '@apis/posts';
import { IResponseBase } from '@/types/global';
import { IPostModel } from '@/types/post';
import { DefaultModeResult, DefaultModeViewer, SurveyType, ESurveyTypes } from '@khunjeong/basic-survey-template';

const ToastViewer = dynamic(() => import('@/components/Commons/ToastViewer'), {
    ssr: false,
});

interface IPostProps {
    data?: IPostModel;
    // commentData: any;
}

export const getServerSideProps: GetServerSideProps = async ({ req, params }: any) => {
    let data;
    // let commentData = null;
    try {
        const token = req.cookies['refreshToken'];
        Axios.defaults.baseURL = 'http://ip-set-nlp-2cce1cff97b66aa1.elb.ap-northeast-2.amazonaws.com/';
        Axios.defaults.headers.common['Authorization'] = token ? `Bearer ${token}` : '';
        const res = await Axios.get<IResponseBase<IPostModel>>(`/post/${params.id}`);
        // const commentRes = await Axios.get<IResponseBase<any>>('/post/comment', {
        //     params: { postId: params.id, page: 0, view: 10 },
        // });
        data = res.data.data;
        // commentData = commentRes.data.data.list;
    } catch (err) {
        console.log('error', err);
    }

    return {
        props: {
            data,
            // commentData,
        },
    };
};

const post = ({ data }: IPostProps) => {
    const [postData, setPostData] = useState<IPostModel | undefined>(data);
    const [isBookMark, setIsBookMark] = useState<boolean>(false);
    const [surveyData, setSurveyData] = useState<SurveyType.IDefaultModeSurveyResult[]>([]);
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
                <>
                    <div css={PostStyle}>
                        <div className="postHeaderWrap">
                            <h3 className="postTitle">{postData.title}</h3>
                            <ItemHeader
                                nickname={postData.writer.nickname}
                                mbti={postData.writer.mbti}
                                level={postData.writer.level}
                                profileImage={postData.writer.profileImage}
                                moreBtn={false}
                                createAt={postData.createAt}
                            />
                        </div>
                    </div>
                    <ToastViewer contentHtml={postData.content} />
                    {/* <article
                        dangerouslySetInnerHTML={{
                            __html: xss(data.content),
                        }}
                    /> */}
                    {surveyData.map((survey) => (
                        <>
                            {survey.self ? (
                                <DefaultModeResult key={survey.id} survey={survey} onSubmit={onPoll} />
                            ) : (
                                <DefaultModeViewer key={survey.id} survey={survey} onSubmit={onPoll} />
                            )}
                        </>
                    ))}
                </>
            )}

            <ItemFooter className="postFooter" isFeed={false} />

            {/* {commentData.length > 0 && (
                <FeedComents
                    nickname={commentData.writer.nickname}
                    mbti={commentData.writer.mbti}
                    profileImage={commentData.writer.profileImage}
                    userId={commentData.writer.userId}
                    comment={commentData.comment}
                    like={commentData.like.count}
                />
            )} */}
        </main>
    );
};

export default post;
