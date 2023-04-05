import Drawer from 'react-bottom-drawer';
import Link from 'next/link';
import { PostMore } from './styled';

export enum EType {
    WRITE = 'write',
    COMMENT = 'comment',
    WRITET_TIPOFF = 'write_tipoff', // 신고하기
    COMMENT_TIPOFF = 'comment_tipoff', // 신고하기
}

interface MoreDrawerProps {
    isVisible: boolean;
    onClick: () => void;
    type: EType;
    writerID: number;
    handlePostDelete?: () => void;
    handleCommentDelete?: () => void;
}

const MoreDrawer = ({ isVisible, onClick, type, writerID, handlePostDelete, handleCommentDelete }: MoreDrawerProps) => {
    const Content = ({ type }: { type: EType }) => {
        if (type === EType.COMMENT) {
            return (
                <ul>
                    <li>
                        <Link href={`/write/${writerID}`}>댓글 수정하기</Link>
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
                        <Link href={`/write/${writerID}`}>게시글 신고하기</Link>
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
                        <Link href={`/write/${writerID}`}>댓글 신고하기</Link>
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
