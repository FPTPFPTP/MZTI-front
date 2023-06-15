import { AdminStyled } from '@/styles/pages/adminStyled';
import AdminMenu from '@/components/Admin/Menu';
import AdminContent from '@/components/Admin/Content';

const report = () => {
    return (
        <main css={AdminStyled}>
            <AdminMenu />

            <section>
                <h1>신고관리</h1>
                <AdminContent />
            </section>
        </main>
    );
};
export default report;
