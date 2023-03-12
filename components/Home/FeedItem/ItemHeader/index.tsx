import { Avatar } from '@/components/Commons';
import { useState } from 'react';
import { RiMoreFill } from 'react-icons/Ri';
import { ItemHeaderStyle } from '../styled';

const ItemHeader = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const handelMore = () => {
        setIsOpen((isOpen) => !isOpen);
    };
    return (
        <>
            <section css={ItemHeaderStyle}>
                <div className="userInfo">
                    <p className="userInfo__profile">profile</p>
                    <div className="userInfo__Text">
                        <p>
                            <span className="mbti">ENTP</span>
                            <span>Lv.2</span>
                        </p>
                        <p>인프제콜렉터</p>
                    </div>
                </div>

                <div className="moreButton">
                    <button onClick={handelMore}>
                        <RiMoreFill />
                    </button>

                    {isOpen && (
                        <div className="moreButton__box">
                            <button>신고 / 차단</button>
                        </div>
                    )}
                </div>
            </section>
        </>
    );
};

export default ItemHeader;
