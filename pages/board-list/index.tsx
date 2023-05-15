import React from 'react';
import { Header, BottomMenu } from '@/components/Commons';
import { BoardMenu, BoardMbtiMenu } from '@/components/Board';
import { BoardListStyle, BoardListSection, MbtiMenuGroupStyle } from '@/styles/pages/boardListStyled';
import MenuJson from '@/constants/menu.json';

const BoardList = () => {
    return (
        <main css={BoardListStyle}>
            <Header isPrevBtn={true} title="게시판 목록" isBorderLine={true} />

            <div css={BoardListSection}>
                <BoardMenu menu={MenuJson[0]} />
            </div>

            <div css={BoardListSection}>
                <div css={MbtiMenuGroupStyle}>
                    <h3>MBTI별 게시판</h3>
                    <span>MBTI별 질문, 공감, 토론, 짤 공유</span>
                </div>

                <BoardMbtiMenu menu={MenuJson[2]} />
            </div>

            <div css={BoardListSection}>
                <div css={MbtiMenuGroupStyle}>
                    <h3>대결 게시판</h3>
                    <span>아니 이걸 왜 공감못해? MBTI별 대결</span>
                </div>
                <BoardMenu menu={MenuJson[1]} />
            </div>
            {/* Footer 메뉴 */}
            <BottomMenu />
        </main>
    );
};

export default BoardList;
