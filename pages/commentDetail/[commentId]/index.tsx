import { useCallback, useEffect, useRef, useState } from 'react';
import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';
import { useQueryClient } from '@tanstack/react-query';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { postEditState } from '@/recoil/atom/post';
import { myPageInfo } from '@/recoil/atom/user';
import { Header, MoreDrawer, Loading, Modal } from '@components/Commons';
import CommentInput from '@/components/Commons/CommentInput';
import CommentItem from '@/components/Home/FeedComents/CommentItem';
import ReplayCommentItem from '@/components/Home/FeedComents/CommentItem/ReplayCommentItem';
import { Empty } from '@/components/MyPageCom';
import { useGetReComments, commentPut, reCommentPost, deleteComment } from '@/apis/post';
import Axios from '@utils/axios';
import { postImageUpload } from '@utils/upload';
import { openToast } from '@utils/toast';
import { IResponseBase } from '@/types/global';
import { ICommentModel, EActionEditType } from '@/types/post';
import { ReplayCommentStyled, DeletedComment } from '@/styles/pages/commentDetailStyle';
import { ModalStyle } from '@/components/Commons/Modal/styled';
import EmptyWrite from '@assets/icons/common/empty_write.svg';

interface IPostDetailProps {
    comment?: ICommentModel;
}

const commentDetail = ({ comment }: IPostDetailProps) => {
    const myInfo = useRecoilValue(myPageInfo);
    const setEditTarget = useSetRecoilState(postEditState);
    const observerRef = useRef(null);

    // 스크롤
    const scrollRef = useRef<HTMLDivElement | null>(null);
    const [isScrolldown, setIsScrolldown] = useState<boolean>(false);

    // 댓글 수정, 삭제
    const [editComment, setEditComment] = useState<ICommentModel>();
    // 댓글 수정, 삭제, 신고 Drawer
    const [isDrawerVisible, setIsDrawerVisible] = useState<boolean>(false);

    const [isLogoutModal, setIsLogoutModal] = useState<boolean>(false);

    const { contents: reComments, fetchNextPage, hasNextPage } = useGetReComments({ commentId: (comment && comment.id) || 0 });
    const queryClient = useQueryClient();

    const router = useRouter();

    const onSuccessComment = async () => {
        queryClient.invalidateQueries(['getReComments', (comment && comment.id) || 0]);
    };

    // 대댓글 추가
    const AddReComment = async (commentValue: string, imageFile?: File) => {
        if (!myInfo) {
            setIsLogoutModal(true);
            return;
        }
        let imageSrc;
        if (imageFile) {
            imageSrc = await postImageUpload(imageFile);
        }

        const reComment = await reCommentPost({
            commentId: (comment && comment.id) || 0,
            comment: commentValue,
            image: imageSrc,
        });
        if (reComment.code === 'SUCCESS') {
            await onSuccessComment();
            await setIsScrolldown(true);
        }
    };

    // 대댓글 수정
    const PutReComment = async (id: number, commentValue: string, imageFile?: File, imageUrl?: string) => {
        let imageSrc;
        if (imageFile) {
            imageSrc = await postImageUpload(imageFile);
        } else {
            imageSrc = imageUrl;
        }

        const reComment = await commentPut({ id, comment: commentValue, image: imageSrc });
        if (reComment) {
            onSuccessComment();
            setEditComment(undefined);
        }
    };

    const onTargetEdit = async (id: number, type: EActionEditType) => {
        if (type === EActionEditType.COMMENT) {
            const targetComment = reComments.find((comment) => comment.id === id);
            if (targetComment) {
                setEditComment(targetComment);
                closeDrawer();
            }
        }
    };

    const onTargetDelete = async (id: number, type: EActionEditType) => {
        if (type === EActionEditType.COMMENT) {
            const res = await deleteComment(id);
            if (res.code === 'SUCCESS') {
                openToast({ message: '삭제 완료되었습니다.' });
                onSuccessComment();
                closeDrawer();
            } else {
                openToast({ message: '삭제 실패했습니다. 다시 시도해주세요.' });
            }
        }
    };

    const openDrawer = (id: number, type: EActionEditType) => {
        setEditTarget({
            id,
            editActionType: type,
        });
        setIsDrawerVisible(true);
    };
    const closeDrawer = () => setIsDrawerVisible(false);

    const handleObserver = useCallback(
        (entries: IntersectionObserverEntry[]) => {
            const [target] = entries;
            if (target.isIntersecting) {
                fetchNextPage();
            }
        },
        [fetchNextPage, hasNextPage],
    );

    // 스크롤 내리기
    const scrollToBottom = useCallback(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
            setIsScrolldown(false);
        }
    }, [isScrolldown]);

    const handleLogin = () => {
        router.replace('/login');
    };

    useEffect(() => {
        // AddComment로 댓글 추가하면 데이터 갱신, 스크롤 이동 순차적으로 적용하기위해 구성
        if (isScrolldown) {
            scrollToBottom();
        }
    }, [isScrolldown]);

    useEffect(() => {
        const element = observerRef.current;
        const option = { threshold: 0 };

        const observer = new IntersectionObserver(handleObserver, option);
        if (element) {
            observer.observe(element);
            return () => observer.unobserve(element);
        }
    }, [fetchNextPage, hasNextPage, handleObserver]);

    return (
        <main className="homeLayout">
            {comment && (
                <>
                    <Header isPrevBtn={true} title={`대댓글`} isBgWhite={true} isBorderLine={true} />

                    <CommentItem commentItem={comment} openDrawer={openDrawer} isTop={true} />
                    <div css={ReplayCommentStyled} ref={scrollRef}>
                        {/* 피드 게시물 */}
                        {reComments.length ? (
                            reComments.map((reComment) => {
                                return reComment.deleted ? (
                                    <p css={DeletedComment} key={reComment.id}>
                                        삭제된 댓글입니다.
                                    </p>
                                ) : (
                                    <ReplayCommentItem replayCommentItem={reComment} key={reComment.id} openDrawer={openDrawer} />
                                );
                            })
                        ) : (
                            <Empty icon={<EmptyWrite />} title="작성된 댓글이 없습니다." subTitle={`게시글을 작성해주세요`} />
                        )}
                        <div className="loader" ref={observerRef}>
                            {hasNextPage ? <Loading /> : null}
                        </div>
                    </div>

                    <CommentInput
                        editComment={editComment}
                        onAddComment={AddReComment}
                        onEditComment={PutReComment}
                        onCancle={() => setEditComment(undefined)}
                    />
                    <MoreDrawer isVisible={isDrawerVisible} onClose={closeDrawer} handleTargetEdit={onTargetEdit} handleTargetDelete={onTargetDelete} />

                    <Modal title={'로그인이 필요한 기능입니다'} isModalVisible={isLogoutModal} closable={false} footer={null} centered={true}>
                        <div css={ModalStyle}>
                            <p>회원가입이나 로그인을 해주세요.</p>
                            <div className="buttons">
                                <button onClick={() => setIsLogoutModal(false)} className="button cancel">
                                    취소
                                </button>
                                <button onClick={handleLogin} className="button">
                                    확인
                                </button>
                            </div>
                        </div>
                    </Modal>
                </>
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
        },
    };
};
