import Drawer from 'react-bottom-drawer';

interface IDrawerMenuProps {
    isVisible: boolean;
    onClick: () => void;
    title: string;
    desc: string;
    button?: any;
    listOption: string[];
}

const DrawerMenu = ({ onClick, isVisible, title, listOption, desc, button }: IDrawerMenuProps) => {
    return (
        <Drawer duration={250} hideScrollbars={true} onClose={onClick} isVisible={isVisible} className="postDrawer">
            {/* 기본 */}
            <div>
                <h3>{title}</h3>
                <p>{desc}</p>
                {button && <button>{button}</button>}
            </div>

            {/* 유형 선택일 경우 */}
            <ul>
                {listOption.map((item: string, index: number) => {
                    return (
                        <li key={index}>
                            <button>{item}</button>
                        </li>
                    );
                })}
            </ul>
        </Drawer>
    );
};

export default DrawerMenu;
