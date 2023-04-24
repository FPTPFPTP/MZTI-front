import { ProfileStyle } from '../styled';
import { IUserModel } from '@/types/user';
import Avatar from '@/components/Commons/Avatar';
import { useEffect } from 'react';

interface IProfileProps {
    user: IUserModel;
}

const Profile = ({ user }: IProfileProps) => {
    const { mbti, nickname, intro, profileImage } = user;

    return (
        <section css={ProfileStyle}>
            <div className="photo">
                {/* TODO: 나중에 이미지 태그로 변경  */}
                <Avatar size={83} alt="나의 이미지" src={profileImage ? profileImage : ''} mbti={mbti} />
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
