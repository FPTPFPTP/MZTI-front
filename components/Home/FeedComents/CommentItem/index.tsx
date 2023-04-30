import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Avatar } from '@/components/Commons';
import { timeForToday } from '@/utils/time';
import MoreButton from '@assets/icons/detailPost/moreButton.svg';
import FillreCommentLike from '@assets/icons/comment/reCommentLikeFill.svg';
import ReComment from '@assets/icons/comment/reComment.svg';
import ReCommentLike from '@assets/icons/comment/reCommentLike.svg';
import WriterMainIcon from '@assets/icons/comment/writerMain.svg';
import ReCommentBoard from '@assets/icons/comment/reCommentBoard.svg';
import { MoreDrawer } from '@/components/Commons';
import { CommentItemSylte, DeletedComment, MoreCommentStyle } from '../../styled';
import { useSetRecoilState, useRecoilValue, useRecoilState } from 'recoil';
import {
    myPageInfo,
    replayCommentState,
    replayCommentId,
    replayCommentViewState,
    commentContent,
    commentText,
    commentModify,
    commentModifyId,
} from '@/recoil/atom/user';
import { EType } from '@/components/Commons/MoreDrawer';
import { useMutation, useQuery } from '@tanstack/react-query';
import { deleteComment, commentLike, reCommentGet, getComments, getCommentDetail } from '@/apis/post';
import { ILikeModel, ICommentModel, ICommentProps } from '@/types/post';
import ReplayCommentItem from './ReplayCommentItem';

const CommentItem = ({ subComment, nickname, mbti, profileImage, userId, comment, like, createAt, writerId, likeCheck, image }: ICommentProps) => {
    const myInfo = useRecoilValue(myPageInfo);
    const [isLike, setIsLike] = useState<boolean>(likeCheck);
    const [isVisible, setIsVisible] = useState<boolean>(false);
    const [likeCount, setLikeCount] = useState<any>(like);
    const setReplayCommentId = useSetRecoilState(replayCommentId);
    const [reCommentView, setReCommentView] = useRecoilState(replayCommentViewState);
    const openDrawer = () => setIsVisible(true);
    const closeDrawer = () => setIsVisible(false);
    const [reCommentState, setReCommentState] = useRecoilState(replayCommentState);
    // 댓글 삭제
    const commentDelete = useMutation((id: number) => deleteComment(id));
    // 대댓글 좋아요
    const reCommentLike = useMutation((id: number) => commentLike(id));
    const { data } = useQuery(['getReCommentView', userId], () => reCommentGet({ commentId: userId, page: 0, view: reCommentView }));
    const [commentContentState, setCommentContentState] = useRecoilState(commentContent);
    const setCommentValue = useSetRecoilState(commentText);
    const setCommentModifyState = useSetRecoilState(commentModify);
    const setCommentModifyId = useSetRecoilState(commentModifyId);

    // 댓글 삭제
    const handleCommentDelete = () => {
        confirm('댓글을 삭제하시겠습니까?');
        commentDelete.mutate(userId, {
            onSuccess: () => {
                alert('삭제 완료되었습니다.');
            },
        });
    };

    // 댓글 좋아요
    const handleReCommentLike = () => {
        reCommentLike.mutate(userId, {
            onSuccess: (data: ILikeModel) => {
                if (data.check === true) {
                    setLikeCount(data.count);
                } else {
                    setLikeCount(data.count);
                }

                setIsLike((isLike) => !isLike);
            },
        });
    };

    /**
     * 대댓글 누르면 대댓글 작성할 수 있는 컴포넌트 열리기
     */
    const handleRePlayComment = (userId: number) => {
        console.log('dddd', Number(data?.totalCount));
        // 대댓글창
        setReCommentState(true);
        setReplayCommentId(userId);
        setReCommentView(Number(data?.totalCount));
    };

    // 댓글 수정하기
    const handleCommentEdit = (userId: number) => {
        console.log('userId-->', userId);
        setCommentModifyId(userId);
        getCommentDetail(userId).then((res) => {
            console.log('dd', res.comment);
            setCommentContentState(res.comment);
        });

        setIsVisible(false);
        setCommentModifyState(true);
    };

    useEffect(() => {
        // console.log('ddd', reCommentState);
        if (reCommentState === false) {
            // TODO : 대댓글 더보기 컴포넌트 닫으면 reCommentView 다시 5개 전달했는데...
        }
    }, [reCommentState, data]);

    useEffect(() => {
        setCommentValue(commentContentState);
        console.log('commentContentState--', commentContentState);
    }, [commentContentState]);

    return (
        <>
            <section css={CommentItemSylte} key={userId}>
                <div className="commentItemWrap">
                    <div className="writer">
                        <Avatar src={profileImage ? profileImage : ''} alt={`${nickname}님의 프로필입니다.`} size={60} mbti={mbti} />
                        <p className="mbti">{mbti}</p>
                        <p className="nickName">
                            <span>{nickname}</span>

                            {writerId === nickname && (
                                <span>
                                    <WriterMainIcon />
                                </span>
                            )}
                        </p>
                    </div>

                    <p className="coment">{comment}</p>
                    {image && <Image src={image} alt={'댓글이미지'} width={100} height={100} />}
                    <div className="commentItemFooter">
                        <p className="time">{timeForToday(createAt)}</p>
                        <button onClick={handleReCommentLike} className="like">
                            {isLike === false ? <ReCommentLike /> : <FillreCommentLike />}
                            <span>{likeCount === 0 ? '좋아요' : likeCount}</span>
                        </button>

                        <Link href={`/commentDetail/${userId}`}>
                            <button className="reComment">
                                <ReComment />
                                <span>대댓글 {subComment !== 0 && subComment}</span>
                            </button>
                        </Link>

                        <button onClick={openDrawer} className="moreButton">
                            <MoreButton />
                        </button>
                    </div>
                </div>

                <MoreDrawer
                    type={myInfo?.nickname === nickname ? EType.COMMENT : EType.COMMENT_TIPOFF}
                    onClick={closeDrawer}
                    isVisible={isVisible}
                    writerID={userId}
                    handleCommentDelete={handleCommentDelete}
                    commentId={userId}
                    handleCommentEdit={() => handleCommentEdit(Number(userId))}
                />
            </section>

            {/* 대댓글 더보기 */}
            {!reCommentState && (
                <>
                    {data && data?.totalCount > 3 && (
                        <section css={MoreCommentStyle}>
                            <button onClick={() => handleRePlayComment(userId)}>
                                <span>+ 대댓글 더보기</span>
                            </button>
                        </section>
                    )}
                </>
            )}

            {/* 대댓글 */}
            {data?.list?.length !== 0 ? (
                <>
                    {data?.list?.map((item: ICommentModel) => {
                        return item.deleted === true ? (
                            <p css={DeletedComment} key={item.id} className="reComment">
                                <ReCommentBoard />
                                <span>삭제된 댓글입니다.</span>
                            </p>
                        ) : (
                            <ReplayCommentItem
                                nickname={item.writer.nickname}
                                mbti={item.writer.mbti}
                                profileImage={item.writer.profileImage}
                                userId={item.id}
                                comment={item.comment}
                                like={item.like.count}
                                createAt={item.createAt}
                                writerId={writerId}
                                likeCheck={item.like.check}
                                key={item.id}
                                image={item.image}
                            />
                        );
                    })}
                </>
            ) : null}
        </>
    );
};
export default CommentItem;
