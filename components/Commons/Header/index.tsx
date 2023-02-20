import { useRouter } from 'next/router';
import { ArrowLeftOutlined } from '@ant-design/icons';

import { HeaderContainer, HeaderItem } from './styled';

const Header = () => {
    const router = useRouter();

    const onBackPage = () => {
        router.back();
    };

    return (
        <header css={HeaderContainer}>
            <div css={HeaderItem(1)} onClick={onBackPage}>
                <ArrowLeftOutlined style={{ fontSize: 30 }} />
            </div>
        </header>
    );
};

export default Header;
