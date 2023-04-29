import { ListTabStyle } from '../styled';
import classnames from 'classnames';

interface IListTabProps {
    handleCategoryId: (id?: number) => void;
    categoryId?: number;
}
const menus = [
    {
        categoryId: 22,
        name: '인기',
        isActive: false,
    },
    {
        categoryId: undefined,
        name: '전체',
        isActive: false,
    },
];

const ListTab = ({ handleCategoryId, categoryId }: IListTabProps) => {
    const handleOnClick = (idx: number | undefined) => {
        handleCategoryId(idx);
    };

    return (
        <section css={ListTabStyle}>
            {menus.map((item, idx: number) => {
                return (
                    <button onClick={() => handleOnClick(item.categoryId)} className={classnames(categoryId === item.categoryId && 'active')} key={idx}>
                        {item.name}
                    </button>
                );
            })}
        </section>
    );
};

export default ListTab;
