import { BottomMenu, Header } from '@/components/Commons';
import HotKeyword from '@/components/Home/HotKeyword';
import { BoardListStyle } from '@/styles/pages/boardListStyled';
import Link from 'next/link';
import React from 'react';

const BoardList = () => {
    return (
        <main css={BoardListStyle}>
            <Header isPrevBtn={true} title="🔥실시간 HOT 키워드" />

            <HotKeyword title="지금 사람들이 가장 궁금해하는건?" more={false} />

            <section className="titleSection">
                <h3>#블루투스 논쟁</h3>
            </section>
        </main>
    );
};

export default BoardList;
