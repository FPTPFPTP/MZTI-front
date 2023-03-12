import Link from 'next/link';
import { MenuStyle } from './styled';

type Props = {
    menuList: menuProps[];
};
type menuProps = {
    title: string; // 메뉴명
    url: string; // 메뉴 url
    subDesc: string;
};

const Menu = ({ menuList }: Props) => {
    return (
        <ul css={MenuStyle}>
            {menuList.map((item: menuProps, index: number) => {
                return (
                    <li key={index}>
                        <Link href={item.url}>
                            <span>
                                {item.title} <strong>{item.subDesc}</strong>
                            </span>

                            <span>
                                <svg width="9" height="15" viewBox="0 0 9 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1 1L7.5 7.5L1 14" stroke="#A7A7A7" strokeLinecap="round" />
                                </svg>
                            </span>
                        </Link>
                    </li>
                );
            })}
        </ul>
    );
};

export default Menu;
