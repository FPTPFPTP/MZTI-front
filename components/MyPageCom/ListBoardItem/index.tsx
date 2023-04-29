import { useRef, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import dayjs from 'dayjs';
import xss from 'xss';
import VoteIcon from '@assets/icons/vote.svg';
import HeartSvg from '@assets/icons/mypage/heart.svg';
import MessageSvg from '@assets/icons/mypage/message.svg';
import { useObserver } from '@/hooks/useObserver';
import { ListBoardItemStyle } from '../styled';
import { IPostModel } from '@/types/post';

interface IListBoardItemProps {
    item: IPostModel;
    thumbnail?: string;
}

const ListBoardItem = ({ item, thumbnail }: IListBoardItemProps) => {
    const { id, title, updateAt, content, like, command, pollList } = item;
    const target = useRef(null); // 대상 ref

    const [visible, setVisible] = useState<boolean>(false); // DOM을 렌더할 조건

    const stripIframeTags = (content: string) => {
        const regex = /<iframe.*<\/iframe>/g;
        content = content.replace(regex, '');

        return content;
    };

    // isIntersecting의 경우에 DOM을 마운트 한다.
    const onIntersect = ([entry]: any) => (entry.isIntersecting ? setVisible(true) : setVisible(false));

    useObserver({
        target,
        onIntersect,
        threshold: 0.1, // 화면 양끝에서 10%만 보여져도 onIntersect를 실행한다.
    });

    return (
        <Link href={`/boardDetail/${id}`} css={ListBoardItemStyle} ref={target}>
            {visible && (
                <>
                    <p className="title">{title}</p>
                    <p className="date">{dayjs(updateAt).format('YYYY.MM.DD')}</p>

                    <div className="content">
                        <div className="line-clamp-5">
                            <p dangerouslySetInnerHTML={{ __html: xss(stripIframeTags(content)) }}></p>
                        </div>
                        {/* TODO : 더보기 구현 실패해서 추후 구현 예정*/}
                        {/* <button className="show-more">더보기</button> */}
                    </div>

                    {pollList.length ? (
                        <div className="vote">
                            <div className="vote__top">
                                <VoteIcon />
                                <p>투표</p>
                            </div>

                            <p>{pollList[0].title}</p>
                        </div>
                    ) : (
                        thumbnail && <Image className={'thumbnail'} src={thumbnail} alt={'게시글 이미지'} width={300} height={250} />
                    )}
                    <div className="bottom">
                        <div>
                            <HeartSvg />
                            {like.count}
                        </div>
                        <div>
                            <MessageSvg />
                            {command.count}
                        </div>
                    </div>
                </>
            )}
        </Link>
    );
};

export default ListBoardItem;
