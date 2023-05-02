import { Avatar } from '@/components/Commons';
import { timeForToday } from '@/utils/time';
import { ItemHeaderStyle } from '../../styled';
import MoreButton from '@assets/icons/detailPost/moreButton.svg';
import { IWriterModel } from '@/types/post';
import { getMbtiColor } from '@utils/postItem';

interface IItemHeader {
    writer: IWriterModel;
    createAt: string;
    openDrawer: () => void;
}

const ItemHeader = ({ writer, createAt, openDrawer }: IItemHeader) => {
    const { nickname, mbti, level, profileImage } = writer;

    return (
        <section css={ItemHeaderStyle}>
            <div className="userInfo">
                <div className="userInfo__profile">
                    <Avatar src={profileImage ? profileImage : ''} alt={nickname} size={90} mbti={mbti} />
                </div>
                <div className="userInfo__Text">
                    <div className="userInfo__Text--layout">
                        <div>
                            <span className="mbti" style={{ background: getMbtiColor(mbti) }}>
                                {mbti}
                            </span>
                            <span className="level">Lv.{level}</span>
                        </div>

                        <p className="nickname">{nickname}</p>
                    </div>

                    <div className="nickname_time">
                        <button onClick={openDrawer}>
                            <MoreButton />
                        </button>
                        <p className="time">{timeForToday(createAt)}</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ItemHeader;
