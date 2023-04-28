import { useState } from 'react';
import { ListTabStyle } from '../styled';
import classnames from 'classnames';

interface IListTabProps {
    handleCategoryId: (id?: number) => void;
    categoryId?: number;
}
const menus = [
    {
        categoryId: 22,
        name: '인기 게시판',
        isActive: false,
    },
    {
        categoryId: undefined,
        name: '전체 게시판',
        isActive: false,
    },
];

const ListTab = ({ handleCategoryId, categoryId }: IListTabProps) => {
    const handleOnClick = (idx: number) => {
        handleCategoryId(idx);
    };

    return (
        <section css={ListTabStyle}>
            {menus.map((item, idx: number) => {
                return (
                    <button onClick={() => handleOnClick(idx)} className={classnames(categoryId === idx && 'active')} key={idx}>
                        {item.name}
                    </button>
                );
            })}
        </section>
    );
};

export default ListTab;
