import { BottomButtonStyle } from './styled';
import { AiFillHome } from 'react-icons/Ai';
import { BsFillGridFill } from 'react-icons/Bs';
import { HiOutlinePlus } from 'react-icons/Hi';
import Link from 'next/link';

const BottomMenu = () => {
    return (
        <nav css={BottomButtonStyle}>
            <ul>
                <li>
                    <Link href="/home">
                        <AiFillHome />
                    </Link>
                </li>
                <li className="write">
                    <Link href="/write">
                        <HiOutlinePlus />
                    </Link>
                </li>
                <li>
                    <BsFillGridFill />
                </li>
            </ul>
        </nav>
    );
};

export default BottomMenu;
