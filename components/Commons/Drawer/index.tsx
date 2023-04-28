import Drawer from 'react-bottom-drawer';
import { DrawerMenuStyled } from './styled';
import Close from '@assets/icons/common/close.svg';

interface IDrawerMenuProps {
    isVisible: boolean;
    onClick: () => void;
    title: string;
    desc?: string;
    button?: any;
    listOption?: any[];
    Children: React.ReactElement;
    close: boolean;
    onClose: () => void;
}

const DrawerMenu = ({ onClick, title, isVisible, onClose, Children, close = false }: IDrawerMenuProps) => {
    return (
        <Drawer duration={250} hideScrollbars={true} onClose={onClick} isVisible={isVisible} className="postDrawer" css={DrawerMenuStyled}>
            <div className="header">
                <h5>{title}</h5>
                {close && (
                    <button onClick={onClose}>
                        <Close />
                    </button>
                )}
            </div>
            {Children}
        </Drawer>
    );
};

export default DrawerMenu;
