import { ReactNode } from 'react';
import { useRouter } from 'next/router';
import { FaBell, FaUserCircle } from 'react-icons/fa';
import ArrowLeftOutlined from '@assets/icons/left_arrow.svg';
import { HeaderContainer, HomeMenu, TitleStyle } from './styled';
import Link from 'next/link';
interface IHeaderBaseProps {
    title?: string;
    rightElement?: ReactNode;
    home?: ReactNode;
}

interface IHeaderCallBackProps extends IHeaderBaseProps {
    onClickBackButton: VoidFunction;
}

type THeaderProps = IHeaderBaseProps | IHeaderCallBackProps;

const Header = (props: THeaderProps) => {
    const { title, rightElement, home } = props;
    const { onClickBackButton } = props as IHeaderCallBackProps;

    const router = useRouter();

    // 뒤로가기
    const onBackPage = () => {
        if (onClickBackButton) {
            onClickBackButton();
        } else {
            router.back();
        }
    };

    return (
        <header css={HeaderContainer}>
            {home ? (
                <div css={HomeMenu}>
                    <h1>MZTI</h1>

                    <div className="right">
                        <Link href="/alarm" className="alarm">
                            <FaBell />
                        </Link>
                        <Link href="/mypage">
                            <FaUserCircle />
                        </Link>
                    </div>
                </div>
            ) : (
                <>
                    <ArrowLeftOutlined style={{ fontSize: 30 }} onClick={onBackPage} />
                    {title && <h1 css={TitleStyle}>{title}</h1>}
                    {rightElement && <>{rightElement}</>}
                </>
            )}
        </header>
    );
};

export default Header;
