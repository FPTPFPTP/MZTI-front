import { myPageInfo } from '@/recoil/atom/user';
import Link from 'next/link';
import { useRecoilValue } from 'recoil';
import { MenuStyle } from '../styled';
import MyPageArr from '@assets/icons/common/myPageArr.svg';

type Props = {
    menuList: menuProps[];
};
type menuProps = {
    title: string; // 메뉴명
    url: string; // 메뉴 url
};

const Menu = ({ menuList }: Props) => {
    const myInfo = useRecoilValue(myPageInfo);

    return (
        <ul css={MenuStyle}>
            {menuList.map((item: menuProps, index: number) => {
                if (!myInfo) {
                    if (item.title === '서포트 센터') {
                        return (
                            <li key={index}>
                                <Link href={item.url}>
                                    <span>{item.title}</span>

                                    <span>
                                        <MyPageArr />
                                    </span>
                                </Link>
                            </li>
                        );
                    } else {
                        return null;
                    }
                } else {
                    return (
                        <>
                            <li key={index}>
                                <Link href={item.url}>
                                    <span>{item.title}</span>

                                    <span>
                                        <MyPageArr />
                                    </span>
                                </Link>
                            </li>
                        </>
                    );
                }
            })}
        </ul>
    );
};

export default Menu;
