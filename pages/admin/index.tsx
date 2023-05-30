import { AdminStyled } from '@/styles/pages/adminStyled';

const admin = () => {
    return (
        <main css={AdminStyled}>
            <section className="left">
                <h1>MZTI ADMIN</h1>

                <ul className="menu">
                    <li>
                        <h4>신고관리</h4>
                        <p>게시글, 댓글</p>
                    </li>
                    <li>
                        <h4>유저관리</h4>
                        <p>전체 목록 조회,신고, 활동 중지</p>
                    </li>
                    <li>
                        <h4>서포트센터</h4>
                        <p>문의 관리</p>
                    </li>
                    <li>
                        <h4>예약 발행</h4>
                        <p>공식 게시글 업로드 관리</p>
                    </li>
                </ul>
            </section>

            <section className="right">
                <h3>신고관리</h3>

                <div className="list">
                    <div className="searchBar">
                        <input type="search" placeholder="검색어를 입력해주세요" className="search" />
                        <button className="searchButton">검색</button>
                    </div>

                    <table className="listTable">
                        <thead className="head">
                            <tr>
                                <th>게시글 제목</th>
                                <th>신고 사유</th>
                                <th>신고 상세 내역</th>
                                <th>신고자 닉네임</th>
                                <th>처리 결과</th>
                                <th>처리 담당자</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>대충 혐오를 사는 글 제목</td>
                                <td>욕설, 비방, 차별, 혐오</td>
                                <td>말을 너무 심하게 하네요</td>
                                <td>abcdgdrr</td>
                                <td>게시글 삭제처리</td>
                                <td>pointhd</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>
        </main>
    );
};
export default admin;
