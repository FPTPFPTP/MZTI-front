import { useMemo, useRef, useState } from 'react';
import Link from 'next/link';
import dayjs from 'dayjs';
import { Avatar } from '@components/Commons';
import { useObserver } from '@/hooks/useObserver';
import colors from '@styles/color';
import { ListItemStyle } from '../styled';
import { IPostMeModel } from '@/types/post';

interface IListItemProps {
    index: number;
    item: IPostMeModel;
}

const ListItem = (props: IListItemProps) => {
    const { index, item } = props;

    const { id, title, content, createAt } = item;

    const target = useRef(null); // 대상 ref

    const [visible, setVisible] = useState<boolean>(false); // DOM을 렌더할 조건
    // 이미지 있을 때 첫번째 이미지만 가져오기
    const thumbnail = useMemo(() => {
        const list = content.match(/(<(img[^>]+)>)/g);
        if (list && list.length) {
            const myRegex = /<img[^>]+src="(https:\/\/[^">]+)"/g;
            const result = myRegex.exec(list[0]);
            return result;
        }
        return null;
    }, [content]);

    // isIntersecting의 경우에 DOM을 마운트 한다.
    const onIntersect = ([entry]: any) => (entry.isIntersecting ? setVisible(true) : setVisible(false));

    useObserver({
        target,
        onIntersect,
        threshold: 0.1, // 화면 양끝에서 10%만 보여져도 onIntersect를 실행한다.
    });

    return (
        <Link href={`/home/${id}`} css={ListItemStyle} ref={target}>
            {visible && (
                <>
                    <span className="id">{index}</span>
                    {thumbnail !== null && <Avatar className={'thumbnail'} src={thumbnail[1]} alt={'게시글 이미지'} size={50} />}

                    <span className="title">{title || content}</span>
                    <span className="date" style={{ color: colors.GRAY_ORIGIN_1 }}>
                        {dayjs(createAt).format('YYYY.MM.DD')}
                    </span>
                </>
            )}
        </Link>
    );
};

export default ListItem;
