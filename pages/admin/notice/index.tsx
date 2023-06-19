import { AdminStyled } from '@/styles/pages/adminStyled';
import AdminMenu from '@/components/Admin/Menu';
import AdminContent from '@/components/Admin/Content';

const notice = () => {
    return (
        <main css={AdminStyled}>
            <AdminMenu />

            <section className="content">
                <h1>공지사항</h1>
                <AdminContent />
            </section>
        </main>
    );
};
export default notice;
