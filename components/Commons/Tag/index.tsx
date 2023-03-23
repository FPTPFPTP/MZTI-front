import CircleCloseSvg from '@assets/icons/circle_close.svg';
import { TagWrapStyle } from './styled';

interface ITag {
    title: string;
    onClick: () => void;
    onDelete?: () => void;
}

const Tag = (props: ITag) => {
    const { title, onClick, onDelete } = props;

    const handleDelete = (e: React.MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();
        onDelete && onDelete();
    };

    return (
        <li css={TagWrapStyle} onClick={onClick}>
            {title}
            {onDelete && (
                <button onClick={handleDelete}>
                    <CircleCloseSvg />
                </button>
            )}
        </li>
    );
};

export default Tag;
