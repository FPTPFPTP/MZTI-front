import { useState } from 'react';
import { Avatar } from '@/components/Commons';
import { timeForToday } from '@/utils/time';
import { ItemHeaderStyle, PostMore } from '../styled';
import MoreButton from '@assets/icons/detailPost/moreButton.svg';
import { IWriterModel } from '@/types/post';
import MoreDrawer from '@/components/Commons/MoreDrawer';

interface IItemHeader {
    writer: IWriterModel;
    createAt: string;
}

const ItemHeader = ({ writer, createAt }: IItemHeader) => {
    const { nickname, mbti, level, profileImage } = writer;

    const [isVisible, setIsVisible] = useState<boolean>(false);
    const openDrawer = () => setIsVisible(true);
    const closeDrawer = () => setIsVisible(false);

    return (
        <>
            <section css={ItemHeaderStyle}>
                <div className="userInfo">
                    <div className="userInfo__profile">
                        <Avatar src={profileImage} alt={nickname} size={90} />
                    </div>
                    <div className="userInfo__Text">
                        <div className="userInfo__Text--layout">
                            <div>
                                <span className="mbti">{mbti}</span>
                                <span className="level">Lv.{level}</span>
                            </div>

                            <button onClick={openDrawer}>
                                <MoreButton />
                            </button>
                        </div>

                        <div className="nickname_time">
                            <p className="nickname">{nickname}</p>
                            <p className="time">{timeForToday(createAt)}</p>
                        </div>
                    </div>
                </div>
            </section>

            <MoreDrawer desc="게시글" onClick={closeDrawer} isVisible={isVisible} />
        </>
    );
};

export default ItemHeader;
