import { Header } from '@components/Commons';
import { Layout } from '@styles/pages/mypageStyled';
const noticeDetail = () => {
    return (
        <>
            <Header title={'공지사항'} />
            <div css={Layout}></div>
        </>
    );
};

export default noticeDetail;
