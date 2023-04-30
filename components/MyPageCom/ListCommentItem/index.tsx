import { useRef, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import dayjs from 'dayjs';
import HeartSvg from '@assets/icons/mypage/heart.svg';
// import MessageSvg from '@assets/icons/mypage/message.svg';
import { useObserver } from '@/hooks/useObserver';
import { ListCommnetItemStyle } from '../styled';
import { ICommentModel } from '@/types/post';

interface IListCommentItemProps {
    item: ICommentModel;
}

const ListCommentItem = ({ item }: IListCommentItemProps) => {
    const { postId, comment, updateAt, like, image, sub, subComment } = item;
    const target = useRef(null); // 대상 ref

    const [visible, setVisible] = useState<boolean>(false); // DOM을 렌더할 조건

    // isIntersecting의 경우에 DOM을 마운트 한다.
    const onIntersect = ([entry]: any) => (entry.isIntersecting ? setVisible(true) : setVisible(false));

    useObserver({
        target,
        onIntersect,
        threshold: 0.1, // 화면 양끝에서 10%만 보여져도 onIntersect를 실행한다.
    });

    return (
        <Link href={`/boardDetail/${postId}`} css={ListCommnetItemStyle} ref={target}>
            {visible && (
                <>
                    <p className="title">{comment}</p>
                    {image && <Image className={'thumbnail'} src={image} alt={'댓글 이미지'} width={300} height={250} />}
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
                </>
            )}
        </Link>
    );
};

export default ListCommentItem;
