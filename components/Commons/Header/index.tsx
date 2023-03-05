import { ReactNode } from 'react';
import { useRouter } from 'next/router';

import ArrowLeftOutlined from '@assets/icons/left_arrow.svg';
import { HeaderContainer, TitleStyle } from './styled';

interface IHeaderBaseProps {
    title?: string;
    rightElement?: ReactNode;
    rightLink?: ReactNode;
    linkHref?: string;
}

interface IHeaderCallBackProps extends IHeaderBaseProps {
    onClickBackButton: VoidFunction;
}

type THeaderProps = IHeaderBaseProps | IHeaderCallBackProps;

const Header = (props: THeaderProps) => {
    const { title, rightElement } = props;
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
            <button onClick={onBackPage}>
                <ArrowLeftOutlined style={{ fontSize: 30 }} />
            </button>

            {title && <h1 css={TitleStyle}>{title}</h1>}
            {rightElement && <>{rightElement}</>}
        </header>
    );
};

export default Header;
