import { useEffect, useState } from 'react';
import Drawer from 'react-bottom-drawer';
import CategriesJson from '@/constants/categories.json';
import CloseIcon from '@assets/icons/write/close.svg';
import ArrowLeftIcon from '@assets/icons/write/arrow_left.svg';
import ArrowRightIcon from '@assets/icons/boardList/arrow_right.svg';
import { CategoryDrawerWrapStyle, CategoryMenuStyle } from '../styled';
import { ICategoryModel } from '@/types/category';

interface ICategoryProps {
    isVisible: boolean;
    onClose: () => void;
    onCategory: (category: ICategoryModel) => void;
}

const CategoryDrawer = ({ isVisible, onClose, onCategory }: ICategoryProps) => {
    const [headerObj, setHeaderObj] = useState<{ step: number; title: string }>({ step: 0, title: '게시판 카테고리 선택' });
    const [categories, setCategories] = useState<ICategoryModel[]>(CategriesJson);

    const handleOnClick = (id: number) => {
        const findCatecory = categories.find((category) => category.id === id);
        if (findCatecory) {
            if (findCatecory.categories) {
                setCategories(findCatecory.categories);
                setHeaderObj((prev) => ({ ...prev, step: headerObj.step + 1, title: findCatecory.title }));
            } else {
                onCategory(findCatecory);
            }
        }
    };

    const onPrev = () => {
        setCategories(CategriesJson);
        setHeaderObj({ step: 0, title: '게시판 카테고리 선택' });
    };

    useEffect(() => {
        setCategories(CategriesJson);
        setHeaderObj({ step: 0, title: '게시판 카테고리 선택' });
    }, [isVisible]);

    return (
        <nav css={CategoryDrawerWrapStyle}>
            <Drawer className="postDrawer" duration={250} hideScrollbars={true} onClose={onClose} isVisible={isVisible}>
                <div className="title">
                    <div className="prev">
                        {headerObj.step > 0 && (
                            <button onClick={onPrev}>
                                <ArrowLeftIcon />
                            </button>
                        )}

                        <h3>{headerObj.title}</h3>
                    </div>
                    <button onClick={onClose}>
                        <CloseIcon />
                    </button>
                </div>
                <div className="body">
                    {categories.map((category) => (
                        <CategoryMenu key={category.id} category={category} onClick={handleOnClick} />
                    ))}
                </div>
            </Drawer>
        </nav>
    );
};

export default CategoryDrawer;

const CategoryMenu = ({ category, onClick }: { category: ICategoryModel; onClick: (id: number) => void }) => {
    return (
        <div css={CategoryMenuStyle} onClick={() => onClick(category.id)}>
            <span>{category.title}</span>
            {category.categories?.length && (
                <button>
                    <ArrowRightIcon />
                </button>
            )}
        </div>
    );
};
