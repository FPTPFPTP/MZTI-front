import Link from 'next/link';
import { getMbtiColor } from '@utils/postItem';
import { MbtiMenuContainerStyle, MbtiMenuStyle } from './styled';
import { IBoardMenu } from '@/types/board';

interface IBoardMenuProps {
    menu: IBoardMenu;
}

const boardMbtiMenu = ({ menu }: IBoardMenuProps) => {
    return (
        <ul css={MbtiMenuContainerStyle}>
            {menu.menus.map((menu) => {
                return (
                    <li key={menu.id} css={MbtiMenuStyle(getMbtiColor(menu.title))}>
                        <Link href={`/board/${menu.url}`}>{menu.title}</Link>
                    </li>
                );
            })}
        </ul>
    );
};

export default boardMbtiMenu;
