import { Avatar } from '@/components/Commons';
import { timeForToday } from '@/utils/time';
import { WriterProps } from '@/utils/types';
import { ItemHeaderStyle } from '../styled';

const ItemHeader = ({ nickname, mbti, level, profileImage, moreBtn = true, createAt }: WriterProps) => {
    return (
        <>
            <section css={ItemHeaderStyle}>
                <div className="userInfo">
                    <div className="userInfo__profile">
                        <Avatar src={profileImage} alt={nickname} size={90} />
                    </div>
                    <div className="userInfo__Text">
                        <div>
                            <span className="mbti">{mbti}</span>
                            <span className="level">Lv.{level}</span>
                        </div>

                        <div className="nickname_time">
                            <p className="nickname">{nickname}</p>
                            <p className="time">{timeForToday(createAt)}</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ItemHeader;
