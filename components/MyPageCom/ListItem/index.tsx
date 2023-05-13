import Link from 'next/link';
import dayjs from 'dayjs';
import { Avatar } from '@components/Commons';
import colors from '@styles/color';
import { ListItemStyle } from '../styled';
import { IPostMeModel } from '@/types/post';

interface IListItemProps {
    item: IPostMeModel;
    url: string;
    thumbnail?: string;
}

const ListItem = (props: IListItemProps) => {
    const { item, url, thumbnail } = props;

    const { title, content, createAt } = item;

    return (
        <Link href={url} css={ListItemStyle}>
            {thumbnail && <Avatar className={'thumbnail'} src={thumbnail} alt={'게시글 이미지'} size={50} />}
            <span className="title">{title || content}</span>
            <span className="date" style={{ color: colors.GRAY_ORIGIN_1 }}>
                {dayjs(createAt).format('YYYY.MM.DD')}
            </span>
        </Link>
    );
};

export default ListItem;
