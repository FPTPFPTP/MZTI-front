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

    const handleOnClick = (categoryId?: number) => {
        handleCategoryId(categoryId);

    };

    return (
        <section css={ListTabStyle}>
            <div>
                {menus.map((item) => {
                    return (
                        <button
                            onClick={() => handleOnClick(item.categoryId)}
                            className={classnames(categoryId === item.categoryId && 'active')}
                            key={item.name}
                        >
                            {item.name}
                        </button>
                    );
                })}
            </div>
        </section>
    );
};

export default ListTab;
