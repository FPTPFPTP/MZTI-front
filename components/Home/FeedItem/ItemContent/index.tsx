import { ItemContentStyle } from '../styled';
import { MdHowToVote } from 'react-icons/Md';
import Image from 'next/image';

const ItemContent = () => {
    return (
        <section css={ItemContentStyle}>
            <h4>나 엔팁인데 진심 인프제 좋아</h4>
            <p>본문은 작은글씨 이정도 글씨로 두줄 분량</p>

            {/* 투표기능이 있을경우 */}
            <div className="vote">
                <MdHowToVote />
                <h5>인프제 VS 인티제남, 누가 낫냐</h5>
            </div>

            {/* 이미지가 있을 경우 */}
            <Image src="/images/1.jpeg" alt="" width={600} height={400} />

            {/* 해시태그 있을 경우 */}
            <ul className="hashTag">
                <li>#INFJ</li>
                <li>#인프제</li>
                <li>#카톡상담</li>
            </ul>
        </section>
    );
};

export default ItemContent;
