import { useRef, useState } from 'react';
import Link from 'next/link';
import { Typography } from 'antd';
import { Avatar } from '@components/Commons';
import { useObserver } from '@/hooks/useObserver';
import colors from '@styles/color';
import { ListItemWrapCss } from './styled';

interface IListItemProps {
    id: string;
    title: string;
    date: string;
    number?: number;
    thumbnail?: string;
}

const ListItem = (props: IListItemProps) => {
    const { id, number, title, date, thumbnail } = props;

    const target = useRef(null); // 대상 ref
    const [visible, setVisible] = useState(false); // DOM을 렌더할 조건

    // isIntersecting의 경우에 DOM을 마운트 한다.
    const onIntersect = ([entry]: any) => (entry.isIntersecting ? setVisible(true) : setVisible(false));

    useObserver({
        target,
        onIntersect,
        threshold: 0.1, // 화면 양끝에서 10%만 보여져도 onIntersect를 실행한다.
    });

    return (
        <Link href={`/post/${id}`} css={ListItemWrapCss} ref={target}>
            {visible && (
                <>
                    {thumbnail && <Avatar className={'thumbnail'} src={thumbnail} alt={'게시글 이미지'} size={40} />}
                    {number && (
                        <Typography.Text className="id" style={{ color: colors.GRAY_ORIGIN_1 }}>
                            {number}
                        </Typography.Text>
                    )}

                    <Typography.Text className="title" style={{ color: colors.GRAY_ORIGIN_1 }}>
                        {title}
                    </Typography.Text>
                    <Typography.Text className="date" style={{ color: colors.GRAY_ORIGIN_1 }}>
                        {date}
                    </Typography.Text>
                </>
            )}
        </Link>
    );
};

export default ListItem;
