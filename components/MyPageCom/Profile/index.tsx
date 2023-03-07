import { ProfileStyle } from './styled';
import { IUserModel } from '@/types/user';
import Avatar from '@/components/Commons/Avatar';
import { useRecoilValue } from 'recoil';
import { myPageInfo } from '@/recoil/atom/user';

const Profile = ({ mbti, nickname, intro }: IUserModel) => {
    const myProfile = useRecoilValue(myPageInfo);

    return (
        <section css={ProfileStyle}>
            <div className="photo">
                {/* TODO: 나중에 이미지 태그로 변경  */}
                <Avatar size={200} alt="나의 이미지" src={myProfile.profileImage ? myProfile.profileImage : ''} />
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
