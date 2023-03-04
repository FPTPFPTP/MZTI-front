import { ReactNode } from 'react';
import { useRouter } from 'next/router';

import ArrowLeftOutlined from '@assets/icons/left_arrow.svg';
import { HeaderContainer, HeadingCss } from './styled';

interface IHeaderBaseProps {
    title?: string;
    rightElement?: ReactNode;
}

interface IHeaderCallBackProps extends IHeaderBaseProps {
    onClickBackButton: VoidFunction;
}

type THeaderProps = IHeaderBaseProps | IHeaderCallBackProps;

const Header = (props: THeaderProps) => {
    const { title, rightElement } = props;
    const { onClickBackButton } = props as IHeaderCallBackProps;

    const router = useRouter();

    const onBackPage = () => {
        if (onClickBackButton) {
            onClickBackButton();
        } else {
            router.back();
        }
    };

    return (
        <header css={HeaderContainer}>
            <ArrowLeftOutlined style={{ fontSize: 30 }} onClick={onBackPage} />
            {title && <h1 css={HeadingCss}>{title}</h1>}
            {rightElement && <>{rightElement}</>}
        </header>
    );
};

export default Header;
