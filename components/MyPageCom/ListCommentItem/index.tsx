import Link from 'next/link';
import Image from 'next/image';
import dayjs from 'dayjs';
import HeartSvg from '@assets/icons/mypage/heart.svg';
// import MessageSvg from '@assets/icons/mypage/message.svg';
import { ListCommnetItemStyle } from '../styled';
import { ICommentModel } from '@/types/post';

interface IListCommentItemProps {
    item: ICommentModel;
}

const ListCommentItem = ({ item }: IListCommentItemProps) => {
    const { postId, comment, updateAt, like, image } = item;

    return (
        <Link href={`/boardDetail/${postId}`} css={ListCommnetItemStyle}>
            <p className="title">{comment}</p>
            {image && <Image className={'thumbnail'} src={image} alt={'댓글 이미지'} layout={'responsive'} width={300} height={250} />}
            <p className="date">{dayjs(updateAt).format('YYYY.MM.DD')}</p>
            <div className="bottom">
                <div>
                    <HeartSvg />
                    {like.count}
                </div>
                {/* {sub && (
                            <div>
                                <MessageSvg />
                                {subComment.count}
                            </div>
                        )} */}
            </div>
        </Link>
    );
};

export default ListCommentItem;
