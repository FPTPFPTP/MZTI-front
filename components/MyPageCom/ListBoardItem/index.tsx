import Link from 'next/link';
import Image from 'next/image';
import dayjs from 'dayjs';
import xss from 'xss';
import VoteIcon from '@assets/icons/vote.svg';
import HeartSvg from '@assets/icons/mypage/heart.svg';
import MessageSvg from '@assets/icons/mypage/message.svg';
import { getStripIframeTags } from '@/utils/postItem';
import { ListBoardItemStyle } from '../styled';
import { IPostModel } from '@/types/post';

interface IListBoardItemProps {
    item: IPostModel;
    thumbnail?: string;
}

const ListBoardItem = ({ item, thumbnail }: IListBoardItemProps) => {
    const { id, title, updateAt, content, like, command, pollList } = item;

    return (
        <Link href={`/boardDetail/${id}`} css={ListBoardItemStyle}>
            <p className="title">{title}</p>
            <p className="date">{dayjs(updateAt).format('YYYY.MM.DD')}</p>

            <div className="content">
                <div className="line-clamp-5">
                    <p dangerouslySetInnerHTML={{ __html: xss(getStripIframeTags(content)) }}></p>
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
                thumbnail && <Image className={'thumbnail'} src={thumbnail} alt={'게시글 이미지'} layout={'responsive'} width={300} height={250} />
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
        </Link>
    );
};

export default ListBoardItem;
