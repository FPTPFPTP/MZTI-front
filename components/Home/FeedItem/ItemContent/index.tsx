import { ItemContentStyle } from '../styled';
import { MdHowToVote } from 'react-icons/Md';
import Image from 'next/image';
import Link from 'next/link';

const ItemContent = () => {
    return (
        <section css={ItemContentStyle}>
            <h4>나 엔팁인데 진심 인프제 좋아</h4>
            <p>본문은 작은글씨 이정도 글씨로 두줄 분량</p>

            {/* 이미지가 있을 경우 */}
            <Image src="/images/1.jpeg" alt="" width={600} height={400} />

            {/* 투표기능이 있을경우 */}
            <div className="vote">
                <MdHowToVote />
                <h5>인프제 VS 인티제남, 누가 낫냐</h5>
            </div>

            {/* 해시태그 있을 경우 */}
            <ul className="hashTag">
                <li>
                    <Link href="">#INFJ</Link>
                </li>
                <li>
                    <Link href="">#인프제</Link>
                </li>
                <li>
                    <Link href="">#카톡상담</Link>
                </li>
            </ul>
        </section>
    );
};

export default ItemContent;
