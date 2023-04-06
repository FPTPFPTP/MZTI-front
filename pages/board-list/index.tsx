import { BottomMenu, Header } from '@/components/Commons';
import { BoardListStyle } from '@/styles/pages/boardListStyled';
import Link from 'next/link';
import React from 'react';

interface IboardListProp {
    id: number;
    title: string;
    url: string;
}
const defaultMenu = [
    {
        id: 1,
        title: '자유 게시판',
        url: '',
    },
    {
        id: 2,
        title: '인기 게시판',
        url: '',
    },
];

const battleMenu = [
    {
        id: 1,
        title: 'E vs I',
        url: '',
    },
    {
        id: 2,
        title: 'S vs N',
        url: '',
    },
    {
        id: 3,
        title: 'T vs F',
        url: '',
    },
    {
        id: 4,
        title: 'J vs P',
        url: '',
    },
];

const BoardList = () => {
    return (
        <main css={BoardListStyle}>
            <Header isPrevBtn={true} title="전체 게시판" />

            <ul className="boardListStyle--line">
                {defaultMenu.map((item: IboardListProp) => {
                    return (
                        <li key={item.id}>
                            <Link href={item.url}>{item.title}</Link>
                        </li>
                    );
                })}
            </ul>

            <ul className="boardListStyle--line">
                <li className="title">대결게시판</li>
                {battleMenu.map((item: IboardListProp) => {
                    return (
                        <li key={item.id}>
                            <Link href={item.url}>{item.title}</Link>
                        </li>
                    );
                })}
            </ul>

            <BottomMenu />
        </main>
    );
};

export default BoardList;
