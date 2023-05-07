import Link from 'next/link';
import { useState } from 'react';
import { Modal } from '@components/Commons';
import SearchIcon from '@assets/icons/header/search.svg';
import AlarmIcon from '@assets/icons/header/alarm.svg';
import MyPageIcon from '@assets/icons/header/mypage.svg';
import Logo from '@assets/icons/common/logo.svg';
import { HomeMenuStyle } from './styled';
import { ModalStyle } from '../Modal/styled';

interface IFeedHeaderProps {
    isCurrentScrollTop?: boolean;
    categoryId?: number;
}

const FeedHeader = ({ isCurrentScrollTop, categoryId }: IFeedHeaderProps) => {
    const [isModal, setIsModal] = useState<boolean>(false);

    return (
        <>
            <header css={HomeMenuStyle}>
                <div className="header">
                    <div className="header-contents-inner">
                        <div className="header-contents__left">
                            <h1 className="logo">
                                <Logo />
                            </h1>

                            <div className="right">
                                {isCurrentScrollTop === false && (
                                    <Link href={`/search${categoryId ? `/${categoryId}` : ''}`}>
                                        <SearchIcon />
                                    </Link>
                                )}

                                <Link href="/mypage" className="mypage">
                                    <MyPageIcon />
                                </Link>
                                {/* TODO : 2차 오픈때 개발 예정 */}
                                <button
                                    onClick={() => {
                                        setIsModal(true);
                                    }}
                                >
                                    <AlarmIcon />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            {isModal && (
                <Modal title="준비중인 기능입니다" open={isModal} onCancel={() => setIsModal(false)} footer={null} isModalVisible={false} centered={true}>
                    <div css={ModalStyle}>
                        <p>
                            새로운 기능을 준비하고 있어요!
                            <br />
                            다음 업데이트를 기다려주세요
                        </p>
                        <button onClick={() => setIsModal(false)} className="button">
                            확인
                        </button>
                    </div>
                </Modal>
            )}
        </>
    );
};

export default FeedHeader;
