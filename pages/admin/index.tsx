import { AdminStyled } from '@/styles/pages/adminStyled';
import AdminMenu from '@/components/Admin/Menu';
import AdminContent from '@/components/Admin/Content';

const admin = () => {
    return (
        <main css={AdminStyled}>
            <AdminMenu />

            <section>
                <AdminContent />
            </section>
        </main>
    );
};
export default admin;
