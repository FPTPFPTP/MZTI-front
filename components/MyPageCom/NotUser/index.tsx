import Link from 'next/link';
import NotUserMbti from '@assets/icons/notUser_mbti.svg';
import NotUserIcon from '@assets/icons/notUserIcon.svg';

const NotUser = () => {
    return (
        <div className="notUser">
            <div className="notUser__flex">
                <div className="notUser__left">
                    <div className="profile">
                        <NotUserIcon />
                    </div>
                    <p>Lv.0</p>
                </div>
                <div className="notUser__right">
                    <NotUserMbti />
                    <h3>로그인해주세요</h3>
                    <p>로그인을 통해 MZTI의 더 많은 기능을 경험해보세요</p>
                </div>
            </div>
            <Link href="/login" className="loginButton">
                회원가입 / 로그인
            </Link>
        </div>
    );
};

export default NotUser;
