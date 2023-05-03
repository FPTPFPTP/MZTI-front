import { ProfileStyle } from '../styled';
import { IUserModel } from '@/types/user';
import Avatar from '@/components/Commons/Avatar';
import { getMbtiColor } from '@utils/postItem';

interface IProfileProps {
    user: IUserModel;
}

const Profile = ({ user }: IProfileProps) => {
    const { mbti, nickname, profileImage, level } = user;

    return (
        <section css={ProfileStyle}>
            <div className="photo">
                {/* TODO: 나중에 이미지 태그로 변경  */}
                <Avatar size={83} alt="나의 이미지" src={profileImage ? profileImage : ''} mbti={mbti} />
            </div>
            <div>
                <div className="mbtiNlevel">
                    <p className="mbti" style={{ background: getMbtiColor(mbti) }}>
                        {mbti}
                    </p>
                    <p className="level">Lv.1</p>
                </div>

                <p className="nickname">{nickname}</p>
            </div>
        </section>
    );
};

export default Profile;
