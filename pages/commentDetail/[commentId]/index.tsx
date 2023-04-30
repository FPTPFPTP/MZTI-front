import { useEffect } from 'react';
import { GetServerSideProps } from 'next';
import Axios from '@utils/axios';
import { IResponseBase, IPaginationResponse } from '@/types/global';
import { ICommentModel } from '@/types/post';

interface IPostDetailProps {
    comment?: ICommentModel;
    reComments: IPaginationResponse<ICommentModel>;
}

const commentDetail = ({ comment, reComments }: IPostDetailProps) => {
    useEffect(() => {
        console.log({ comment });
    }, [comment]);
    useEffect(() => {
        console.log({ reComments });
    }, [reComments]);
    return <div>여기 UI 작업</div>;
};

export default commentDetail;

export const getServerSideProps: GetServerSideProps = async ({ req, params }: any) => {
    let comment;
    let reComments;

    try {
        const token = req.cookies['accessToken'];
        Axios.defaults.baseURL = process.env.NEXT_PUBLIC_API_BASE_URL;
        Axios.defaults.headers.common['Authorization'] = token ? `Bearer ${token}` : '';
        const commentRes = await Axios.get<IResponseBase<ICommentModel>>(`/post/comment/${params.commentId}`);
        const reCommentRes = await Axios.get<IResponseBase<IPaginationResponse<ICommentModel>>>('/post/comment/sub', {
            params: { commentId: params.commentId, page: 0, view: 15 },
        });
        comment = commentRes.data.data;
        reComments = reCommentRes.data.data;
    } catch (err) {
        console.log('error', err);
    }
    return {
        props: {
            comment,
            reComments,
        },
    };
};
