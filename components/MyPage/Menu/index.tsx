import Link from 'next/link';
import { MenuStyle } from './styled';

const Menu = () => {
    return (
        <ul css={MenuStyle}>
            <li>
                <Link href="">
                    <span>내가 북마크 한 글</span>

                    <span>
                        <svg width="9" height="15" viewBox="0 0 9 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 1L7.5 7.5L1 14" stroke="#A7A7A7" strokeLinecap="round" />
                        </svg>
                    </span>
                </Link>
            </li>
            <li>
                <Link href="">
                    <span>서포트 센터</span>
                    <span>
                        <svg width="9" height="15" viewBox="0 0 9 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 1L7.5 7.5L1 14" stroke="#A7A7A7" strokeLinecap="round" />
                        </svg>
                    </span>
                </Link>
            </li>
            <li>
                <Link href="">
                    <span>계정 관리</span>
                    <span>
                        <svg width="9" height="15" viewBox="0 0 9 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 1L7.5 7.5L1 14" stroke="#A7A7A7" strokeLinecap="round" />
                        </svg>
                    </span>
                </Link>
            </li>
        </ul>
    );
};

export default Menu;
