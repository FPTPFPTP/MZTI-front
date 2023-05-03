import Link from 'next/link';
import { IBoardMenu } from '@/types/board';
import ArrowRightIcon from '@assets/icons/boardList/arrow_right.svg';
import BoomIcon from '@assets/icons/boardList/boom.svg';
import FireIcon from '@assets/icons/boardList/fire.svg';
import SpeechIcon from '@assets/icons/boardList/speech.svg';
import { MenuContainerStyle } from './styled';

interface IBoardMenuProps {
    menu: IBoardMenu;
}

const boardMenu = ({ menu }: IBoardMenuProps) => {
    const GetIcon = ({ icon }: { icon?: string }) => {
        switch (icon) {
            case 'fire':
                return <FireIcon />;
            case 'boom':
                return <BoomIcon />;
            case 'speech':
                return <SpeechIcon />;
            default:
                return null;
        }
    };
    return (
        <ul css={MenuContainerStyle} className="boardListStyle--line" key={menu.id}>
            {menu.menus.map((item) => {
                return (
                    <li key={item.id}>
                        <Link className="boardListItemStyle--line" href={`/board/${item.url}`}>
                            <GetIcon icon={item.icon} />
                            <span className="title">{item.title}</span>
                            <span className="subTitle">{item.subTitle}</span>
                            <button>
                                <ArrowRightIcon />
                            </button>
                        </Link>
                    </li>
                );
            })}
        </ul>
    );
};

export default boardMenu;
