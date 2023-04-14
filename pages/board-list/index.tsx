import { BottomMenu, Header } from '@/components/Commons';
import { BoardListStyle } from '@/styles/pages/boardListStyled';
import Link from 'next/link';
import React from 'react';

interface IboardListProp {
    id: number;
    title: string;
}
const defaultMenu = [
    {
        id: 1,
        title: '자유 게시판',
    },
    {
        id: 22,
        title: '인기 게시판',
    },
];

const battleMenu = [
    {
        id: 2,
        title: 'E vs I',
    },
    {
        id: 3,
        title: 'S vs N',
    },
    {
        id: 4,
        title: 'T vs F',
    },
    {
        id: 5,
        title: 'J vs P',
    },
];

const mbtiMunu = [
    {
        id: 6,
        title: 'ISTJ',
    },
    {
        id: 7,
        title: 'ISFJ',
    },
    {
        id: 8,
        title: 'INFJ',
    },
    {
        id: 9,
        title: 'INTJ',
    },
    {
        id: 10,
        title: 'ISTP',
    },
    {
        id: 11,
        title: 'ISFP',
    },
    {
        id: 12,
        title: 'INFP',
    },
    {
        id: 13,
        title: 'INTP',
    },
    {
        id: 14,
        title: 'ESTP',
    },
    {
        id: 15,
        title: 'ESFP',
    },
    {
        id: 16,
        title: 'ENFP',
    },
    {
        id: 17,
        title: 'ENTP',
    },
    {
        id: 18,
        title: 'ESTJ',
    },
    {
        id: 19,
        title: 'ESFJ',
    },
    {
        id: 20,
        title: 'ENFJ',
    },
    {
        id: 21,
        title: 'ENTJ',
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
                            <button>{item.title}</button>
                        </li>
                    );
                })}
            </ul>

            <ul className="boardListStyle--line">
                <li className="title">대결게시판</li>
                {battleMenu.map((item: IboardListProp) => {
                    return (
                        <li key={item.id}>
                            <button>{item.title}</button>
                        </li>
                    );
                })}
            </ul>

            <ul className="boardListStyle--line">
                <li className="title">MBTI별 게시판</li>
                {mbtiMunu.map((item: IboardListProp) => {
                    return (
                        <li key={item.id}>
                            <button>{item.title}</button>
                        </li>
                    );
                })}
            </ul>

            <BottomMenu />
        </main>
    );
};

export default BoardList;
