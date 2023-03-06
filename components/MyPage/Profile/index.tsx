import { ProfileStyle } from './styled';
import { IUserModel } from '@/types/user';

const Profile = ({ mbti, nickname, intro }: IUserModel) => {
    return (
        <section css={ProfileStyle}>
            <div className="photo">
                {/* TODO: 나중에 이미지 태그로 변경  */}
                <p>프사</p>
                <span>Lv.1</span>
            </div>
            <div>
                <p className="mbti">{mbti}</p>
                <p className="nickname">{nickname}</p>
                <p className="desc">{intro}</p>
            </div>
        </section>
    );
};

export default Profile;
