import { useRouter } from 'next/router';
import { ArrowLeftOutlined } from '@ant-design/icons';

import { HeaderContainer } from './styled';

type Props = {
    title?: string;
};
const Header = ({ title }: Props) => {
    const router = useRouter();

    const onBackPage = () => {
        router.back();
    };

    return (
        <header css={HeaderContainer}>
            <button onClick={onBackPage}>
                <ArrowLeftOutlined style={{ fontSize: 30 }} />
            </button>
            <h1>{title}</h1>
        </header>
    );
};

export default Header;
