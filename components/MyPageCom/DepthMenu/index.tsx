import { DepthMenuStyle } from '../styled';
import MyPageArr from '@assets/icons/common/myPageArr.svg';

type Props = {
    menuList: menuProps[];
    typeTitle: string;
};
type menuProps = {
    id: number;
    title: string; // 메뉴명
    onClick: () => void;
};

const DepthMenu = ({ menuList, typeTitle }: Props) => {
    return (
        <ul css={DepthMenuStyle}>
            <li className="typetitle">{typeTitle}</li>
            {menuList.map((item: menuProps) => {
                return (
                    <li key={item.id} className="list">
                        <button onClick={item.onClick}>
                            <span className="stitle">{item.title}</span>
                            <span>
                                <MyPageArr />
                            </span>
                        </button>
                    </li>
                );
            })}
        </ul>
    );
};

export default DepthMenu;
