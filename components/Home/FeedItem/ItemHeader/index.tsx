import React, { useState, useCallback } from 'react';
import { Avatar } from '@/components/Commons';
import { timeForToday } from '@/utils/time';
import { WriterProps } from '@/utils/types';
import { ItemHeaderStyle, PostMore } from '../styled';
import Drawer from 'react-bottom-drawer';
import MoreButton from '@assets/icons/detailPost/moreButton.svg';
import Link from 'next/link';

const ItemHeader = ({ nickname, mbti, level, profileImage, moreBtn = true, createAt }: WriterProps) => {
    const [isVisible, setIsVisible] = useState(false);
    const openDrawer = useCallback(() => setIsVisible(true), []);
    const closeDrawer = useCallback(() => setIsVisible(false), []);

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
