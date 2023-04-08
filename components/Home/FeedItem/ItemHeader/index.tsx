import { useState } from 'react';
import { Avatar, MoreDrawer } from '@/components/Commons';
import { timeForToday } from '@/utils/time';
import { ItemHeaderStyle } from '../../styled';
import MoreButton from '@assets/icons/detailPost/moreButton.svg';
import { IWriterModel } from '@/types/post';
import { useRecoilValue } from 'recoil';
import { myPageInfo } from '@/recoil/atom/user';
import { EType } from '@/components/Commons/MoreDrawer';
import { useMutation } from '@tanstack/react-query';
import { deletePost } from '@/apis/post';
import { useRouter } from 'next/router';

interface IItemHeader {
    writer: IWriterModel;
    createAt: string;
    writerID: number;
}

const ItemHeader = ({ writer, createAt, writerID }: IItemHeader) => {
    const { nickname, mbti, level, profileImage } = writer;
    const myInfo = useRecoilValue(myPageInfo);
    const [isVisible, setIsVisible] = useState<boolean>(false);
    const openDrawer = () => setIsVisible(true);
    const closeDrawer = () => setIsVisible(false);
    // 게시글 삭제
    const { mutate } = useMutation((id: any) => deletePost(id));

    const router = useRouter();

    const handlePostDelete = () => {
        confirm('게시글을 삭제하시겠습니까?');
        mutate(writerID, {
            onSuccess: () => {
                alert('삭제 완료되었습니다.');
                router.push('/home');
            },
        });
    };

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

            <MoreDrawer
                writerID={writerID}
                type={myInfo?.nickname === nickname ? EType.WRITE : EType.WRITET_TIPOFF}
                onClick={closeDrawer}
                isVisible={isVisible}
                handlePostDelete={handlePostDelete}
            />
        </>
    );
};

export default ItemHeader;
