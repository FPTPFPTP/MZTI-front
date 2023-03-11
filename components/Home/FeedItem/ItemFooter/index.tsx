import { useState } from 'react';
import { VscComment } from 'react-icons/Vsc';
import { AiOutlineHeart, AiFillHeart } from 'react-icons/Ai';
import { BsBookmark, BsBookmarkFill } from 'react-icons/Bs';
import { ItemFooterStyle } from '../styled';

const ItemFooter = () => {
    const [isLike, setIsLike] = useState<boolean>(false);
    const [isBookMark, setIsBookMark] = useState<boolean>(false);

    const handleLike = () => [setIsLike((isLike) => !isLike)];

    const handleBookMark = () => [setIsBookMark((isBookMark) => !isBookMark)];
    return (
        <section css={ItemFooterStyle}>
            {isLike ? (
                <button onClick={handleLike}>
                    <AiFillHeart />
                    <span>35</span>
                </button>
            ) : (
                <button onClick={handleLike}>
                    <AiOutlineHeart />
                    <span>35</span>
                </button>
            )}

            <button>
                <VscComment />
                <span>35</span>
            </button>

            {isBookMark ? (
                <button onClick={handleBookMark}>
                    <BsBookmarkFill />
                    <span>35</span>
                </button>
            ) : (
                <button onClick={handleBookMark}>
                    <BsBookmark />
                    <span>35</span>
                </button>
            )}
        </section>
    );
};

export default ItemFooter;
