import React, { PropsWithChildren } from 'react';
import { ListBoxCss } from './styled';

interface IListBoxProps {}

const ListBox = (props: PropsWithChildren<IListBoxProps>) => {
    const { children, ...rest } = props;

    return (
        <div css={ListBoxCss} {...rest}>
            {children}
        </div>
    );
};

export default ListBox;
