import React from 'react';
import { BottomMenu, Header } from '@/components/Commons';
import { BoardMenu } from '@/components/Board';
import { BoardListStyle } from '@/styles/pages/boardListStyled';
import MenuJson from '@/constants/menu.json';

const BoardList = () => {
    return (
        <main css={BoardListStyle}>
            <Header isPrevBtn={true} title="게시판 목록" />

            <BoardMenu menus={MenuJson} />

            <BottomMenu />
        </main>
    );
};

export default BoardList;
