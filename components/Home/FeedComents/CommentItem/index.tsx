import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Avatar } from '@/components/Commons';
import { timeForToday } from '@/utils/time';
import MoreButton from '@assets/icons/detailPost/moreButton.svg';
import FillreCommentLike from '@assets/icons/comment/reCommentLikeFill.svg';
import ReComment from '@assets/icons/comment/reComment.svg';
import ReCommentLike from '@assets/icons/comment/reCommentLike.svg';
import WriterMainIcon from '@assets/icons/comment/writerMain.svg';
import ReCommentBoard from '@assets/icons/comment/reCommentBoard.svg';
import CirclePlus from '@assets/icons/comment/circle_plus.svg';
import { CommentItemSylte, DeletedComment, MoreCommentStyle } from '../../styled';
import { useRecoilValue } from 'recoil';
import { myPageInfo } from '@/recoil/atom/user';
import { useMutation } from '@tanstack/react-query';
import { commentLike, reCommentGet } from '@/apis/post';
import { ILikeModel, ICommentModel, EActionEditType } from '@/types/post';
import ReplayCommentItem from './ReplayCommentItem';
import { Modal } from '@components/Commons';
import { ModalStyle } from '@/components/Commons/Modal/styled';
import { getMbtiColor } from '@utils/postItem';
import regExp, { HTTP_LINK_URL_REG } from '@/utils/regExp';

export interface ICommentItemProps {
    isTop?: boolean;
    commentItem: ICommentModel;
    postWriterId?: number | string;
    openDrawer: (id: number, type: EActionEditType) => void;
}

const CommentItem = ({ isTop, commentItem, postWriterId, openDrawer }: ICommentItemProps) => {
    const { id, subComment, writer, comment, like, createAt, image } = commentItem;
    const myInfo = useRecoilValue(myPageInfo);
    const [isLike, setIsLike] = useState<boolean>(like.check);
    const [likeCount, setLikeCount] = useState<number>(like.count);
    const [reComments, setRecomments] = useState<ICommentModel[]>([]);
    const [totalReComment, setTotalRecomment] = useState<number>(0);
    const [isLogoutModal, setIsLogoutModal] = useState<boolean>(false);
    const router = useRouter();

    // 대댓글 좋아요
    const reCommentLike = useMutation((id: number) => commentLike(id));

    // 댓글 좋아요
    const handleReCommentLike = () => {
        if (myInfo) {
            reCommentLike.mutate(id, {
                onSuccess: (data: ILikeModel) => {
                    if (data.check === true) {
                        setLikeCount(data.count);
                    } else {
                        setLikeCount(data.count);
                    }

                    setIsLike((isLike) => !isLike);
                },
            });
        } else {
            setIsLogoutModal(true);
        }
    };

    const handleLogin = () => {
        router.replace('/login');
    };

    useEffect(() => {
        if (subComment && subComment.count > 0) {
            reCommentGet({ commentId: id, page: 0, view: 5 }).then((res) => {
                setRecomments(res.list);
                setTotalRecomment(res.totalCount);
            });
        }
    }, [subComment]);

    return (
        <>
            <section css={CommentItemSylte}>
                <div className="commentItemWrap">
                    <div className="writer">
                        <Avatar
                            src={writer.profileImage ? writer.profileImage : ''}
                            alt={`${writer.nickname}님의 프로필입니다.`}
                            size={50}
                            mbti={writer.mbti}
                        />

                        <div className="writeInfo">
                            <div className="mbtiNlevel">
                                <p className="mbti" style={{ background: getMbtiColor(writer.mbti) }}>
                                    {writer.mbti}
                                </p>
                                <p className="level">Lv.{writer.level}</p>
                            </div>

                            <p className="nickName">
                                <span>{writer.nickname}</span>

                                {writer.nickname === postWriterId && (
                                    <span>
                                        <WriterMainIcon />
                                    </span>
                                )}
                            </p>
                        </div>

                        <div className="nickname_time">
                            <button
                                onClick={() => openDrawer(id, myInfo?.id === writer.userId ? EActionEditType.COMMENT : EActionEditType.COMMENT_TIPOFF)}
                                className="moreButton"
                            >
                                <MoreButton />
                            </button>
                            <p className="time">{timeForToday(createAt)}</p>
                        </div>
                    </div>

                    <div className="coment">
                        {comment.split('\n').map((title, index) => {
                            if (regExp(HTTP_LINK_URL_REG, title)) {
                                return (
                                    <a key={index} href={title} target="_blank" rel="noreferrer" style={{ color: 'blue' }}>
                                        {title}
                                    </a>
                                );
                            } else {
                                return <p key={index}>{title}</p>;
                            }
                        })}
                    </div>
                    {image && <Image className={'image'} src={image} alt={'댓글이미지'} width={100} height={100} />}
                    <div className="commentItemFooter">
                        <button onClick={handleReCommentLike} className="like">
                            {isLike === false ? <ReCommentLike /> : <FillreCommentLike />}
                            <span>{likeCount === 0 ? '좋아요' : likeCount}</span>
                        </button>

                        {subComment && (
                            <Link href={`/commentDetail/${id}`}>
                                <button className="reComment">
                                    <ReComment />
                                    <span>{`대댓글 ${subComment.count !== 0 ? subComment.count : ''}`}</span>
                                </button>
                            </Link>
                        )}
                    </div>
                </div>
            </section>

            {/* 대댓글 더보기 */}
            {!isTop && totalReComment > 5 && (
                <section css={MoreCommentStyle}>
                    <Link href={`/commentDetail/${id}`}>
                        <button>
                            <CirclePlus />
                            <span>대댓글 더보기</span>
                        </button>
                    </Link>
                </section>
            )}

            {/* 대댓글 */}
            {!isTop &&
                reComments.map((item: ICommentModel) => {
                    return item.deleted === true ? (
                        <p css={DeletedComment} key={item.id} className="reComment">
                            <ReCommentBoard />
                            <span>삭제된 댓글입니다.</span>
                        </p>
                    ) : (
                        <ReplayCommentItem replayCommentItem={item} key={item.id} postWriterId={postWriterId} openDrawer={openDrawer} />
                    );
                })}

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
    );
};
export default CommentItem;
