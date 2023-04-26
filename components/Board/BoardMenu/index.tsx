import Link from 'next/link';
import { IBoardMenu } from '@/types/board';

interface IBoardMenuProps {
    menus: IBoardMenu[];
}

const boardMenu = ({ menus }: IBoardMenuProps) => {
    return (
        <>
            {menus.map((menu) => (
                <ul className="boardListStyle--line" key={menu.id}>
                    {menu.title && <li className="title">{menu.title}</li>}
                    {menu.menus.map((item) => {
                        return (
                            <li key={item.id}>
                                <Link href={`/board/${item.url}`}>{item.title}</Link>
                            </li>
                        );
                    })}
                </ul>
            ))}
        </>
    );
};

export default boardMenu;
