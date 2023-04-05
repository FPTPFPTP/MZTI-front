import { useRef, useState } from 'react';
import Link from 'next/link';
import dayjs from 'dayjs';
import { Avatar } from '@components/Commons';
import { useObserver } from '@/hooks/useObserver';
import colors from '@styles/color';
import { ListItemStyle } from '../styled';
import xss from 'xss';

interface IListItemProps {
    id: number;
    content: string;
    createAt: string;
    thumbnail?: string;
}

const ListItem = (props: IListItemProps) => {
    const { id, content, createAt, thumbnail } = props;

    const target = useRef(null); // 대상 ref
    const [visible, setVisible] = useState<boolean>(false); // DOM을 렌더할 조건

    // isIntersecting의 경우에 DOM을 마운트 한다.
    const onIntersect = ([entry]: any) => (entry.isIntersecting ? setVisible(true) : setVisible(false));

    useObserver({
        target,
        onIntersect,
        threshold: 0.1, // 화면 양끝에서 10%만 보여져도 onIntersect를 실행한다.
    });

    const convertContent = content.split('</p>')[0];
    console.log('convertContent', convertContent);

    return (
        <Link href={`/home/${id}`} css={ListItemStyle} ref={target}>
            {visible && (
                <>
                    {thumbnail && <Avatar className={'thumbnail'} src={thumbnail} alt={'게시글 이미지'} size={40} />}

                    <span
                        className="title"
                        dangerouslySetInnerHTML={{
                            __html: xss(convertContent),
                        }}
                    />
                    <span className="date" style={{ color: colors.GRAY_ORIGIN_1 }}>
                        {dayjs(createAt).format('YYYY.MM.DD')}
                    </span>
                </>
            )}
        </Link>
    );
};

export default ListItem;
