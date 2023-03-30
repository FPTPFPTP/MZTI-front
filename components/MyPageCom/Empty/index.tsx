import React from 'react';
import { Button } from '@components/Commons';
import colors from '@styles/color';
import { EmptyWrapCss } from './styled';

interface IEmptyProps {
    title: string; // 제목
    subTitle: string; // desc
    buttonTitle: string; // 버튼명
    href?: string; // 링크
    onClick?: () => void;
}

/**
 * 게시물이나 해당 콘텐츠가 없을 경우 사용되는 컴포넌트
 * @param props {IEmptyProps}
 * @returns
 */
const Empty = (props: IEmptyProps) => {
    const { title, subTitle, buttonTitle, onClick, href } = props;
    return (
        <div css={EmptyWrapCss}>
            <p className="title">{title}</p>
            <p className="sub_title" style={{ color: colors.GRAY_ORIGIN_1 }}>
                {subTitle}
            </p>

            <Button buttonStyle={'black'} href={href} onClick={onClick}>
                {buttonTitle}
            </Button>
        </div>
    );
};

export default Empty;
