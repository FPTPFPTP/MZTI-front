import React from 'react';
import { Typography } from 'antd';
import colors from '@styles/color';
import { ListItemWrapCss } from './styled';

interface IListItemProps {
    number: number;
    title: string;
    date: string;
}

const ListItem = (props: IListItemProps) => {
    const { number, title, date } = props;

    return (
        <div css={ListItemWrapCss}>
            <Typography.Text className="id" style={{ color: colors.GRAY_ORIGIN_1 }}>
                {number}
            </Typography.Text>
            <Typography.Text className="title" style={{ color: colors.GRAY_ORIGIN_1 }}>
                {title}
            </Typography.Text>
            <Typography.Text className="date" style={{ color: colors.GRAY_ORIGIN_1 }}>
                {date}
            </Typography.Text>
        </div>
    );
};

export default ListItem;
