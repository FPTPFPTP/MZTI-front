import { Header } from '@/components/Commons';
import { useState } from 'react';
import CommentInput from '@/components/Commons/CommentInput';
import { ReplayCommentStyled } from '../../styled';
import CommentItem from '../CommentItem';
import Axios from '@utils/axios';
import { useRecoilValue } from 'recoil';
import { replayCommentId } from '@/recoil/atom/user';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { getCommentDetail } from '@/apis/post';

const ReplayComment = () => {
    const [reCommentText, setReCommentText] = useState<string>('');
    const getReplayCommentId = useRecoilValue(replayCommentId);
    const { data } = useQuery(['getReComment'], () => getCommentDetail(getReplayCommentId));
    const handleContact = (e: React.ChangeEvent<HTMLInputElement>) => {
        setReCommentText(e.target.value);
    };
    const queryClient = useQueryClient();

    const onSuccessComment = async () => {
        queryClient.invalidateQueries(['getReCommentView']);
    };

    // 대댓글
    const AddReComment = () => {
        return Axios.post('/post/comment/sub', {
            commentId: getReplayCommentId,
            comment: reCommentText,
        }).then((res) => {
            onSuccessComment();
            setReCommentText('');
        });
    };

    return (
        <section css={ReplayCommentStyled}>
            <div className="ReplayCommentWrap">
                <Header isReplayComment={true} isPrevBtn={false} />

                <div className="commentWrap">
                    {data && (
                        <CommentItem
                            nickname={data.writer?.nickname}
                            mbti={data.writer?.mbti}
                            profileImage={data.writer?.profileImage}
                            userId={data.id}
                            comment={data.comment}
                            like={data.like?.count}
                            createAt={data.createAt}
                            writerId={''}
                            likeCheck={data.like?.check}
                            subComment={data.subComment?.count}
                        />
                    )}
                </div>

                <CommentInput
                    AddComment={AddReComment}
                    onSuccess={onSuccessComment}
                    comment={reCommentText}
                    handleContact={(e: React.ChangeEvent<HTMLInputElement>) => handleContact(e)}
                />
            </div>
        </section>
    );
};

export default ReplayComment;
