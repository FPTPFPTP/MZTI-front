import { GetStaticPaths, GetStaticProps, GetServerSideProps } from 'next';
import { useEffect, useState } from 'react';
import { Header } from '@components/Commons';
import Head from 'next/head';
import BookMarkIcon from '@assets/icons/header/HeaderBookMark.svg';
import FillBookMarkIcon from '@assets/icons/header/HeaderBookMarkFill.svg';
import { PostStyle, PostContent } from './styled';
import ItemHeader from '@/components/Home/FeedItem/ItemHeader';
import ItemFooter from '@/components/Home/FeedItem/ItemFooter';
import FeedComents from '@/components/Home/FeedComents';
import { useRouter } from 'next/router';
import Axios from '@utils/axios';
import xss from 'xss';
import { IResponseBase } from '@/types/global';

export const getServerSideProps: GetServerSideProps = async ({ req, params }: any) => {
    let data = null;
    let commentData = null;
    try {
        const token = req.cookies['refreshToken'];
        Axios.defaults.baseURL = 'http://ip-set-nlp-2cce1cff97b66aa1.elb.ap-northeast-2.amazonaws.com/';
        Axios.defaults.headers.common['Authorization'] = token ? `Bearer ${token}` : '';
        const res = await Axios.get<IResponseBase<any>>(`/post/${params.id}`);
        const commentRes = await Axios.get<IResponseBase<any>>('/post/comment', {
            params: { postId: params.id, page: 0, view: 10 },
        });
        console.log('res', res);
        console.log('commentRes', commentRes);
        data = res.data;
        commentData = commentRes.data.data.list;
    } catch (err) {
        console.log('error', err);
    }

    console.log('daad---------->', data);
    console.log('commentData---------->', commentData);
    return {
        props: {
            data,
            commentData,
        },
    };
};

const post = ({ data, commentData }: any) => {
    const router = useRouter();
    const { id } = router.query;
    const [isBookMark, setIsBookMark] = useState<boolean>(false);

    const handleBookMark = () => [setIsBookMark((isBookMark) => !isBookMark)];

    return (
        <main>
            <Head>
                <title>MZTI | 게시판</title>
            </Head>
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

            <div css={PostStyle}>
                <div className="postHeaderWrap">
                    <h3 className="postTitle">{data.data.title}</h3>
                    <ItemHeader
                        nickname={data.data.writer.nickname}
                        mbti={data.data.writer.mbti}
                        level={data.data.writer.level}
                        profileImage={data.data.writer.profileImage}
                        moreBtn={false}
                        createAt={data.data.createAt}
                    />
                </div>
            </div>

            <article
                dangerouslySetInnerHTML={{
                    __html: xss(data.data.content),
                }}
            />

            <ItemFooter className="postFooter" isFeed={false} />

            {commentData.length > 0 && (
                <FeedComents
                    nickname={commentData.writer.nickname}
                    mbti={commentData.writer.mbti}
                    profileImage={commentData.writer.profileImage}
                    userId={commentData.writer.userId}
                    comment={commentData.comment}
                    like={commentData.like.count}
                />
            )}
        </main>
    );
};

export default post;
