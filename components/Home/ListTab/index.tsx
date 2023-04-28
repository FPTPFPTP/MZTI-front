import { useState } from 'react';
import { ListTabStyle } from '../styled';
import classnames from 'classnames';

const menus = [
    {
        name: '인기 게시판',
        path: '/board/22',
        isActive: false,
    },
    {
        name: '전체 게시판',
        path: '/',
        isActive: false,
    },
];

const ListTab = () => {
    const [countIndex, setCountIndex] = useState<number>(0);

    const handleOnClick = (idx: number) => {
        setCountIndex(idx);
    };
    return (
        <section css={ListTabStyle}>
            {menus.map((item, idx: number) => {
                return (
                    <button onClick={() => handleOnClick(idx)} className={classnames(countIndex === idx && 'active')} key={idx}>
                        {item.name}
                    </button>
                );
            })}
        </section>
    );
};

export default ListTab;
