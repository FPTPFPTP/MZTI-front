import React from 'react';
import { Button } from '@components/Commons';
import colors from '@styles/color';
import { EmptyWrapCss } from './styled';

interface IEmptyProps {
    title: string;
    subTitle: string;
    buttonTitle: string;
    href: string;
}

const Empty = (props: IEmptyProps) => {
    const { title, subTitle, buttonTitle } = props;
    return (
        <div css={EmptyWrapCss}>
            <p className="title">{title}</p>
            <p className="sub_title" style={{ color: colors.GRAY_ORIGIN_1 }}>
                {subTitle}
            </p>
            <Button buttonStyle={'link'} href={'/'}>
                {buttonTitle}
            </Button>
        </div>
    );
};

export default Empty;
