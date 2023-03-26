import { GetServerSideProps, NextPageContext } from 'next';
import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';
import { Header } from '@components/Commons';
import Head from 'next/head';
import BookMarkIcon from '@assets/icons/header/HeaderBookMark.svg';
import FillBookMarkIcon from '@assets/icons/header/HeaderBookMarkFill.svg';
import ItemHeader from '@/components/Home/FeedItem/ItemHeader';
import ItemFooter from '@/components/Home/FeedItem/ItemFooter';
import FeedComents from '@/components/Home/FeedComents';
import { useRouter } from 'next/router';
import Axios from '@utils/axios';
import xss from 'xss';
import { PostStyle, PostContent } from './styled';
import { IResponseBase } from '@/types/global';
import { IPostModel } from '@/types/post';

const ToastViewer = dynamic(() => import('@/components/Commons/ToastViewer'), {
    ssr: false,
});

interface IPostProps {
    data: IPostModel | null;
    // commentData: any;
}

export const getServerSideProps: GetServerSideProps = async ({ req, params }: any) => {
    let data = null;
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
    const [isBookMark, setIsBookMark] = useState<boolean>(false);

    const handleBookMark = () => [setIsBookMark((isBookMark) => !isBookMark)];

    useEffect(() => {
        console.log({ data });
    }, [data]);

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

            {data && (
                <>
                    <div css={PostStyle}>
                        <div className="postHeaderWrap">
                            <h3 className="postTitle">{data.title}</h3>
                            <ItemHeader
                                nickname={data.writer.nickname}
                                mbti={data.writer.mbti}
                                level={data.writer.level}
                                profileImage={data.writer.profileImage}
                                moreBtn={false}
                                createAt={data.createAt}
                            />
                        </div>
                    </div>
                    <ToastViewer contentHtml={data.content} />
                    {/* <article
                        dangerouslySetInnerHTML={{
                            __html: xss(data.content),
                        }}
                    /> */}
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
