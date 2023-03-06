import React from 'react';
import Link from 'next/link';
import { Typography } from 'antd';
import { Avatar } from '@components/Commons';
import colors from '@styles/color';
import { ListItemWrapCss } from './styled';

interface IListItemProps {
    id: string;
    title: string;
    date: string;
    thumbnail: string;
}

const ListItem = (props: IListItemProps) => {
    const { id, title, date, thumbnail } = props;

    return (
        <Link href={`/post/${id}`} css={ListItemWrapCss}>
            <Avatar className={'thumbnail'} src={thumbnail} alt={'게시글 이미지'} size={40} />
            <Typography.Text className="title" style={{ color: colors.GRAY_ORIGIN_1 }}>
                {title}
            </Typography.Text>
            <Typography.Text className="date" style={{ color: colors.GRAY_ORIGIN_1 }}>
                {date}
            </Typography.Text>
        </Link>
    );
};

export default ListItem;
