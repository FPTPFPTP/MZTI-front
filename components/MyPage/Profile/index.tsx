import { ProfileStyle } from './styled';

const Profile = () => {
    return (
        <section css={ProfileStyle}>
            <div className="photo">
                {/* TODO: 나중에 이미지 태그로 변경  */}
                <p>프사</p>
                <span>Lv.1</span>
            </div>
            <div>
                <p className="mbti">ENTP</p>
                <h3 className="nickname">인프제콜렉터</h3>
                <p className="desc">눈에 보이는 INFJ는 다 수집합니다. MBTI 뇌절 전문가😎</p>
            </div>
        </section>
    );
};

export default Profile;
