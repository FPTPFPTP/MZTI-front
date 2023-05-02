import { useEffect, useState } from 'react';
import { GetServerSideProps } from 'next';
import { useQueryClient } from '@tanstack/react-query';
import InfiniteScroll from 'react-infinite-scroller';
import { useRecoilState, useRecoilValue } from 'recoil';
import { commentModify, commentModifyId } from '@/recoil/atom/user';
import { Header } from '@components/Commons';
import CommentModifyInput from '@/components/Commons/CommentModifyInput';
import CommentInput from '@/components/Commons/CommentInput';
import CommentItem from '@/components/Home/FeedComents/CommentItem';
import { Empty } from '@/components/MyPageCom';
import { useGetReComments, commentPut, reCommentPost } from '@/apis/post';
import Axios from '@utils/axios';
import { postImageUpload } from '@utils/upload';
import EmptyWrite from '@assets/icons/common/empty_write.svg';
import { IResponseBase } from '@/types/global';
import { ICommentModel } from '@/types/post';
import { ReplayCommentStyled } from '@/styles/pages/commentDetailStyle';

interface IPostDetailProps {
    comment?: ICommentModel;
    commentId: number;
}

const commentDetail = ({ comment, commentId }: IPostDetailProps) => {
    //  댓글 호출
    const [getCommentModifyState, setCommentModifyState] = useRecoilState(commentModify);
    const getCommentModifyId = useRecoilValue(commentModifyId);

    const { contents: reComments, fetchNextPage, hasNextPage } = useGetReComments({ commentId });
    const queryClient = useQueryClient();

    const onSuccessComment = async () => {
        queryClient.invalidateQueries(['getReComments']);
    };

    // 대댓글 추가
    const AddReComment = async (commentValue: string, imageFile?: File) => {
        let imageSrc;
        if (imageFile) {
            imageSrc = await postImageUpload(imageFile);
        }

        const reComment = await reCommentPost({
            commentId: commentId,
            comment: commentValue,
            image: imageSrc,
        });
        if (reComment) {
            onSuccessComment();
        }
    };

    // 댓글 수정!!!
    const PutComment = async (imageFile?: File) => {
        let imageSrc;
        if (imageFile) {
            imageSrc = await postImageUpload(imageFile);
        }
        const reComment = await commentPut({ id: getCommentModifyId, comment: 'commentValue', image: imageSrc });
        if (reComment) {
            onSuccessComment();
        }
    };

    useEffect(() => {
        console.log({ comment });
    }, [comment]);

    return (
        <main className="homeLayout">
            <Header isPrevBtn={true} title={`대댓글 `} />

            <div css={ReplayCommentStyled}>
                {/* 피드 게시물 */}
                {reComments.length ? (
                    <InfiniteScroll hasMore={hasNextPage} loadMore={() => fetchNextPage()}>
                        {reComments.map((reComment) => (
                            <CommentItem key={reComment.id} commentItem={reComment} />
                        ))}
                    </InfiniteScroll>
                ) : (
                    <Empty icon={<EmptyWrite />} title="작성된 댓글이 없습니다." subTitle={`게시글을 작성해주세요`} />
                )}
            </div>

            {getCommentModifyState ? (
                // 댓글 수정용
                // <CommentModifyInput
                //     onSuccess={onSuccessComment}
                //     handleContact={(e: React.ChangeEvent<HTMLInputElement>) => handleContact(e)}
                //     PutComment={PutComment}
                //     comment={commentValue}
                // />
                <div>test</div>
            ) : (
                // 일반 댓글용
                <CommentInput onAddComment={AddReComment} />
            )}
        </main>
    );
};

export default commentDetail;

export const getServerSideProps: GetServerSideProps = async ({ req, params }: any) => {
    let comment;

    try {
        const token = req.cookies['accessToken'];
        Axios.defaults.baseURL = process.env.NEXT_PUBLIC_API_BASE_URL;
        Axios.defaults.headers.common['Authorization'] = token ? `Bearer ${token}` : '';
        const commentRes = await Axios.get<IResponseBase<ICommentModel>>(`/post/comment/${Number(params.commentId)}`);
        comment = commentRes.data.data;
    } catch (err) {
        console.log('error', err);
    }
    return {
        props: {
            comment: comment,
            commentId: Number(params.commentId),
        },
    };
};
