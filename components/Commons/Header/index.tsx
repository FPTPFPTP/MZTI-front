import { ReactNode } from 'react';
import { useRouter } from 'next/router';
import ArrowLeftOutlined from '@assets/icons/header/left_arrow.svg';
import { HeaderContainerStyle, TitleStyle, RightWrapStyle } from './styled';

interface IHeaderBaseProps {
    title?: string;
    rightElement?: ReactNode;
    isPrevBtn?: boolean;
    isReplayComment?: boolean;
    isBorderLine?: boolean;
}

interface IHeaderCallBackProps extends IHeaderBaseProps {
    onClickBackButton: VoidFunction;
}

type THeaderProps = IHeaderBaseProps | IHeaderCallBackProps;

const Header = (props: THeaderProps) => {
    const { title, rightElement, isPrevBtn = true, isBorderLine } = props;
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
        <header css={HeaderContainerStyle(isBorderLine)}>
            {isPrevBtn && (
                <button onClick={onBackPage}>
                    <ArrowLeftOutlined style={{ fontSize: 30 }} />
                </button>
            )}

            {title && <h1 css={TitleStyle}>{title}</h1>}
            {rightElement && <div css={RightWrapStyle}>{rightElement}</div>}
        </header>
    );
};

export default Header;
