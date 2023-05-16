import Drawer from 'react-bottom-drawer';
import Link from 'next/link';
import { PostMore } from './styled';
import { useRecoilValue } from 'recoil';
import { postEditState } from '@/recoil/atom/post';
import { EActionEditType } from '@/types/post';

interface IMoreDrawerProps {
    isVisible: boolean;
    onClose: () => void;
    handleTargetDelete?: (id: number, type: EActionEditType) => void;
    handleTargetEdit?: (id: number, type: EActionEditType) => void;
}

const MoreDrawer = ({ isVisible, onClose, handleTargetDelete, handleTargetEdit }: IMoreDrawerProps) => {
    const postEdit = useRecoilValue(postEditState);

    const Content = ({ type }: { type: EActionEditType }) => {
        if (type === EActionEditType.COMMENT) {
            return (
                <ul>
                    <li>
                        <button onClick={() => handleTargetEdit && handleTargetEdit(postEdit.id, type)}>댓글 수정하기</button>
                    </li>
                    <li>
                        <button onClick={() => handleTargetDelete && handleTargetDelete(postEdit.id, type)}>댓글 삭제하기</button>
                    </li>
                </ul>
            );
        } else if (type === EActionEditType.WRITE) {
            return (
                <ul>
                    <li>
                        <Link href={`/write/${postEdit.id}`}>게시글 수정하기</Link>
                    </li>
                    <li>
                        <button onClick={() => handleTargetDelete && handleTargetDelete(postEdit.id, type)}>게시글 삭제하기</button>
                    </li>
                </ul>
            );
        } else if (type === EActionEditType.WRITET_TIPOFF) {
            return (
                <ul>
                    <li>
                        <Link href={`/report/write-${postEdit.id}`}>게시글 신고하기</Link>
                    </li>
                </ul>
            );
        } else if (type === EActionEditType.COMMENT_TIPOFF) {
            return (
                <ul>
                    <li>
                        <Link href={`/report/comment-${postEdit.id}`}>댓글 신고하기</Link>
                    </li>
                </ul>
            );
        } else {
            return null;
        }
    };

    return (
        <nav css={PostMore}>
            <Drawer duration={250} hideScrollbars={true} onClose={onClose} isVisible={isVisible} className="postDrawer">
                <h3>더보기</h3>

                <Content type={postEdit.editActionType} />
            </Drawer>
        </nav>
    );
};

export default MoreDrawer;
