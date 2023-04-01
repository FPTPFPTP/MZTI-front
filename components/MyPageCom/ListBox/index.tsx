import React, { PropsWithChildren } from 'react';
import { ListBoxStyle } from '../styled';

interface IListBoxProps {}

const ListBox = (props: PropsWithChildren<IListBoxProps>) => {
    const { children, ...rest } = props;

    return (
        <div css={ListBoxStyle} {...rest}>
            {children}
        </div>
    );
};

export default ListBox;
