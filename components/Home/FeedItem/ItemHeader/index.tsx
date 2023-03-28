import { useState } from 'react';
import { Avatar } from '@/components/Commons';
import { timeForToday } from '@/utils/time';
import { ItemHeaderStyle, PostMore } from '../styled';
import Drawer from 'react-bottom-drawer';
import MoreButton from '@assets/icons/detailPost/moreButton.svg';
import Link from 'next/link';
import { IWriterModel } from '@/types/post';

interface IItemHeader {
    writer: IWriterModel;
    createAt: string;
}

const ItemHeader = ({ writer, createAt }: IItemHeader) => {
    const { nickname, mbti, level, profileImage } = writer;

    const [isVisible, setIsVisible] = useState(false);
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

            <nav css={PostMore}>
                <Drawer duration={250} hideScrollbars={true} onClose={closeDrawer} isVisible={isVisible} className="postDrawer">
                    <h3>더보기</h3>

                    <ul>
                        <li>
                            <Link href="/mypage/feedback">게시글 신고</Link>
                        </li>
                        <li className="none">글쓴이 차단 (추후 오픈 예정)</li>
                    </ul>
                </Drawer>
            </nav>
        </>
    );
};

export default ItemHeader;
