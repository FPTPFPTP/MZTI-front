import NotUserMbti from '@assets/icons/notUser_mbti.svg';
import NotUserIcon from '@assets/icons/notUserIcon.svg';
import { Button } from '@components/Commons';
import { useRouter } from 'next/router';

const NotUser = () => {
    const router = useRouter();

    const handleStart = () => {
        router.replace('/login');
    };
    return (
        <div className="notUser">
            <div className="notUser__flex">
                <div className="notUser__left">
                    <div className="profile">
                        <NotUserIcon />
                    </div>
                </div>
                <div className="notUser__right">
                    <div className="notUser__right--flex">
                        <p className="mbti">MBTI</p>
                        <p className="lv">Lv.0</p>
                    </div>
                    <h3>로그인이 필요해요</h3>
                </div>
            </div>

            <Button buttonStyle={'base'} onClick={handleStart}>
                회원가입 / 로그인
            </Button>
        </div>
    );
};

export default NotUser;
