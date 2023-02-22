import Link from 'next/link';

const Menu = () => {
    return (
        <ul>
            <li>
                <Link href="">내가 북마트 한 글</Link>
            </li>
            <li>
                <Link href="">서포트 센터</Link>
            </li>
            <li>
                <Link href="">계정 관리</Link>
            </li>
        </ul>
    );
};

export default Menu;
