import Link from 'next/link';
import { WriteStyle } from './styled';

type Props = {
    write: number; // 작성한 글
    comment: number; // 작성한 댓글
    recommend: number; // 받은 추천
};
const Write = ({ write, comment, recommend }: Props) => {
    return (
        <ul css={WriteStyle}>
            <li>
                <p className="writeTitle">작성한 글</p>
                <Link href="/mypage/writeList">
                    <p className="writeNum">{write}</p>
                </Link>
            </li>
            <li>
                <p className="writeTitle">작성한 댓글</p>
                <Link href="/mypage/writeCommentList">
                    <p className="writeNum">{comment}</p>
                </Link>
            </li>
            <li>
                <p className="writeTitle">받은 추천</p>
                <p className="writeNum">{recommend}</p>
            </li>
        </ul>
    );
};

export default Write;
