import { useRouter } from 'next/router';
import { MbtiMenuContainerStyle, MbtiMenuStyle } from './styled';
import { IBoardMenu } from '@/types/board';

interface IBoardMenuProps {
    menu: IBoardMenu;
}

const boardMbtiMenu = ({ menu }: IBoardMenuProps) => {
    const router = useRouter();

    return (
        <ul css={MbtiMenuContainerStyle}>
            {menu.menus.map((menu) => {
                return (
                    <li key={menu.id} css={MbtiMenuStyle} onClick={() => router.push(`/board/${menu.url}`)}>
                        {menu.title}
                    </li>
                );
            })}
        </ul>
    );
};

export default boardMbtiMenu;
