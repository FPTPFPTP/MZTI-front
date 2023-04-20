import Drawer from 'react-bottom-drawer';
import Link from 'next/link';
import { PostMore } from './styled';
import { useRecoilValue } from 'recoil';
import { replayCommentId } from '@/recoil/atom/user';

export enum EType {
    WRITE = 'write',
    COMMENT = 'comment',
    WRITET_TIPOFF = 'write_tipoff', // 신고하기
    COMMENT_TIPOFF = 'comment_tipoff', // 신고하기
}

interface IMoreDrawerProps {
    isVisible: boolean;
    onClick: () => void;
    type: EType;
    writerID: number; // 닉네임
    handlePostDelete?: () => void; // 게시글 삭제
    handleCommentDelete?: () => void; // 댓글 삭제
    commentId?: number; // 댓글 아이디
    handleCommentEdit?: () => void; // 댓글 수정
}

const MoreDrawer = ({ isVisible, onClick, type, writerID, handlePostDelete, handleCommentDelete, handleCommentEdit }: IMoreDrawerProps) => {
    const Content = ({ type }: { type: EType }) => {
        if (type === EType.COMMENT) {
            return (
                <ul>
                    <li>
                        <button onClick={handleCommentEdit}>댓글 수정하기</button>
                    </li>
                    <li>
                        <button onClick={handleCommentDelete}>댓글 삭제하기</button>
                    </li>
                </ul>
            );
        } else if (type === EType.WRITE) {
            return (
                <ul>
                    <li>
                        <Link href={`/write/${writerID}`}>게시글 수정하기</Link>
                    </li>
                    <li>
                        <button onClick={handlePostDelete}>게시글 삭제하기</button>
                    </li>
                </ul>
            );
        } else if (type === EType.WRITET_TIPOFF) {
            return (
                <ul>
                    <li>
                        <Link href={`/report/write-${writerID}`}>게시글 신고하기</Link>
                    </li>
                    <li className="none">
                        <button>글쓴이 차단 (추후 오픈 예정)</button>
                    </li>
                </ul>
            );
        } else if (type === EType.COMMENT_TIPOFF) {
            return (
                <ul>
                    <li>
                        <Link href={`/report/comment-${writerID}`}>댓글 신고하기</Link>
                    </li>
                    <li className="none">
                        <button>글쓴이 차단 (추후 오픈 예정)</button>
                    </li>
                </ul>
            );
        } else {
            return null;
        }
    };

    return (
        <nav css={PostMore}>
            <Drawer duration={250} hideScrollbars={true} onClose={onClick} isVisible={isVisible} className="postDrawer">
                <h3>더보기</h3>

                <Content type={type} />
            </Drawer>
        </nav>
    );
};

export default MoreDrawer;
