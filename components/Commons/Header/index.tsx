import { ReactNode } from 'react';
import { useRouter } from 'next/router';
import ArrowLeftOutlined from '@assets/icons/header/left_arrow.svg';
import { HeaderContainerStyle, TitleStyle, RightWrapStyle } from './styled';
import { useSetRecoilState, useResetRecoilState } from 'recoil';
import { replayCommentState, replayCommentViewState } from '@/recoil/atom/user';

interface IHeaderBaseProps {
    title?: string;
    rightElement?: ReactNode;
    isPrevBtn?: boolean;
    isReplayComment?: boolean;
}

interface IHeaderCallBackProps extends IHeaderBaseProps {
    onClickBackButton: VoidFunction;
}

type THeaderProps = IHeaderBaseProps | IHeaderCallBackProps;

const Header = (props: THeaderProps) => {
    const { title, rightElement, isPrevBtn = true, isReplayComment = false } = props;
    const { onClickBackButton } = props as IHeaderCallBackProps;
    const router = useRouter();
    const replayCommentView = useSetRecoilState(replayCommentState);
    const resetReCommentView = useResetRecoilState(replayCommentViewState);
    // 뒤로가기
    const onBackPage = () => {
        if (onClickBackButton) {
            onClickBackButton();
        } else {
            router.back();
        }
    };

    // 댓글 리스트로 돌아가기
    const onBackCommentList = () => {
        replayCommentView(false);
        resetReCommentView();
    };

    return (
        <header css={HeaderContainerStyle}>
            {isPrevBtn && (
                <button onClick={onBackPage}>
                    <ArrowLeftOutlined style={{ fontSize: 30 }} />
                </button>
            )}

            {isReplayComment && (
                <button onClick={onBackCommentList}>
                    <ArrowLeftOutlined style={{ fontSize: 30 }} />
                </button>
            )}

            {title && <h1 css={TitleStyle}>{title}</h1>}
            {rightElement && <div css={RightWrapStyle}>{rightElement}</div>}
        </header>
    );
};

export default Header;
